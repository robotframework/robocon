<template>
  <div v-if="dataReady && !error">
    <div class="px-small py-xsmall bg-black row between">
      <div>
        <button class="theme small type-small mr-small" :class="selectedDay === 1 && 'active'" @click="selectedDay = 1">Day 1</button>
        <button class="theme small type-small" :class="selectedDay === 2 && 'active'" @click="selectedDay = 2">Day 2</button>
      </div>
      <button @click="chatShown = !chatShown" class="theme small type-small">
        {{ chatShown ? 'Hide chat' : 'Show chat' }}
      </button>
    </div>
    <div class="stream-container" :class="isFullScreen && 'fullscreen'">
      <iframe class="stream col-sm-12" :class="chatShown && 'col-md-9'" :src=streamUrl title="Robocon stream" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe v-if="chatShown" class="chat col-sm-12 col-md-3" :src=chatUrl frameBorder="0" title="Stream chat"></iframe>
    </div>
  </div>
  <h1 v-if="dataReady && error" class="color-white mt-2xlarge type-center type-xlarge">
    <span class="color-theme">IN</span>
    <span>VALID</span>
    <span class="color-theme">AUTH</span>
  </h1>
  <div v-if="!isFullScreen">
    <div v-if="talks.length" class="container mt-large mb-xlarge px-small">
      <h2>
        Wednesday
      </h2>
      <talks-2023 :items="talks.filter(({ slot }) => slot?.start?.includes('2023-03-01'))" :small="true" :hash="token.liveHash" />
      <h2 class="mt-xlarge">
        Thursday
      </h2>
      <talks-2023 :items="talks.filter(({ slot }) => slot?.start?.includes('2023-03-02'))" :small="true" :hash="token.liveHash" />
      <h2 class="mt-xlarge">
        Friday
      </h2>
      <talks-2023 :items="talks.filter(({ slot }) => slot?.start?.includes('2023-03-03'))" :small="true" :hash="token.liveHash" />
    </div>
    <div v-else>
      Loading talks...
    </div>
  </div>
</template>

<script>
import { Talks2023 } from 'Components'
import CryptoJS from 'crypto-js'
import * as jose from 'jose'
export default {
  components: {
    Talks2023
  },
  data: () => ({
    selectedDay: 1,
    day1: 'U2FsdGVkX1/0aHHp+Cys2bR/e8tq3sVnQiterKrTxTM=',
    day2: 'U2FsdGVkX18sJTZAmMWOmWZHyyIKqPmEv7M0LLPZths=',
    chat: 'U2FsdGVkX19Id2P5u0Hc1xSiLbqraODnTHvKjpo4p5yVgp4jY5Oj8/odAjctICBGwX8ptykisw2uFsCKXlGgYA==',
    token: {},
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
-----END PUBLIC KEY-----`,
    dataReady: false,
    error: false,
    talks: [],
    chatShown: true
  }),
  computed: {
    streamUrl() {
      const url = this.selectedDay === 1 ? this.day1 : this.day2
      const code = CryptoJS.AES.decrypt(url, this.token.liveHash).toString(CryptoJS.enc.Utf8)
      return `https://www.youtube.com/embed/${code}`
    },
    chatUrl() {
      return CryptoJS.AES.decrypt(this.chat, this.token.liveHash).toString(CryptoJS.enc.Utf8)
    },
    isFullScreen() {
      return this.token.name === 'gather'
    }
  },
  async created() {
    const today = new Date()
    if (today.getDate() === 2 && today.getMonth() === 2) {
      this.selectedDay = 2
    }
    const params = new URLSearchParams(window.location.search)
    const auth = Object.fromEntries(params.entries()).auth || window.localStorage.getItem('auth')
    const attendee = Object.fromEntries(params.entries()).attendee || window.localStorage.getItem('attendee')
    console.log(auth)
    if (typeof auth !== 'undefined' && typeof attendee !== 'undefined') {
      window.history.replaceState({}, document.title, '/stream' + window.location.hash)
      if (attendee !== 'gather') {
        window.localStorage.setItem('auth', auth)
        window.localStorage.setItem('attendee', attendee)
      }
      try {
        const { payload } = await jose.jwtVerify(auth, await jose.importSPKI(this.public, 'RS256'), {
          issuer: 'pretix'
        })
        this.token = payload
        if (payload.name !== attendee) {
          console.log('invalid Attendee')
          this.error = true
        }
      } catch (error) {
        this.error = true
        console.error(error)
      }
    }
    this.dataReady = true
    Promise.all([
      fetch('https://cfp.robocon.io/api/events/robocon-2023-online/submissions/'),
      fetch('https://pretalx.com/api/events/robocon-2023-online/schedules/latest/')
    ])
      .then(async([submissionsOnline, scheduleOnline]) => {
        const talksOnline = await submissionsOnline.json()
        const { breaks: breaksOnline } = await scheduleOnline.json()
        return [talksOnline.results, breaksOnline]
      })
      .then(([list, breaks]) => {
        const talks = list
          .filter(({ submission_type }) => submission_type.en && ['Talk', 'Keynote', 'Pre-Recorded Full Talk', 'OpenSpace'].includes(submission_type.en)) // eslint-disable-line
        const breaksParsed = breaks
          .map((item) => ({
            ...item,
            submission_type: item.description.en.toLowerCase().includes('talk') ? 'Misc' : 'Break'
          }))
        this.talks = [...talks, ...breaksParsed]
          .map((item) => ({
            ...item,
            slot: item.slot || { start: item.start, end: item.end },
            type: item.submission_type.en || item.submission_type
          }))
          .sort((a, b) => new Date(a.slot.start) < new Date(b.slot.start) ? -1 : 1)
      })
  }
}
</script>

<style scoped>
.stream-container {
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 7rem);
}
.stream-container.fullscreen {
  min-height: calc(100vh - 3rem);
}
@media screen and (max-width: 768px) {
  .chat {
    width: 100%;
  }
}
</style>
