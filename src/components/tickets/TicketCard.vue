<template>
  <div :class="[props.hasDescription ? 'card-wrapper' : '']">
    <a :href="props.href" target="_blank" :class="[
      props.href ? 'cursor-pointer' : 'suspended',
      'card-link'
    ]" :key="props.href ?? props.name">

      <v-card color="secondary" class="card-base py-3 px-4" elevation="2" rounded="lg">
        <v-card-item class="px-sm-2 px-0 pb-0">
          <div class="d-flex flex-column">
            <div class="label">
              {{ props.category }}
            </div>
            <div class="card-title mt-2 align-center d-flex">
              {{ props.name }}
            </div>
          </div>
          <template v-slot:append>
            <div class="mt-n4 text-white">
              <BaseIcon color="current" size="40" name="robot" />
            </div>
          </template>
        </v-card-item>

        <v-card-item>
          <div class="d-flex align-baseline justify-space-between flex-wrap flex-sm-nowrap">
            <div v-if="props.price"
              :class="[props.discountedPrice ? 'strike-through' : '', 'text-h4 discounted price']">
              {{ props.price }}<span class="ml-1">€</span>
            </div>
            <div v-if="props.discountedPrice" class="text-h2 price">
              {{ props.discountedPrice }}<span class="ml-2">€</span>
            </div>
          </div>
        </v-card-item>
      </v-card>
    </a>

    <template v-if="hasDescription">
      <div class="desc-box">
        <h3>{{ ticketSaleInfo }} </h3>
        <ul class="list">
          <li v-for="feature of props.features" :key="feature" class="text-h6 list-item">
            {{ feature }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import BaseIcon from '../icons/BaseIcon.vue';

const props = defineProps({
  href: String,
  name: String,
  category: String,
  price: [Number, undefined],
  discountedPrice: [Number, undefined],
  highlight: Boolean,
  validUntil: String,
  features: Array,
  hasDescription: Boolean,
});

const ticketSaleInfo = computed(() => {
  return props.href ? `Available until ${props.validUntil}` : 'Opening soon'
})
</script>


<style scoped lang="scss">
.card-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 800px) and (min-width: 600px) {
    gap: 20px;
  }

  @media (max-width: 599.9px) {
    flex-wrap: wrap;
  }
}

.card-title {
  font-size: 24px;

  @media (max-width: 800px) {
    font-size: 20px;
  }
}

.desc-box {
  display: flex;
  width: 400px;
  flex-wrap: wrap;
  overflow: hidden;
}


.card-base {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(1000px / 3);
  height: 220px;
  margin: auto;
  color: white;

  @media (max-width: 800px) and (min-width: 600px) {
    width: 280px;
    height: 180px;
  }

  @media (max-width: 599.9px) {
    width: 240px;
    height: 160px;
  }

  &:hover {
    box-shadow:
      0 -1px 15px -6px rgba(var(--v-theme-secondary), 0.8),
      3px 3px 8px rgba(var(--v-theme-secondary), 0.6),
      0px 1px 0 rgba(var(--v-theme-secondary), 0.7) !important;
  }

  &:before {
    position: absolute;
    content: '';
    width: 200px;
    height: 200px;
    left: 50%;
    top: 50%;
    border-radius: 40%;
    transform: translate(-50%, -50%);
    filter: blur(20px);
    z-index: -1;
    background: conic-gradient(from 180deg at 50% 50%,
        #131de9 0deg, #062ac9 43deg,
        #0213fe 146deg, #101feb 360deg);


    @media (max-width: 800px) {
      width: 140px;
      height: 140px;
    }

  }

  &:after {
    width: 1200px;
    height: 400px;
    -webkit-filter: blur(30px);
    filter: blur(30px);
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    margin: 0;
    z-index: -2;
    background: conic-gradient(from 180deg at 50% 50%, #348bff 0deg, #103fe8 20deg, #000ecd 120deg, #1038e0 360deg);

  }

}

.label {
  font-size: 16px;
}

.list {
  display: grid;
  grid-template-columns: repeat(max-content, auto);
  gap: 8px;
  margin-top: 20px;
  padding-left: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.list-item {
  font-size: 14px;
  line-height: 1;
  width: max-content;
  flex-wrap: wrap;
  overflow-wrap: wrap;
  margin: 2px 0 !important;

  &:before {
    content: unset;
  }
}

.price {
  line-height: 1;
  text-align: right;
  margin-bottom: 0;

  &:not(.discounted) {
    @media (max-width: 900px) {
      font-size: 42px !important;
    }

    @media (max-width: 600px) {
      font-size: 36px !important;
    }
  }

  &.discounted {
    @media (max-width: 900px) {
      font-size: 24px !important;
    }

    @media (max-width: 600px) {
      font-size: 20px !important;
    }
  }

}

.discounted {
  font-size: 40px;

}

.strike-through {
  text-decoration-line: line-through;
}
</style>