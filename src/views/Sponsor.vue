<template>
  <div class="container narrow row">
    <p class="col-md-8 col-md-offset-3 mt-large" v-html="parseMarkdown($t('sponsor.subTitle'))" />
  </div>
  <div class="container mb-large">
    <div class="row center mb-small mt-large">
      <v-btn v-for="(tab, i) in ['Full Sponsorship', 'Online Sponsorship']" :key="tab"
        class="type-uppercase theme type-small mx-2xsmall" :class="activeTabIndex === i && 'active'"
        @click="activeTabIndex = i">
        {{ tab }}
      </v-btn>
    </div>
    <transition class="sponsor-container" name="opacity" mode="out-in">
      <div :key="activeTabIndex" class="row center">
        <div v-for="(tier, i) in activeTabIndex === 0 ? $tm('sponsor.tiers.irl') : $tm('sponsor.tiers.online')"
          :key="tier.name" class="col-sm-12 col-md-6 col-lg-4 p-xsmall">
          <div class="card pt-medium pb-large flex flex-col h-100"
            :class="$store.state.isMobile ? 'p-xsmall' : 'p-small'">
            <h2 class="type-center mb-2xsmall">{{ tier.name }}</h2>
            <div class="type-large type-center">{{ tier.price }}</div>
            <ul class="my-small">
              <li v-for="perk in tier.perks" :key="perk.name">
                {{ perk.name }}
                <div v-if="perk.description" class="relative inline-block tooltip-container">
                  <v-btn class="perk-tooltip-v-btn rounded border border-white border-thin color-white">
                    ?
                  </v-btn>
                  <div
                    class="perk-tooltip rounded-small bg-black p-small border-theme border-thin type-left line-height-small"
                    :class="[tooltipAlignClass(i)]" v-html="parseMarkdown(perk.description)" />
                </div>
              </li>
            </ul>
            <a :href="`${$t('sponsor.event_url')}?voucher=${tier.voucher}&subevent=${activeTabIndex === 0 ? '3913179' : '3913180'}`"
              class="type-no-underline">
              <v-btn class="theme block mx-auto mt-auto">
                {{ $t('sponsor.joinButton') }}
              </v-btn>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Banner } from 'Components'
import { marked } from 'marked'

export default {
  name: 'Sponsor',
  components: {
    Banner
  },
  methods: {
    parseMarkdown(text) {
      return marked.parse(text)
    },
    tooltipAlignClass(i) {
      if (i === 0) return 'tooltip-right'
      if (this.$store.state.isDesktop) {
        if (i === 2) return 'tooltip-left'
      } else {
        if (i === 1) return 'tooltip-left'
      }
      return ''
    },
    getPretixLink(url, voucher, subevent) {
      return `${url}redeem?voucher=${voucher}&subevent=${subevent}`
    }
  },
  data: () => ({
    activeTabIndex: 0
  })
}
</script>

<style scoped>
.perk-tooltip-v-btn {
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: -0.5rem;
  text-align: center;
  line-height: 1.5;
  border-color: #aaa;
  transform: scale(0.8) translateY(0.1rem);
  transition: border-color 0.3s, opacity 0.3s, transform 0.3s;
}

.perk-tooltip {
  position: absolute;
  cursor: auto;
  width: 20rem;
  left: calc(-10rem + 50%);
  bottom: 100%;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  margin-bottom: 0.5rem;
}

.tooltip-right {
  left: 0;
}

.tooltip-left {
  left: unset;
  right: 0;
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

.perk-tooltip-v-btn:focus {
  border-color: var(--color-theme);
}

.perk-tooltip-v-btn:hover {
  transform: scale(1) translateY(0.1rem);
}

.perk-tooltip-v-btn:hover+.perk-tooltip,
.perk-tooltip-v-btn:focus+.perk-tooltip,
.perk-tooltip:hover {
  opacity: 1;
  pointer-events: all;
}

li {
  line-height: 1;
  margin-bottom: 0.5rem;
}
</style>
<style>
.pretix-v-btn {
  color: var(--color-link);
  font-weight: var(--weight-body);
  transition: filter 0.2s;
  font-family: var(--font-title);
  text-transform: uppercase;
}
</style>
