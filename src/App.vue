<template>
  <nav-mobile v-if="$store.state.isMobile" />
  <news-banner v-if="$route.name === 'Home'" class="theme-germany">
    <h2>ROBOCON <span class="color-white">2022</span> GERMANY</h2>
    <h3>📣 <span class="color-theme">This October 5th</span> 📣</h3> First RoboCon outside of Finland will be held in Frankfurt am Main! <router-link :to="{name: 'Germany'}">More details of RoboCon 2022 DE</router-link>
  </news-banner>
  <navbar v-if="!$store.state.isMobile" />
  <router-view />
  <page-footer />
</template>

<script>
import { Navbar, NavMobile, PageFooter, NewsBanner } from 'Components'

export default {
  components: {
    Navbar,
    NavMobile,
    PageFooter,
    NewsBanner
  },
  created() {
    document.documentElement.lang = this.$i18n.locale
    this.$store.commit('SET_IS_MOBILE', window.innerWidth < 700)
    this.$store.commit('SET_IS_DESKTOP', window.innerWidth > 1399)
    window.addEventListener('resize', () => {
      this.$store.commit('SET_IS_MOBILE', window.innerWidth < 700)
      this.$store.commit('SET_IS_DESKTOP', window.innerWidth > 1399)
    })
    window.addEventListener('click', () => document.body.classList.remove('accessible'))
    window.addEventListener('keydown', ({ key }) => {
      if (key === 'Tab') { document.body.classList.add('accessible') }
    })
  },
  watch: {
    '$i18n.locale'() {
      document.documentElement.lang = this.$i18n.locale
    }
  }
}
</script>
