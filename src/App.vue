<template>
  <nav-mobile v-if="!$store.state.isDesktop && !fullScreen" />
  <!-- <news-banner v-if="$route.name === 'Home'" class="theme-germany">
    <h2>ROBOCON <span class="color-white">2022</span> GERMANY</h2>
    <h3>📣 <span class="color-theme">This October 5th</span> 📣</h3> First RoboCon outside of Finland will be held in Frankfurt am Main! <router-link :to="{name: 'Germany'}">More details of RoboCon 2022 DE</router-link>
  </news-banner> -->
  <navbar v-if="$store.state.isDesktop && !fullScreen" />
  <div v-if="$route.name === 'Home' && !$store.state.isDesktop" class="flex mb-large bg-black pb-small" style="position: sticky; top: 3.5rem; z-index: 3; padding-left: 3.5rem; overflow: auto;">
    <button
      @click="scrollTo('tutorials')"
      class="color-white col-sm-5 col-md-3 mt-3xsmall mb-3xsmall type-no-underline font-title router-link type-small" style="margin-left: -2rem;">
      #TUTORIALS
    </button>
    <button
    @click="scrollTo('workshops')"
      class="color-white col-sm-5 col-md-3 mt-3xsmall mb-3xsmall type-no-underline font-title router-link type-small">
      #WORKSHOPS
    </button>
    <button
      @click="scrollTo('talks')"
      class="color-white col-sm-4 col-md-3 mt-3xsmall mb-3xsmall type-no-underline font-title router-link type-small">
      #TALKS
    </button>
    <button
    @click="scrollTo('hotels')"
      class="color-white col-sm-4 col-md-3 mt-3xsmall mb-3xsmall type-no-underline font-title router-link type-small">
      #HOTELS
    </button>
  </div>
  <router-view />
  <page-footer v-if="!fullScreen" />
</template>

<script>
import { Navbar, NavMobile, PageFooter } from 'Components'

export default {
  components: {
    Navbar,
    NavMobile,
    PageFooter
  },
  data: () => ({
    fullScreen: false
  }),
  created() {
    document.documentElement.lang = this.$i18n.locale
    this.$store.commit('SET_IS_MOBILE', window.innerWidth < 768)
    this.$store.commit('SET_IS_DESKTOP', window.innerWidth > 1280)
    window.addEventListener('resize', () => {
      this.$store.commit('SET_IS_MOBILE', window.innerWidth < 768)
      this.$store.commit('SET_IS_DESKTOP', window.innerWidth > 1280)
    })
    window.addEventListener('click', () => document.body.classList.remove('accessible'))
    window.addEventListener('keydown', ({ key }) => {
      if (key === 'Tab') { document.body.classList.add('accessible') }
    })
    const params = new URLSearchParams(window.location.search)
    const attendee = Object.fromEntries(params.entries()).attendee
    if (attendee === 'gather') this.fullScreen = true
  },
  watch: {
    '$i18n.locale'() {
      document.documentElement.lang = this.$i18n.locale
    }
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style>
  #app {
    min-height: 100vh;
  }
</style>
