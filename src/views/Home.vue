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
      :poll="true"
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
      <sponsors class="mt-xlarge col-sm-12 col-lg-9 col-lg-offset-3" />
    </page-section>
    <page-section
      title-id="talks"
      :title="$t('talks.title')">
      <talks class="col-sm-12 col-lg-9" />
    </page-section>
    <page-section
      title-id="workshops"
      :title="$t('workshops.title')"
      :body="$t('workshops.description')">
    </page-section>
    <page-section
      title-id="sprints"
      :title="$t('sprints.title')"
      :body="$t('sprints.description')">
    </page-section>
    <!-- <page-section
      title-id="cfp"
      :title="$t('cfp.title')"
      :body="$t('cfp.body')">
    </page-section> -->
    <page-section
      title-id="covid"
      :title="$t('covid.title')"
      :body="$t('covid.body')">
    </page-section>
    <page-section
      title-id="previousTalks"
      :title="$t('previousTalks.title')"
      :body="$t('previousTalks.body')">
      <previous-talks />
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
  Ticket,
  Sponsors,
  Talks,
  PreviousTalks
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
    Ticket,
    Sponsors,
    Talks,
    PreviousTalks
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
