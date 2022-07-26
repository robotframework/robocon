<template>
  <navbar />
  <news-banner v-if="$route.name === 'Home'" class="theme-germany">
    📣 <span class="color-theme">This October</span>: First RoboCon outside of Finland will be held in Frankfurt am Main! <router-link :to="{name: 'Germany'}">More details of RoboCon 2022 DE</router-link> 📣
  </news-banner>
  <router-view />
  <page-footer />
</template>

<script>
import { Navbar, PageFooter, NewsBanner } from 'Components'

export default {
  components: {
    Navbar,
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
