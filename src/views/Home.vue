<template>
  <banner>
    <div>
      <h1 class="color-white"><span class="">RBCN</span><span class="color-theme">23</span></h1>
    </div>
  </banner>
  <news-banner v-if="$t('newsBanner') !== ''">
    <div v-html="$t('newsBanner')" />
  </news-banner>
  <div v-else class="border-top-theme border-thin" />
  <div class="container">
    <page-section
      title-id="intro"
      :title="$t('home.intro.title')">
      <div class="row center col-lg-8">
        <div v-html="$t('home.intro.body')" class="mb-large" />
        <div
          v-for="ticket in $tm('home.tickets')"
          :key="ticket.title"
          style="display: inline-block">
          <ticket :link="ticket.link">
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
        </div>
        <p class="mt-large type-center">
          Tickets also include instant access to <span class="color-theme">2022 talks!</span>
        </p>
      </div>
      <!-- <div class="col-lg-4" :class="$store.state.isDesktop && 'pl-medium'">
        <div class="card p-small mb-small mt-small">
          <button class="block" @click="goTo('workshops')">
            <h3 class="type-underline">
              Workshops
            </h3>
          </button>
          January 17th
          <p class="type-small">
            Book and join a workshop for an ultimate hands-on learning experience in Helsinki.
          </p>
          <p class="type-small">
            There are several different workshops so you'll surely find one that
            caters your needs and experience level!
          </p>
        </div>
        <div class="card p-small mb-small">
          <h3>
            Open-Space (aka Sprints)
          </h3>
          January 18th
          <p class="type-small">
            Join the free Open-Space day before the conference.
            This day is an <a href="https://en.wikipedia.org/wiki/Unconference" target="_blank">Unconference</a>
            day where we will organize sessions based on the proposals of all participants with
            <a href="https://en.wikipedia.org/wiki/Open_Space_Technology" target="_blank">Open-Space</a> spirit.
            The participation is free of charge and sponsored by eficode. ❤️
          </p>
          <a href="https://tickets.robotframework.org/robocon-2023/3761036/" target="_blank" class="type-small weight-bold">Enroll here!</a>
          <p class="type-small">
            You may contribute to an existing project in the Robot Framework ecosystem
            or pitch a project idea you'd like to work on with others.
            You could also work on stuff you have learned the day before or just
            join to meet other Robot Framework users and developers!
          </p>
        </div>
        <div class="card p-small">
          <button class="block" @click="goTo('talks')">
            <h3 class="type-underline">
              Main conference
            </h3>
          </button>
          January 19th & 20th
          <p class="type-small">
            Held at <a href="https://goo.gl/maps/jEW5zoLuZgmca6D1A">Bio Rex</a> in city center.
          </p>
        </div>
      </div> -->
    </page-section>
    <page-section title-id="sponsors" title="Sponsors">
      <sponsors :sponsors="$tm('home.sponsors')" />
    </page-section>
    <div v-if="talks.length">
      <page-section title-id="talks" title="Talks" :subtitle="shownTalks === 'live' ? 'Day 1 - Helsinki' : 'Day 1 - Online'">
        <button class="theme mb-large mt-small mr-small" :class="shownTalks === 'live' && 'active'" @click="shownTalks = 'live'">
          Live
        </button>
        <button class="theme mb-large mt-small" :class="shownTalks === 'online' && 'active'" @click="shownTalks = 'online'">
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
  Sponsors,
  Ticket,
  Talks2023,
  NewsBanner
} from 'Components'
import * as jose from 'jose'

export default {
  name: 'App',
  components: {
    Banner,
    PageSection,
    Sponsors,
    Ticket,
    Talks2023,
    NewsBanner
  },
  data: () => ({
    talks: [],
    workshops: [],
    shownTalks: 'online',
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
    error: false
  }),
  async created() {
    const params = new URLSearchParams(window.location.search)
    const auth = Object.fromEntries(params.entries()).auth || window.localStorage.getItem('auth')
    const attendee = Object.fromEntries(params.entries()).attendee || window.localStorage.getItem('attendee')
    console.log(auth)
    if (typeof auth !== 'undefined' && typeof attendee !== 'undefined') {
      window.history.replaceState({}, document.title, '/' + window.location.hash)
      window.localStorage.setItem('auth', auth)
      window.localStorage.setItem('attendee', attendee)
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
