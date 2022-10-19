<template>
  <banner>
    <div>
      <h1 class="color-white"><span class="">RBCN</span><span class="color-theme">23</span></h1>
    </div>
  </banner>
  <news-banner>
    {{ $t('newsBanner') }}
  </news-banner>
  <div class="container">
    <page-section
      title-id="intro"
      :title="$t('home.intro.title')"
      :full-width="true">
      <div class="row center col-lg-7 col-lg-offset-3">
        <div v-html="$t('home.intro.body')" class="mb-large" />
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
    <page-section title="Talks">
      <talks-2023 v-if="talks.length" :talks="talks" />
    </page-section>
  </div>
</template>

<script>
import {
  Banner,
  PageSection,
  Sponsors,
  Ticket,
  Talks2023,
  NewsBanner
} from 'Components'

export default {
  name: 'App',
  components: {
    Banner,
    PageSection,
    Sponsors,
    Ticket,
    Talks2023,
    NewsBanner
  },
  data: () => ({
    talks: []
  }),
  created() {
    // fa63d553-692a-4c25-9a0d-865af22271f3
    fetch('https://cfp.robocon.io/api/events/robocon-2023/submissions/')
      .then((res) => res.json())
      .then(({ results }) => {
        this.talks = results
          .filter(({ submission_type }) => submission_type.en === 'Talk') // eslint-disable-line
          .sort((a, b) => new Date(a.slot.start) < new Date(b.slot.start) ? -1 : 1)
      })
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
