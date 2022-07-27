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
      </div>
      <h2 class="col-lg-offset-3 mt-xlarge">Available Tickets</h2>
      <div
        v-for="ticket in $tm('home.tickets')"
        :key="ticket.title"
        class="row mt-large"
        :class="ticket.theme">
        <div class="col-sm-12 col-lg-3">
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
        <div class="col-sm-12 col-lg-7">
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
