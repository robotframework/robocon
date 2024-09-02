<template>
  <template v-for="data in store.getMainSponsor2025?.data?.target?.fields?.body?.content">
    <template v-for="content of data?.content">
      <template v-if="content?.nodeType === 'embedded-entry-inline'">
        <SponsorCard :title="content?.data?.target?.fields?.cardTitle"
          :cardBody="content?.data?.target?.fields?.cardBody" link="https://www.imbus.de/en/" />
      </template>
    </template>
  </template>
  <v-btn color="secondary" class="w-100 h-2xl mt-5" href="sponsor">
    Find out more
  </v-btn>
</template>


<script setup lang="ts">
import { SponsorCard } from '@/components';
import { useGlobalStore } from '@/store/modules';

const store = useGlobalStore();
</script>