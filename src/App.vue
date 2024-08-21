<template>
  <v-app full-height>
    <v-main class="text-slate-800 dark:text-slate-200 pt-16">
      <navbar />
      <router-view />

      <page-footer v-if="!fullScreen" />
    </v-main>
  </v-app>
</template>

<script>
import { Navbar, PageFooter } from 'Components'

export default {
  components: {
    Navbar,
    PageFooter
  },
  data: () => ({
    fullScreen: false
  }),
  created() {
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
