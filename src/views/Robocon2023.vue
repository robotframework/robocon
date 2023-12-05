<template>
  <banner class="theme-2023">
    <div>
      <h1 class="color-white type-center"><span class="">RBCN</span><span class="color-theme">23</span></h1>
    </div>
  </banner>
  <div class="border-top-theme border-thin theme-2023" />
  <div class="container theme-2023">
    <page-section
      title-id="intro"
      :title="$t('page2023.intro.title')"
      v-show="token.name !== 'gather'">
      <div class="row center col-lg-8">
        <div v-html="$t('page2023.intro.body')" class="mb-large" />
        <!-- <div
          v-for="ticket in $tm('home.tickets')"
          :key="ticket.title"
          style="display: inline-block">
          <ticket v-if="!showStreamLink" :link="ticket.link">
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
          <div v-else class="type-center">
            <router-link :to="{ name: 'Stream' }">
              <button class="theme active type-uppercase">
                Go to live stream
              </button>
            </router-link>
            <div class="mt-small">
              <a href="https://tickets.robotframework.org/robocon-2023/3410050/" class="type-small">
                Purchase tickets
              </a>
            </div>
          </div>
        </div>  -->
      </div>
    </page-section>
    <div v-if="talks.length">
      <page-section title-id="talks" title="Talks" :subtitle="shownTalks === 'live' ? 'Day 1 - Helsinki' : 'Day 1 - Online'">
        <button v-show="token.name !== 'gather'" class="theme mb-large mt-small mr-small" :class="shownTalks === 'live' && 'active'" @click="shownTalks = 'live'">
          Live
        </button>
        <button v-show="token.name !== 'gather'" class="theme mb-large mt-small" :class="shownTalks === 'online' && 'active'" @click="shownTalks = 'online'">
          Online
        </button>
        <talks-2023 v-if="shownTalks === 'live'" :items="talks.filter(({ slot }) => slot?.start?.includes('2023-01-19'))" :hash="token.hashKey" />
        <talks-2023 v-else :items="talks.filter(({ slot }) => slot?.start?.includes('2023-03-01'))" :hash="token.hashKey" />
      </page-section>
      <page-section title-id="talks2" title="Talks" :subtitle="shownTalks === 'live' ? 'Day 2 - Helsinki' : 'Day 2 - Online'">
        <talks-2023 v-if="shownTalks === 'live'" :items="talks.filter(({ slot }) => slot?.start?.includes('2023-01-20'))" :hash="token.hashKey" />
        <talks-2023 v-else :items="talks.filter(({ slot }) => slot?.start?.includes('2023-03-02'))" :hash="token.hashKey" />
      </page-section>
      <page-section title-id="talks3" title="Open-Space" :subtitle="shownTalks === 'live' ? 'Day 3 - Helsinki' : 'Day 3 - Online'">
        <talks-2023 v-if="shownTalks === 'live'" :items="talks.filter(({ slot }) => slot?.start?.includes('2023-01-20'))" />
        <talks-2023 v-else :items="talks.filter(({ slot }) => slot?.start?.includes('2023-03-03'))" />
      </page-section>
    </div>
    <div v-else>
      Loading talks...
    </div>
  </div>
</template>

<script>
import {
  Banner,
  PageSection,
  // Sponsors,
  Talks2023
} from 'Components'
import * as jose from 'jose'

export default {
  name: 'App',
  components: {
    Banner,
    PageSection,
    // Sponsors,
    Talks2023
  },
  data: () => ({
    talks: [],
    workshops: [],
    shownTalks: 'live',
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
    showStreamLink: false
  }),
  async created() {
    const params = new URLSearchParams(window.location.search)
    const auth = Object.fromEntries(params.entries()).auth || window.localStorage.getItem('auth')
    const attendee = Object.fromEntries(params.entries()).attendee || window.localStorage.getItem('attendee')
    if (typeof auth !== 'undefined' && typeof attendee !== 'undefined') {
      window.history.replaceState({}, document.title, '/2023' + window.location.hash)
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
        } else {
          this.showStreamLink = true
        }
      } catch (error) {
        this.error = true
        console.error(error)
      }
    }
    this.dataReady = true
    Promise.all([
      fetch('https://cfp.robocon.io/api/events/robocon-2023/submissions/'),
      fetch('https://cfp.robocon.io/api/events/robocon-2023-online/submissions/'),
      fetch('https://pretalx.com/api/events/robocon-2023/schedules/latest/'),
      fetch('https://pretalx.com/api/events/robocon-2023-online/schedules/latest/')
    ])
      .then(async([submissions, submissionsOnline, schedule, scheduleOnline]) => {
        const talks = await submissions.json()
        const talksOnline = await submissionsOnline.json()
        const { breaks } = await schedule.json()
        const { breaks: breaksOnline } = await scheduleOnline.json()
        return [[...talks.results, ...talksOnline.results], [...breaks, ...breaksOnline]]
      })
      .then(([list, breaks]) => {
        const talks = list
          .filter(({ submission_type }) => submission_type.en && ['Talk', 'Keynote', 'Pre-Recorded Full Talk', 'OpenSpace'].includes(submission_type.en)) // eslint-disable-line
        const workshops = list
          .filter(({ submission_type }) => submission_type.en && submission_type.en.includes('Workshop')) // eslint-disable-line
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
        this.workshops = workshops

        const hash = window.location.hash
        if (!hash || hash === '') return
        if (hash.substring(1, 8) === 'online-') this.shownTalks = 'online'

        this.$nextTick(() => {
          const el = document.getElementById(hash.slice(1))
          if (el) el.scrollIntoView()
        })
      })
    // fetch('https://cfp.robocon.io/api/events/robocon-2023/submissions/')
    //   .then((res) => res.json())
    //   fetch('https://pretalx.com/api/events/robocon-2023/schedules/latest/')
  },
  methods: {
    goTo(id) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth'
        })
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
