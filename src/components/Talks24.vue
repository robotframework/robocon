<template>
  <div class="mt-small w-100">
    <button
      v-for="type in ['live', 'online']"
      :key="type"
      class="theme mr-xsmall"
      :class="selectedTrack === type && 'active'"
      @click="selectedTrack = type"
    >
      {{ type }}
    </button>
    <div
      v-for="talk in shownTalks"
      :key="talk.id"
      class=" mt-large card p-small"
    >
      <a
        class="anchor"
        :id="getSlug(talk.title, selectedTrack)"
      ></a>
      <div class="flex between">
        <h3>
          {{ talk.title }}
        </h3>
        <a
          v-if="!$store.state.isMobile"
          title="get link to talk"
          :href="`#${getSlug(talk.title, selectedTrack)}`"
        >
          <link-icon style="transform: translateY(2px)" />
        </a>
      </div>
      <p class="type-small m-none">
        {{ format(new Date(talk.slot.start), 'MMM dd') }} {{ getShownTime(talk.slot.start) }} - {{ getShownTime(talk.slot.end) }} ({{Intl.DateTimeFormat().resolvedOptions().timeZone}})
      </p>
      <div class="mb-small">
        {{ talk.speakers.map((speaker) => speaker.name).join(', ') }}
      </div>
      <div v-html="parseText(talk.abstract)" />
      <details class="details">
        <summary>
          Full description
        </summary>
        <div v-html="parseText(talk.description)" />
      </details>
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
      if (this.selectedTrack === 'live') return this.talksLive
      if (this.selectedTrack === 'online') return this.talksOnline
      return []
    }
  },
  created() {
    fetch('https://pretalx.com/api/events/robocon-2024/schedules/latest/')
      .then((res) => res.json())
      .then((res) => {
        this.talksLive = res?.slots?.filter((talk) => talk?.slot?.room?.en === 'RoboCon')
          .sort((a, b) => {
            if (new Date(a.slot?.start) < new Date(b.slot?.start)) return -1
            return 1
          })
        this.talksOnline = res?.slots?.filter((talk) => talk?.slot?.room?.en === 'RoboConOnline')
          .sort((a, b) => {
            if (new Date(a.slot?.start) < new Date(b.slot?.start)) return -1
            return 1
          })
      })
      .then(() => {
        const hash = window.location.hash
        if (hash.includes('online')) this.selectedTrack = 'online'
        this.$nextTick(() => {
          console.log(hash)
          const el = document.getElementById(hash.slice(1))
          console.log(el)
          if (el) el.scrollIntoView()
        })
      })
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    selectedTrack: 'live',
    talksLive: [],
    talksOnline: []
  }),
  methods: {
    format,
    getShownTime(time) {
      const date = new Date(time)
      const hours = date.getHours()
      let minutes = date.getMinutes()
      if (`${minutes}`.length === 1) minutes = `0${minutes}`
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
details summary {
  cursor: pointer;
  list-style-type: ">";
  color: var(--color-theme);
  font-weight: 600;
}
details[open] > summary {
    list-style-type: '↓';
}
details.details >>> p {
  display: inline;
}
</style>
