<template>
  <div class="col-sm-12">
    <h2 class="type-large type-center">
      {{ sponsors.boxTitle }}
    </h2>
    <h4 v-if="sponsors.tiers.large" class="m-large">
      {{ sponsors.tiers.large }}
    </h4>
    <div class="row">
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
    </div>
    <h4 v-if="sponsors.tiers.medium" class="m-large">
      {{ sponsors.tiers.medium }}
    </h4>
    <div class="row">
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
    </div>
      <h4 v-if="sponsors.tiers.small" class="m-large">
      {{ sponsors.tiers.small }}
    </h4>
    <div class="row">
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
    </div>
    <div v-if="sponsors.button" class="row end mt-small p-medium">
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
    <div class="row">
      <router-link v-if="sponsors.link" to="/sponsor" class="block type-center col-sm-4 col-sm-offset-8 mt-large">
        <button class="theme">
          Join
        </button>
      </router-link>
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
      type: Object
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
