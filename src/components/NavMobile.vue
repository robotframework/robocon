<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="menu bg-white pl-large pb-large pt-xlarge">
      <router-link
        :to="{ path: '/' }"
        class="block m-medium router-link type-no-underline type-small">
        ROBOCON 2025
      </router-link>
      <router-link
        :to="{ path: '/program' }"
        class="block m-medium router-link type-no-underline type-small">
        Program
      </router-link>
      <router-link
        :to="{ path: '/sponsor' }"
        class="block m-medium router-link type-no-underline type-small">
        Sponsor
      </router-link>
      <!-- <router-link
        :to="{ name: 'Archive' }"
        class="color-white block m-medium router-link type-no-underline type-small">
        archive
      </router-link> -->
      <!-- <router-link
        v-for="{ name, text } in $tm('navbar.links')"
        :to="{ name }"
        :key="name"
        class="router-link block mb-large"
        @click="isOpen = false">
        {{ text }}
      </router-link> -->
    </div>
  </transition>
  <div
    class="nav-mobile row between bg-white color-black border-bottom-theme border-thin"
    :class="isOpen ? 'open' : ''">
    <div class="flex middle pl-small">
      <base-icon name="robot" color="black" size="1.75rem" />
      <router-link :to="{ path: '/' }" class="color-black router-link type-large mx-xsmall">
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
  background-color: #ffffff99;
}

.nav-mobile {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9;
}

.hamburger {
  margin: 1rem;
  margin-left: 1.25rem;
  width: 1.75rem;
  height: 1.5rem;
  position: relative;
  transform: rotate(0deg);
  transition: .2s ease-in-out;
  cursor: pointer;
}
.hamburger span {
  display: block;
  position: absolute;
  height: 0.25rem;
  width: 100%;
  background: var(--color-black);
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
  top: 0.625rem;
}
.hamburger span:nth-child(4) {
  top: 1.25rem;
}
.hamburger.open span:nth-child(1) {
  top: 0.75rem;
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
  top: 0.75rem;
  width: 0%;
  left: 50%;
}

</style>
