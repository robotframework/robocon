<template>
  <div class="row bg-black color-white p-small pt-large pb-large" style="margin-top: auto">
    <div class="container" style="line-height: 2;">
      <div class="row">
        <div class="col-sm-6 col-md-3">
          <h3 class="mb-small">
            <a href="https://robotframework.org/foundation/">Foundation</a>
          </h3>
          <div>
            Robot Framework ry
          </div>
          <div>
            Kampinkuja 2
          </div>
          <div>
            00100 Helsinki
          </div>
          <div>
            Finland
          </div>
          <a href="mailto:robotframework-foundation@googlegroups.com">
            Contact
          </a>
        </div>
        <div
          class="col-sm-6 col-md-3"
          :class="$store.state.isMobile ? 'type-right' : ''">
          <h3 class="mb-small">
            Community
          </h3>
          <div>
            <a href="https://github.com/robotframework/robotframework">
              GitHub
            </a>
          </div>
          <div>
            <a href="https://forum.robotframework.org/">
              Forum
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/robotframeworkofficial">
              Facebook
            </a>
          </div>
          <div>
            <a href="https://twitter.com/robotframework">
              Twitter
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/groups/3710899/">
              LinkedIn
            </a>
          </div>
        </div>
        <div v-if="$store.state.isMobile" class="col-sm-12 mb-large" />
        <div class="col-sm-6 col-md-3">
        </div>
        <div class="col-sm-6 col-md-3 flex flex-col between">
          <div />
          <div :class="$store.state.isMobile ? 'type-right' : ''">
            <div>
              <a href="https://robotframework.org">
                Robot Framework
              </a>
            </div>
            <div>
              <a href="https://robotframework.org/privacy-policy">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import GlobeIcon from './icons/GlobeIcon.vue'

export default {
  name: 'PageFooter',
  components: {
    // GlobeIcon
  },
  data: () => ({
    langDropdownOpen: false
  }),
  computed: {
    langNames() {
      return Object.keys(this.$i18n.messages)
        .map((lang) => ({ lang, name: this.$i18n.messages[lang].langName }))
        .filter(({ name }) => name !== 'translation')
    }
  },
  methods: {
    setLang(lang) {
      this.$i18n.locale = lang
      window.localStorage.setItem('lang', lang)
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  div {
    font-size: var(--type-small);
  }
  h3 {
    font-size: var(--type-body);
  }
}
</style>
