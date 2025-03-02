<template>
  <div
    v-show="!store.isFullscreen"
    ref="nav"
    class="row between p-small sticky bg-white border-bottom-theme border-thin"
    style="top: 0; z-index: 2;">
    <div class="flex middle">
      <base-icon name="robot" color="black" size="1.25rem" />
      <router-link :to="{ path: '/' }" class="router-link type-large mx-xsmall color-theme">
        ROBOCON
      </router-link>
      <div class="type-xsmall flex">
        |
        <a href="https://robotframework.org/" class="type-xsmall ml-xsmall mr-2xsmall color-theme hover-color-secondary">
          Robot Framework
        </a>
        Conference
      </div>
    </div>
    <div class="flex">
      <router-link
        v-if="store.name"
        :to="{ path: '/stream' }"
        class="router-link mx-xsmall type-no-underline type-small">
        Stream
      </router-link>
      <router-link
        :to="{ path: '/program' }"
        class="router-link mx-xsmall type-no-underline type-small">
        Program
      </router-link>
      <router-link
        :to="{ path: '/sponsor' }"
        class="router-link mx-xsmall type-no-underline type-small">
        Sponsor
      </router-link>
      <!-- <div>|</div>
      <router-link
        :to="{ name: 'Archive' }"
        class="router-link mx-xsmall type-no-underline type-small">
        archive
      </router-link> -->
    </div>
  </div>
</template>

<script setup>
import {useStore} from 'Store';
const store = useStore()
</script>

<style scoped>
  button {
    transition: color 0.2s;
  }
  button:hover {
    color: var(--color-theme) !important;
  }
  .tiny-logo-container {
    position: absolute;
    top: 0;
    left: 0;
  }
  .tiny-logo-container > img {
    margin-top: 0.05rem;
    width: 2.75rem;
    height: 2.75rem;
  }
  .dropdown-container {
    position: absolute;
    top: calc(100% + 2rem);
    right: 0;
    width: max-content;
  }
  .dropdown-container a {
    display: block;
    line-height: 1;
  }
</style>
