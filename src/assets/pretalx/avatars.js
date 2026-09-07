// agenda2024.json stores bare avatar filenames instead of hotlinking pretalx.
// webpack turns them into fingerprinted asset URLs that honour publicPath.
const avatars = require.context('../avatars', false, /\.(webp|jpg|jpeg|png)$/)

export const avatarUrl = (file) => {
  if (!file) return ''
  try {
    const asset = avatars(`./${file}`)
    return asset && asset.default ? asset.default : asset
  } catch (e) {
    return ''
  }
}

// Returns a copy of the session with its speakers' avatars resolved.
export const withAvatars = (session) => ({
  ...session,
  speakers: (session.speakers || []).map((speaker) => ({
    ...speaker,
    avatar: avatarUrl(speaker.avatar)
  }))
})
