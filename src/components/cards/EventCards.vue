<script setup lang="ts">
import { dummyData } from './dummy-data'

</script>

<template>
  <v-row>
    <v-col cols="12">
      <h2>Events</h2>
    </v-col>
    <v-col cols="12" sm="4" v-for="card in dummyData" :key="card.title">
      <v-card elevation="2" rounded="md" :color="card.bg">

        <div style="height: 240px; width: 240px;"></div>
        <!-- <v-img :src="card.img" height="100%" class="rounded-t-md"></v-img> -->

        <v-card-item class="pt-0">
          <h4 class="text-h5" v-text="card.title" :class="card.bg === 'secondary' ? 'text-white' : 'text-primary'"></h4>
          <div class="d-flex align-center justify-space-between mt-1">
            <div>
              <span :class="[
                card.bg === 'secondary' ? 'text-white' : 'text-black', 'text-body-1 text-medium-emphasis']"
                v-text="card.name"></span>
            </div>
            <div class="d-flex justify-end">
              <v-btn size="xs" variant="text" :color="card.bg === 'secondary' ? 'white' : 'secondary'" class="d-flex">
                more
              </v-btn>
            </div>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
