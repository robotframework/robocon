<template>
  <banner>
    <div>
      <h1 class="color-white"><span class="">RBCN</span><span class="color-theme">23</span></h1>
    </div>
  </banner>
  <news-banner>
    <div v-if="currentTalk || nextTalk">
      <div v-if="currentTalk" class="mb-small">
        <h3 class="color-white">
          Now ({{ format(new Date(currentTalk.slot.start), 'k.mm') }} - {{ format(new Date(currentTalk.slot.end), 'k.mm') }})
        </h3>
        <a :href="`/#${getSlug(currentTalk.title)}`">
          {{ currentTalk.title || currentTalk.description?.en || '-' }}
        </a>
      </div>
      <div v-if="nextTalk">
        <h3 class="color-white">
          Next ({{ format(new Date(nextTalk.slot.start), 'k.mm') }} - {{ format(new Date(nextTalk.slot.end), 'k.mm') }})
        </h3>
        <a :href="`/#${getSlug(nextTalk.title)}`">
          {{ nextTalk.title || nextTalk.description?.en || '-' }}
        </a>
      </div>
    </div>
    <div v-else>
      Loading today's schedule...
    </div>
  </news-banner>
  <!-- <div v-else class="border-top-theme border-thin" /> -->
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
      <div class="col-lg-4" :class="$store.state.isDesktop && 'pl-medium'">
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
      </div>
    </page-section>
    <page-section title-id="sponsors" title="Sponsors">
      <sponsors :sponsors="$tm('home.sponsors')" />
    </page-section>
    <div v-if="talks.length">
      <!-- Sticky so the toggle stays reachable across both day sections. It has
           to live outside the page-sections: sticky is bounded by its parent. -->
      <div class="talksToggle p-small">
        <button class="theme mr-small" :class="shownTalks === 'live' && 'active'" @click="shownTalks = 'live'">
          Live
        </button>
        <button class="theme" :class="shownTalks === 'online' && 'active'" @click="shownTalks = 'online'">
          Online
        </button>
      </div>
      <page-section title-id="talks" title="Talks" :subtitle="shownTalks === 'live' ? 'Day 1 - Helsinki' : 'Day 1 - Online'">
        <talks-2023 v-if="shownTalks === 'live'" :items="talks.filter(({ slot }) => slot?.start?.includes('2023-01-19'))" />
        <talks-2023 v-else :items="talks.filter(({ slot }) => slot?.start?.includes('2023-03-01'))" />
      </page-section>
      <page-section title-id="talks2" title="Talks" :subtitle="shownTalks === 'live' ? 'Day 2 - Helsinki' : 'Day 2 - Online'">
        <talks-2023 v-if="shownTalks === 'live'" :items="talks.filter(({ slot }) => slot?.start?.includes('2023-01-20'))" />
        <talks-2023 v-else :items="talks.filter(({ slot }) => slot?.start?.includes('2023-03-02'))" />
      </page-section>
    </div>
    <div v-else>
      Loading talks...
    </div>
    <page-section title-id="workshops" title="Workshops" subtitle="Helsinki, in-person">
      <talks-2023 v-if="workshops.length" :items="workshops" />
      <div v-else>
        Loading workshops...
      </div>
    </page-section>
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
import { isToday, format, isWithinInterval } from 'date-fns'

// Both RoboCon 2023 events (Helsinki in January, Online in March) used to be
// fetched from pretalx on every page load. The API has changed shape since then
// and broke the agenda, so the final programme is baked in.
// Regenerate with: node scripts/build-agenda-2023.js
import agenda from '@/assets/pretalx/agenda.json'

// agenda.json stores bare avatar filenames; webpack turns them into
// fingerprinted asset URLs that honour publicPath.
const avatars = require.context('../assets/avatars', false, /\.webp$/)
const avatarUrl = (file) => {
  if (!file) return ''
  try {
    const asset = avatars(`./${file}`)
    return asset && asset.default ? asset.default : asset
  } catch (e) {
    return ''
  }
}

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
    shownTalks: 'live'
  }),
  created() {
    const withToggles = (talk) => ({
      ...talk,
      expanded: false,
      speakers: talk.speakers.map((speaker) => ({
        ...speaker,
        avatar: avatarUrl(speaker.avatar),
        expanded: false
      }))
    })
    this.talks = agenda.talks.map(withToggles)
    this.workshops = agenda.workshops.map(withToggles)

    const hash = window.location.hash
    if (!hash || hash === '') return
    if (hash.substring(1, 8) === 'online-') this.shownTalks = 'online'

    this.$nextTick(() => {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView()
    })
  },
  computed: {
    currentTalk() {
      const talk = this.talks.find(({ slot = {} }) => slot.start && isWithinInterval(new Date(), { start: new Date(slot.start), end: new Date(slot.end) }))
      if (talk) return talk
      return null
    },
    nextTalk() {
      console.log('asd')
      const talksSorted = this.talks
        .filter(({ slot = {} }) => slot.start && slot.end)
        .filter(({ slot = {} }) => isToday(new Date(slot.start)))
        .sort((a, b) => {
          const dateA = a.slot?.start ? new Date(a.slot.start) : null
          const dateB = b.slot?.start ? new Date(b.slot.start) : null
          if (dateA && dateB) return dateA < dateB ? -1 : 1
          return 0
        })
      const next = talksSorted.find(({ slot }) => new Date(slot.start) > new Date())
      return next
    }
  },
  methods: {
    format,
    goTo(id) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth'
        })
      }
    },
    getSlug(title) {
      if (!title) return ''
      return title.replace(/[ ]/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()
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
/* Live/Online toggle, pinned just below the navbar. The offsets are in px
   because the root font-size is responsive, and they match the two navbars:
   70px for the desktop one, 84px for the mobile one below 1281px. */
.talksToggle {
  position: sticky;
  top: 70px;
  z-index: 1;
  background-color: var(--color-background);
}
@media screen and (max-width: 1280px) {
  .talksToggle {
    top: 84px;
  }
}
/* Above 1280px page-section puts its title in a 25% column and sticks it, so
   keep the bar over the content column only and leave the titles uncovered. */
@media screen and (min-width: 1281px) {
  .talksToggle {
    margin-left: 25%;
  }
}
</style>
