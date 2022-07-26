<template>
  <div
    ref="nav"
    class="row between p-small sticky bg-background"
    style="top: 0; z-index: 2;">
    <div class="flex middle">
      <base-icon name="robot" color="white" size="1.25rem" />
      <router-link :to="{ name: 'Home' }" class="router-link type-large mx-xsmall">
        ROBOCON
      </router-link>
      <div class="type-xsmall flex">
        |
        <a href="https://robotframework.org/" class="type-xsmall ml-xsmall mr-2xsmall color-white hover-color-theme">
          Robot Framework
        </a>
        Conference
      </div>
    </div>
    <div class="flex">
      <div
        v-for="({ text, name, theme }, i) in links"
        :key="name"
        class="flex">
        <router-link
          :to="{ name }"
          class="router-link type-no-underline"
          :class="theme">
          {{ text }}
        </router-link>
        <div
          v-if="i < links.length - 1"
          class="mx-small">
          |
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  name: 'Navbar',
  components: {
    BaseIcon
  },
  data: () => ({
    links: [
      { text: 'RBCN23', name: 'Home' },
      { text: 'RBCN22DE', name: 'Germany', theme: 'theme-germany' },
      { text: 'RBCN22', name: '2022', theme: 'theme-2022' },
      { text: 'Archive', name: 'Archive' }
    ]
  }),
  computed: {
    langNames() {
      return Object.keys(this.$i18n.messages)
        .map((lang) => ({ lang, name: this.$i18n.messages[lang].langName }))
    }
  },
  methods: {
    itemClick(itemId) {
      const el = document.getElementById(itemId)
      if (!el) return
      // setting window.location.hash causes instant page scroll to that position and we dont want that
      // lets strip urlParams and hash from url and append new hash
      history.replaceState(null, null, `${location.href.split('?')[0].split('#')[0]}#${itemId}`)
      window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      })
      window.plausible('Nav click', { props: { section: itemId } })
    },
    setLang(lang) {
      this.$i18n.locale = lang
      window.localStorage.setItem('lang', lang)
    },
    onClick(ev) {
      // close link dropdown if clicked outside
      if (this.linkDropdownOpen && this.$refs.dropdown && !this.$refs.dropdown.contains(ev.target)) this.linkDropdownOpen = false
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted() {
    const observer = new IntersectionObserver((e) => {
      this.navSticky = !e[0].isIntersecting
    }, { threshold: 1 })
    observer.observe(this.$refs.nav)
    document.addEventListener('click', this.onClick)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.onClick)
  },
  watch: {
    linkDropdownOpen() {
      if (this.linkDropdownOpen) this.langDropdownOpen = false
    },
    langDropdownOpen() {
      if (this.langDropdownOpen) this.linkDropdownOpen = false
    }
  }
}
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
