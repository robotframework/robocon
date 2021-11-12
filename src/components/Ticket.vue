<template>
  <a
    href="https://tickets.robotframework.org/rc2022/"
    target="_blank"
    class="ticket-container font-title cursor-pointer"
    ref="ticketContainer"
    :style="`transform: rotateX(${mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg);`">
    <svg>
      <mask id='m' stroke="#fe4bd2" stroke-width="3" stroke-opacity="1">
        <rect id='b' width='100%' height='100%' fill="rgba(255, 255, 255, 0.2)"/>
        <circle id='d' r='5' fill='#000' />
        <circle id='c' r='20' fill='#000' />
        <use xlink:href='#c' x='100%'/>
        <use xlink:href='#c' y='100%'/>
        <use xlink:href='#c' x='100%' y='100%'/>
        <use xlink:href='#d' x='100%' y='76%'/>
        <use xlink:href='#d' x='100%' y='63%'/>
        <use xlink:href='#d' x='100%' y='50%'/>
        <use xlink:href='#d' x='100%' y='37%'/>
        <use xlink:href='#d' x='100%' y='24%'/>
        <use xlink:href='#d' x='0%' y='76%'/>
        <use xlink:href='#d' x='0%' y='63%'/>
        <use xlink:href='#d' x='0%' y='50%'/>
        <use xlink:href='#d' x='0%' y='37%'/>
        <use xlink:href='#d' x='0%' y='24%'/>
      </mask>
      <use xlink:href='#b' fill='#fe4bd2' mask='url(#m)' />
    </svg>
    <div class="text-container m-medium ml-small mr-small row center">
      <div class="type-small flex middle" style="transform: rotate(-90deg);">
        <div>
          RBCN22
        </div>
      </div>
      <div class="border-left-theme border-right-theme border-thin">
        <div v-html="ticket.title" class="type-large type-bold border-bottom-theme border-thin p-small" style="min-width: 9.5rem;" />
        <div v-html="ticket.price" class="p-2xsmall" />
      </div>
      <div class="type-small middle flex middle" style="transform: rotate(90deg);">
        <div>
          <div>
            19-20
          </div>
          <div>
            JAN
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Ticket',
  props: {
    ticket: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    // normalized position
    mousePosition: {
      x: 0,
      y: 0
    }
  }),
  mounted() {
    if (!navigator.maxTouchPoints || navigator.maxTouchPoints === 0) document.addEventListener('mousemove', this.onMouseMove)
  },
  methods: {
    onMouseMove(ev) {
      const bounds = this.$refs.ticketContainer.getBoundingClientRect()
      const ticketPosition = {
        x: bounds.left + document.documentElement.scrollTop,
        y: bounds.top + document.documentElement.scrollTop
      }
      this.mousePosition = {
        x: (ticketPosition.x - ev.screenX) / (window.innerWidth / 2),
        y: (ticketPosition.y - ev.screenY) / (window.innerHeight / 2)
      }
    }
  }
}
</script>

<style scoped>
.ticket-container {
  color: var(--color-white);
  text-decoration: none;
  position: relative;
  transition: transform 0.2s;
}
.ticket-container:hover {
  color: var(--color-theme);
}
.text-container {
  text-align: center;
  border: solid 0.1rem var(--color-theme);
  border-radius: 0.5rem;
}
svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 30px var(--color-theme));
}
</style>
