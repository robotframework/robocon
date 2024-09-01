<template>
  <page-section :data="store.getMainSponsor2025" />
</template>

<script setup lang="ts">
import { PageSection } from "@/components";
import { useGlobalStore } from '@/store/modules';

const store = useGlobalStore();
</script>