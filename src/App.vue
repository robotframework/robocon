<template>
  <nav-mobile v-if="!$store.state.isDesktop && !fullScreen" />
  <!-- <news-banner v-if="$route.name === 'Home'" class="theme-germany">
    <h2>ROBOCON <span class="color-white">2022</span> GERMANY</h2>
    <h3>📣 <span class="color-theme">This October 5th</span> 📣</h3> First RoboCon outside of Finland will be held in Frankfurt am Main! <router-link :to="{name: 'Germany'}">More details of RoboCon 2022 DE</router-link>
  </news-banner> -->
  <navbar v-if="$store.state.isDesktop && !fullScreen" />
  <div v-if="$route.name === 'Home' && !$store.state.isDesktop" class="row mb-large bg-black pb-small" style="position: sticky; top: 3.5rem; z-index: 3; padding-left: 3.5rem;">
    <a
      href="/#tutorials"
      class="color-white col-sm-5 mt-3xsmall mb-3xsmall type-no-underline font-title router-link type-small">
      #TUTORIALS
    </a>
    <a
      href="/#talks"
      class="color-white col-sm-5 mt-3xsmall mb-3xsmall type-no-underline font-title router-link type-small">
      #TALKS
    </a>
    <a
      href="/#workshops"
      class="color-white col-sm-5 mt-3xsmall mb-3xsmall type-no-underline font-title router-link type-small">
      #WORKSHOPS
    </a>
    <a
      href="/#hotels"
      class="color-white col-sm-5 mt-3xsmall mb-3xsmall type-no-underline font-title router-link type-small">
      #HOTELS
    </a>
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
  }
}
</script>

<style>
  #app {
    min-height: 100vh;
  }
</style>
