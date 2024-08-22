import { createClient } from 'contentful'

const client = createClient({
  space: '0375ld2k0qal',
  environment: 'dev',
  accessToken: 'QODt2cpA7LqQsSoqZd1oQ38yKLR7qQjh_UDHpOZYWOs'
})

const getPages = () => client
  .getEntries({ content_type: 'Page' })

const getEntries = () => client
  .getEntries()
  .then((res) => client.parseEntries((res as any).items))


export {
  getPages,
  getEntries
}
