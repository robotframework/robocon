<template>
  <div>
    <div v-if="!store.name" class="type-center">
      <h1 class="color-theme mt-2xlarge type-center type-xlarge">
        INVALID AUTH
      </h1>
      <p>
        Please go to your ticket page and use the button to watch the stream.
      </p>
    </div>
    <div v-else class="px-small py-xsmall row between">
      <div>
        <button v-for="(stream, key) in streams" :key="stream.name" class="theme mr-small" :class="selectedDay === key && 'active'" @click="selectedDay = key">{{ stream.name }}</button>
      </div>
      <button @click="showChat = !showChat" class="theme small type-small">
        {{ showChat ? 'Hide Q&amp;A' : 'Show Q&amp;A' }}
      </button>
    </div>
    <div class="stream-container" :class="store.isFullscreen && 'fullscreen'">
      <iframe class="stream col-sm-12" :class="showChat && 'col-md-9'" :src=urls.stream title="Robocon stream" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe v-show="showChat" class="chat col-sm-12 col-md-3" :src=urls.chat frameBorder="0" title="Stream chat"></iframe>
    </div>
  </div>
  <div v-if="!store.isFullscreen && store.name" class="mt-xlarge container">
    <PretalxSchedule :content="{url: 'https://pretalx.com/api/events/robocon-2025/schedules/latest/'}" />
  </div>
</template>

<script setup lang="ts">
import PretalxSchedule from 'Components/PretalxSchedule.vue';
import { isSameDay } from 'date-fns';
import { useStore } from 'Store';
import { decrypt, getVideoUrl } from 'Utils/ticket';
import { ref, computed } from 'vue';

const store = useStore()

const chat = 'U2FsdGVkX1+gSb33tfz6U6doTSeJvDfWihHORmgrcBmJTBILeyQlaBmAYh4gZmxksEH+fL5NzUrv5sFyk43D/w=='
const streams = [
  { name: 'Day 1', id: 'day1' },
  { name: 'Day 2', id: 'day2' }
]

const selectedDay = ref(0)
const showChat = ref(true)

const urls = computed(() => {
  const store = useStore()
  if (!store.token) return { stream: undefined, chat: undefined }
  const { id } = streams[selectedDay.value]
  return {
    stream: getVideoUrl(id, true),
    chat: decrypt(chat)
  }
})

// hack, remove later
if (isSameDay(new Date(), new Date('2025-03-06'))) selectedDay.value = 1

</script>

<style scoped>
.stream-container {
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 7rem);
}
.stream-container.fullscreen {
  min-height: calc(100vh - 72px);
}
@media screen and (max-width: 768px) {
  .chat {
    width: 100%;
  }
}
</style>
