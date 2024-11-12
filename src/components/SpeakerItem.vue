<template>
  <div
    class="speaker"
    :class="isOpen ? 'grow' : hasBio ? 'clickable' : ''"
    @click="isOpen = hasBio || isOpen">
    <div class="flex middle p-2xsmall">
      <div class="speaker-img mr-small" :class="!speaker.avatar && 'placeholder'">
        <img :src="speaker.avatar ?? '/img/RF.svg'" :style="!speaker.avatar && 'opacity: 0.7; border-radius: 0;'">
      </div>
      <div class="speaker-name">
        {{ speaker.name.split(' ').join('\n')
          .replace('de\n', 'de ')
        }}
      </div>
    </div>
    <div
      v-if="speaker.biography"
      class="relative type-small p-xsmall pt-none"
      :class="isOpen ? '' : 'bio-trunc bio-gradient mb-xsmall'">
      <div v-html="renderMarkdown(speaker.biography)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue';
import { renderMarkdown } from 'Content/renderContent';
import type { Speaker } from '@/types/pretalx';

const props = defineProps({
  speaker: Object as PropType<Speaker>
})

const isOpen = ref(false)
const hasBio = props.speaker.biography && props.speaker.biography !== ''
</script>

<style scoped>
.speaker {
  overflow: hidden;
  box-shadow: 4px 4px 0px var(--color-theme);
  background-color: var(--color-background);
  transition: transform 0.3s;
  height: fit-content;

  max-width: 60%;
  flex-basis: calc(33% - 1rem);
  @media screen and (max-width: 1024px) {
    flex-basis: calc(50% - 1rem);
  }
  @media screen and (max-width: 701px) {
    flex-basis: 100%;
    max-width: 100%;
  }

  &.clickable {
    cursor: pointer;

    &:hover {
      filter: brightness(1.05);
      transform: scale(1.01);
    }
  }

  &.grow {
    flex-grow: 1;
  }
}
.speaker-img {
  width: 4rem;
  position: relative;

  img {
    width: 100%;
    border-radius: 50%;
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
  border-radius: 50%;
}
.speaker-name {
  font-family: 'Courier Code';
  font-weight: 700;
  white-space: pre;
  font-size: 1.25rem;
  font-variation-settings: "wght" 700;
  color: var(--color-grey-dark);
  line-height: 1.25;
}
.bio-trunc {
  height: 4rem;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
}
.bio-gradient::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background: linear-gradient(0deg, var(--color-white), transparent);
  pointer-events: none;
}
</style>
