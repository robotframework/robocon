<script setup lang="ts">
import { speakersData } from './dummy-data'

</script>

<template>
  <v-row>
    <v-col cols="12">
      <h2>Speakers</h2>
    </v-col>
    <v-col cols="12" sm="4" v-for="card in speakersData" :key="card.name">
      <v-card elevation="2" rounded="md" color="surface">

        <div style="height: 240px; width: 280px;" class="justify-center align-center py-10">

          <v-card-item class="pt-0">
            <h4 class="text-h5 text-primary" v-text="card.name"></h4>
            <div class="d-flex align-center justify-space-between mt-1">
              <div>
                <span class="text-black text-body-1 text-medium-emphasis']" v-text="card.desc"></span>
              </div>
            </div>
          </v-card-item>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
