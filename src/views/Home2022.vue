<template>
  <div class="container mb-xlarge theme-2022">
    <banner22 />
    <page-section
      title-id="intro"
      :title="$t('rbcn2022.intro.title')"
      :body="$t('rbcn2022.intro.body')">
      <div class="row center">
        <ticket v-if="ticket" :link="ticket.link" class="mt-medium center" :class="$store.state.isDesktop && 'ml-none'">
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
        <sponsors class="mt-xlarge" />
      </div>
    </page-section>
    <page-section
      title-id="talks"
      :title="$t('rbcn2022.talks.title')">
      <talks
        v-if="loaded"
        :talks="talks"
        :speakers="speakers"
        header-link="https://tickets.robotframework.org/rc2022/" />
    </page-section>
  </div>
</template>

<script>
import {
  Banner22,
  PageSection,
  Ticket,
  Sponsors,
  Talks
} from 'Components'

export default {
  name: 'App',
  components: {
    Banner22,
    PageSection,
    Ticket,
    Sponsors,
    Talks
  },
  data: () => ({
    ticket: null,
    talks: [],
    workshops: [],
    speakers: [],
    workshopSpeakers: [],
    workshopImages: [],
    workshopLinks: [
      { id: 16882, link: 'https://tickets.robotframework.org/workshops-rc2022/3191186/' },
      { id: 13758, link: 'https://tickets.robotframework.org/workshops-rc2022/3191184/' },
      { id: 13963, link: 'https://tickets.robotframework.org/workshops-rc2022/3191185/' },
      { id: 13231, link: 'https://tickets.robotframework.org/workshops-rc2022/3191183/' },
      { id: 12907, link: 'https://tickets.robotframework.org/workshops-rc2022/2659941/' }
    ],
    loaded: false
  }),
  mounted() {
    this.ticket = this.$tm('home.tickets').find(({ side }) => side === '2022 MAY')
  },
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
        this.workshopImages = speakers
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
            this.$nextTick(() => {
              const hash = window.location.hash
              if (hash === '#workshops') document.getElementById('workshops').scrollIntoView()
              if (hash === '#talks') document.getElementById('talks').scrollIntoView()
            })
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
