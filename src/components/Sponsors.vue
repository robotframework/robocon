<template>
  <div class="row card pt-medium pb-medium" :class="$store.state.isMobile ? '' : 'p-small'">
    <div class="col-sm-12 mb-xsmall type-center color-theme pl-small pr-small">
      <h3>
        {{ $t('rbcn2022.sponsors.boxTitle') }}
      </h3>
    </div>
    <div class="col-sm-12">
      <h4 class="ml-large">Platinum</h4>
    </div>
    <a
      v-for="(sponsor, i) in $tm('rbcn2022.sponsors.list').filter(({ platinum }) => platinum)"
      :key="i"
      :href="sponsor.href"
      target="_blank"
      class="sponsor cursor-pointer col-sm-12 col-md-6">
      <div
        class="img-container platinum"
        :style="`background-image: url(${publicPath}img/sponsors/${sponsor.img})`" />
    </a>
    <div class="col-sm-12 mb-small">
      <h4 class="ml-large">Gold & Silver</h4>
    </div>
    <a
      v-for="(sponsor, i) in $tm('rbcn2022.sponsors.list').filter(({ platinum }) => !platinum)"
      :key="i"
      :href="sponsor.href"
      target="_blank"
      class="sponsor cursor-pointer col-sm-6 col-md-3">
      <div
        class="img-container mb-small"
        :style="`background-image: url(${publicPath}img/sponsors/${sponsor.img})`" />
    </a>
    <div v-if="!mini" class="col-sm-12 flex end mt-small p-medium">
      <transition mode="out-in" name="opacity">
        <button
          v-if="!sponsorInfoShown"
          class="theme mr-small"
          @click="sponsorInfoShown = true">
          {{ $t('rbcn2022.sponsors.button') }}
        </button>
        <div v-else v-html="$t('rbcn2022.sponsors.moreInfo')" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sponsors',
  props: ['mini'],
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
