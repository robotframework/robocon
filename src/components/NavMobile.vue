<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="menu bg-black p-small pb-large pt-2xlarge">
      <router-link
        v-for="{ name, text } in $tm('navbar.links')"
        :to="{ name }"
        :key="name"
        class="router-link block mb-large">
        {{ text }}
      </router-link>
    </div>
  </transition>
  <div
    class="navbar row between bg-black color-white"
    :class="isOpen ? 'open' : ''">
    <div class="flex middle pl-small">
      <base-icon name="robot" color="white" size="1.25rem" />
      <router-link :to="{ name: 'Home' }" class="router-link type-large mx-xsmall">
        ROBOCON
      </router-link>
    </div>
    <button
      class="hamburger"
      :class="isOpen ? 'open' : ''"
      @click="isOpen = !isOpen; linksOpen = false">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
  <transition name="opacity">
    <div
      v-if="isOpen"
      class="menu-background"
      @click="isOpen = false" />
  </transition>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  name: 'NavMobile',
  components: {
    BaseIcon
  },
  data: () => ({
    isOpen: false
  })
}
</script>

<style scoped>

.menu {
  position: fixed;
  z-index: 8;
  top: 0;
  width: 100%;
  left: 0;
}

.menu-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #292f33A0;
}

.navbar {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9;
}

.hamburger {
  margin: 16px;
  margin-left: 20px;
  width: 32px;
  height: 24px;
  position: relative;
  transform: rotate(0deg);
  transition: .2s ease-in-out;
  cursor: pointer;
}
.hamburger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: var(--color-white);
  border-radius: 1px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}
.hamburger span:nth-child(1) {
  top: 0;
}
.hamburger span:nth-child(2),.hamburger span:nth-child(3) {
  top: 10px;
}
.hamburger span:nth-child(4) {
  top: 20px;
}
.hamburger.open span:nth-child(1) {
  top: 10px;
  width: 0%;
  left: 50%;
}
.hamburger.open span:nth-child(2) {
  transform: rotate(45deg);
}
.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg);
}
.hamburger.open span:nth-child(4) {
  top: 10px;
  width: 0%;
  left: 50%;
}

</style>
