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
      :title="$t('home.intro.title')">
      <div class="row center col-lg-8">
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
      <div class="col-lg-4" :class="$store.state.isDesktop && 'pl-medium'">
        <h2 class="type-body type-center mt-small mb-xsmall">
          Timeline - Helsinki
        </h2>
        <div class="card p-small mb-small">
          <h3>
            Workshops
          </h3>
          January 17th
          <p class="type-small">
            Join a workshop for an ultimate hands-on learning experience in Helsinki.
          </p>
          <p class="type-small">
            There are several different workshops so you'll surely find one that
            caters your needs and experience level!
          </p>
          <p class="type-small color-theme">
            Tickets available soon!
          </p>
        </div>
        <div class="card p-small mb-small">
          <h3>
            Sprints
          </h3>
          January 18th
          <p class="type-small">
            Contribute to an existing project in the Robot Framework ecosystem
            or pitch a project idea you'd like to work on with others. Or just
            join to meet other Robot Framework users and developers!
          </p>
        </div>
        <div class="card p-small">
          <h3>
            Main conference
          </h3>
          January 19th & 20th
          <p class="type-small">
            Held at <a href="https://goo.gl/maps/jEW5zoLuZgmca6D1A">Bio Rex</a> in city center.
          </p>
        </div>
      </div>
    </page-section>
    <page-section title-id="sponsors" title="Sponsors">
      <sponsors :sponsors="$tm('home.sponsors')" />
    </page-section>
    <page-section title-id="workshops" title="Workshops">
      <h3 class="mt-large">Helsinki, in-person</h3>
      <talks-2023 v-if="workshops.length" :items="workshops" />
      <div v-else>
        Loading workshops...
      </div>
    </page-section>
    <page-section title-id="talks" title="Talks">
      <template v-if="talks.length">
        <h3 class="mt-large">Helsinki</h3>
        <talks-2023 :items="talks" />
        <div class="mt-large">
          Online talks will be released soon, stay tuned!
        </div>
      </template>
      <div v-else>
        Loading talks...
      </div>
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
    talks: [],
    workshops: []
  }),
  created() {
    Promise.all([
      fetch('https://cfp.robocon.io/api/events/robocon-2023/submissions/'),
      fetch('https://pretalx.com/api/events/robocon-2023/schedules/latest/')
    ])
      .then(async([submissions, schedule]) => {
        const talks = await submissions.json()
        const { breaks } = await schedule.json()
        return [talks.results, breaks]
      })
      .then(([list, breaks]) => {
        const talks = list
          .filter(({ submission_type }) => submission_type.en && ['Talk', 'Keynote'].includes(submission_type.en)) // eslint-disable-line
        const workshops = list
          .filter(({ submission_type }) => submission_type.en && submission_type.en.includes('Workshop')) // eslint-disable-line
        const breaksParsed = breaks
          .map((item) => ({
            ...item,
            submission_type: item.description.en.toLowerCase().includes('talk') ? 'Misc' : 'Break'
          }))

        this.talks = [...talks, ...breaksParsed]
          .map((item) => ({
            ...item,
            slot: item.slot || { start: item.start, end: item.end },
            type: item.submission_type.en || item.submission_type
          }))
          .sort((a, b) => new Date(a.slot.start) < new Date(b.slot.start) ? -1 : 1)
        this.workshops = workshops
          .sort((a, b) => a.slot.room.en < b.slot.room.en ? -1 : 1)

        this.$nextTick(() => {
          const hash = window.location.hash
          if (!hash || hash === '') return
          const el = document.getElementById(hash.slice(1))
          if (el) el.scrollIntoView()
        })
      })
    // fetch('https://cfp.robocon.io/api/events/robocon-2023/submissions/')
    //   .then((res) => res.json())
    //   fetch('https://pretalx.com/api/events/robocon-2023/schedules/latest/')
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
