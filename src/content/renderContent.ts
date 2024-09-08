import type { Node } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { endOfDay, isWithinInterval, startOfDay } from 'date-fns'
import { PageSection, TicketItem, SponsorItem, SectionRow, Banner, CardItem } from 'Components'
import { h } from 'vue'
import type { Entry } from 'contentful';

export const renderNodes = () => {
  return {
    'embedded-entry-block': (node: Node) => {
      const target = node.data.target
      const type = target.sys.contentType.sys.id
      if (type === 'pageSection') {
        return h(PageSection, { content: node.data.target })
      }
      if (type === 'row') {
        return h(SectionRow, { content: node.data.target.fields.content, class: 'p-large' })
      }
      if (type === 'expandableContent') {
        return h('details', {}, [
          h('summary', {}, node.data.target.fields.title),
          h('div', { innerHTML: documentToHtmlString(node.data.target.fields.content) })
        ])
      }
      if (type === 'banner') {
        return h(Banner, { content: node.data.target.fields })
      }
      return undefined
    }, 'embedded-entry-inline': (node: Node) => {
      const target = node.data.target
      const type = target.sys.contentType.sys.id
      if (type === 'sponsor') {
        const {sponsorName, sponsorTier, href, sponsorLogo} = target.fields
        return h(SponsorItem, {sponsorName, sponsorTier, href, sponsorLogo})
      }

      return ''
    },
    'embedded-asset-block': (node) => {
      const target = node.data.target
      const file = target.fields.file
      const isImg = file.contentType.includes('image')
      if (isImg) {
        return h('img', { src: file.url, class:"w-100" })
      }
      return undefined
    }
  }
}

export const renderEntryList = (entries: Entry[]) => entries.map((entry) => {
  const type = entry.sys.contentType.sys.id
  if (type === 'ticket') {
    const { validFrom, validUntil } = entry.fields
    const now = new Date()
    const isAvailable = isWithinInterval(now, {
      start: validFrom ? new Date(validFrom as string) : startOfDay(now),
      end: validUntil ? new Date(validUntil as string) : endOfDay(now)
  })
    if (isAvailable) return () => h(TicketItem, {fields: entry.fields})
    else return undefined
  }
  if (type === 'card') {
    return () => h(CardItem, { fields: entry.fields })
  }
})

export const renderMarks = () => {}
