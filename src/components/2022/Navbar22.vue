<template>
  <div
    ref="nav"
    class="navbar row center bg-black color-white pb-none">
    <div class="bar22" />
    <!-- section navigation -->
    <transition appear name="opacity-slow">
      <div class="flex mt-xsmall" style="transition-delay: 0.5s;">
        <button
          v-for="(item, i) in $tm('2022.navbar.items')"
          :key="item.name"
          :name="`go-to-${item.name}`"
          class="pl-small color-white font-title type-uppercase type-no-underline"
          @click="itemClick(item.id)">
          {{ item.name }}
          <span v-if="i !== $tm('2022.navbar.items').length - 1" style="color: white !important" class="ml-3xsmall">-</span>
        </button>
      </div>
    </transition>
    <!-- <transition name="opacity">
      <div
        v-if="navSticky"
        class="tiny-logo-container cursor-pointer"
        @click="scrollTop">
        <img :src="`${publicPath}img/RF-white.svg`" />
      </div>
    </transition> -->
    <div class="bar22 mt-small" />
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data: () => ({
    navSticky: false,
    publicPath: process.env.BASE_URL,
    linkDropdownOpen: false,
    langDropdownOpen: false
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
  .navbar {
    top: -1px;
    z-index: 2;
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
