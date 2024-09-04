<template>
  <template v-for="data in store.getMainSponsor2025?.data?.target?.fields?.body?.content">
    <template v-for="content of data?.content">
      <template v-if="content?.nodeType === 'embedded-entry-inline'">
        <SponsorCard :title="content?.data?.target?.fields?.cardTitle"
          :cardBody="content?.data?.target?.fields?.cardBody" link="https://www.imbus.de/en/" />
      </template>
    </template>
  </template>
  <div class="d-flex">
    <v-btn color="secondary" class="jumbo-btn mt-5 mx-auto" to="sponsor">
      Become a Sponsor
    </v-btn>
  </div>
</template>


<script setup lang="ts">
import { SponsorCard } from '@/components';
import { useGlobalStore } from '@/store/modules';

const store = useGlobalStore();
</script>