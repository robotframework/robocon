<template>
  <div v-if="loaded">
    <div
      v-for="({ date, talks }) in talksByDate"
      :key="date"
      class="mb-xlarge">
      <h3 class="dateTitle bg-background pt-3xsmall pb-2xsmall mb-2xsmall">
        {{ format(new Date(date), 'MMM dd') }}
      </h3>
      <div
        v-for="talk in talks"
        :key="talk.code"
        class="card row p-small mb-medium bg-grey-dark">
        <div class="col-sm-12 col-md-9 col-lg-7 pr-small">
          <div>
            {{ format(new Date(talk.start), 'HH:mm') }} - {{ format(new Date(talk.end), 'HH:mm') }} {{ format(new Date(talk.start), 'OOO') }}
          </div>
          <h3>
            {{ talk.title.en || talk.title }}
          </h3>
          <div
            v-if="talk.abstract"
            class="mt-medium"
            v-html="parseMarkdown(talk.abstract)" />
          <button v-if="talk.abstract && !talk.expanded" class="color-theme" @click="talks.find(({ code }) => code === talk.code).expanded = true; sendEvent('Open Talk', talk.title)">
            Read more
          </button>
          <transition name="fade">
            <div
              v-if="talk.expanded"
              class="mt-medium description"
              v-html="parseMarkdown(talk.description)" />
          </transition>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-5">
          <div
            v-for="{ code, expanded, avatar } in talk.speakers"
            :key="code"
            class="rounded bg-background row mb-small">
            <button class="flex middle speakerButton" @click="talks.find((talkData) => talkData.code === talk.code).speakers.find((speaker) => speaker.code === code).expanded = !expanded; sendEvent('Open Bio', getSpeaker(code)['public_name'])">
              <img v-if="avatar" class="speakerImg rounded" :src="avatar || ''" :class="expanded ? 'm-small mr-none' : ''" />
              <div v-else class="speakerImg rounded" />
              <h4 class="ml-small" :class="expanded ? 'color-theme' : 'color-white'">
                {{ getSpeaker(code)['public_name'] }}
              </h4>
            </button>
            <transition :name="expanded ? 'fade' : ''">
              <div
                v-if="expanded"
                v-html="getSpeaker(code).biography ? parseMarkdown(getSpeaker(code).biography) : '-'"
                class="p-small pt-none speakerBio" />
            </transition>
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
  data: () => ({
    speakers: [],
    talks: [],
    loaded: false
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
  created() {
    fetch('https://cfp.robocon.io/robocon-2022/schedule/widget/v2.json')
      .then((res) => res.json())
      .then(({ talks, speakers }) => {
        this.talks = talks
          .map((talk) => ({
            ...talk,
            expanded: false,
            speakers: talk.speakers ? talk.speakers.map((code) => ({
              code,
              avatar: speakers.find((speaker) => speaker.code === code).avatar,
              expanded: false
            })) : []
          }))
      })
      .then(() => {
        fetch('https://pretalx.com/robocon-2022/schedule/export/schedule.json')
          .then((res) => res.json())
          .then(({ schedule }) => {
            const talks = schedule.conference.days
              .flatMap(({ rooms }) => (('Main Hall' in rooms) ? rooms['Main Hall'] : []))
            this.speakers = schedule.conference.days
              .flatMap(({ rooms }) => (('Main Hall' in rooms) ? rooms['Main Hall'] : [])
                .flatMap(({ persons }) => persons))
              .filter(({ code }, index, self) => self.map(({ code }) => code).indexOf(code) === index)
            this.talks.forEach((talk) => {
              const foundTalk = talks.find(({ url }) => url.includes(talk.code))
              if (foundTalk) talk.description = foundTalk.description
            })
            this.loaded = true
          })
      })
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
    }
  }
}
</script>

<style scoped>
  .dateTitle {
    position: sticky;
    top: 3.5rem;
    margin-right: -1rem;
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
</style>
