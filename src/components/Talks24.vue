<template>
  <div class="mt-small w-100">
    <div class="bg-background p-xsmall sticky pl-2xlarge">
      <button
        v-for="type in ['online', 'helsinki']"
        :key="type"
        class="theme mr-xsmall"
        :class="selectedTrack === type && 'active'"
        @click="selectedTrack = type"
      >
        {{ type }}
      </button>
    </div>
    <div v-for="(day, i) in shownTalks" :key="i">
      <h3 class="sticky type-large" :style="i !== 0 ? 'margin-top: 4rem' : ''">
        Day {{ i + 1 }}
      </h3>
      <div
        v-for="talk in day"
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
  </div>
</template>

<script>
import { marked } from 'marked'
import { format, isWithinInterval, getDate } from 'date-fns'
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
      if (!this.talksLive.length || !this.talksOnline.length) return
      if (this.selectedTrack === 'online' || this.onlineOnly) {
        return [
          this.talksOnline.filter(({ slot }) => getDate(new Date(slot?.start)) === 28),
          this.talksOnline.filter(({ slot }) => getDate(new Date(slot?.start)) === 29)
        ]
      }
      if (this.selectedTrack === 'helsinki') {
        return [
          this.talksLive.filter(({ slot, start }) => getDate(new Date(start || slot?.start)) === 8),
          this.talksLive.filter(({ slot, start }) => getDate(new Date(start || slot?.start)) === 9)
        ]
      }
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
      TQTQQN: 'U2FsdGVkX1+CuAVK2bcpvFpHfbJL/3RWV1OaTvAL20I=',
      SSECGZ: 'U2FsdGVkX1/9Jn9MfQ0ws09fTcXUmdFnIqgTkIEUdto=',
      XFZ7KM: 'U2FsdGVkX1/b+d63VUyx580UkmwHP+9G0OLl0boSgMI=',
      ECYJEF: 'U2FsdGVkX1+LuyQKFrozkPjMdIzChUQivAdB1lUyau4=',
      XH9APF: 'U2FsdGVkX19Djl299vOrRwLyfz5sMp+rBrvl6s9fJ3I=',
      JHXEQQ: 'U2FsdGVkX1+jsOwt1ZqnAYJHiEFvaeEcpJCcJ0qPGI0=',
      QQSGJU: 'U2FsdGVkX1/Vsy1H1gihrEEa7PUrP/Hu0sa3tPMv8Wc=',
      ZAGHBH: 'U2FsdGVkX1++eu97CvzexTIx59NjX0+Zt86xEdaPdJI=',
      YLX3LV: 'U2FsdGVkX197kcmeS73sdQ40jmUtwoWsd5zYxgz2TYI=',
      RYES8M: 'U2FsdGVkX18czVpZQJf2LziSJSQe2U18vCpc30HjdoY=',
      C3JNDF: 'U2FsdGVkX19zPOJeF6Z0SMFUPTL4innPORLYzE45ExA=',
      ATWZKG: 'U2FsdGVkX18wZ2SpxyQVwfp17O5ULwQmkfaNq0zAbBQ=',
      JSZTRJ: 'U2FsdGVkX1/FSWBkO4RMc9sZliGZz5tBSXks2vNGtxs=',
      K7ZSXM: 'U2FsdGVkX19RMJdfFNcY/EqbFS8TSTfxFymFmW0guZ4=',
      KTU8MK: 'U2FsdGVkX1+EdSmDUwMth71XXjIlGv6v+T+KXz/QhNQ=',
      HSDAHH: 'U2FsdGVkX1+H4DChYU2na70JMnmAY4uG3VoYU6Ieo5o=',
      SCRLQS: 'U2FsdGVkX1/DkL5K/MSKvC3lsSgSimJkjO40Krb5Hlk='
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
.sticky {
  position: sticky;
  top: 3.5rem;
  z-index: 2;
}
h3.sticky {
  top: 4.75rem;
  margin-top: -2.5rem;
  pointer-events: none;
}
@media screen and (max-width: 1280px) {
  .sticky {
    top: 6rem;
  }
  h3.sticky {
    top: 7rem;
    margin-top: -3rem;
  }
}
</style>
