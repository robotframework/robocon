<template>
  <MainBanner />

  <v-container class="py-7">
    <IntroSection />
  </v-container>

  <v-sheet color="surface-bg">
    <v-container class="pt-5 pb-3">
      <TicketSection />
    </v-container>
  </v-sheet>

  <v-container class="pt-3 pb-7">
    <EventSection />
  </v-container>

  <v-sheet color="surface-bg">
    <v-container class="pt-7 pb-10">
      <v-responsive class="content-wrapper">
        <SponsorSection />
      </v-responsive>
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