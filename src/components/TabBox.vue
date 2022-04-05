<template>
  <div
    class="card"
    :class="$store.state.isMobile ? 'p-small pt-medium sharp' : 'p-large'">
    <!-- tab buttons -->
    <div class="row">
      <button
        v-for="(tab, i) in tabs"
        :key="tab.name"
        class="type-uppercase theme type-small mb-xsmall"
        :class="[
          activeTabIndex === i ? 'active' : '',
          i === 2 ? 'mr-none' : 'mr-small'
        ]"
        @click="activeTabIndex = i">
        {{ tab.name }}
      </button>
    </div>
    <div v-if="activeTab" class="row mt-small color-white">
      <transition name="opacity" mode="out-in">
        <!-- regular text content -->
        <div
          v-if="!$slots[`tab-${activeTabIndex + 1}`]"
          :key="activeTab.name"
          v-html="activeTab.description" />
        <!-- custom slot content -->
        <div v-else>
          <slot :name="`tab-${activeTabIndex + 1}`" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabBox',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    sectionId: {
      type: String,
      required: true
    }
  },
  data: () => ({
    activeTabIndex: 0,
    eventSent: false
  }),
  computed: {
    activeTab() {
      return this.tabs[this.activeTabIndex]
    }
  },
  created() {
    // if url contains searchParam, open specific tab
    if (window.location.hash !== `#${this.sectionId}`) return
    const param = new URLSearchParams(window.location.search)
    const tab = param.get('tab')
    if (!tab) return
    this.activeTabIndex = Number(tab)
  },
  watch: {
    activeTab() {
      if (!this.eventSent) {
        window.plausible('Interact', { props: { element: this.sectionId } })
        this.eventSent = true
      }
      const newUrl = `${window.location.href.split('?')[0].split('#')[0]}?tab=${this.activeTabIndex}#${this.sectionId}`
      history.replaceState(null, null, newUrl)
    }
  }
}
</script>
