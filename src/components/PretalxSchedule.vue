<template>
  <div style="min-height: 100vh;">
    <div class="row gap-sm mb-large">
      <button @click="shownTalks = 'live'" class="event-select" :class="shownTalks === 'live' && 'active'">
        <div class="type-xlarge">
          HELSINKI
        </div>
        <div class="type-xsmall">
          FEB 12th - 15th
        </div>
      </button>
      <button @click="shownTalks = 'online'" class="event-select" :class="shownTalks === 'online' && 'active'">
        <div class="type-xlarge">
          ONLINE
        </div>
        <div class="type-xsmall">
          MAR 04th - 06th
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
        <h2>Workshops</h2>
        <TalkItem v-for="event in talks.workshop" :key="event.code" :event="{...event, type: 'talk'}" />
        <h2>Talks - Day 1</h2>
        <TalkItem v-for="event in talks.live.filter((event) => getDate(new Date(event.slot.start)) === 13)" :key="event.code" :event="{...event, type: 'talk'}" />
        <h2>Talks - Day 2</h2>
        <TalkItem v-for="event in talks.live.filter((event) => getDate(new Date(event.slot.start)) === 14)" :key="event.code" :event="{...event, type: 'talk'}" />
      </template>
      <template v-else-if="shownTalks === 'online'">
        <h2>Tutorials</h2>
        <TalkItem v-for="event in talks.tutorial" :key="event.code" :event="{...event, type: 'talk'}" />
        <h2>Talks - Day 1</h2>
        <TalkItem v-for="event in talks.online.filter((event) => getDate(new Date(event.slot.start)) === 5)" :key="event.code" :event="{...event, type: 'talk'}" />
        <h2>Talks - Day 2</h2>
        <TalkItem v-for="event in talks.online.filter((event) => getDate(new Date(event.slot.start)) === 6)" :key="event.code" :event="{...event, type: 'talk'}" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PretalxSchedule } from '@/content';
import { computed, ref, type PropType } from 'vue';
import { useFetch } from '@vueuse/core'
import TalkItem from './TalkItem.vue'
import type { PretalxEvent, PretalxSession, ScheduleResponse, SubmissionsResponse } from '@/types/pretalx';
import {getDate} from 'date-fns'




const props = defineProps({
  content: Object as PropType<PretalxSchedule['fields']>
})

const shownTalks = ref<'live' | 'online'>('live')

const { isFetching, error, data } = useFetch(props.content.url).get().json()
const { isFetching: isFetchingSub, error: errorSub, data: dataSub } = useFetch('https://cfp.robocon.io/api/events/robocon-2025/submissions/?limit=50').get().json()

const sortTalks = (talks: ScheduleResponse['slots']) => talks.sort((a, b) => new Date(a.slot.start) < new Date(b.slot.start) ? -1 : 1)

const talks = computed(() => {
  if (isFetching.value || error.value) return undefined
  if (isFetchingSub.value || errorSub.value) return undefined
  const schedule = data.value as ScheduleResponse
  const submissions = dataSub.value as SubmissionsResponse

  const addSubmissionData = (event: PretalxEvent): PretalxEvent & PretalxSession => ({...event, ...submissions.results.find((s) => s.code === event.code)})
  return {
    live: sortTalks(schedule.slots.filter((talk) => talk?.slot?.room?.en === 'RoboCon').map((event) => addSubmissionData(event))),
    workshop: sortTalks(schedule.slots.filter((talk) => talk?.submission_type.en === 'Workshop - Full Day').map((event) => addSubmissionData(event))),
    tutorial: sortTalks(schedule.slots.filter((talk) => talk?.submission_type.en === 'Tutorial').map((event) => addSubmissionData(event))),
    online: sortTalks(schedule.slots.filter((talk) => talk?.slot?.room?.en === 'RoboCon Online' && ['PreRecorded-Talk', 'Talk'].includes(talk.submission_type.en)).map((event) => addSubmissionData(event)))
  }
})
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

</script>

<style scoped>
.event-select {
  padding: 0.5rem 1rem;
  border: solid 1px var(--color-theme);
  font-family: 'Source Code Pro';
  font-size: 1.15rem;

  &.active {
    background-color: var(--color-theme);
    color: var(--color-white);
  }
}
</style>
