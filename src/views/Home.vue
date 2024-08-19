<template>
  <div class="container narrow row middle p-small pt-medium pb-medium">
    <div class="col-sm-12 center start-lg col-lg-9 col-lg-offset-3 flex">
      <h1 class="color-black">RBCN<span class="color-theme">25</span></h1>
      <div class="hidden-sm" :class="!isFirefox ? 'pt-medium' : ''">
        <robot-icon class="ml-xsmall" color="theme" size="5.75rem"/>
      </div>
    </div>
  </div>
  <news-banner v-if="$t('newsBanner') !== ''">
    <div v-html="$t('newsBanner')" />
  </news-banner>
  <div class="container narrow border-top-theme">
    <page-section
      v-for="section in sections"
      :key="section.data.target.fields.title"
      :titleId="section.data.target.fields.title"
      :title="section.data.target.fields.title">
      <RichTextRenderer :document="section.data.target.fields.body" :nodeRenderers="renderNodes()" />
    </page-section>
  </div>
</template>

<script>
// import { PageSection, NewsBanner, Ticket, Talks24, Workshops24, Tutorials24, Sponsors, GlobeRbcn } from 'Components'
import { PageSection, NewsBanner, RobotIcon, TicketItem, SponsorItem } from 'Components'
import RichTextRenderer from 'contentful-rich-text-vue-renderer'
import { h } from 'vue'
import { useStore } from '../store';
import { mapState } from 'pinia';
import { format } from 'date-fns'

const customEmbeddedEntry = (node, key) => {
  return h(TicketItem, { key, to: 'link to embedded entry' }, 'content for the <Link> component');
};

export default {
  name: 'App',
  components: {
    PageSection,
    NewsBanner,
    RobotIcon,
    RichTextRenderer,
    TicketItem,
    SponsorItem
  },
  computed: {
    ...mapState(useStore, ['pages']),
    sections() {
      return this.pages[0].fields.pageBody.content
        .filter((c) => c.nodeType === 'embedded-entry-block')
        .map((c) => c)
    }
  },
  data: () => ({
    // FF renders different height for rbcn font for some reason
    isFirefox: false,
    speakers: [],
    token: {}
  }),
  methods: {
    getShownTime(time) {
      const date = new Date(time)
      const hours = date.getHours()
      let minutes = date.getMinutes()
      if (`${minutes}`.length === 1) minutes = `0${minutes}`
      return `${hours}:${minutes === 0 ? '00' : minutes}`
    },
    goTo(id) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth'
        })
      }
    },
    renderNodes() {
      return {
        'embedded-entry-inline': (node) => {
          const target = node.data.target
          const type = target.sys.contentType.sys.id
          if (type === 'ticket') {
            const { ticketName, href, price, discountedPrice, validFrom, validUntil, highlighted } = target.fields
            const isValid =
              (!validFrom || (new Date() > new Date(validFrom))) &&
              (!validUntil || (new Date() < new Date(validUntil)))
            if (isValid) return h(TicketItem, { link: href }, {
              title: () => h('div', ticketName),
              price: () => h('div', [h('div', `${price} €`), validUntil ? h('div', {class: 'type-xsmall'}, `Until ${format(new Date(validUntil), 'do MMM')}`) : undefined]),
              left: () => h('div', 'RBCN'),
              right: () => h('div', ''),
            })
            else return undefined
          }
          if (type === 'sponsor') {
            const {sponsorName, sponsorTier, href, sponsorLogo} = target.fields
            return h(SponsorItem, {href, name: sponsorName, src: sponsorLogo?.fields?.file?.url, important: sponsorTier})
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
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .nav-desktop {
    display: none;
  }
}
</style>
