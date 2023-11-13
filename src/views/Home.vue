<template>
  <div class="container narrow row middle p-small pt-medium pb-medium">
    <div class="col-sm-12 center start-lg col-lg-9 col-lg-offset-3 flex">
      <h1 class="color-white">RBCN<span class="color-theme">24</span></h1>
      <div class="hidden-sm" :class="!isFirefox ? 'pt-medium' : ''">
        <globe-rbcn />
      </div>
    </div>
  </div>
  <news-banner v-if="$t('newsBanner') !== ''">
    <div v-html="$t('newsBanner')" />
  </news-banner>
  <div class="container narrow border-top-theme">
    <page-section title-id="intro" :title="$t('home.intro.title')">
      <p>
        RoboCon is the crown jewel of the
        <span class="color-theme">Robot Framework community</span>. Once again
        we are gathering together as a community to learn, exchange knowledge
        and have a great time with one another.
      </p>
      <p class="mb-medium">
        For <span class="color-theme">RoboCon 2024</span> we will have a
        familiar fully in-person conference and then a few weeks later a full
        online conference like the year before.
      </p>
      <div class="col-sm-12 row center between-md">
        <Ticket link="https://tickets.robotframework.org/robocon-2024/3913179/" class="mb-small">
          <template v-slot:title>
            Main Conference<br>In-person<br>
          </template>
          <template v-slot:price>
            <s>1200</s> 800 €<div class="type-xsmall"> + VAT</div>
          </template>
          <template v-slot:left>
            FEB 08-09
          </template>
          <template v-slot:right>
            2024
          </template>
        </Ticket>
        <Ticket link="https://tickets.robotframework.org/robocon-2024/3913180/">
          <template v-slot:title>
            Main Conference<br>Online
          </template>
          <template v-slot:price>
            <s>300</s> 200 €<div class="type-xsmall"> + VAT</div>
          </template>
          <template v-slot:left>
            FEB 28-29
          </template>
          <template v-slot:right>
            2024
          </template>
        </Ticket>
      </div>
      <sponsors :sponsors="$tm('home.sponsors')" />
      <p class="mt-large">
        <span class="color-theme">The in-person conference</span> will be held in Helsinki 8-9 February, 2024.
      </p>
      <p>
        Please also reserve the 6th and 7th of February for learning in the workshops and for the Community Day. The Community Day is an open space for the community to learn, discuss and advance topics related to Robot Framework. This might include workshop participants practicing what they learned with the help of the workshop facilitators.
      </p>
      <p>
        Moreover, on the 10th of February there will be some laid back touristic day activity.
      </p>
      <p>
        <span class="color-theme">The online conference</span> will take place
        28-29 February, 2024 followed by the community day on the 1st of March.
      </p>
      <div class="row col-sm-12">
        <div class="col-sm-12 col-md-5 bg-secondary p-small rounded mb-small">
          <h3>In-person</h3>
          <div>Helsinki, Finland</div>
          <a href="https://www.scandichotels.com/hotels/finland/helsinki/scandic-grand-marina/meetings-conferences-events/scandic-marina-congress-center">Marina Congress Center</a>
          <span class="line-height-1">
            <div class="mt-small color-theme font-title type-body">Feb 6th</div>
            Workshops - <a href="https://tickets.robotframework.org/robocon-2024/3997180/">tickets</a>
            <div class="mt-small color-theme font-title type-body">7th</div>
            Community Day
            <div class="mt-small color-theme font-title type-body">8th</div>
            Main Conference
            <div>+ Community Dinner</div>
            <div class="mt-small color-theme font-title type-body">9th</div>
            Main Conference
            <div>+ After Party</div>
            <div class="mt-small color-theme font-title type-body">10th</div>
            Fun activity
          </span>
        </div>
        <div class="col-sm-12 col-md-5 col-md-offset-1 bg-secondary p-small rounded mb-small">
          <h3>Online</h3>
          <a href="https://www.gather.town/">Gather.town</a>
          <span class="line-height-1">
            <div class="mt-small color-theme font-title type-body">Feb 28th</div>
            Main Conference
            <div class="mt-small color-theme font-title type-body">29th</div>
            Main Conference
            <div class="mt-small color-theme font-title type-body">Mar 1st</div>
            Community Day
          </span>
        </div>
      </div>
    </page-section>
    <page-section title-id="talks" :title="'Talks'">
      <talks24 />
    </page-section>
    <page-section title-id="workshops" :title="'Workshops'">
      <workshops24 />
    </page-section>
    <page-section title-id="hotels" :title="'Hotels'">
      <p>
        If you are looking for <span class="color-theme">accommodation</span>, you may reserve a hotel at a discounted rate via the following links:
      </p>
      <div class="row">
        <div class="col-sm-6 pr-medium pl-small">
          <img style="width: 100%" class="rounded" src="https://cache.marriott.com/content/dam/marriott-renditions/HELAK/helak-corner-suite-6602-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=*:423px" />
          <a class="block type-center" href="https://bit.ly/HotelU14">Hotel U14</a>
        </div>
        <div class="col-sm-6 pl-medium pr-small">
          <img style="width: 100%" class="rounded" src="https://be.synxis.com/shs-ngbe-image-resizer/images/hotel/69715/images/room/170222_f6_huonexxx_001.jpg" />
          <a class="block type-center" href="https://bit.ly/HotelF6">Hotel F6</a>
        </div>
      </div>
    </page-section>
  </div>
</template>

<script>
import { PageSection, NewsBanner, Ticket, Talks24, Workshops24, Sponsors, GlobeRbcn } from 'Components'

export default {
  name: 'App',
  components: {
    PageSection,
    NewsBanner,
    Ticket,
    Talks24,
    Workshops24,
    Sponsors,
    GlobeRbcn
  },
  data: () => ({
    // FF renders different height for rbcn font for some reason
    isFirefox: false
  }),
  created() {
    if (navigator.userAgent && navigator.userAgent.match(/firefox|fxios/i)) {
      this.isFirefox = true
    }
    const params = new URLSearchParams(window.location.search)
    const entries = Object.fromEntries(params.entries())
    if (entries.auth) {
      this.$router.replace({ name: 'Robocon2023', query: entries })
    }
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
