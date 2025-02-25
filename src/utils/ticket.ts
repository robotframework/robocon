import { jwtVerify, importSPKI } from 'jose'
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

const recordings: Record<string, string> = {
  "BLJHLG": "U2FsdGVkX1+sFc0vaGp5X7mTe+noVcSukyuO0DD6stM=",
  "QX9NPR": "U2FsdGVkX1/mlNRFBmrhEXfbDyFA/u+mKwth9QbOIY4=",
  "8QPMC3": "U2FsdGVkX1+C+BrEP7eBdsjxXoeW19cLKLBnIeKTefc=",
  "9RTZJ8": "U2FsdGVkX1/8WJSCpcFAzAZocIQGdlNljCO/h6/clso=",
  "E9WWVJ": "U2FsdGVkX1/LA18lKVW+j4rOvpqvMW9ZNkFrcmH2bjk=",
  "ZXK33M": "U2FsdGVkX1/yYnQgU/ZZETz6DEnoN36LQTi3Qzpy2pY=",
  "3F8E7U": "U2FsdGVkX197Qhe1GFm0Ye5fP8tLp+Z/UGWjc/d/wuo=",
  "VDXHPW": "U2FsdGVkX1+SHTfijvhKCWo9Yk/QQLgyzBjb0Ybk7pc=",
  "H8QSRH": "U2FsdGVkX1+3z/1WCaCsYUZq1UJ/BQdSpJDXO68y4Pc=",
  "AAAAAA": "U2FsdGVkX1+ZsZJPXsRfnU5qnY3PDX4bH7m8wN3wyYY=",
  "WPBD83": "U2FsdGVkX18HXE+A/v5JTjDXhhrO4cL9jatTniQBZh8=",
  "K3MLM3": "U2FsdGVkX19OGm9vDnZDfQzAVdC+d88vm1R9dj8/B0E=",
  "YFJMTW": "U2FsdGVkX1+khaXJ7AHqjTtRRlspTHLeMC/1nlHzMgY=",
  "A3PKEU": "U2FsdGVkX1+dYGmr+beBESdT5RA9AyS1RZ0zaYzPxR0=",
  "79LS7Z": "U2FsdGVkX1/lxCkCRhQutGyM7sRP53FJ6EKnLQ90srI=",
  "N8UJZS": "U2FsdGVkX18i9nsCJ5B+hiLLiwOZY8qnovtSceUehJk=",
  "9VKPTH": "U2FsdGVkX1+5o3N5XgIzgAeI4qHY8bJIxznQn9z9wco=",
  "HNLUGZ": "U2FsdGVkX18ZfP/9AS78jB1UlG+H+JWss6PNMJFri/M=",
  "FRRRLQ": "U2FsdGVkX1+zy9lXfQTjn5q4IeFEnpHtVUdrC2RQr+8=",
  "day1": "U2FsdGVkX1+mbqTRgxjssKi6CExj0ryVIKAIdpbaSbg=",
  "day2": "U2FsdGVkX19bIgb8XsaNDWAFD+quYNdxtImqbJnwIUY="
}

const freeRecordings: Record<string, string> = {
  "KUXX8Y": "9H-oHhLFwcs",
  "G838QP": "XiwSkNVciZY",
  "9SUNSJ": "M8Dzq_Ieqhg",
  "DQFP7F": "-DCJZNV-CFs"
}

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

  const freeRecording = freeRecordings[code]
  if (freeRecording) {
    return generateYouTubeUrl(freeRecording)
  }

  if (!authenticated) return undefined

  const recording = recordings[code]
  if (!recording) {
    console.error(`Recording not found for code: ${code}`)
    return undefined
  }

  try {
    const decrypted = CryptoJS.AES.decrypt(recording, token.hashKey || '')
    const url = decrypted.toString(CryptoJS.enc.Utf8)
    if (!url) return undefined
    return generateYouTubeUrl(url)
  } catch (e) {
    console.error(`Error decrypting recording for code: ${code}`, e)
    return undefined
  }
}
