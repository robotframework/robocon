<template>
  <div>
    <div class="px-small py-xsmall row between">
      <div>
        <button class="theme mr-small" :class="selectedDay === 1 && 'active'" @click="selectedDay = 1">Day 1</button>
        <button class="theme" :class="selectedDay === 2 && 'active'" @click="selectedDay = 2">Day 2</button>
      </div>
      <button @click="showChat = !showChat" class="theme small type-small">
        {{ showChat ? 'Hide Q&amp;A' : 'Show Q&amp;A' }}
      </button>
    </div>
    <div class="stream-container" :class="isFullScreen && 'fullscreen'">
    <iframe class="stream col-sm-12" :class="showChat && 'col-md-9'" :src=streamUrl title="Robocon stream" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe v-show="showChat" class="chat col-sm-12 col-md-3" :src=chatUrl frameBorder="0" title="Stream chat"></iframe>
    </div>
  </div>
  <h1 v-if="error" class="color-white mt-2xlarge type-center type-xlarge">
    <span class="color-theme">IN</span>
    <span class="">VALID</span>
    <span class="color-theme">AUTH</span>
  </h1>
  <div v-if="!isFullScreen" class="container narrow">
    <PretalxSchedule :content="{url: 'https://pretalx.com/api/events/robocon-2025/schedules/latest/'}" />
  </div>
</template>

<script setup lang="ts">
import PretalxSchedule from 'Components/PretalxSchedule.vue';
import { useStore } from 'Store';
import { decrypt, getVideoUrl, initAuth } from 'Utils/ticket';
import { ref, onMounted } from 'vue';

const chat = 'U2FsdGVkX1+gSb33tfz6U6doTSeJvDfWihHORmgrcBmJTBILeyQlaBmAYh4gZmxksEH+fL5NzUrv5sFyk43D/w=='

const selectedDay = ref(1)
const showChat = ref(true)
const streamUrl = ref('')
const chatUrl = ref('')
const error = ref(false)

onMounted(async () => {
  await initAuth()
  streamUrl.value = await getVideoUrl(`day${selectedDay.value}`, true)
  console.log(streamUrl.value)
  chatUrl.value = await decrypt(chat)
})

const store = useStore()
const isFullScreen = store.name === 'gather'

</script>

<style scoped>
.stream-container {
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 7rem);
}
.stream-container.fullscreen {
  min-height: calc(100vh - 3rem);
}
@media screen and (max-width: 768px) {
  .chat {
    width: 100%;
  }
}
</style>
