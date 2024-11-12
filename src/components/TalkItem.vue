<template>
  <article class="event mb-medium p-medium pt-none">
    <div class="pt-xsmall pb-2xsmall" style="margin-left: -0.75rem">
      <div class="badge">
        <template v-if="event.type === 'break'">
          Break
        </template>
        <template v-else-if="event.submission_type.en !== 'Workshop - Full Day'">
          {{ getEventType(event.submission_type.en) }} ({{ differenceInMinutes(new Date(event.slot.end), new Date(event.slot.start)) }}min)
        </template>
        <template v-else>
          {{ getEventType(event.submission_type.en) }}
        </template>
      </div>
    </div>
    <h1 v-if="event.type === 'talk'" class="mb-2xsmall">
      {{ event.title }}
    </h1>
    <h1 v-else-if="event.type === 'break'" class="mb-2xsmall">
      {{ event.description }}
    </h1>
    <div class="type-small mb-xsmall">
      <template v-if="event.type === 'talk'">
        {{ format(new Date(event.slot.start), 'LLL dd kk:mm') }}
      </template>
      <template v-else-if="event.type === 'break'">
        {{ format(new Date(event.start), 'LLL dd kk:mm') }}
      </template>
    </div>
    <div v-if="event.type === 'talk'">
      <div v-html="renderMarkdown(event.abstract)" class="mb-small" />
      <details v-if="event.description !== ''" class="mb-medium">
        <summary>
          More info
        </summary>
        <div v-html="renderMarkdown(event.description)" />
      </details>
    </div>
    <div v-if="event.type === 'talk'" class="row gap-sm">
      <SpeakerItem
        v-for="speaker in event.speakers"
        :key="`${speaker.code}${event.code}`"
        :speaker="speaker" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { format, differenceInMinutes } from 'date-fns';
import { renderMarkdown } from 'Content/renderContent';
import { type PropType } from 'vue'
import type { PretalxEvent, Break } from '@/types/pretalx';
import SpeakerItem from './SpeakerItem.vue'


const getEventType = (type: string) => {
  if (type === 'PreRecorded-Talk') return 'Talk'
  return type
}

defineProps({
  event: Object as PropType<PretalxEvent | Break>
})

</script>

<style scoped>
h1 {
  line-height: 1.35;
}
.event {
  border: solid 0px var(--color-theme-secondary);
  border-left-width: 6px;
  background-color: var(--color-background-secondary);
  /* box-shadow: -4px 0px 1px var(--color-theme); */
}
details {
  width: fit-content;
}

</style>
