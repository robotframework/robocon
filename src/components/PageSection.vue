<template>
  <div
    class="mb-xlarge p-small"
    tabindex="-1">
    <a class="anchor" :id="titleId"></a>
    <div class="bar" v-if="titleId !== 'intro' && title" />
    <div class="row">
      <div
        v-if="!fullWidth"
        class="col-sm-12 col-lg-3 pr-large"
        :class="$store.state.isMobile ? '' : 'pt-3xsmall'">
        <h2 :id="titleId">
          {{ title }}
        </h2>
        <h3 v-if="!$store.state.isMobile && subtitle" class="pl-3xsmall">
          {{ subtitle }}
        </h3>
      </div>
      <div class="col-sm-12 col-lg-9 row" :class="fullWidth ? 'col-lg-12' : 'col-lg-9'">
        <div
          v-if="body !== ''"
          v-html="body" />
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSection',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String
    },
    body: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      required: true
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
a.anchor {
  display: block;
  position: relative;
  top: -15vh;
  visibility: hidden;
}
  h2::before {
    display: block;
    content: " ";
    margin-top: -50px;
    height: 50px;
    visibility: hidden;
    pointer-events: none;
  }
  @media screen and (max-width: 1280px) {
    h2::before {
      margin-top: -80px;
      height: 80px;
    }
  }
  @media screen and (min-width: 1281px) {
    h2 {
      position: sticky;
      top: 2rem;
    }
    h3 {
      position: sticky;
      top: 7.5rem;
    }
  }
</style>
