<template>
  <a
    :href="props.fields.href"
    target="_blank"
    :class="(props.fields.href) ? 'cursor-pointer' : 'suspended'"
    class="ticket-container type-no-underline flex center middle"
    ref="ticketContainer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 370 200">
      <path d="M360,142.9c0-2.8,2.2-5,5-5v-5c-2.8,0-5-2.2-5-5s2.2-5,5-5v-5c-2.8,0-5-2.2-5-5s2.2-5,5-5v-5c-2.8,0-5-2.2-5-5s2.2-5,5-5v-5c-2.8,0-5-2.2-5-5s2.2-5,5-5v-5c-2.8,0-5-2.2-5-5s2.2-5,5-5v-5c-2.8,0-5-2.2-5-5s2.2-5,5-5v-9.5c-17.4-2.2-31.1-16-33.4-33.4H38.4c-2.2,17.4-16,31.1-33.4,33.4v11.6c2.8,0,5,2.2,5,5s-2.2,5-5,5v5c2.8,0,5,2.2,5,5s-2.2,5-5,5v5c2.8,0,5,2.2,5,5s-2.2,5-5,5v5c2.8,0,5,2.2,5,5s-2.2,5-5,5v5c2.8,0,5,2.2,5,5s-2.2,5-5,5v5c2.8,0,5,2.2,5,5s-2.2,5-5,5v5c2.8,0,5,2.2,5,5s-2.2,5-5,5v11.6c17.4,2.2,31.1,16,33.4,33.4H331.6c2.2-17.4,16-31.1,33.4-33.4v-13.7c-2.8,0-5-2.2-5-5Z"/>
      <rect stroke-width="1px" stroke="var(--color-theme)" x="2rem" y="1rem" width="calc(100% - 4rem)" height="calc(100% - 2rem)" rx="25" ry="25"/>
    </svg>
    <div class="relative content flex flex-col between">
      <div>
        <div v-if="props.fields.specifier" class="ticket-specifier color-black">
          {{ props.fields.specifier }}
        </div>
        <div class="ticket-title color-black">
          {{ props.fields.name }}
        </div>
      </div>
      <div>
        <span class="price type-large color-black">
          {{ props.fields.price }} €
        </span>
        <span class="comparePrice">
          {{ props.fields.comparePrice }} €
        </span>
      </div>
    </div>
    <div class="absolute font-title type-xsmall side left">
      RBCN
    </div>
    <div class="absolute font-title type-small side right">
      2025
    </div>
    <div class="shader specular" :class="props.fields.isPremium ? 'golden' : ''">
      <div class="shader mask2">
        <div class="shader mask" />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Ticket } from '@/content';
import type { PropType } from 'vue';

const props = defineProps({
  fields: Object as PropType<Ticket['fields']>
})
</script>

<style scoped>
.ticket-container {
  display: inline-flex;
  aspect-ratio: 1.8;
  width: 20rem;
  position: relative;
  backface-visibility: hidden;
}
.content {
  width: calc(100% - 7rem);
  height: calc(100% - 2.5rem);
  z-index: 2;
  @media screen and (max-width: 701px) {
    width: calc(100% - 7rem);
    height: calc(100% - 4rem);
  }

  .ticket-title {
    font-size: 1.5rem;
    transition: color 0.2s;
    font-weight: 600;
    line-height: 1;
  }

  .ticket-specifier {
    font-size: 0.85rem;
    font-weight: 600;
  }

  .price {
    font-size: 1.75rem;
    font-variation-settings: "wght" 600;
    font-weight: 600;
    font-family: 'Source Code Pro';
    word-spacing: -0.5rem;
  }

  .comparePrice {
    font-size: 1rem;
    font-family: 'Source Code Pro';
    font-variation-settings: "wght" 400;
    text-decoration: underline;
    text-underline-offset: -.35rem;
    text-decoration-skip-ink: none;
  }
}
.ticket-container:hover .ticket-title {
  color: var(--color-theme-secondary);
}
.ticket-container:hover .specular {
  filter: filter(1) brightness(1.5);
}
.ticket-container:hover rect {
  stroke: var(--color-theme);
}
.side.left {
  transform: rotate(-90deg) translate(-50%, 100%);
  left: -0.25rem;
  top: 50%;
  transform-origin: 0% 0%;
}
.side.right {
  transform: rotate(90deg) translate(50%, 100%);
  right: -0.75rem;
  top: 50%;
  transform-origin: 100% 0%;
}
svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  stroke: var(--color-black);
  stroke-width: 2px;
  fill: none;
}
#rf-logo {
  fill: var(--color-theme);
  stroke: none;
}
.shader {
  position: absolute;
  border-radius: 1.25rem;
}
.specular {
  opacity: 0.25;
  left: 2rem;
  top: 1rem;
  width: calc(100% - 4rem);
  height: calc(100% - 2rem);
  background-image: linear-gradient(130deg, rgba(200, 200, 200, 1) 9%, #a38719 10%, rgba(150, 150, 150, 1) 30%, #6181ff 36%, #eeddaa 57%, #ede9ff 65%, rgb(54 115 255) 92%);
  background-size: 150vw;
  transition: filter 0.1s;
  background-position: 0% 0%;
  background-repeat: repeat;
  filter: brightness(1.5) blur(1px);
  /* background-position: 100% 0%; */

  animation-name: bling;
  animation-duration: 1ms;
  animation-direction: alternate;
  animation-timeline: scroll(root);

  @media screen and (max-width: 701px) {
    width: calc(100% - 5rem);
    height: calc(100% - 3rem);
    left: 2.5rem;
    top: 1.5rem;
  }
}
@keyframes bling {
  from {
    background-position: 0vw 0;
  }
  to {
    background-position: 150vw 0;
  }
}
.golden {
  background-image: linear-gradient(130deg, rgba(200, 200, 200, 1) 9%, #ffc800 10%, rgb(255 175 0) 30%, #ffef00 36%, #d5cabf 57%, #ffd45e 65%, rgba(170, 170, 170, 1) 92%);
  opacity: 0.3;
  filter: saturate(2);
}
.mask, .mask2 {
  width: 100%;
  height: 100%;
}
.mask {
  background-size: 28%;
  mix-blend-mode: screen;
  background-position: -6% -32%;
  background-repeat: repeat;
  background-image: url(/img/rf-pattern.jpg);
  filter: brightness(1);
}
.mask2 {
  mix-blend-mode: hard-light;
  transform: translate3d(0, 0, 0);
  background-size: cover;
  /* background-image: url(/docs/img/ticket-depth.jpg), url(/img/ticket-depth.jpg); */
  background-image: url(/img/ticket-depth.jpg);
  opacity: 1;
  filter: invert();

}
.text-container {
  text-align: center;
}

</style>
