<template>
  <v-sheet color="'surface" class="py-5">
    <v-container class="pt-0 pb-3">
      <page-section :data="store.getEventPageIntro2025" />
    </v-container>
  </v-sheet>

  <v-container class="py-6">
    <v-responsive class="content-wrapper">
      <div class="d-flex mb-3">
        <h3 class='text-secondary offset'>
          Events
        </h3>
        <v-btn-toggle rounded="xs" v-model="activeView" color="#0032a3" base-color="grey" density="compact"
          class="toggle-btn">
          <v-btn v-for="{ value, name } in btnList" :value="value">{{ name }}</v-btn>
        </v-btn-toggle>
      </div>
      <template v-for="(content, i) in store.getEventPage2025">
        <EventCard v-if="i === activeView" :title="content?.data?.target?.fields?.title"
          :datasets="content?.data?.target?.fields?.datasets" />
        <v-spacer v-if="i == 0" tag="div" class="my-5" />
      </template>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/modules';
import { ref } from 'vue';

const store = useGlobalStore();
const activeView = ref(0);
const btnList = [
  {
    name: 'In person',
    value: 0
  },
  {
    name: 'Online',
    value: 1
  }
]
</script>

<style scoped>
.offset {
  width: calc(100% - 200px);

  @media screen and (max-width: 500px) {
    width: 100%;
  }
}
</style>
