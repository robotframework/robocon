<template>
    <banner class="mt-xlarge">
      <div>
        <h1 class="color-white"><span class="">RBCN</span><span class="color-theme">23</span></h1>
      </div>
    </banner>
  <div class="container">
    <news-banner
      v-if="$te('newsBanner') && $t('newsBanner') !== ''"
      class="mb-small mt-small" />
    <page-section
      title-id="intro"
      :title="$t('home.intro.title')"
      :full-width="true">
      <div class="row center col-lg-8 col-lg-offset-2">
        <div v-html="$t('home.intro.body')" />
      </div>
      <h2 class="col-lg-offset-3 mt-xlarge">Available Tickets</h2>
      <div
        v-for="ticket in $tm('home.tickets')"
        :key="ticket.title"
        class="row middle mt-large"
        :class="ticket.theme">
        <ticket class="col-sm-12 col-lg-3 pr-medium" :link="ticket.link">
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
        <div class="col-sm-12 col-lg-9">
          <div v-html="ticket.description" />
          <router-link v-if="ticket.page" :to="{ name: ticket.page.to }">
           {{ ticket.page.text }}
          </router-link>
        </div>
      </div>
    </page-section>
  </div>
</template>

<script>
import {
  Banner,
  PageSection,
  Ticket
} from 'Components'

export default {
  name: 'App',
  components: {
    Banner,
    PageSection,
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
