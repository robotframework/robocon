<template>
  <div v-if="!error">
    <div class="px-small py-xsmall bg-black row between">
      <div>
        <button class="theme small type-small mr-small" :class="selectedDay === 1 && 'active'" @click="selectedDay = 1">Day 1</button>
        <button class="theme small type-small" :class="selectedDay === 2 && 'active'" @click="selectedDay = 2">Day 2</button>
      </div>
      <button @click="chatShown = !chatShown" class="theme small type-small">
        {{ chatShown ? 'Hide chat' : 'Show chat' }}
      </button>
    </div>
    <div class="stream-container" :class="isFullScreen && 'fullscreen'">
      <iframe class="stream col-sm-12" :class="chatShown && 'col-md-9'" :src=streamUrl title="Robocon stream" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe v-if="chatShown" class="chat col-sm-12 col-md-3" :src=chatUrl frameBorder="0" title="Stream chat"></iframe>
    </div>
  </div>
  <h1 v-if="dataReady && error" class="color-white mt-2xlarge type-center type-xlarge">
    <span class="color-theme">IN</span>
    <span>VALID</span>
    <span class="color-theme">AUTH</span>
  </h1>
  <div v-if="!isFullScreen">
    <div v-if="talks.length" class="container mt-large mb-xlarge px-small">
      <h2>
        Wednesday
      </h2>
      <talks-2023 :items="talks.filter(({ slot }) => slot?.start?.includes('2023-03-01'))" :small="true" />
      <h2 class="mt-xlarge">
        Thursday
      </h2>
      <talks-2023 :items="talks.filter(({ slot }) => slot?.start?.includes('2023-03-02'))" :small="true" />
      <h2 class="mt-xlarge">
        Friday
      </h2>
      <talks-2023 :items="talks.filter(({ slot }) => slot?.start?.includes('2023-03-03'))" :small="true" />
    </div>
    <div v-else>
      Loading talks...
    </div>
  </div>
</template>

<script>
import { Talks2023 } from 'Components'
import CryptoJS from 'crypto-js'
export default {
  components: {
    Talks2023
  },
  data: () => ({
    selectedDay: 1,
    day1: 'U2FsdGVkX1/0aHHp+Cys2bR/e8tq3sVnQiterKrTxTM=',
    day2: 'U2FsdGVkX18sJTZAmMWOmWZHyyIKqPmEv7M0LLPZths=',
    chat: 'U2FsdGVkX19Id2P5u0Hc1xSiLbqraODnTHvKjpo4p5yVgp4jY5Oj8/odAjctICBGwX8ptykisw2uFsCKXlGgYA==',
    error: false,
    talks: [],
    chatShown: true
  }),
  computed: {
    streamUrl() {
      const url = this.selectedDay === 1 ? this.day1 : this.day2
      const code = CryptoJS.AES.decrypt(url, this.hash).toString(CryptoJS.enc.Utf8)
      return `https://www.youtube.com/embed/${code}`
    },
    chatUrl() {
      return CryptoJS.AES.decrypt(this.chat, this.hash).toString(CryptoJS.enc.Utf8)
    },
    isFullScreen() {
      return window.localStorage.getItem('attendee') === 'gather'
    },
    hash() {
      return window.localStorage.getItem('liveHash')
    }
  },
  mounted() {
    const today = new Date()
    if (today.getDate() === 2 && today.getMonth() === 2) {
      this.selectedDay = 2
    }
    if (!this.hash) this.error = true
    Promise.all([
      fetch('https://cfp.robocon.io/api/events/robocon-2023-online/submissions/'),
      fetch('https://pretalx.com/api/events/robocon-2023-online/schedules/latest/')
    ])
      .then(async([submissionsOnline, scheduleOnline]) => {
        const talksOnline = await submissionsOnline.json()
        const { breaks: breaksOnline } = await scheduleOnline.json()
        return [talksOnline.results, breaksOnline]
      })
      .then(([list, breaks]) => {
        const talks = list
          .filter(({ submission_type }) => submission_type.en && ['Talk', 'Keynote', 'Pre-Recorded Full Talk', 'OpenSpace'].includes(submission_type.en)) // eslint-disable-line
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
      })
  }
}
</script>

<style scoped>
.stream-container {
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 7rem);
}
.stream-container.fullscreen {
  min-height: calc(100vh - 3rem);
}
@media screen and (max-width: 768px) {
  .chat {
    width: 100%;
  }
}
</style>
