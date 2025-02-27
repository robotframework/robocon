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
        <h2>Community Day</h2>
        <TalkItem v-for="(event, i) in talks.onlineWorkshop" :key="i" :event="{...event}" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PretalxSchedule } from '@/content';
import { getVideoUrl } from "Utils/ticket";
import { computed, nextTick, onMounted, ref, type PropType } from 'vue';
import { useFetch } from '@vueuse/core'
import TalkItem from './TalkItem.vue'
import type { Break, BreakParsed, PretalxEvent, PretalxSession, ScheduleResponse, SubmissionsResponse } from '@/types/pretalx';
import {getDate} from 'date-fns'

const props = defineProps({
  content: Object as PropType<PretalxSchedule['fields']>
})

const shownTalks = ref<'live' | 'online'>('online')

const { isFetching, error, data } = useFetch(props.content.url).get().json()
const { isFetching: isFetchingSub, error: errorSub, data: dataSub } = useFetch('https://cfp.robocon.io/api/events/robocon-2025/submissions/?limit=50').get().json()

const sortTalks = (talks: (PretalxEvent | BreakParsed)[]) => talks.sort((a, b) => new Date(a.slot.start) < new Date(b.slot.end) ? -1 : 1)

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
    live: sortTalks([
      ...schedule.slots.filter((talk) => talk?.slot?.room?.en === 'RoboCon')
        .map((event) => addSubmissionData(event))
        .map((event) => ({...event, videoURL: getVideoUrl(event.code)})),
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
        },
        code: 'BREAK'
      }))
    ]),
    workshop: sortTalks(schedule.slots
      .filter((talk) => talk?.submission_type.en.includes('Workshop') && talk?.slot?.room?.en !== 'RoboCon Online')
      .map((event) => addSubmissionData(event))),
    tutorial: sortTalks(schedule.slots
      .filter((talk) => talk?.submission_type.en === 'Tutorial')
      .map((event) => addSubmissionData(event)))
      .map((event) => ({...event, videoURL: 'code' in event ? getVideoUrl(event.code) : undefined})),
    online: sortTalks([
      ...schedule.slots
        .filter((talk) => talk?.slot?.room?.en === 'RoboCon Online' && ['PreRecorded-Talk', 'Talk', 'Keynote'].includes(talk.submission_type.en))
        .map((event) => addSubmissionData(event))
        .map((event) => ({...event, videoURL: getVideoUrl(event.code)})),
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
    ]),
    onlineWorkshop: sortTalks(schedule.slots
      .filter((talk) => talk?.submission_type.en.includes('Workshop') && talk?.slot?.room?.en === 'RoboCon Online')
      .map((event) => addSubmissionData(event)))
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
