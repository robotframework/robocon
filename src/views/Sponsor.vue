<template>
  <banner>
    <h1 class="type-xlarge">
      {{ $t('sponsor.title') }}
    </h1>
    <p>
      {{ $t('sponsor.subTitle') }}
    </p>
  </banner>
  <div class="container">
    <div class="row center mb-large mt-large">
      <button
        v-for="(tab, i) in ['Online', 'Online + In-Person']"
        :key="tab"
        class="type-uppercase theme type-small mx-xsmall"
        :class="activeTabIndex === i && 'active'"
        @click="activeTabIndex = i">
        {{ tab }}
      </button>
    </div>
    <transition name="opacity" mode="out-in">
      <div :key="activeTabIndex" class="row center">
        <div
          v-for="tier in activeTabIndex === 0 ? $tm('sponsor.tiers.online') : $tm('sponsor.tiers.irl')"
          :key="tier.name"
          class="col-sm-12 col-md-4 p-small">
          <div class="card p-medium flex flex-col h-100">
            <h2 class="type-center mb-2xsmall">{{ tier.name }}</h2>
            <div class="type-large type-center">{{ tier.price}}</div>
            <ul class="my-small">
              <li
                v-for="perk in tier.perks"
                :key="perk.name">
                {{ perk.name }}
                <div class="relative inline-block tooltip-container">
                  <button v-if="perk.description" class="perk-tooltip-button rounded border border-white border-thin color-white">
                    ?
                  </button>
                  <div class="perk-tooltip rounded-small bg-black p-small border-theme border-thin type-left">
                    {{ perk.description }}
                  </div>
                </div>
              </li>
            </ul>
            <button class="theme block mx-auto mt-auto">
              <a :href="tier.url" class="type-no-underline">{{ $t('sponsor.joinButton') }}</a>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Banner } from 'Components'

export default {
  name: 'Germany',
  components: {
    Banner
  },
  data: () => ({
    activeTabIndex: 0
  })
}
</script>

<style scoped>
  .perk-tooltip-button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    line-height: 1.5;
    border-color: #aaa;
    transform: scale(0.8);
    transition: all 0.2s;
  }
  .perk-tooltip {
    position: absolute;
    cursor: auto;
    width: 20rem;
    bottom: 100%;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    .tooltip-container {
      position: static;
    }
    .perk-tooltip {
      bottom: unset;
      left: 1rem;
      width: calc(100% - 2rem);
    }
  }
  .perk-tooltip-button:hover, .perk-tooltip-button:focus {
    border-color: var(--color-theme);
    transform: scale(1);
  }
  .perk-tooltip-button:hover + .perk-tooltip, .perk-tooltip-button:focus + .perk-tooltip, .perk-tooltip:hover {
    opacity: 1;
    pointer-events: all;
  }
</style>
