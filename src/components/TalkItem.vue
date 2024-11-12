<template>
  <article class="event mb-medium p-medium pt-none">
    <div class="pt-xsmall pb-2xsmall" style="margin-left: -0.5rem">
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
    <h1 class="mb-2xsmall">
      {{ event.type === 'talk' ? event.title : event.description.en }}
    </h1>
    <div class="type-small">
      <template v-if="event.type === 'talk'">
        {{ format(new Date(event.slot.start), 'LLL dd kk:mm') }}
      </template>
      <template v-else-if="event.type === 'break'">
        {{ format(new Date(event.start), 'LLL dd kk:mm') }}
      </template>
    </div>
    <div v-if="event.type === 'talk'" v-html="renderMarkdown(event.abstract)" />
    <div v-if="event.type === 'talk'" class="row gap-sm">
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
</template>

<script setup lang="ts">
import { format, differenceInMinutes } from 'date-fns';
import { renderMarkdown } from 'Content/renderContent';
import { type PropType } from 'vue'
import type { PretalxEvent, Break } from '@/types/pretalx';


const getEventType = (type: string) => {
  if (type === 'PreRecorded-Talk') return 'Talk'
  return type
}

const props = defineProps({
  event: Object as PropType<PretalxEvent | Break>
})


</script>

<style scoped>
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
