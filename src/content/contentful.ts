import { createClient } from 'contentful'

const client = createClient({
  space: '0375ld2k0qal',
  environment: 'master',
  accessToken: '0JsLjZA5NNToRRuCN_8kQDlK1AiOI3ExSRNlaNM1sec'
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