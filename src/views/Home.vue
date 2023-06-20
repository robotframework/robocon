<template>
  <div class="container narrow row bottom p-small pt-medium pb-medium">
    <div class="col-sm-12 col-md-9 flex middle col-md-offset-3">
      <h1 class="color-white">
        RBCN<span class="color-theme">24</span>
      </h1>
      <base-icon v-if="$store.state.isDesktop" name="robot" color="white" size="5.5rem" class="ml-xsmall mt-xsmall" />
    </div>
  </div>
  <news-banner v-if="$t('newsBanner') !== ''">
    <div v-html="$t('newsBanner')" />
  </news-banner>
  <div class="container narrow border-top-theme">
    <page-section
      title-id="intro"
      :title="$t('home.intro.title')">
      <div v-html="$t('home.intro.body')" class="mb-small" />
      <div class="row col-sm-12 flex-grow mb-large">
        <div class="col-sm-12 col-md-5 bg-secondary p-small rounded mt-small">
          <h3>Live</h3>
          <div>Feb 6th - 9th</div>
          <div>Helsinki, Finland</div>
        </div>
        <div class="col-sm-12 col-md-5 bg-secondary p-small col-md-offset-1 rounded mt-small">
          <h3>Online</h3>
          <div>Feb 28th - Mar 1st</div>
          <div>Gather.town</div>
        </div>
      </div>
      <h3>
        About the conference
      </h3>
      <p>
        RoboCon is the crown jewel of the <span class="color-theme">Robot Framework community</span>. Once again we are gathering together as a community to learn, exchange knowledge and have a great time with one another. For RoboCon 2024 we will have a familiar fully in-person conference and then a few weeks later a full online conference like the year before.
      </p>
      <p>
        <span class="color-theme">The in-person conference</span> will be held in Helsinki 8-9 February, 2024. Please also reserve the 6th and 7th of February for learning in the workshops and for the Community Day. The Community Day is an open space for the community to learn, discuss and advance topics related to Robot Framework. This might include workshop participants practicing what they learned with the help of the workshop facilitators.
      </p>
      <p>
        <span class="color-theme">The online conference</span> will take place 28-29 February, 2024 followed by the community day on the 1st of March.
      </p>
    </page-section>
    <page-section
      title-id="cfp"
      :title="$t('home.cfp.title')">
      <div v-html="$t('home.cfp.body')" class="mb-large" />
    </page-section>
  </div>
</template>

<script>
import {
  PageSection,
  NewsBanner,
  BaseIcon
} from 'Components'

export default {
  name: 'App',
  components: {
    BaseIcon,
    PageSection,
    NewsBanner
  },
  created() {
    const params = new URLSearchParams(window.location.search)
    const entries = Object.fromEntries(params.entries())
    if (entries.auth) this.$router.replace({ name: 'Robocon2023', query: entries })
  },
  methods: {
    goTo(id) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
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
