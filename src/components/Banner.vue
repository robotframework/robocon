<template>
  <div class="row middle bg-black">
    <div
      class="font-title slogans"
      :class="[
        doTheBling ? 'bling' : '',
        $store.state.isMobile ? 'flex between ml-small mt-large mb-medium' : 'col-sm-12 row center mt-large']">
      <transition appear name="fade-right">
        <div class="mr-large" style="transition-delay: 1.25s;">
          THE 5th ANNUAL<br>
          ROBOT FRAMEWORK<br>
          CONFERENCE
        </div>
      </transition>
      <transition appear name="fade-right">
        <div
          :class="$store.state.isMobile ? 'type-right' : 'mr-large'"
          style="transition-delay: 1.75s;">
          A GLOBAL HYBRID<br>
          SOFTWARE AUTOMATION<br>
          EVENT
        </div>
      </transition>
      <transition appear name="fade-right">
        <div style="transition-delay: 2.25s;" v-if="!$store.state.isMobile">
          18-21th<br>
          JAN 2022<br>
          UTC+2
        </div>
      </transition>
    </div>
    <transition appear name="opacity-slow">
      <div class="col-sm-12 type-center mt-large mb-medium" style="transition-delay: 0.5s;">
        <img :src="`${publicPath}img/RBCN22.svg`" alt="ROBOCON 2022" class="rbcn-logo" />
      </div>
    </transition>
    <transition appear name="fade-right">
      <div class="col-sm-12 type-center font-title mb-large mt-medium" style="transition-delay: 2.25s;" v-if="$store.state.isMobile">
        18-21st JAN 2022 UTC+2
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data: () => ({
    doTheBling: false,
    publicPath: process.env.BASE_URL
  }),
  mounted() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    // text gradients are just too painful to get working on Safari :(
    if (isSafari) return
    setTimeout(() => { this.doTheBling = true }, 3100)
  }
}
</script>

<style>
  .bling {
    background: linear-gradient(-75deg, #FFF 40%,  #ff73dc 50%, #FFF 70%);
    background-size: 200% auto;
    background-position: -50% center;
    color: #000;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: bling 7s infinite;
  }
  @keyframes bling {
    0% {
      background-position: -50% center;
    }
    7% {
      background-position: -130% center;
    }
    10% {
      background-position: -140% center;
    }
    28% {
      background-position: -230% center;
    }
    100% {
      background-position: -230% center;
    }
  }

  .rbcn-logo {
    max-width: 34.3rem;
    min-height: 8.1rem;
  }
  @media screen and (max-width: 34.3rem) {
    .rbcn-logo {
      width: calc(100% - 2rem);
      min-height: 6rem;
    }
    .slogans {
      font-size: var(--type-xsmall);
      width: calc(100% - 2rem) !important;
    }
  }
</style>
