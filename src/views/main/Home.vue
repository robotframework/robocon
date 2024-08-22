<template>
  <div class="banner-wrapper bg-surface">
    <div class="bg" />
    <v-responsive class="ma-auto" max-width="960">
      <main-banner>
        <template #title>
          <div class="font-rbcn text-h2 text-sm-h1">
            <span>RBCN</span>
            <span class="ml-3">{{ currentYear }}</span>
          </div>
        </template>
      </main-banner>
    </v-responsive>

  </div>

    <news-banner v-if="$t('newsBanner') !== ''">
      <div v-html="$t('newsBanner')" />
    </news-banner>

    <page-section
      v-for="(section, index) in sections"
      :key="section.data.target.fields.title"
      :title="section.data.target.fields.shownTitle"
      :class="index % 2 && 'bg-surface-bright'">
      <RichTextRenderer
        :document="section.data.target.fields.body"
        :nodeRenderers="renderNodes()" />
    </page-section>

    <div class="bg-surface-bright">
      <v-responsive class="mx-auto py-10" max-width="960">
        <EventCards />
      </v-responsive>
    </div>

    <v-responsive class="mx-auto py-10" max-width="960">
      <SpeakerCards />
    </v-responsive>

</template>

<script>
import {
  MainBanner,
  PageSection,
  NewsBanner,
  EventCards,
  EventCard,
  SpeakerCards,
  TicketItem,
  SponsorItem
} from '@/components'
import RichTextRenderer from 'contentful-rich-text-vue-renderer'
import { BLOCKS } from '@contentful/rich-text-types';
import { h } from 'vue'
import { useGlobalStore } from '@/store';
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
    RichTextRenderer,
    TicketItem,
    SponsorItem,
    EventCards,
    EventCard,
  },
  computed: {
    currentYear() {
      return format(new Date(), "yy")
    },
    ...mapState(useGlobalStore, ['pages']),
    sections() {
      const page = this.pages.find((p) => p.fields.pageName === '2025') ?? this.pages[0]
      console.log(page)
      return page.fields.pageBody.content
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
        [BLOCKS.PARAGRAPH]: (node, key, next) => h('p', { class: 'w-100' }, next(node.content, key, next)),
        [BLOCKS.HEADING_2]: (node, key, next) => h('h2', { class: 'w-100' }, next(node.content, key, next)),
        [BLOCKS.HEADING_3]: (node, key, next) => h('h3', { class: 'w-100' }, next(node.content, key, next)),
        [BLOCKS.HEADING_4]: (node, key, next) => h('h4', { class: 'w-100' }, next(node.content, key, next)),
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
              price: () => h('div', [h('div', `${price} €`), validUntil ? h('div', { class: 'type-xsmall' }, `Until ${format(new Date(validUntil), 'do MMM')}`) : undefined]),
              left: () => h('div', 'RBCN'),
              right: () => h('div', ''),
            })
            else return undefined
          }

          if (type === 'sponsor') {
            const { sponsorName, sponsorTier, href, sponsorLogo } = target.fields
            return h(SponsorItem, { href, name: sponsorName, src: sponsorLogo?.fields?.file?.url, important: !!sponsorTier })
          }

          return ''
        },
        'embedded-entry-block': (node) => {
          const target = node.data.target
          const type = target.sys.contentType.sys.id

          if (type === 'card') {
            const {cardTitle, description} = target.fields
            return h(EventCard, {title: cardTitle, description})
          }

          return ''
        },
        'embedded-asset-block': (node) => {
          const target = node.data.target
          const file = target.fields.file
          const isImg = file.contentType.includes('image')
          if (isImg) {
            return h('img', { src: file.url, class: "w-100" })
          }
          return undefined
        }
      }
    }
  }
}
</script>

<style scoped>
.banner-wrapper {
  position: relative;
  height: 400px;
  justify-content: center;
  display: flex;
}

.bg {
  position: absolute;
  inset: 0;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  background-size: cover;
  background-image: url("@/assets/img/finland-flag.png");

}

.font-rbcn {
  font-family: RBCN !important;
  letter-spacing: 0.3rem !important;
  font-size: 100px;
  z-index: 3;

}
</style>
