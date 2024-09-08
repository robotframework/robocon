<template>
  <nav-mobile />
  <!-- <news-banner v-if="$route.name === 'Home'" class="theme-germany">
    <h2>ROBOCON <span class="color-white">2022</span> GERMANY</h2>
    <h3>📣 <span class="color-theme">This October 5th</span> 📣</h3> First RoboCon outside of Finland will be held in Frankfurt am Main! <router-link :to="{name: 'Germany'}">More details of RoboCon 2022 DE</router-link>
  </news-banner> -->
  <navbar class="nav-desktop" />
  <router-view :key="route.path" />
  <page-footer />
</template>

<script setup lang="ts">
import { Navbar, NavMobile, PageFooter } from 'Components'
import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<style>
  .nav-mobile {
    display: none !important;
  }
  @media screen and (max-width: 1024px) {
    .nav-mobile {
      display: flex !important;
    }
    .nav-desktop {
      display: none !important;
    }
  }
</style>
