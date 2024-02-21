<template>
  <div class="mt-small w-100">
    <button
      v-for="type in ['online', 'helsinki']"
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
      class="mt-large card p-small"
      :class="talk.isBreak && 'bg-secondary sharper'"
    >
      <a
        v-if="!talk.isBreak"
        class="anchor"
        :id="getSlug(talk.title, selectedTrack)"
      ></a>
      <div class="flex between">
        <h3>
          {{ talk.isBreak ? talk.description.en : talk.title }}
        </h3>
        <a
          v-if="!$store.state.isMobile && !talk.isBreak"
          title="get link to talk"
          :href="`#${getSlug(talk.title, selectedTrack)}`"
        >
          <link-icon style="transform: translateY(2px)" />
        </a>
      </div>
      <p class="type-small m-none">
        {{ format(new Date(talk.slot?.start || talk.start), 'MMM dd') }} {{ getShownTime(talk.slot?.start || talk.start) }} - {{ getShownTime(talk.slot?.end || talk.end) }} ({{Intl.DateTimeFormat().resolvedOptions().timeZone}})
      </p>
      <div v-if="hashKey && getVideoUrl(talk.code)" class="col-sm-12 col-md-10 col-md-offset-1">
        <div width="100%" class="video mt-medium mb-medium">
          <iframe width="100%" height="100%" class="rounded" :src=getVideoUrl(talk.code) :title="`Recording: ${talk.title}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <div v-if="talk.abstract" v-html="parseText(talk.abstract)" />
      <details v-if="!talk.isBreak && talk.description" class="details">
        <summary>
          Full description
        </summary>
        <div v-html="parseText(talk.description)" class="p-small" />
      </details>
      <h3 v-if="!talk.isBreak" class="mt-xlarge">Presenters</h3>
      <details
        v-for="speaker in talk.speakers"
        :key="speaker.code"
        class="card sharper mb-medium mt-medium">
        <summary class="bio">
          <div class="middle" style="display: inline-flex">
            <div class="mr-small">
              <img :src="speaker.avatar || `${publicPath}/img/speaker_img_placeholder.jpg`" class="rounded-small block" style="width: 5rem; aspect-ratio: 1; object-fit: cover;" />
            </div>
            <div class="">
              <h4 class="type-small type-underline">
                  {{ getSpeaker(speaker.code)?.name || speaker.name }}
                </h4>
            </div>
          </div>
        </summary>
        <div class="col-sm-12 p-medium pl-large pr-small">
            <p
              class="type-small m-none pl-2xsmall"
              v-html="parseText(getSpeaker(speaker.code)?.biography) || '-'" />
          </div>
      </details>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import { format, isWithinInterval } from 'date-fns'
import LinkIcon from './icons/LinkIcon.vue'
import CryptoJS from 'crypto-js'

export default {
  name: 'Talks24',
  props: {
    speakers: {
      type: Array,
      required: true
    },
    hashKey: {
      type: String,
      required: false
    }
  },
  components: {
    LinkIcon
  },
  computed: {
    shownTalks() {
      if (this.selectedTrack === 'online' || this.onlineOnly) return this.talksOnline
      if (this.selectedTrack === 'helsinki') return this.talksLive
      return []
    }
  },
  created() {
    fetch('https://pretalx.com/api/events/robocon-2024/schedules/latest/')
      .then((res) => res.json())
      .then((res) => {
        this.talksLive = [
          ...res?.slots?.filter((talk) => talk?.slot?.room?.en === 'RoboCon').filter((talk) => talk?.submission_type?.en !== 'Tutorial'),
          ...res?.breaks?.filter((b) => b?.room?.en === 'RoboCon').map((b) => ({ ...b, isBreak: true }))
        ]
          .sort((a, b) => {
            if (new Date(a.slot?.start || a.start) < new Date(b.slot?.start || b.start)) return -1
            return 1
          })
        this.talksOnline = [
          ...res?.slots?.filter((talk) => talk?.slot?.room?.en === 'RoboConOnline').filter((talk) => talk?.submission_type?.en !== 'Tutorial'),
          ...res?.breaks?.filter((b) => b?.room?.en === 'RoboConOnline').map((b) => ({ ...b, isBreak: true }))
        ]
          .sort((a, b) => {
            if (new Date(a.slot?.start || a.start) < new Date(b.slot?.start || b.start)) return -1
            return 1
          })
      })
      .then(() => {
        const hash = window.location.hash
        if (hash) {
          if (hash.includes('online')) this.selectedTrack = 'online'
          this.$nextTick(() => {
            const el = document.getElementById(hash.slice(1))
            if (el) el.scrollIntoView()
          })
        }
      })
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    selectedTrack: 'online',
    talksLive: [],
    talksOnline: [],
    recordings: {
      TQTQQN: 'U2FsdGVkX1+uEgAGlFJ0EmTmaUjx4p7BB/etKhgVzu8=',
      SSECGZ: 'U2FsdGVkX187HqoCuDt+LvlnThN3kh6vioUVzk/b9tk=',
      XFZ7KM: 'U2FsdGVkX1/5jKr1TKkmGoG/5Xna8uEbeLXDMJY+Kpk='
    }
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
    },
    getSpeaker(speakerId) {
      return this.speakers.find(({ code }) => code === speakerId)
    },
    getVideoUrl(code) {
      if (typeof code === 'undefined') return undefined
      const recording = this.recordings[code]
      if (!recording) {
        // console.error(`Code ${code} did not have a recording.`)
        return undefined
      }
      try {
        const url = CryptoJS.AES.decrypt(recording, this.hashKey).toString(CryptoJS.enc.Utf8)
        return `https://www.youtube-nocookie.com/embed/${url}?rel=0&autoplay=0&mute=0&controls=1&origin=https%3A%2F%2Frobocon.io&playsinline=0&showinfo=0&modestbranding=1`
      } catch (e) {
        // console.error(`Code ${code} did not have a valid recording.`)
        return undefined
      }
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
details summary.bio {
  list-style-type: '';
}
details.details >>> p {
  display: inline;
}
details.details >>> ol {
  padding-left: 2rem;
}
details summary.bio::-webkit-details-marker {
  display:none;
}
</style>
