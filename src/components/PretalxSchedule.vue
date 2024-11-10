<template>
  <div style="min-height: 100vh;">
    <div class="row gap-sm mb-large">
      <button @click="shownTalks = 'live'" class="event-select" :class="shownTalks === 'live' && 'active'">
        <div class="type-xlarge">
          HELSINKI
        </div>
        <div class="type-xsmall">
          FEB 13th - 15th
        </div>
      </button>
      <button @click="shownTalks = 'online'" class="event-select" :class="shownTalks === 'online' && 'active'">
        <div class="type-xlarge">
          ONLINE
        </div>
        <div class="type-xsmall">
          MAR 05th - 06th
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
      <article v-for="event in talks[shownTalks]" :key="event.code" class="event mb-medium p-medium pt-none">
        <div class="pt-xsmall pb-2xsmall" style="margin-left: -0.5rem">
          <div class="badge">
            {{ getEventType(event.submission_type.en) }} ({{ differenceInMinutes(new Date(event.slot.end), new Date(event.slot.start)) }}min)
          </div>
        </div>
        <h1 class="mb-2xsmall">
          {{ event.title }}
        </h1>
        <div class="type-small">
          {{ format(new Date(event.slot.start), 'LLL dd kk:mm') }}

        </div>
        <div v-html="renderMarkdown(event.abstract)" />
        <div class="row gap-sm">
          <div
            v-for="speaker in event.speakers"
            :key="`${speaker.code}${event.code}`"
            class="speaker">
            <div class="row middle p-2xsmall">
              <div class="speaker-img mr-small" :class="!speaker.avatar && 'placeholder'">
                <img :src="speaker.avatar ?? '/img/RF.svg'" :style="!speaker.avatar && 'opacity: 0.7;'">
              </div>
              <div class="font-code type-underline speaker-name">
                {{ speaker.name.split(' ').join('\n')
                  .replace('de\n', 'de ')
                }}
              </div>
            </div>
            <div>
              {{ speaker.biography }}
            </div>
          </div>
        </div>

      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PretalxSchedule } from '@/content';
import { renderMarkdown } from 'Content/renderContent';
import { computed, ref, type PropType } from 'vue';
import { useFetch } from '@vueuse/core'
import { format, differenceInMinutes } from 'date-fns';


type Speaker = {
    code: string;
    name: string;
    biography: string;
    avatar: string | null;
};

type Room = {
    en: string;
};

type Slot = {
    room_id: number;
    room: Room;
    start: string; // ISO 8601 date string
    end: string;   // ISO 8601 date string
};

type SubmissionType = {
    en: string;
};

type Event = {
    code: string;
    speakers: Speaker[];
    title: string;
    submission_type: { en: string };
    submission_type_id: number;
    track: string | null;
    track_id: number | null;
    state: "confirmed" | "pending" | "rejected";
    abstract: string;
    description: string;
    duration: number;
    slot_count: number;
    do_not_record: boolean;
    is_featured: boolean;
    content_locale: string;
    slot: Slot | null;
    image: string | null;
    resources: string[];
    answers: string[];
};

type ScheduleResponse = {
  slots: Event[];
  breaks: Break[];
}

type Break = {
  room: {
        en: string;
    };
    room_id: number;
    start: string; // ISO 8601 date string
    end: string;   // ISO 8601 date string
    description: {
        en: string;
    };
}

const props = defineProps({
  content: Object as PropType<PretalxSchedule['fields']>
})

const shownTalks = ref<'live' | 'online'>('live')

const getEventType = (type: string) => {
  if (type === 'PreRecorded-Talk') return 'Pre-Recorded Talk'
  return type
}

const { isFetching, error, data } = useFetch(props.content.url).get().json()

const events = computed(() => ((data.value as ScheduleResponse)?.slots ?? []).filter((event) => event))
const breaks = computed(() => ((data.value as ScheduleResponse)?.breaks ?? []).filter((event) => event))

const sortTalks = (talks: ScheduleResponse['slots']) => talks.sort((a, b) => new Date(a.slot.start) < new Date(b.slot.start) ? -1 : 1)

const talks = computed(() => {
  if (isFetching.value || error.value) return undefined
  const schedule = data.value as ScheduleResponse
  return {
    live: sortTalks(schedule.slots.filter((talk) => talk?.slot?.room?.en === 'RoboCon')),
    online: sortTalks(schedule.slots.filter((talk) => talk?.slot?.room?.en === 'RoboCon Online' && ['PreRecorded-Talk', 'Talk'].includes(talk.submission_type.en)))
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
.event {
  border: solid 0px var(--color-theme-secondary);
  border-left-width: 6px;
  background-color: var(--color-background-secondary);
  /* box-shadow: -4px 0px 1px var(--color-theme); */
}
.speaker {
  overflow: hidden;
  box-shadow: 4px 4px 0px var(--color-theme);
  background-color: var(--color-background);

  flex-basis: calc(33% - 1rem);
  @media screen and (max-width: 1024px) {
    flex-basis: calc(50% - 1rem);
  }
  @media screen and (max-width: 701px) {
    flex-basis: 100%;
  }
}
.speaker-img {
  width: 4rem;
  position: relative;

  img {
    width: 100%;
    border-radius: 1rem;
    display: block;
    aspect-ratio: 1;
    object-fit: cover;
    border-right: none;
  }
}
.speaker-img:not(.placeholder)::after {
  content: " ";
  box-shadow: inset 0px 0px 6px #00000099;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}
.speaker-name {
  font-family: 'Source Code Pro';
  white-space: pre;
  font-size: 1rem;
  font-variation-settings: "wght" 700;
  color: var(--color-grey-dark);
  line-height: 1.25;
  text-decoration: underline;
}
</style>
