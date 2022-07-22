<template>
  <div class="theme-germany">
    <banner>
      <div class="relative flex center font-title de-title" style="margin-bottom: -5rem">
        <div class="color-theme mr-medium">RBCN</div> 2022 <div class="color-theme ml-medium">DE</div>
      </div>
      <div v-if="$store.state.isDesktop" class="flex center bottom">
        <div v-html="logoSvg" class="" />
        <div v-html="mapSvg" class="ml-large mr-large" />
        <div class="flex bottom">
          <base-icon name="robot" color="white" size="15vh" />
          <div class="ml-small type-left type-xlarge font-title">
            Robot<br>
            Framework<br>
            Foundation
          </div>
        </div>
      </div>
      <div v-else>
        <div v-html="mapSvg" class="ml-large mr-large" />
        <div class="flex middle center p-small">
          <div v-html="logoSvgMobile" class="mr-xsmall" />
          <div class="flex bottom ml-xsmall">
            <base-icon name="robot" color="white" size="10vh" />
            <div class="ml-small type-left type-large font-title">
              Robot<br>
              Framework<br>
              Foundation
            </div>
          </div>
        </div>
      </div>
    </banner>
    <page-section
      title-id="intro"
      :title="$t('germany.intro.title')">
      <div class="">
        <div v-html="$t('germany.intro.body')" />
      </div>
    </page-section>
  </div>
</template>

<script>
import { Banner, BaseIcon, PageSection } from 'Components'
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapGermany from 'Img/qs-day-map'
import LogoGermany from 'Img/qs-day-logo'

export default {
  name: 'Germany',
  components: {
    Banner,
    BaseIcon,
    PageSection
  },
  data: () => ({
    mapSvg: '',
    logoSvg: '',
    logoSvgMobile: ''
  }),
  mounted() {
    this.mapSvg = MapGermany()
    this.logoSvg = LogoGermany()
    this.logoSvgMobile = LogoGermany().replace('15vh', '10vh')
  }
}
</script>

<style scoped>
  .de-title {
    font-size: 10vw;
  }
  @media (min-width: 1300px) {
    .de-title {
      font-size: 8rem;
    }
  }
</style>
