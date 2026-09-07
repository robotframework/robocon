<template>
  <div class="mt-small w-100">
    <div class="bg-background p-xsmall sticky pl-2xlarge" :class="isStreamRoute ? 'stream' : ''">
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
      <h3 class="sticky type-large" :class="isStreamRoute ? 'stream' : ''" :style="i !== 0 ? 'margin-top: 4rem' : ''">
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
        <div
          v-for="videoId in talk.videos"
          :key="videoId"
          class="talkVideo mt-medium mb-medium">
          <iframe
            class="rounded"
            :src="`https://www.youtube-nocookie.com/embed/${videoId}`"
            :title="`Recording: ${talk.title}`"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
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
// The schedule used to be fetched from pretalx on every load. That API has
// changed shape and broke the agenda, so the final programme is baked in.
// Regenerate with: node scripts/build-agenda-2024.js
import agenda from '../assets/pretalx/agenda2024.json'
import { withAvatars } from '../assets/pretalx/avatars'

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
          this.talksOnline.filter(({ slot, start }) => getDate(new Date(start || slot?.start)) === 28),
          this.talksOnline.filter(({ slot, start }) => getDate(new Date(start || slot?.start)) === 29)
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
    this.talksLive = agenda.talksLive.map(withAvatars)
    this.talksOnline = agenda.talksOnline.map(withAvatars)

    const hash = window.location.hash
    if (hash) {
      this.selectedTrack = (hash.includes('live')) ? 'helsinki' : 'online'
      this.$nextTick(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView()
      })
    }
    this.isStreamRoute = this.$route?.name === 'Stream'
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    selectedTrack: 'online',
    talksLive: [],
    talksOnline: [],
    isStreamRoute: false
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
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}
.sticky.stream {
  top: 3.7rem;
}
h3.sticky {
  top: 4.75rem;
  margin-top: -2.5rem;
  margin-left: 0.25rem;
  pointer-events: none;
}
h3.sticky.stream {
  top: 4.6rem;
}
@media screen and (max-width: 1280px) {
  .sticky {
    top: 6rem;
  }
  .sticky.stream {
    top: 3.4rem;
  }
  h3.sticky {
    top: 7rem;
    margin-top: -3rem;
  }
  h3.sticky.stream {
    top: 4.8rem;
  }
}

  /* Talk recording: a compact player on the collapsed card. */
  .talkVideo {
    max-width: 360px;
  }
  .talkVideo > iframe {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 0;
  }
  @media screen and (max-width: 768px) {
    .talkVideo {
      max-width: 100%;
    }
  }
</style>
