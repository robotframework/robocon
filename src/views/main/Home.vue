<template>
  <MainBanner />

  <v-container class="py-7">
    <IntroSection />
  </v-container>

  <v-sheet color="surface-bg">
    <v-container class="py-7">
      <TicketSection />
    </v-container>
  </v-sheet>

  <v-container class="pt-3 pb-7">
    <EventSection />
  </v-container>

  <v-sheet color="surface-bg">
    <v-container class="pt-7 pb-10">
      <SponsorSection />
    </v-container>
  </v-sheet>

</template>

<script setup lang="ts">
import { MainBanner } from "@/components";
import {
  EventSection,
  IntroSection,
  SponsorSection,
  TicketSection
} from ".";
</script>


<!-- <template v-else>
    <v-container class="d-flex ma-auto justify-center items-center">
      <InfiniteSpinner size="100" width="5" loadingText="Fetching data..." />
    </v-container>
  </template> -->
