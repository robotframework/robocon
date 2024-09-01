<template>
  <v-app full-height>
    <v-main class="text-slate-800 dark:text-slate-200 pt-16">
      <Navbar />
      <router-view />
      <PageFooter />
    </v-main>
  </v-app>
</template>

<script setup>
import { Navbar, PageFooter } from "Components";
import { watch } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

watch(locale, () => {
  document.documentElement.lang = locale.value
});
</script>