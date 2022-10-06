<template>
  <banner>
    <div>
      <h1 class="color-white"><span class="">RBCN</span><span class="color-theme">23</span></h1>
    </div>
  </banner>
  <div class="container">
    <page-section
      title-id="intro"
      :title="$t('home.intro.title')"
      :full-width="true">
      <div class="row center col-lg-7 col-lg-offset-3">
        <div v-html="$t('home.intro.body')" />
        <h2>Tickets</h2>
        <p class="mt-medium mb-large type-center">
          The discounted blind tickets are available until talks and conference program are published.
        </p>
        <div
          v-for="ticket in $tm('home.tickets')"
          :key="ticket.title"
          style="display: inline-block">
          <ticket :link="ticket.link">
            <template v-slot:title>
              <div v-html="ticket.title" />
            </template>
            <template v-slot:price>
              <div v-html="ticket.price" />
            </template>
            <template v-slot:left>
              ROBOCON
            </template>
            <template v-slot:right>
              <div v-html="ticket.side" />
            </template>
          </ticket>
        </div>
        <p class="mt-large type-center">
          Tickets also include instant access to <span class="color-theme">2022 talks!</span>
        </p>
      </div>
    </page-section>
    <page-section title="Sponsors">
      <sponsors :sponsors="$tm('home.sponsors')" />
    </page-section>
    <page-section
      title-id="cfp"
      :title="$t('home.cfp.title')">
      <div v-html="$t('home.cfp.body')" />
    </page-section>
  </div>
</template>

<script>
import {
  Banner,
  PageSection,
  Sponsors,
  Ticket
} from 'Components'

export default {
  name: 'App',
  components: {
    Banner,
    PageSection,
    Sponsors,
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
