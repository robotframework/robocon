<template>
  <nav-mobile v-if="!$store.state.isDesktop && !fullScreen" />
  <!-- <news-banner v-if="$route.name === 'Home'" class="theme-germany">
    <h2>ROBOCON <span class="color-white">2022</span> GERMANY</h2>
    <h3>📣 <span class="color-theme">This October 5th</span> 📣</h3> First RoboCon outside of Finland will be held in Frankfurt am Main! <router-link :to="{name: 'Germany'}">More details of RoboCon 2022 DE</router-link>
  </news-banner> -->
  <navbar v-if="$store.state.isDesktop && !fullScreen" />
  <router-view />
  <page-footer v-if="!fullScreen" />
</template>

<script>
import { Navbar, NavMobile, PageFooter } from 'Components'
import * as jose from 'jose'

export default {
  components: {
    Navbar,
    NavMobile,
    PageFooter
  },
  data: () => ({
    fullScreen: false,
    public: `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA1RHu1qgXJ81+2tlBy4UF
B8OdRsBjWhswMQaS/NhA2yWBaQiQ1YG4Tzen2aNmlTIkTBhSR3hqOnkzPQq77nMs
KP9HD1WHz/UNici/a/2UwXFy9bOyX+GKnPCtdcvZrIougvW5K7EBeUWcgY68xNQk
V9vFq4GSczOud7juk62eqqV26esV5tE2c4/J714SYwUl6NqLc7XeQNZMrsRHabIL
Bzg+A+2kw1jiJpJsJliPCT9T/NiAMrbZk1KR/NQ7uHARclAk13LwLwm5JfOhyKSs
Qkdfr8rVYuj3DDQCitea269Xy5RsFW/Cqyh3gHzt7bB9auU3UFaAXWPvnPURhTO4
Yf3c7YrizmpTfDGPIG/7zkegx9nPiBPNIGPq/LpmCC9iawNH7ixOH8ZC5Ijrti0b
8rMnuJBKysZxIowJAFvd7Zh+soekUei90qQnYwhFO49h7fwXXSq2sGeRfpg99Nu/
RdqqxM2zCMPpVMWHjxAVIubgNW5ZA33PW1wS075npC3oK+YUh2xt/9A6Ll4AcAOt
oaCmENEyeZEnHlaEWeXhNPQv1/nZN5Z3Fq3uKWCQRry1HMoOGKrdATfUUIXc6vvk
nRPuT57RDafiyxjektPLx0z2LvRZZb7lU5G9/+rO2yJ1f65Sd5k0drIb48YZ+OBj
6IrJDlqg3BaMV5Hr8LdQtY8CAwEAAQ==
-----END PUBLIC KEY-----`
  }),
  async created() {
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

    // tickets
    const params = new URLSearchParams(window.location.search)
    const auth = Object.fromEntries(params.entries()).auth || window.localStorage.getItem('auth')
    const attendee = Object.fromEntries(params.entries()).attendee || window.localStorage.getItem('attendee')
    if (typeof auth !== 'undefined' && typeof attendee !== 'undefined') {
      window.history.replaceState({}, document.title, '/' + window.location.hash)
      if (attendee !== 'gather') {
        window.localStorage.setItem('auth', auth)
        window.localStorage.setItem('attendee', attendee)
      } else {
        this.fullScreen = true
      }
      try {
        const { payload } = await jose.jwtVerify(auth, await jose.importSPKI(this.public, 'RS256'), {
          issuer: 'pretix'
        })
        if (payload.name !== attendee) {
          console.log('invalid Attendee')
          window.localStorage.setItem('error', true)
        } else {
          window.localStorage.setItem('hashKey', payload.hashKey)
          window.localStorage.setItem('liveHash', payload.liveHash)
        }
      } catch (error) {
        window.localStorage.setItem('error', true)
        console.error(error)
      }
    }
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
