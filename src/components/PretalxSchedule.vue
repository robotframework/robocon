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
    <div v-if="talks">
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
import { computed, nextTick, ref, type PropType } from 'vue';
import TalkItem from './TalkItem.vue'
// The schedule used to be fetched from pretalx on every page load. That API
// changed shape (`slots` became ids, `breaks` disappeared) and broke /program,
// so the final programme is baked in.
// Regenerate with: node scripts/build-agenda-2025.js
import agenda from '../assets/pretalx/agenda2025.json'
import {getDate} from 'date-fns'

const props = defineProps({
  content: Object as PropType<PretalxSchedule['fields']>
})

const shownTalks = ref<'live' | 'online'>('online')

// Speaker avatars ship with the repo; Vite fingerprints them at build time.
const avatarFiles = import.meta.glob('../assets/avatars/*', { eager: true, import: 'default' }) as Record<string, string>
// null (not '') so SpeakerItem's `speaker.avatar ?? placeholder` still fires -
// the API used to send null for speakers without a picture.
const avatarUrl = (file: string) => (file ? avatarFiles[`../assets/avatars/${file}`] ?? null : null)

const embedUrl = (videoId: string) => (videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : undefined)

const hydrate = (event: any) => ({
  ...event,
  videoURL: embedUrl(event.videoId),
  speakers: (event.speakers ?? []).map((speaker: any) => ({ ...speaker, avatar: avatarUrl(speaker.avatar) }))
})

const talks = computed(() => {
  nextTick(() => {
    const hash = window.location.hash
    if (hash) {
      const talkTitle = document.getElementById(hash.slice(1))
      if (talkTitle) talkTitle.scrollIntoView()
    }
  })
  return {
    live: agenda.live.map(hydrate),
    workshop: agenda.workshop.map(hydrate),
    tutorial: agenda.tutorial.map(hydrate),
    online: agenda.online.map(hydrate),
    onlineWorkshop: agenda.onlineWorkshop.map(hydrate)
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
