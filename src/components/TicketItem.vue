<template>
  <a
    :href="link"
    target="_blank"
    :class="(link) ? 'cursor-pointer' : 'suspended'"
    class="ticket-container type-no-underline flex center"
    ref="ticketContainer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 370 200">
      <path d="M360,142.9c0-2.8,2.2-5,5-5v-5c-2.8,0-5-2.2-5-5s2.2-5,5-5v-5c-2.8,0-5-2.2-5-5s2.2-5,5-5v-5c-2.8,0-5-2.2-5-5s2.2-5,5-5v-5c-2.8,0-5-2.2-5-5s2.2-5,5-5v-5c-2.8,0-5-2.2-5-5s2.2-5,5-5v-5c-2.8,0-5-2.2-5-5s2.2-5,5-5v-9.5c-17.4-2.2-31.1-16-33.4-33.4H38.4c-2.2,17.4-16,31.1-33.4,33.4v11.6c2.8,0,5,2.2,5,5s-2.2,5-5,5v5c2.8,0,5,2.2,5,5s-2.2,5-5,5v5c2.8,0,5,2.2,5,5s-2.2,5-5,5v5c2.8,0,5,2.2,5,5s-2.2,5-5,5v5c2.8,0,5,2.2,5,5s-2.2,5-5,5v5c2.8,0,5,2.2,5,5s-2.2,5-5,5v5c2.8,0,5,2.2,5,5s-2.2,5-5,5v11.6c17.4,2.2,31.1,16,33.4,33.4H331.6c2.2-17.4,16-31.1,33.4-33.4v-13.7c-2.8,0-5-2.2-5-5Z"/>
      <rect stroke-width="1px" stroke="white" x="54.7" y="25.6" width="260.5" height="148.9" rx="25" ry="25"/>
    </svg>
    <div class="relative type-center content" style="width: 100%;">
      <div class="ticket-title type-medium mb-3xsmall pb-3xsmall">
        <slot name="title" />
      </div>
      <div class="price">
        <slot name="price" />
      </div>
    </div>
    <div class="absolute font-title type-xsmall side left">
      <slot name="left" />
    </div>
    <div class="absolute font-title type-small side right">
      <slot name="right" />
    </div>
    <div class="shader specular">
      <div class="shader mask2">
        <div class="shader mask" />
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Ticket',
  props: {
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    tag() {
      return (this.link) ? 'a' : 'div'
    }
  }
}
</script>

<style scoped>
.ticket-container {
  display: inline-flex;
  width: 18rem;
  height: 9rem;
  aspect-ratio: 2;
  position: relative;
  backface-visibility: hidden;
}
.ticket-container:hover .ticket-title {
  color: var(--color-theme);
}
.ticket-container:hover .specular {
  filter: brightness(0.5) saturate(0.5);
}
.ticket-container:hover rect {
  stroke: var(--color-theme);
}
.ticket-title {
  transition: color 0.2s;
  padding-top: 2rem;
}
.side.left {
  transform: rotate(-90deg) translate(-50%, 100%);
  left: 0.75rem;
  top: 50%;
  transform-origin: 0% 0%;
}
.side.right {
  transform: rotate(90deg) translate(50%, 100%);
  right: 0.25rem;
  top: 50%;
  transform-origin: 100% 0%;
}
svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  stroke: var(--color-theme);
  stroke-width: 2px;
  fill: none;
  filter: drop-shadow(0 0  3px var(--color-theme));
}
#rf-logo {
  fill: var(--color-theme);
  stroke: none;
}
.shader {
  position: absolute;
  border-radius: 1rem;
}
.specular {
  opacity: 0.6;
  left: 17.5%;
  top: 13.5%;
  width: 65%;
  height: 73%;
  mix-blend-mode: screen;
  background-image: linear-gradient(130deg, rgba(61,61,61,1) 9%, var(--color-theme) 10%, rgba(52,52,52,1) 30%, var(--color-theme) 36%, rgb(0, 126, 128) 57%, var(--color-theme) 65%, rgba(52,52,52,1) 92%);
  background-attachment: fixed;
  background-size: 100%;
  transition: filter 0.1s;
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
  background-image: url(/dist/img/rf-pattern.jpg), url(/img/rf-pattern.jpg);
}
.mask2 {
  mix-blend-mode: color-burn;
  background-size: cover;
  background-image: url(/dist/img/ticket-depth.jpg), url(/img/ticket-depth.jpg);
  opacity: 0.7;
  filter: brightness(0.8);

}
.text-container {
  text-align: center;
}

div.suspended.ticket-container {
  color: grey;
}
div.suspended.ticket-container:hover .ticket-title {
  color: grey;
}
div.suspended.ticket-container:hover .specular {
  filter: brightness(0.5) saturate(0.5);
}
div.suspended.ticket-container:hover rect {
  stroke: grey;
}
div.suspended.ticket-container svg {
  stroke: grey;
  filter: drop-shadow(0 0  3px grey);
}

div.suspended.ticket-container .specular {
  background-image: linear-gradient(130deg, rgba(61,61,61,1) 9%, grey 10%, rgb(0, 126, 128) 30%, grey 37%, rgba(0,0,0,1) 57%, rgba(0,0,0,1) 68%, grey 72%, rgba(52,52,52,1) 92%);
}

div.suspended.ticket-container .text-container {
  text-align: center;
}

div.suspended:hover .price {
  display: none;
}

div.suspended:hover .content:after {
  content: "Opening soon...";
}

</style>
