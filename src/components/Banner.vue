<template>
  <div class="row middle bg-black">
    <div
      class="font-title slogans"
      :class="[
        animationsDone ? 'bling' : '',
        $store.state.isMobile ? 'flex between ml-small mt-large mb-medium' : 'col-sm-12 row center mt-large']">
      <transition appear name="fade-right">
        <div class="mr-xlarge" :style="animationsDone ? 'transition-delay: 0;' : 'transition-delay: 1.25s;'">
          THE 5th ANNUAL<br>
          ROBOT FRAMEWORK<br>
          CONFERENCE
        </div>
      </transition>
      <transition appear name="fade-right">
        <div
          :class="$store.state.isMobile ? 'type-right' : 'type-center mr-xlarge'"
          :style="animationsDone ? 'transition-delay: 0;' : 'transition-delay: 1.75s;'">
          A GLOBAL HYBRID<br>
          SOFTWARE AUTOMATION<br>
          EVENT
        </div>
      </transition>
      <transition appear name="fade-right">
        <div class="type-right" :style="animationsDone ? 'transition-delay: 0;' : 'transition-delay: 2.25s;'" v-if="!$store.state.isMobile">
          19-20th<br>
          MAY 2022<br>
          UTC+2
        </div>
      </transition>
    </div>
    <transition appear name="opacity-slow">
      <div class="col-sm-12 type-center mt-large" :style="animationsDone ? 'transition-delay: 0;' : 'transition-delay: 0.5s;'">
        <h1><span class="glow-white">RBCN</span>22</h1>
      </div>
    </transition>
    <transition appear name="fade-right">
      <div class="col-sm-12 type-center font-title mb-large mt-medium" :style="animationsDone ? 'transition-delay: 0;' : 'transition-delay: 2.25s;'" v-if="$store.state.isMobile">
        19-20th MAY 2022
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data: () => ({
    animationsDone: false,
    publicPath: process.env.BASE_URL
  }),
  mounted() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    // text gradients are just too painful to get working on Safari :(
    if (isSafari) return
    setTimeout(() => { this.animationsDone = true }, 3100)
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
    animation: bling 5s infinite;
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

  .rbcn-container {
    max-width: 34.3rem;
    min-height: 8.1rem;
    filter: drop-shadow(0 0 0.45rem var(--color-theme));
  }
  @media screen and (max-width: 34.3rem) {
    .rbcn-container {
      width: calc(100% - 2rem);
      min-height: 6rem;
    }
  }
  @media screen and (max-width: 703px) {
    .slogans {
      font-size: var(--type-xsmall);
      width: calc(100% - 2rem) !important;
    }
    h1 {
      font-size: 27vw !important;
    }
  }
  .glow-white {
    text-shadow:
      0 0 0.5rem #fff,
      0 0 1rem #fff,
      0 0 2rem #fff,
      0 0 4rem #fff;
  }
</style>
