<template>
  <v-app-bar flat class="pl-3" color="white">
    <template v-slot:prepend>
      <router-link to="/" class="router-link flex items-center">
        <base-icon name="robot" size="1.25rem" color="current" />
        <span class="ml-2">ROBOCON</span>
      </router-link>
    </template>

    <v-spacer />

    <template v-if="!isXs">
      <router-link v-for="(menu) in menus" :key="menu.name" class="pl-4 router-link" :to="{ path: `/${menu.name}` }">
        {{ menu.name }}
      </router-link>

      <a href="https://robotframework.org/" class="router-link align-center pl-5 pr-2">
        Robot Framework
      </a>
    </template>

    <template v-slot:append v-if="isXs" class="text-black">
      <v-app-bar-nav-icon color="#000" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="top">
    <v-list dense v-if="isXs">
      <v-list-item>
        <a href="https://robotframework.org/">
          Robot Framework
        </a>
      </v-list-item>

      <v-list-item v-for="(menu) in menus" :key="menu.name">
        <router-link class="router-link" :to="{ path: `/${menu.name}` }">
          {{ menu.name }}
        </router-link>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>

</template>


<script setup>
import { BaseIcon } from '@/components'
import { useGlobalStore } from '@/store';
import { mapState } from 'pinia';
import { watch, onMounted, reactive, ref } from 'vue';

const drawer = ref(null);
const isXs = ref(false);

const props = defineProps({
  menus: {
    type: Array,
    default: [
      {
        name: 'sponsor'
      },
      {
        name: 'events'
      },
    ]
  }
})

const pages = reactive(mapState(useGlobalStore, ['pages']))

watch(isXs, value => {
  if (!value) {
    if (this.drawer) {
      this.drawer = false;
    }
  }
})


onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize, { passive: true });
})

function onResize() {
  isXs.value = window.innerWidth < 500;
}

</script>


<!-- <script>
import { BaseIcon } from '@/components'
import { useGlobalStore } from '@/store';
import { mapState } from 'pinia';

export default {
  name: 'Navbar',
  components: {
    BaseIcon
  },
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "Sobre", "#features"],
      ["mdi-download-box-outline", "Download", "#download"],
      ["mdi-currency-usd", "Preços", "#pricing"],
      ["mdi-email-outline", "Contatos", "#contact"],
    ],
    menus: [
      {
        name: 'sponsor'
      },
      {
        name: 'events'
      },
    ]
  }),
  computed: {
    ...mapState(useGlobalStore, ['pages']),
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 500;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

}
</script> -->

<style scoped>
.router-link {
  display: flex;
  align-items: center;
  font-family: var(--font-title);
  color: var(--color-black);
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.2s;
}

.router-link:hover,
.router-link-active {
  color: var(--color-secondary);
}

.dense-link {}
</style>
