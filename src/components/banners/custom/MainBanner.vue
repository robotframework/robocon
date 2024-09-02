<template>
  <template v-if="bannerData?.banners">
    <v-carousel height="500" :show-arrows="false" hide-delimiters>
      <v-carousel-item v-for="(banner, i) in (bannerData.banners)" :key="i"
        :src="((banner?.fields?.file?.url as string) ?? fallbackWhiteBg)" cover>
        <v-container class="fill-height my-auto">
          <v-responsive class="d-flex align-center content-wrapper">
            <div class="d-flex flex-column justify-between ga-5">
              <h3 v-if="bannerData?.textFields?.[i]" class="rbcn-font">
                {{ bannerData.textFields?.[i].title }}
              </h3>

              <div class="btn-wrapper">
                <v-btn color="secondary" flat :href="links.ticket" target="_blank">Get ticket now</v-btn>
                <v-btn variant="outlined" color="secondary" flat :to="links.sponsor" class="bg-white">
                  Sponsor the event
                </v-btn>
              </div>
            </div>
          </v-responsive>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </template>
</template>


<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue';

import { getEntry } from '@/content';
import { useGlobalStore } from '@/store/modules';

const fallbackWhiteBg = ref("/src/assets/img/fallback-white-bg.png")
const store = useGlobalStore();
const bannerData = computed(() => store.get2025Banner)
const links = {
  ticket: 'https://tickets.robotframework.org/robocon-2025',
  sponsor: 'sponsor'
}

onBeforeMount(async () => {
  getEntry("banner").then((result) => {
    store.setBanner(result?.items);
  })
})
</script>

<style scoped>
.rbcn-font {
  font-weight: 400;
  font-size: 80px;
  line-height: 1;
  word-spacing: -28px;
  max-width: 700px;

  @media (max-width: 800px) {
    font-size: 56px;
  }

  @media (max-width: 600px) {
    text-align: center;
    font-size: 40px;
    letter-spacing: 1.5;
    word-spacing: -8px;
  }
}

.btn-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  gap: 1rem;


  @media (max-width: 600px) {
    margin: 0 auto;
    max-width: calc(100% - 60px);
  }
}
</style>