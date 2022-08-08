<template>
  <div>
    <div
      v-for="({ date, talks }) in talksByDate"
      :key="date"
      class="mb-xlarge">
      <h3 class="dateTitle mt-large mb-2xsmall type-small py-2xsmall color-white">
        <div class="pl-medium">
          {{ format(new Date(date), 'MMM dd') }}
        </div>
      </h3>
      <div
        v-for="talk in talks"
        :key="talk.code"
        :id="slugify(talk.title.en || talk.title)">
        <div class="card row p-small mb-medium">
          <div class="col-sm-12 col-md-9 col-lg-7 pr-small">
            <div v-if="talk.end">
              <template v-if="ongoing(talk)">
                🔴
              </template>
              {{ format(new Date(talk.start), 'HH:mm') }} - {{ format(new Date(talk.end), 'HH:mm') }} {{ format(new Date(talk.start), 'OOO') }}
            </div>
            <div v-else>
              start: {{ format(new Date(talk.start), 'HH:mm') }} - {{ Number(talk.duration.split(':')[0]) }} hrs
            </div>
            <h3 :id="`${slugify(talk.title.en || talk.title)}_title`" class="talkTitle">
              {{ talk.title.en || talk.title }}
            </h3>
            <div
              v-if="talk.yt_link"
              class="video col-sm-9 pl-3xsmall">
              <iframe
                class="rounded"
                width="100%"
                height="100%"
                :src="`https://www.youtube.com/embed/${talk.yt_link}?rel=0`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen />
            </div>
            <div
              v-if="talk.abstract"
              class="mt-medium"
              v-html="parseMarkdown(talk.abstract)" />
            <button
              v-if="talk.abstract && !expandedTalks.includes(talk.code || talk.id)"
              class="color-theme"
              @click="openTalk(talk)">
              Read more
            </button>
            <transition name="fade">
              <div
                v-if="expandedTalks.includes(talk.code || talk.id)"
                class="mt-medium description"
                v-html="parseMarkdown(talk.description)" />
            </transition>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-5 mt-small">
            <div
              v-for="{ code, avatar, public_name } in talk.speakers"
              :key="code"
              class="card sharper bg-black rounded-small row mb-small" style="overflow: hidden;">
              <button class="flex middle speakerButton" @click="expandedSpeakers.includes(`${code}${talk.code}`) ? expandedSpeakers = expandedSpeakers.filter((codeInner) => codeInner !== `${code}${talk.code}`) : expandedSpeakers.push(`${code}${talk.code}`); sendEvent('Open Bio', getSpeaker(code) ? getSpeaker(code)['public_name'] : '-')">
                <img v-if="avatar" class="speakerImg rounded-small" :src="avatar || ''" :class="expandedSpeakers.includes(`${code}${talk.code}`) ? 'opened' : ''" />
                <img v-else-if="talksWithPictures && getWorkshopImg(public_name)" class="speakerImg rounded-small" :src="getWorkshopImg(public_name) || ''" :class="expandedSpeakers.includes(`${code}${talk.code}`) ? 'opened' : ''" />
                <div v-else class="speakerImg rounded-small" />
                <h4 class="ml-small" :class="expandedSpeakers.includes(`${code}${talk.code}`) ? 'color-theme' : 'color-white'">
                  {{ getSpeaker(code) ? getSpeaker(code)['public_name'] : '-' }}
                </h4>
              </button>
              <transition :name="expandedSpeakers.includes(`${code}${talk.code}`) ? 'fade' : ''">
                <div
                  v-if="expandedSpeakers.includes(`${code}${talk.code}`)"
                  v-html="getSpeaker(code).biography ? parseMarkdown(getSpeaker(code).biography) : '-'"
                  class="p-small pt-none speakerBio" />
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isSameDay, format, isWithinInterval } from 'date-fns'
import { marked } from 'marked'

export default {
  name: 'talks',
  props: {
    talks: {
      type: Array,
      default: () => []
    },
    speakers: {
      type: Array,
      default: () => []
    },
    talksWithPictures: {
      type: Array,
      default: () => []
    },
    headerLink: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    expandedTalks: [],
    expandedSpeakers: []
  }),
  computed: {
    talksByDate() {
      const dates = this.talks
        .map(({ start }) => new Date(start))
        .filter((date, index, self) => self
          .findIndex((dateInner) => isSameDay(date, dateInner)) === index)
      return dates
        .map((date) => ({
          date,
          talks: this.talks.filter(({ start }) => isSameDay(date, new Date(start)))
        }))
    }
  },
  mounted() {
    const param = new URLSearchParams(window.location.search)
    const talkName = param.get('talk')
    if (!talkName) return
    const talk = this.talks.find(({ title }) => talkName === this.slugify(title.en || title))
    if (!talk) return
    this.openTalk(talk)
    const element = document.getElementById(talkName)
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - 150
    window.scrollTo({ top: offsetPosition })
  },
  methods: {
    format,
    slugify(str) {
      return str.replace(/[ ]/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()
    },
    parseMarkdown(text) {
      return marked.parse(text)
    },
    getSpeaker(code) {
      return this.speakers.find((speaker) => speaker.code === code)
    },
    sendEvent(event, value) {
      window.plausible(event, { props: { value } })
    },
    getWorkshopImg(name) {
      // hacking three different models of speakers together is 5/5
      const speaker = this.talksWithPictures
        .find((speaker) => speaker.name === name)
      if (speaker) return speaker.avatar
      return null
    },
    openTalk(talk) {
      this.expandedTalks.push(talk.code || talk.id)
      this.sendEvent('Open Talk', talk.title)
      const newUrl = `${window.location.href.split('?')[0].split('#')[0]}?talk=${this.slugify(talk.title)}`
      history.replaceState(null, null, newUrl)
    },
    ongoing(talk) {
      if (talk.room !== 1193) return false
      const start = new Date(talk.start)
      const end = new Date(talk.end)
      if (isNaN(start) || isNaN(end)) return false
      return isWithinInterval(new Date(), { start, end })
    }
  }
}
</script>

<style scoped>
  .dateTitle {
    top: 3.35rem;
    margin-right: -1rem;
    width: 99%;
    transform: scaleX(1.05);
    z-index: 7;
  }
  @media screen and (min-width: 700px) {
    .dateTitle {
      top: 0;
      width: 100%;
    }
  }
  .speakerImg {
    width: 4rem;
    height: 4rem;
    margin: 1px;
    display: block;
    transition: filter 0.2s, margin 0.2s;
    object-fit: cover;
  }
  .speakerImg.opened {
    margin: 1rem;
    margin-right: 0;
  }
  .speakerButton {
    width: 100%;
  }
  .speakerButton > h4 {
    transition: color 0.2s;
  }
  .speakerButton:hover > h4 {
    color: var(--color-theme) !important;
  }
  .speakerButton:hover > img {
    filter: brightness(1.3);
  }
  .speakerBio {
    font-size: 1rem !important;
    word-break: break-word;
  }
  .speakerBio >>> p {
    margin: 0;
  }
  .speakerBio >>> h1, .speakerBio >>> h2 {
    font-size: 1.25rem;
    margin-top: 0.75rem;
  }
  .description >>> h1, .description >>> h2 {
    font-size: 1rem;
  }
  .ticket > a {
    transition: color 0.2s;
  }
  .ticket:hover > a {
    color: var(--color-theme) !important;
  }

  .video {
    width: 100%;
    position: relative;
    padding-bottom: 43%; /* ratio 16/9 */
  }

  .video iframe {
    border: 1px solid var(--color-black);
    position: absolute;
    width: 100%;
    height: 100%;
  }

</style>
