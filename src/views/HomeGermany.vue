<template>
  <div class="theme-germany">
    <banner>
      <div class="relative flex center font-title de-title" style="margin-bottom: -5rem">
        <div class="color-theme mr-medium">RBCN</div> 2022 <div class="color-theme ml-medium">DE</div>
      </div>
      <div v-if="$store.state.isDesktop" class="flex center bottom">
        <a href="https://www.qs-tag.de/" target="_blank">
          <div v-html="logoSvg" class="" />
        </a>
        <div v-html="mapSvg" class="ml-large mr-large" />
        <div class="flex middle">
          <base-icon name="robot" color="white" size="12vh" />
          <div class="ml-small type-left type-xlarge font-title">
            Robot<br>
            Framework<br>
            Foundation
          </div>
        </div>
      </div>
      <div v-else>
        <div v-html="mapSvg" class="ml-large mr-large" />
        <div class="flex middle center p-small">
          <a href="https://www.qs-tag.de/" target="_blank">
            <div v-html="logoSvgMobile" class="mr-xsmall" />
          </a>
          <div class="flex bottom ml-xsmall">
            <base-icon name="robot" color="white" size="10vh" />
            <div class="ml-small type-left type-large font-title">
              Robot<br>
              Framework<br>
              Foundation
            </div>
          </div>
        </div>
      </div>
    </banner>
    <div class="container">
      <page-section
        title-id="intro"
        :title="$t('germany.intro.title')">
        🌐
        <button
          class="font-title mr-small"
          :class="$i18n.locale === 'en-US' ? 'color-theme type-underline' : 'color-white'"
          @click="$i18n.locale = 'en-US'">
          English
        </button>
        <button
          class="font-title"
          :class="$i18n.locale === 'de-DE' ? 'color-theme type-underline' : 'color-white'"
          @click="$i18n.locale = 'de-DE'">
          Deutsch
        </button>
        <div v-html="$t('germany.intro.body')" />
        <ticket v-if="ticket" :link="ticket.link" class="mt-medium" :class="$store.state.isDesktop && 'ml-none'">
          <template v-slot:title>
            <div v-html="ticket.title" />
          </template>
          <template v-slot:price>
            <div v-html="ticket.price" />
          </template>
          <template v-slot:left>
            ROBOCON
          </template>
          <template v-slot:right>
            <div v-html="ticket.side" />
          </template>
        </ticket>
        <sponsors :sponsors="$tm('germany.sponsors')" class="mt-xlarge" />
      </page-section>
      <page-section
      title-id="talks"
      :title="$t('germany.talks.title')">
      <talks
        v-if="talks"
        :talks="talks"
        :speakers="speakers"
        header-link="https://tickets.robotframework.org/robocon-2022-DE/" />
    </page-section>
    </div>
  </div>
</template>

<script>
import { Banner, BaseIcon, PageSection, Sponsors, TicketItem, Talks } from 'Components'
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapGermany from 'Img/qs-day-map'
import LogoGermany from 'Img/qs-day-logo'

export default {
  name: 'Germany',
  components: {
    Banner,
    BaseIcon,
    PageSection,
    Sponsors,
    TicketItem,
    Talks
  },
  data: () => ({
    talks: [],
    speakers: [],
    mapSvg: '',
    logoSvg: '',
    logoSvgMobile: '',
    ticket: null
  }),
  mounted() {
    this.talks = this.$tm('germany.talks.talks')
    this.speakers = this.$tm('germany.talks.speakers')
    this.mapSvg = MapGermany()
    this.logoSvg = LogoGermany()
    this.logoSvgMobile = LogoGermany().replace('15vh', '10vh')
    this.ticket = this.$tm('home.tickets').find(({ side }) => side === '05-10-22')
  },
  created() {
    const hash = window.location.hash
    if (hash === '#talks') document.getElementById('talks').scrollIntoView()
  }
}
</script>

<style scoped>
  .de-title {
    font-size: 10vw;
  }
  @media (min-width: 1300px) {
    .de-title {
      font-size: 8rem;
    }
  }
</style>
