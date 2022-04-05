<template>
  <div class="row m-none">
    <div
      v-for="(item, i) in $tm('intro.timeline')"
      :key="i"
      class="col-sm-12 col-md-4 row"
      :class="$store.state.isMobile ? 'py-small' : (i === 0 ? 'pl-none' : i === 2 ? 'pr-none' : 'pl-small pr-small')">
      <div class="card flex flex-col between middle p-medium" style="height: 100%;">
        <div>
          <div class="col-sm-12 type-small">
            {{ item.date }}
          </div>
          <div class="col-sm-12">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="col-sm-12 mt-small">
            {{ item.description }}
          </div>
        </div>
        <button
          :href="item.href"
          class="theme ticket p-small mt-small weight-bold"
          @click="itemClick(item.href)">
          {{ item.buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
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
      window.plausible('Timeline click', { props: { section: itemId } })
    }
  }
}
</script>

<style scoped>
  .ticket {
    width: fit-content;
  }
</style>
