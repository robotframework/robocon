import { jwtVerify, importSPKI } from 'jose'
import { useStore } from '../store';
import CryptoJS from 'crypto-js'

export interface Token {
  iss?: string
  name?: string
  liveHash?: string
  hashKey?: string
}

export let token: Token = {}
export let authenticated = false

const publicKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA1RHu1qgXJ81+2tlBy4UF
B8OdRsBjWhswMQaS/NhA2yWBaQiQ1YG4Tzen2aNmlTIkTBhSR3hqOnkzPQq77nMs
KP9HD1WHz/UNici/a/2UwXFy9bOyX+GKnPCtdcvZrIougvW5K7EBeUWcgY68xNQk
V9vFq4GSczOud7juk62eqqV26esV5tE2c4/J714SYwUl6NqLc7XeQNZMrsRHabIL
Bzg+A+2kw1jiJpJsJliPCT9T/NiAMrbZk1KR/NQ7uHARclAk13LwLwm5JfOhyKSs
Qkdfr8rVYuj3DDQCitea269Xy5RsFW/Cqyh3gHzt7bB9auU3UFaAXWPvnPURhTO4
Yf3c7YrizmpTfDGPIG/7zkegx9nPiBPNIGPq/LpmCC9iawNH7ixOH8ZC5Ijrti0b
8rMnuJBKysZxIowJAFvd7Zh+soekUei90qQnYwhFO49h7fwXXSq2sGeRfpg99Nu/
RdqqxM2zCMPpVMWHjxAVIubgNW5ZA33PW1wS075npC3oK+YUh2xt/9A6Ll4AcAOt
oaCmENEyeZEnHlaEWeXhNPQv1/nZN5Z3Fq3uKWCQRry1HMoOGKrdATfUUIXc6vvk
nRPuT57RDafiyxjektPLx0z2LvRZZb7lU5G9/+rO2yJ1f65Sd5k0drIb48YZ+OBj
6IrJDlqg3BaMV5Hr8LdQtY8CAwEAAQ==
-----END PUBLIC KEY-----`

/**
 * Saves a key/value pair to localStorage.
 * @param key - The storage key.
 * @param value - The value to save.
 */
function saveToLocalStorage(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value)
  } catch (e) {
    console.error(`Error saving ${key} to localStorage:`, e)
  }
}

/**
 * Retrieves a parameter from the URL or localStorage.
 * @param paramName - The name of the parameter.
 * @returns The parameter value or null.
 */
function getParam(paramName: string): string | null {
  const params = new URLSearchParams(window.location.search)
  return params.get(paramName) || window.localStorage.getItem(paramName)
}

/**
 * Generates a YouTube embed URL given a video identifier.
 * @param id - The video identifier.
 * @returns The embed URL.
 */
function generateYouTubeUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=0&mute=0&controls=1&origin=https%3A%2F%2Frobocon.io&playsinline=0&showinfo=0&modestbranding=1`
}

/**
 * Initializes authentication by reading URL parameters or localStorage,
 * verifying the JWT token, and updating the internal authentication state.
 */
export async function initAuth(): Promise<void> {
  const auth = getParam('auth')
  const attendee = getParam('attendee')

  if (auth && attendee) {
    if (attendee !== 'gather') {
      saveToLocalStorage('auth', auth)
      saveToLocalStorage('attendee', attendee)
    }
    try {
      const spki = await importSPKI(publicKey, 'RS256')
      const { payload } = await jwtVerify(auth, spki, { issuer: 'pretix' })
      // Assuming payload is of type JWTPayload & Token
      if (payload.name === attendee) {
        token = payload as Token
        authenticated = true
      }
    } catch (error) {
      console.error('Invalid attendee authentication:', error)
    }
  }
}

/**
 * Returns the video URL for a given recording code.
 * For free recordings, returns a YouTube embed URL.
 * For authenticated recordings, attempts to decrypt the recording URL.
 *
 * @param code - The recording code.
 * @returns The YouTube embed URL or undefined.
 */
export function getVideoUrl(code: string): string | undefined {
  if (!code) return undefined

  const store = useStore()
  const allUrls = store.entries.items
    .filter((item) => item.sys.contentType.sys.id === "youTubeLinks")
    .reduce((acc, {fields}) => ({...acc, ...fields.json }), {})

  const maybeUrl = allUrls[code]

  if (!maybeUrl) {
    return undefined
  }

  const isPublic = maybeUrl.length < 20 // todo: something better
  if (isPublic) {
    return generateYouTubeUrl(maybeUrl)
  }

  if (!authenticated) return undefined

  return generateYouTubeUrl(decrypt(maybeUrl))
}

export function decrypt(hash: string) {
  try {
    const decrypted = CryptoJS.AES.decrypt(hash, token.hashKey || '')
    const url = decrypted.toString(CryptoJS.enc.Utf8)
    if (!url) return undefined
    return url
  } catch (e) {
    return undefined
  }
}
