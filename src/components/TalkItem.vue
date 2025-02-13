<template>
  <article class="event mb-medium p-medium pt-none" :class="event.submission_type.en === 'Break' && 'break'" ref="el">
    <div class="pt-xsmall pb-2xsmall flex between" style="margin-left: -0.75rem">
      <div v-if="event.submission_type.en !== 'Break'" class="badge h-fit">
        <template v-if="!event.submission_type.en.includes('Workshop')">
          {{ getEventType(event.submission_type.en) }} ({{ differenceInMinutes(new Date(event.slot.end), new Date(event.slot.start)) }}min)
        </template>
        <template v-else>
          {{ getEventType(event.submission_type.en) }}
        </template>
      </div>
      <a v-if="event.submission_type.en !== 'Break'" :href="`#${getSlug((event as PretalxEvent))}`">
        <link-icon style="transform: translateY(2px)" color="black" />
      </a>
    </div>
    <h1 v-if="event.submission_type.en !== 'Break'" class="mb-2xsmall" :id="getSlug(event as PretalxEvent)">
      {{ (event as PretalxEvent).title }}
    </h1>
    <h1 v-else-if="event.submission_type.en === 'Break'" class="mb-2xsmall">
      {{ (event as BreakParsed).description.en }}
    </h1>
    <div v-if="event.submission_type.en !== 'Break'" class="type-small mb-xsmall">
      {{ format(new Date(event.slot.start), 'LLL dd kk:mm') }}
    </div>
    <div v-else>
      {{ format(new Date(event.slot.start), 'kk:mm') }}
      -
      {{ format(new Date(event.slot.end), 'kk:mm') }}
    </div>
    <div v-if="event.submission_type.en !== 'Break'">
      <div v-html="renderMarkdown((event as PretalxEvent).abstract)" class="mb-small" />
      <details v-if="event.description !== ''" class="mb-medium">
        <summary>
          More info
        </summary>
        <div v-html="renderMarkdown((event as PretalxEvent).description)" />
      </details>
    </div>
    <div v-if="event.submission_type.en !== 'Break'" class="row gap-sm">
      <SpeakerItem
        v-for="speaker in (event as PretalxEvent).speakers"
        :key="`${speaker.code}${(event as PretalxEvent).code}`"
        :speaker="speaker" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { format, differenceInMinutes, isWithinInterval } from 'date-fns';
import { renderMarkdown } from 'Content/renderContent';
import { onMounted, ref, type PropType } from 'vue'
import type { PretalxEvent, Break, BreakParsed } from '@/types/pretalx';
import SpeakerItem from './SpeakerItem.vue'
import LinkIcon from './icons/LinkIcon.vue'


const getEventType = (type: string) => {
  if (type === 'PreRecorded-Talk') return 'Talk'
  return type
}

const props = defineProps({
  event: Object as PropType<PretalxEvent | BreakParsed>
})

const getSlug = (event: PretalxEvent) => {
  if (!event.title) return ''
  if (props.event.submission_type.en === 'Break') return
  const isLive = props.event.slot.room.en === 'RoboCon' || props.event.submission_type.en === 'Workshop - Full Day'
  if (isLive) return `live-${event.title.replace(/[ ]/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`
  return `online-${event.title.replace(/[ ]/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`
}

const el = ref(null);
const isOngoing = isWithinInterval(new Date(), { start: new Date(props.event.slot.start), end: new Date(props.event.slot.end) })
onMounted(() => {
  if (isOngoing) el.value?.scrollIntoView();
});

</script>

<style scoped>
h1 {
  line-height: 1.35;
  scroll-margin-top: 8rem;
}
.event {
  border: solid 0px var(--color-theme-secondary);
  border-left-width: 6px;
  background-color: var(--color-background-secondary);
  /* box-shadow: -4px 0px 1px var(--color-theme); */

  &.break {
    border-color: var(--color-grey);
  }
}
details {
  width: fit-content;
}

</style>
