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
      <talks
        v-if="loaded"
        :talks="talks"
        :speakers="speakers"
        class="col-sm-12 col-lg-9" />
    </page-section>
    <page-section
      title-id="workshops"
      :title="$t('workshops.title')">
      <talks
        v-if="loaded"
        :talks="workshops"
        :speakers="workshopSpeakers"
        :talks-with-pictures="talks"
        class="col-sm-12 col-lg-9" />
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
  },
  data: () => ({
    talks: [],
    workshops: [],
    speakers: [],
    workshopSpeakers: [],
    workshopLinks: [
      { id: 16882, link: 'https://tickets.robotframework.org/workshops-rc2022/3191186/' },
      { id: 13758, link: 'https://tickets.robotframework.org/workshops-rc2022/3191184/' },
      { id: 13963, link: 'https://tickets.robotframework.org/workshops-rc2022/3191185/' },
      { id: 13231, link: 'https://tickets.robotframework.org/workshops-rc2022/3191183/' },
      { id: 12907, link: 'https://tickets.robotframework.org/workshops-rc2022/2659941/' }
    ],
    loaded: false
  }),
  created() {
    fetch('https://cfp.robocon.io/robocon-2022/schedule/widget/v2.json')
      .then((res) => res.json())
      .then(({ talks, speakers }) => {
        this.talks = talks
          .filter(({ room }) => room === 1193)
          .map((talk) => ({
            ...talk,
            expanded: false,
            speakers: talk.speakers ? talk.speakers.map((code) => ({
              code,
              avatar: speakers.find((speaker) => speaker.code === code).avatar,
              name: speakers.find((speaker) => speaker.code === code).name,
              expanded: false
            })) : []
          }))
      })
      .then(() => {
        fetch('https://pretalx.com/robocon-2022/schedule/export/schedule.json')
          .then((res) => res.json())
          .then(({ schedule }) => {
            const talks = schedule.conference.days
              .filter(({ date }) => ['2022-05-19', '2022-05-20'].includes(date))
              .flatMap(({ rooms }) => rooms['Main Hall'])
            const workshopsDay = schedule.conference.days
              .find(({ date }) => date === '2022-05-17')
            const workshops = Object.keys(workshopsDay.rooms)
              .reduce((arr, room) => [...arr, workshopsDay.rooms[room][0]], [])
              .map((workshop) => ({
                ...workshop,
                ticketLink: this.workshopLinks.find(({ id }) => id === workshop.id).link
              }))
            this.workshops = workshops
              .map((workshop) => ({
                ...workshop,
                start: workshop.date,
                speakers: workshop.persons
              }))
            this.workshopSpeakers = workshops
              .flatMap(({ persons }) => persons)
            this.speakers = schedule.conference.days
              .flatMap(({ rooms }) => (('Main Hall' in rooms) ? rooms['Main Hall'] : [])
                .flatMap(({ persons }) => persons))
              .filter(({ code }, index, self) => self.map(({ code }) => code).indexOf(code) === index)
            this.talks.forEach((talk) => {
              const foundTalk = talks.find(({ url }) => url.includes(talk.code))
              if (foundTalk) talk.description = foundTalk.description
            })
            this.loaded = true
          })
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
