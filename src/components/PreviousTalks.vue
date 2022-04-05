<template>
  <div class='col-sm-12 row card p-xsmall'>
    <div class="col-sm-12 col-md-3 pr-3xsmall">
      <div class="list">
        <div
          v-for="{ year, list, playlistLink } in $tm('previousTalks.talks')"
          :key="year"
          class="mb-medium">
          <!-- mobile list -->
          <template v-if="$store.state.isMobile">
            <h3 class="yearTitle pb-small border-bottom-theme mb-small type-center">
              {{ year }}
            </h3>
            <div
              v-for="{ authors, title, url } in showAll[year] ? list : list.slice(0, 3)"
              :key="url"
              class="color-white pt-small pb-small"
              @click="activeTalk = url">
              <div>
                <span v-for="(author, i) in authors" :key="author" class="type-small">
                  {{ author }}{{ i !== authors.length - 1 ? ', ' : '' }}
                </span>
              </div>
              <a
                :href="`https://www.youtube.com/watch?v=${url.split('/embed/')[1]}`"
                class="mt-3xsmall">
                {{ title }}
              </a>
            </div>
          </template>
          <!-- desktop list -->
          <template v-else>
            <a :href="playlistLink" target="_blank">
              <h3 class="yearTitle bg-background pb-small border-bottom-theme mb-small type-center">
                {{ year }}
              </h3>
            </a>
            <button
              v-for="{ authors, title, url } in list"
              :key="url"
              class="color-white p-small pl-2xsmall pr-2xsmall rounded"
              :class="activeTalk === url ? 'bg-background' : ''"
              @click="activeTalk = url">
              <span v-for="(author, i) in authors" :key="author" class="type-small">
                {{ author }}{{ i !== authors.length - 1 ? ', ' : '' }}
              </span>
              <div
                class="mt-3xsmall"
                :class="activeTalk === url ? 'color-theme' : ''">
                {{ title }}
              </div>
            </button>
          </template>
          <div class="flex center" v-if="$store.state.isMobile && !showAll[year]" @click="showAll[year] = true">
            <button  class="theme ml-2xsmall mt-xsmall mb-medium">
              Show all ({{ list.length }})
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!$store.state.isMobile"
      class="col-sm-9 pl-3xsmall">
      <iframe
        class="rounded"
        width="100%"
        height="100%"
        :src="activeTalk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviousTalks',
  data: () => ({
    activeTalk: null,
    showAll: {
      2021: false,
      2020: false,
      2019: false,
      2018: false
    }
  }),
  mounted() {
    this.activeTalk = this.$tm('previousTalks.talks')[0].list[0].url
  }
}
</script>

<style scoped>
.yearTitle {
  position: sticky;
  top: 0;
  width: 100%;
}
button {
  display: block;
}

@media screen and (min-width: 768px) {
  .list {
    overflow: auto;
    max-height: 70vh;
  }
}

</style>
