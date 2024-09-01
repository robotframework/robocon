<template>

  <v-sheet color='surface'>
    <v-container>
      <page-section :data="store.getSponsorPageIntro2025" />
    </v-container>
  </v-sheet>

  <v-container class="py-5">
    <template v-for="(content) in store.getSponsorPage2025" :key="content.data.target?.sys?.id">
      <page-section :data="content" v-if="content.data.target.fields.sectionKey === activeView">
        <template #header>
          <v-btn-toggle rounded="xs" v-model="activeView" color="#0032a3" base-color="grey" density="compact"
            class="w-100 toggle-btn">
            <v-btn v-for="{ value, name } in btnList" :value="value">{{ name }}</v-btn>
          </v-btn-toggle>
        </template>
      </page-section>
    </template>
  </v-container>
</template>

<script setup lang="ts">
import { PageSection } from '@/components';
import { useGlobalStore } from '@/store/modules';
import { ref } from 'vue';

const store = useGlobalStore();
const activeView = ref('sponsor_platinum_full_package');
const btnList = [
  {
    name: 'Platinum Combo',
    value: "sponsor_platinum_full_package"
  },
  {
    name: 'Platinum Online',
    value: 'sponsor_platinum_online_package'
  },
  {
    name: 'Gold',
    value: 'sponsor_gold_package'
  },
  {
    name: 'Silver',
    value: 'sponsor_silver_package'
  }
]
</script>

<style scoped lang="scss">
.toggle-btn {
  display: flex;
  justify-content: end;
  float: right;
  margin-top: -40px;

  @media screen and (max-width: 959.9px) {
    margin-top: 0;

  }

}
</style>
