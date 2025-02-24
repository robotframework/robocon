<template>
  <div style="min-height: 100vh;">
    <div class="row gap-sm mb-large">
      <button @click="shownTalks = 'online'" class="event-select" :class="shownTalks === 'online' && 'active'">
        <div class="type-xlarge">
          ONLINE
        </div>
        <div class="type-xsmall">
          MAR 04th - 06th
        </div>
      </button>
      <button @click="shownTalks = 'live'" class="event-select" :class="shownTalks === 'live' && 'active'">
        <div class="type-xlarge">
          HELSINKI
        </div>
        <div class="type-xsmall">
          FEB 11th - 15th
        </div>
      </button>
    </div>
    <div v-if="isFetching">
      loading...
    </div>
    <div v-else-if="error">
      error loading schedule
    </div>
    <div v-else-if="data && talks">
      <template v-if="shownTalks === 'live'">
        <h2>Talks - Day 1</h2>
        <TalkItem v-for="(event, i) in talks.live.filter((event) => getDate(new Date(event.slot.start)) === 13)" :key="i" :event="{...event}" />
        <h2>Talks - Day 2</h2>
        <TalkItem v-for="(event, i) in talks.live.filter((event) => getDate(new Date(event.slot.start)) === 14)" :key="i" :event="{...event}" />
        <h2>Workshops</h2>
        <TalkItem v-for="(event, i) in talks.workshop" :key="i" :event="{...event}" />
      </template>
      <template v-else-if="shownTalks === 'online'">
        <h2>Tutorials (March 4th)</h2>
        <TalkItem v-for="(event, i) in talks.tutorial" :key="i" :event="{...event}" />
        <h2>Talks - Day 1 (March 5th)</h2>
        <TalkItem v-for="(event, i) in talks.online.filter((event) => getDate(new Date(event.slot.start)) === 5)" :key="i" :event="{...event}" />
        <h2>Talks - Day 2 (March 6th)</h2>
        <TalkItem v-for="(event, i) in talks.online.filter((event) => getDate(new Date(event.slot.start)) === 6)" :key="i" :event="{...event}" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PretalxSchedule } from '@/content';
import { computed, nextTick, onMounted, ref, type PropType } from 'vue';
import { useFetch } from '@vueuse/core'
import TalkItem from './TalkItem.vue'
import type { Break, BreakParsed, PretalxEvent, PretalxSession, ScheduleResponse, SubmissionsResponse } from '@/types/pretalx';
import {addISOWeekYears, getDate} from 'date-fns'
import CryptoJS from 'crypto-js'
import * as jose from 'jose'



const props = defineProps({
  content: Object as PropType<PretalxSchedule['fields']>
})

const shownTalks = ref<'live' | 'online'>('online')

const { isFetching, error, data } = useFetch(props.content.url).get().json()
const { isFetching: isFetchingSub, error: errorSub, data: dataSub } = useFetch('https://cfp.robocon.io/api/events/robocon-2025/submissions/?limit=50').get().json()

const sortTalks = (talks: (PretalxEvent | BreakParsed)[]) => talks.sort((a, b) => new Date(a.slot.start) < new Date(b.slot.end) ? -1 : 1)
const addVideoURLs = (talks: (PretalxEvent | BreakParsed)[]) => talks.map((event) => ({...event, videoURL: getVideoUrl(event.code)}))

const talks = computed(() => {
  if (isFetching.value || error.value) return undefined
  if (isFetchingSub.value || errorSub.value) return undefined
  const schedule = data.value as ScheduleResponse
  const submissions = dataSub.value as SubmissionsResponse

  nextTick(() => {
    const hash = window.location.hash
    if (hash) {
      const talkTitle = document.getElementById(hash.slice(1))
      if (talkTitle) talkTitle.scrollIntoView()
    }
  })

  const addSubmissionData = (event: PretalxEvent): PretalxEvent & PretalxSession => ({...event, ...submissions.results.find((s) => s.code === event.code)})
  return {
    live: addVideoURLs(sortTalks([
      ...schedule.slots.filter((talk) => talk?.slot?.room?.en === 'RoboCon').map((event) => addSubmissionData(event)),
      ...schedule.breaks.map((b) => ({
        ...b,
        submission_type: {
          en: 'Break' as const
        },
        title: 'Break',
        description: b.description,
        slot: {
          room_id: b.room_id,
          room: b.room,
          start: b.start,
          end: b.end
        }
      }))
    ])),
    workshop: sortTalks(schedule.slots.filter((talk) => talk?.submission_type.en.includes('Workshop')).map((event) => addSubmissionData(event))),
    tutorial: addVideoURLs(sortTalks(schedule.slots.filter((talk) => talk?.submission_type.en === 'Tutorial').map((event) => addSubmissionData(event)))),
    online: sortTalks([
      ...schedule.slots.filter((talk) => talk?.slot?.room?.en === 'RoboCon Online' && ['PreRecorded-Talk', 'Talk', 'Keynote'].includes(talk.submission_type.en)).map((event) => addSubmissionData(event)),
      ...schedule.breaks
      .filter(({room}) => room.en === 'RoboCon Online')
      .map((b) => ({
        ...b,
        submission_type: {
          en: 'Break' as const
        },
        title: 'Break',
        description: b.description,
        slot: {
          room_id: b.room_id,
          room: b.room,
          start: b.start,
          end: b.end
        }
      }))
    ])
  }
})

var token: { iss?: string, name?: string, liveHash?: string, hashKey?: string } = {}
var authenticated: boolean = false

onMounted(async () => {
  const params = new URLSearchParams(window.location.search)
  const auth = Object.fromEntries(params.entries()).auth || window.localStorage.getItem('auth')
  const attendee = Object.fromEntries(params.entries()).attendee || window.localStorage.getItem('attendee')
  if (auth && attendee) {
    if (attendee !== 'gather') {
      window.localStorage.setItem('auth', auth)
      window.localStorage.setItem('attendee', attendee)
    }
    try {
      const { payload } = await jose.jwtVerify(auth, await jose.importSPKI(publicKey, 'RS256'), {
        issuer: 'pretix'
      })
      if (payload.name === attendee) {
        token = payload
        authenticated = true
      }
    } catch (error) {
      console.error('invalid Attendee')
      console.error(error)
    }
  }
})

const hash = window.location.hash
if (hash) {
  if (hash.includes('live-')) {
    shownTalks.value = 'live'
  }
  if (hash.includes('online-')) {
    shownTalks.value = 'online'
  }
}
  // .sort((a, b) => {
  //   if (new Date(a.slot?.start || a.start) < new Date(b.slot?.start || b.start)) return -1
  //   return 1
  // })
// const talksOnline = [
//   ...res?.slots?.filter((talk) => talk?.slot?.room?.en === 'RoboConOnline').filter((talk) => talk?.submission_type?.en !== 'Tutorial'),
//   ...res?.breaks?.filter((b) => b?.room?.en === 'RoboConOnline').map((b) => ({ ...b, isBreak: true }))
// ]
//   .sort((a, b) => {
//     if (new Date(a.slot?.start || a.start) < new Date(b.slot?.start || b.start)) return -1
//     return 1
//   })

const publicKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA1RHu1qgXJ81+2tlBy4UF
B8OdRsBjWhswMQaS/NhA2yWBaQiQ1YG4Tzen2aNmlTIkTBhSR3hqOnkzPQq77nMs
KP9HD1WHz/UNici/a/2UwXFy9bOyX+GKnPCtdcvZrIougvW5K7EBeUWcgY68xNQk
V9vFq4GSczOud7juk62eqqV26esV5tE2c4/J714SYwUl6NqLc7XeQNZMrsRHabIL
Bzg+A+2kw1jiJpJsJliPCT9T/NiAMrbZk1KR/NQ7uHARclAk13LwLwm5JfOhyKSs
Qkdfr8rVYuj3DDQCitea269Xy5RsFW/Cqyh3gHzt7bB9auU3UFaAXWPvnPURhTO4
Yf3c7YrizmpTfDGPIG/7zkegx9nPiBPNIGPq/LpmCC9iawNH7ixOH8ZC5Ijrti0b
8rMnuJBKysZxIowJAFvd7Zh+soekUei90qQnYwhFO49h7fwXXSq2sGeRfpg99Nu/
RdqqxM2zCMPpVMWHjxAVIubgNW5ZA33PW1wS075npC3oK+YUh2xt/9A6Ll4AcAOt
oaCmENEyeZEnHlaEWeXhNPQv1/nZN5Z3Fq3uKWCQRry1HMoOGKrdATfUUIXc6vvk
nRPuT57RDafiyxjektPLx0z2LvRZZb7lU5G9/+rO2yJ1f65Sd5k0drIb48YZ+OBj
6IrJDlqg3BaMV5Hr8LdQtY8CAwEAAQ==
-----END PUBLIC KEY-----`

const recordings = {
  "BLJHLG": "U2FsdGVkX1+sFc0vaGp5X7mTe+noVcSukyuO0DD6stM=",
  "QX9NPR": "U2FsdGVkX1/mlNRFBmrhEXfbDyFA/u+mKwth9QbOIY4=",
  "8QPMC3": "U2FsdGVkX1+C+BrEP7eBdsjxXoeW19cLKLBnIeKTefc=",
  "9RTZJ8": "U2FsdGVkX1/8WJSCpcFAzAZocIQGdlNljCO/h6/clso=",
  "E9WWVJ": "U2FsdGVkX1/LA18lKVW+j4rOvpqvMW9ZNkFrcmH2bjk=",
  "ZXK33M": "U2FsdGVkX1/yYnQgU/ZZETz6DEnoN36LQTi3Qzpy2pY=",
  "3F8E7U": "U2FsdGVkX197Qhe1GFm0Ye5fP8tLp+Z/UGWjc/d/wuo=",
  "VDXHPW": "U2FsdGVkX1+SHTfijvhKCWo9Yk/QQLgyzBjb0Ybk7pc=",
  "H8QSRH": "U2FsdGVkX1+3z/1WCaCsYUZq1UJ/BQdSpJDXO68y4Pc=",
  "AAAAAA": "U2FsdGVkX1+ZsZJPXsRfnU5qnY3PDX4bH7m8wN3wyYY=",
  "WPBD83": "U2FsdGVkX18HXE+A/v5JTjDXhhrO4cL9jatTniQBZh8=",
  "K3MLM3": "U2FsdGVkX19OGm9vDnZDfQzAVdC+d88vm1R9dj8/B0E=",
  "YFJMTW": "U2FsdGVkX1+khaXJ7AHqjTtRRlspTHLeMC/1nlHzMgY=",
  "A3PKEU": "U2FsdGVkX1+dYGmr+beBESdT5RA9AyS1RZ0zaYzPxR0=",
  "79LS7Z": "U2FsdGVkX1/lxCkCRhQutGyM7sRP53FJ6EKnLQ90srI=",
  "N8UJZS": "U2FsdGVkX18i9nsCJ5B+hiLLiwOZY8qnovtSceUehJk=",
  "9VKPTH": "U2FsdGVkX1+5o3N5XgIzgAeI4qHY8bJIxznQn9z9wco=",
  "HNLUGZ": "U2FsdGVkX18ZfP/9AS78jB1UlG+H+JWss6PNMJFri/M=",
  "FRRRLQ": "U2FsdGVkX1+zy9lXfQTjn5q4IeFEnpHtVUdrC2RQr+8=",
  "day1": "U2FsdGVkX1+mbqTRgxjssKi6CExj0ryVIKAIdpbaSbg=",
  "day2": "U2FsdGVkX19bIgb8XsaNDWAFD+quYNdxtImqbJnwIUY="
}

const freeRecordings = {
  "KUXX8Y": "9H-oHhLFwcs",
  "G838QP": "XiwSkNVciZY",
  "9SUNSJ": "M8Dzq_Ieqhg",
  "DQFP7F": "-DCJZNV-CFs"
}

const getVideoUrl = (code: string): string => {
  if (typeof code === 'undefined') return undefined
  const freeRecording = freeRecordings[code]
  if (freeRecording) {
    return `https://www.youtube-nocookie.com/embed/${freeRecording}?rel=0&autoplay=0&mute=0&controls=1&origin=https%3A%2F%2Frobocon.io&playsinline=0&showinfo=0&modestbranding=1`
  }
  if (!authenticated) {
    return undefined
  }
  const recording = recordings[code]
  if (!recording) {
    console.error(`Code ${code} did not have a recording.`)
    return undefined
  }
  try {
    const url = CryptoJS.AES.decrypt(recording, token.hashKey).toString(CryptoJS.enc.Utf8)
    if (url === "") {
      return undefined
    }
    return `https://www.youtube-nocookie.com/embed/${url}?rel=0&autoplay=0&mute=0&controls=1&origin=https%3A%2F%2Frobocon.io&playsinline=0&showinfo=0&modestbranding=1`
  } catch (e) {
    console.error(`Code ${code} did not have a valid recording.`)
    return undefined
  }
}

</script>

<style scoped>
.event-select {
  padding: 0.5rem 1rem;
  border: solid 1px var(--color-theme);
  font-family: var(--font-body);
  font-size: 1.15rem;

  &.active {
    background-color: var(--color-theme);
    color: var(--color-white);
  }
  .type-xlarge {
    font-family: var(--font-title) !important;
  }
}
</style>
