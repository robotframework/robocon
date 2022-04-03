<template>
  <div>
    <div
      v-for="({ date, talks }) in talksByDate"
      :key="date"
      class="mb-xlarge">
      <h3 class="dateTitle pt-3xsmall pb-2xsmall mb-2xsmall type-body">
        <div :class="$store.state.isMobile ? 'pl-small' : 'pl-small'">
          {{ format(new Date(date), 'MMM dd') }}
          <span v-if="headerLink !== ''">
            -
          <a :href="headerLink" target="blank">
            conference tickets
          </a>
          </span>
        </div>
      </h3>
      <div
        v-for="talk in talks"
        :key="talk.code"
        :class="$store.state.isMobile && headerLink === '' ? 'p-small' : ''">
        <div class="card row p-small mb-medium bg-grey-dark">
          <div class="col-sm-12 col-md-9 col-lg-7 pr-small">
            <div v-if="talk.end">
              {{ format(new Date(talk.start), 'HH:mm') }} - {{ format(new Date(talk.end), 'HH:mm') }} {{ format(new Date(talk.start), 'OOO') }}
            </div>
            <div v-else>
              start: {{ format(new Date(talk.start), 'HH:mm') }} - {{ Number(talk.duration.split(':')[0]) }} hrs
            </div>
            <h3>
              {{ talk.title.en || talk.title }}
            </h3>
            <div v-if="talk.ticketLink" class="ticket rounded border-theme border-thin mt-small p-xsmall pt-2xsmall pb-2xsmall" style="width: fit-content;">
              <a class="type-no-underline" :href="talk.ticketLink" target="_blank">
                Buy ticket
              </a>
            </div>
            <div
              v-if="talk.abstract"
              class="mt-medium"
              v-html="parseMarkdown(talk.abstract)" />
            <button v-if="talk.abstract && !expandedTalks.includes(talk.code || talk.id)" class="color-theme" @click="expandedTalks.push(talk.code || talk.id); sendEvent('Open Talk', talk.title)">
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
              class="rounded bg-background row mb-small">
              <button class="flex middle speakerButton" @click="expandedSpeakers.includes(`${code}${talk.code}`) ? expandedSpeakers = expandedSpeakers.filter((codeInner) => codeInner !== `${code}${talk.code}`) : expandedSpeakers.push(`${code}${talk.code}`); sendEvent('Open Bio', getSpeaker(code) ? getSpeaker(code)['public_name'] : '-')">
                <img v-if="avatar" class="speakerImg rounded" :src="avatar || ''" :class="expandedSpeakers.includes(`${code}${talk.code}`) ? 'm-small mr-none' : ''" />
                <img v-else-if="talksWithPictures && getWorkshopImg(public_name)" class="speakerImg rounded" :src="getWorkshopImg(public_name) || ''" :class="expandedSpeakers.includes(`${code}${talk.code}`) ? 'm-small mr-none' : ''" />
                <div v-else class="speakerImg rounded" />
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
import { isSameDay, format } from 'date-fns'
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
  methods: {
    format,
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
        .flatMap(({ speakers }) => speakers)
        .find((speaker) => speaker.name === name)
      if (speaker) return speaker.avatar
      return null
    }
  }
}
</script>

<style scoped>
  .dateTitle {
    position: sticky;
    top: 3.5rem;
    margin-right: -1rem;
    background-color: rgba(34, 34, 34, 0.9);
    backdrop-filter: blur(1px);
    width: 100%;
  }
  @media screen and (min-width: 700px) {
    .dateTitle {
      top: 2.75rem;
    }
  }
  .speakerImg {
    width: 4rem;
    height: 4rem;
    display: block;
    transition: filter 0.2s, margin 0.2s;
    object-fit: cover;
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
  .ticket {
    transition: transform 0.15s;
    background-color: rgba(255, 255, 255, 0.05);
  }
  .ticket:hover {
    transform: scale(1.05);
  }
</style>
