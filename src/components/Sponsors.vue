<template>
  <div class="row card pt-medium pb-medium" :class="$store.state.isMobile ? '' : 'p-small'">
    <div class="col-sm-12 mb-xsmall type-center color-theme pl-small pr-small">
      <h3>
        {{ sponsors.boxTitle }}
      </h3>
    </div>
    <div v-if="sponsors.tiers.large" class="col-sm-12">
      <h4 class="ml-large">{{ sponsors.tiers.large }}</h4>
    </div>
    <a
      v-for="(sponsor, i) in sponsors.large"
      :key="i"
      :href="sponsor.href"
      target="_blank"
      class="sponsor cursor-pointer col-sm-12 col-md-6">
      <div
        class="img-container platinum"
        :style="`background-image: url(${publicPath}img/sponsors/${sponsor.img})`" />
    </a>
    <div v-if="sponsors.tiers.medium" class="col-sm-12 mb-small">
      <h4 class="ml-large">{{ sponsors.tiers.medium }}</h4>
    </div>
    <a
      v-for="(sponsor, i) in sponsors.medium"
      :key="i"
      :href="sponsor.href"
      target="_blank"
      class="sponsor cursor-pointer col-sm-6 col-md-4">
      <div
        class="img-container mb-small"
        :style="`background-image: url(${publicPath}img/sponsors/${sponsor.img})`" />
    </a>
    <div v-if="sponsors.tiers.small" class="col-sm-12 mb-small">
      <h4 class="ml-large">{{ sponsors.tiers.small }}</h4>
    </div>
    <a
      v-for="(sponsor, i) in sponsors.small"
      :key="i"
      :href="sponsor.href"
      target="_blank"
      class="sponsor cursor-pointer col-sm-4 col-md-3">
      <div
        class="img-container mb-small"
        :style="`background-image: url(${publicPath}img/sponsors/${sponsor.img})`" />
    </a>
    <div v-if="sponsors.button" class="col-sm-12 flex end mt-small p-medium">
      <transition mode="out-in" name="opacity">
        <button
          v-if="!sponsorInfoShown"
          class="theme mr-small"
          @click="sponsorInfoShown = true">
          {{ sponsors.button }}
        </button>
        <div v-else v-html="sponsors.moreInfo" />
      </transition>
    </div>
    <div v-if="sponsors.link" class="col-sm-12 flex end mt-small p-medium">
      <button class="theme mr-small">
        <router-link to="/sponsor" tag="button">Join</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sponsors',
  props: {
    mini: {
      type: String,
      default: ''
    },
    sponsors: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    sponsorInfoShown: false
  })
}
</script>

<style scoped>
.sponsor {
  transition: transform 0.2s;
}
.sponsor:hover {
  transform: scale(1.08);
}
.img-container {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  height: 4rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.platinum {
  width: 90%;
  height: 10rem;
}
</style>
