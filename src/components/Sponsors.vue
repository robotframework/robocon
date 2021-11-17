<template>
  <div class="row bg-grey-dark card pt-medium pb-medium" :class="$store.state.isMobile ? '' : 'p-small'">
    <div class="col-sm-12 mb-xsmall type-center color-theme">
      <h3>
        {{ $t('sponsors.boxTitle') }}
      </h3>
    </div>
    <a
      v-for="(sponsor, i) in $tm('sponsors.list')"
      :key="i"
      :href="sponsor.href"
      target="_blank"
      class="sponsor cursor-pointer col-sm-6 col-md-3">
      <div
        class="img-container mb-small"
        :style="`background-image: url(${publicPath}img/sponsors/${sponsor.img})`" />
    </a>
    <div class="col-sm-12 type-small type-right pr-small" v-html="$t('sponsors.howToJoin')" />
  </div>
</template>

<script>
export default {
  name: 'Sponsors',
  data: () => ({
    publicPath: process.env.BASE_URL
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
</style>
