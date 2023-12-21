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
            1200 €<span class="type-xsmall"> + VAT</span>
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
            300 €<span class="type-xsmall"> + VAT</span>
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
        Moreover, on the 10th of February there will be a walking tours and other optional activities in Helsinki.
      </p>
      <details class="pl-small">
        <summary>
          Plans for tour day (10th Feb)
        </summary>
        <h3 class="mt-small">
          Helsinki Walk with Pekka Klärck
        </h3>
        <p>
          Take a walk through some neighborhoods with Pekka Klärck. Starting in central Helsinki, Pekka will lead you up through the neighborhoods of Kallio, Vallila, and over towards Pasila. Along the way you will be visiting a famous food market hall, seeing beautiful parts of the city outside of the city central, stop for some Coffee break at Sävy or Helsingin Kahvipaahtimo. Later there will be an option for a brewery tour at Vallilan Panimo and possible sauna at a local community sauna.
        </p>
        <h3>
          Suomenlinna tour with Jenna, Eeva and Ed
        </h3>
        <p>
          This group will visit Suomenlinna, an island within the city harbor just south of Market Square, and viewable from this year’s conference venue. Taking a short 15 minute, 3€ ferry/public transportation will travel from Market Square. Jenna and Eeva, both Robot Framework community members and Helsinki locals will travel with us and share from their experiences. On the island there are opportunities for exploring the islands, enjoying some food. There is also a 13€ per person Guided tour which we could take advantage of. This tour will end mid afternoon.
        </p>
        <p>
          Both options will start late morning. If weather is really bad we will have backup plans probably to the local museums of which there are about half a dozen in the immediate area. More information will be published as we get closer to the conference dates.
        </p>
      </details>
      <p>
        In-person ticket includes a complimentary online conference ticket.
      </p>
      <p>
        <span class="color-theme">The online conference</span> will take place
        28-29 February, 2024 followed by the community day on the 1st of March.
      </p>
      <div class="row col-sm-12">
        <div class="col-sm-12 col-md-6 px-small">
          <div class="bg-secondary p-medium pt-large pb-large rounded mb-small">
            <h2>In-person</h2>
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
        </div>
        <div class="col-sm-12 col-md-6 px-small">
          <div class="bg-secondary p-medium pt-large pb-2xlarge rounded mb-small">
            <h2>Online</h2>
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
      </div>
    </page-section>
    <page-section title-id="tutorials" :title="'Tutorials'">
      <p>
        Tutorials offer you a sneak peek into specific topics, each uniquely designed for different levels of expertise. This year, we're excited to provide <span class="weight-bold">free beginner-level tutorials during the Community Day of our in-person conference.</span> <a href="https://tickets.robotframework.org/robocon-2024/3997179/">Enroll here, please!</a>
        </p>
        <p>
Moreover, a wide array of exceptional online tutorials will be spread across the days before and after the online conference, <span class="type-underline-theme weight-bold">accessible exclusively to ticket holders.</span> Don't miss this opportunity to enhance your skills and knowledge in a tailored, engaging environment.
      </p>
      <tutorials24 :speakers="speakers" />
    </page-section>
    <page-section title-id="workshops" :title="'Workshops'">
      <p>
        The in-person conference week kicks off with our exceptional hands-on workshops. These serve as your gateway to a deep dive into specific topics, allowing you to learn practically in a small group setting.
      </p>
      <p>
        We offer a diverse range of workshops covering various topics and skill levels. Be sure to choose one that's just right for you!
      </p>
      <workshops24 :speakers="speakers" />
    </page-section>
    <page-section title-id="talks" :title="'Talks'">
      <talks24 :speakers="speakers" />
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
import { PageSection, NewsBanner, Ticket, Talks24, Workshops24, Tutorials24, Sponsors, GlobeRbcn } from 'Components'

export default {
  name: 'App',
  components: {
    PageSection,
    NewsBanner,
    Ticket,
    Talks24,
    Workshops24,
    Tutorials24,
    Sponsors,
    GlobeRbcn
  },
  data: () => ({
    // FF renders different height for rbcn font for some reason
    isFirefox: false,
    speakers: []
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
    Promise.all([
      fetch('https://cfp.robocon.io/api/events/robocon-2024/submissions/'),
      fetch('https://cfp.robocon.io/api/events/robocon-2024/submissions/?offset=25'),
      fetch('https://cfp.robocon.io/api/events/robocon-2024/submissions/?offset=50')
    ])
      .then(async([first, second, third]) => {
        const f = await first.json()
        const s = await second.json()
        const t = await third.json()
        const arr = [...f.results, ...s.results, ...t.results]
        this.speakers = arr.flatMap(({ speakers }) => speakers)
      })
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
