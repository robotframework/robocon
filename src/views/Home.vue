<template>
  <nav-mobile />
  <banner />
  <navbar class="nav-desktop" />
  <news-banner
    v-if="$te('newsBanner') && $t('newsBanner') !== ''"
    class="mb-small mt-small" />
  <div v-else class="mb-xlarge" />
  <div class="container mb-xlarge">
    <page-section
      title-id="intro"
      :title="$t('intro.title')"
      :body="$t('intro.body')">
      <div class="col-sm-12 col-lg-9 col-lg-offset-3 row center">
        <ticket
          v-for="ticket in $tm('intro.tickets')"
          :key="ticket.title"
          class="mr-medium mb-large"
          :ticket="ticket" />
      </div>
      <tab-box
        class="col-sm-12 col-lg-9 col-lg-offset-3"
        section-id="intro"
        :tabs="$tm('intro.tabs')" />
    </page-section>
    <page-section
      title-id="cfp"
      :title="$t('cfp.title')"
      :body="$t('cfp.body')">
    </page-section>
    <page-section
      title-id="covid"
      :title="$t('covid.title')"
      :body="$t('covid.body')">
    </page-section>
  </div>
  <page-footer />
</template>

<script>
import {
  Banner,
  PageFooter,
  Navbar,
  NavMobile,
  PageSection,
  TabBox,
  NewsBanner,
  Ticket
} from 'Components'

export default {
  name: 'App',
  components: {
    Banner,
    PageFooter,
    Navbar,
    NavMobile,
    PageSection,
    TabBox,
    NewsBanner,
    Ticket
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .nav-desktop {
    display: none;
  }
}
</style>
