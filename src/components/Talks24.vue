<template>
  <div class="mt-small w-100">
    <button v-for="type in ['live', 'online']" :key="type" class="theme mr-xsmall" :class="selectedTrack === type && 'active'" @click="selectedTrack = type">
      {{ type }}
    </button>
    <p class="type-small">(Exact schedule will be announced later)</p>
    <div v-for="talk in shownTalks" :key="talk.id" class=" mt-large card p-small">
      <a class="anchor" :id="getSlug(talk['Proposal title'], selectedTrack)"></a>
      <div class="flex between">
        <h3>
          {{ talk['Proposal title'] }}
        </h3>
        <a v-if="!$store.state.isMobile" title="get link to talk" :href="`#${getSlug(talk['Proposal title'], selectedTrack)}`">
          <link-icon style="transform: translateY(2px)" />
        </a>
      </div>
      <div class="mb-small">
        {{ talk['Speaker names'].join(', ') }}
      </div>
      <div v-html="parseText(talk.Abstract)" />
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import { format, isWithinInterval } from 'date-fns'
import LinkIcon from './icons/LinkIcon.vue'
import talks24 from '../robocon-2024_sessions.json'

export default {
  name: 'Talks24',
  components: {
    LinkIcon
  },
  computed: {
    talks() {
      return {
        live: talks24.filter((talk) => talk['Session type'].en === 'Talk'),
        online: talks24.filter((talk) => talk['Session type'].en === 'PreRecorded-Talk')
      }
    },
    shownTalks() {
      if (this.selectedTrack === 'live') return this.talks.live
      if (this.selectedTrack === 'online') return this.talks.online
      return []
    }
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    selectedTrack: 'live'
  }),
  mounted() {
    const hash = window.location.hash
    console.log(hash)
    if (hash.includes('online')) this.selectedTrack = 'online'
  },
  methods: {
    format,
    getShownTime(time) {
      const date = new Date(time)
      const hours = date.getHours()
      const minutes = date.getMinutes()
      return `${hours}:${minutes === 0 ? '00' : minutes}`
    },
    parseText(description) {
      return marked.parse(description || '')
    },
    getSlug(title, tab) {
      if (!title) return ''
      let tabPrefix = 'live'
      if (tab === 'online') tabPrefix = 'online'
      return `${tabPrefix}-${title.replace(/[ ]/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`
    },
    getIsNow(start, end) {
      if (!start || !end) return false
      return isWithinInterval(this.dateNow, { start: new Date(start), end: new Date(end) })
    }
  }
}
</script>

<style scoped>
a.anchor {
  display: block;
  position: relative;
  top: -15vh;
  visibility: hidden;
}
</style>
