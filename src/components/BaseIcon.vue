<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
    :class="[`fill-${color}`, hoverColor && `hover-${hoverColor}`]"
    :style="rotation && `transform: rotate(${rotation}deg);`">
    <path :d="icons[name]" />
  </svg>
</template>

<script>

export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'black'
    },
    hoverColor: {
      type: String
    },
    size: {
      type: String,
      default: '1rem'
    },
    rotation: {
      type: Number,
      default: undefined
    }
  },
  data: () => ({
    icons: {
      chevron: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z',
      close: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z',
      copy: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
      document: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
      globe: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z',
      tab: 'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z',
      play: 'M8 5v14l11-7z',
      retweet: 'M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z',
      robot: 'M5,10.2c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.4-0.9,0.9c0,0.7-0.6,1.2-1.2,1.2S5,10.9,5,10.2 M19,15.9c0,0.7-0.6,1.2-1.2,1.2H6.4c-0.7,0-1.2-0.6-1.2-1.2c0-0.7,0.6-1.2,1.2-1.2h11.5C18.5,14.7,19,15.3,19,15.9 M13.7,10.9c-0.4-0.6-0.2-1.3,0.3-1.7l2.9-1.9c0.6-0.4,1.3-0.2,1.7,0.3c0.4,0.6,0.2,1.3-0.3,1.7l-2.9,1.9c-0.2,0.1-0.5,0.2-0.7,0.2C14.3,11.5,13.9,11.3,13.7,10.9 M21.5,18.5c0,0.2-0.1,0.5-0.3,0.6l-2.1,2.1c-0.2,0.2-0.4,0.3-0.6,0.3h-13c-0.2,0-0.5-0.1-0.6-0.3l-2.1-2.1c-0.2-0.2-0.3-0.4-0.3-0.6v-13c0-0.2,0.1-0.5,0.3-0.6l2.1-2.1C5,2.6,5.2,2.5,5.5,2.5h13c0.2,0,0.5,0.1,0.6,0.3l2.1,2.1c0.2,0.2,0.3,0.4,0.3,0.6V18.5z M23.3,3.4l-2.8-2.8C20.1,0.2,19.6,0,19,0H5C4.4,0,3.9,0.2,3.4,0.7L0.7,3.4C0.2,3.9,0,4.4,0,5v14c0,0.6,0.2,1.2,0.7,1.6l2.8,2.8C3.9,23.8,4.4,24,5,24h14c0.6,0,1.2-0.2,1.6-0.7l2.8-2.8c0.4-0.4,0.7-1,0.7-1.6V5C24,4.4,23.8,3.9,23.3,3.4',
      twitter: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
    }
  })
}
</script>

<style scoped>
  svg {
    transition: fill 0.2s, transform 0.3s;
  }
  .fill-white {
    fill: var(--color-white);
  }
  .hover-white:hover {
    fill: var(--color-white);
  }
  .fill-theme {
    fill: var(--color-theme);
  }
  .hover-theme:hover {
    fill: var(--color-theme);
  }
  .fill-black {
    fill: var(--color-black);
  }
</style>
