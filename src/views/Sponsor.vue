<template>

  <v-sheet color='surface'>
    <v-container class="pb-8">
      <page-section :data="store.getSponsorPageIntro2025" />
    </v-container>
  </v-sheet>

  <v-container class="py-5">
    <template v-for="(content) in store.getSponsorPage2025" :key="content.data.target?.sys?.id">
      <template v-if="content.data.target.fields.key === activeView">
        <div class="d-flex w-100 header-wrapper mb-3 gap-3">
          <h2 class="'text-secondary offset">{{ content.data.target.fields.label }}</h2>
          <v-btn-toggle rounded="xs" v-model="activeView" color="#0032a3" base-color="grey" density="compact"
            class="toggle-btn">
            <v-btn v-for="{ value, name } in btnList" :value="value">{{ name }}</v-btn>
          </v-btn-toggle>
        </div>

        <v-card elevation="0" variant="outlined" class="py-4 px-6">
          <div v-for="(data) of content.data.target.fields.datasets" class="group-item">
            <ul v-for="item in data" class="text-subtitle-1 pl-3">
              <template v-if="Array.isArray(item)">
                <li v-for="listItem in item">
                  {{ listItem }}
                </li>
              </template>
              <template v-else>
                <li> {{ item }}</li>
              </template>
            </ul>
          </div>
        </v-card>

      </template>
    </template>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { PageSection } from '@/components';
import { useGlobalStore } from '@/store/modules';

const store = useGlobalStore();
const activeView = ref('sponsor_page_plantinum_combo');
const btnList = [
  {
    name: 'Platinum',
    value: "sponsor_page_plantinum_combo"
  },
  {
    name: 'Platinum Online',
    value: "sponsor_page_plantinum_online"
  },
  {
    name: 'Gold',
    value: "sponsor_page_gold"
  },
  {
    name: 'Silver',
    value: "sponsor_page_silver"
  }
]
</script>

<style scoped lang="scss">
.header-wrapper {
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
}

.offset {
  width: calc(100% - 456px);

  @media screen and (max-width: 500px) {
    width: 100%;
  }
}

.toggle-btn {
  display: flex;
  justify-content: end;
  float: right;

  @media screen and (max-width: 959.9px) {
    margin-top: 0;
  }

}
</style>
