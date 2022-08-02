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
    youTubeLinks: [
      {
        id: 16199,
        title: 'Keynote: Robot Framework',
        link: 'jlhgitypC5Q'
      },
      {
        id: 16575,
        title: 'Robocorp == RPA for Developers',
        link: 'MuD7yhIIdCU'
      },
      {
        id: 15091,
        title: 'Test Intelligence for and with the Robot Framework',
        link: 'i8cSTAoe_hw'
      },
      {
        id: 13962,
        title: 'Our Robot Framework Automation Journey : Medidata Solutions',
        link: 'PFqmZ5GwXgg'
      },
      {
        id: 13325,
        title: 'Tests are talking, are you ready to listen?',
        link: 'sm2XQ-kM2GA'
      },
      {
        id: 15745,
        title: 'How Robocop evolved to 2.0?'
      },
      {
        id: 15776,
        title: 'Tidy your code with Robotidy'
      },
      {
        id: 13717,
        title: 'Project and package management: Poetry for robots'
      },
      {
        id: 14114,
        title: 'CamundaLibrary - Updates and Roadmap'
      },
      {
        id: 13550,
        title: 'Accessability checking with Browser Extensions'
      },
      {
        id: 14173,
        title: 'Web-scale Robot Framework with JupyterLite'
      },
      {
        id: 14366,
        title: 'Robots In Space'
      },
      {
        id: 15650,
        title: 'Using implicit context to create rich behavior driven keywords'
      },
      {
        id: 14362,
        title: 'Robot Framework Is Not ...'
      },
      {
        id: 14361,
        title: 'Combining all test reports to one'
      },
      {
        id: 15775,
        title: 'Analyze your code like true detective'
      },
      {
        id: 15772,
        title: 'Yet another API talk, but this one is different...'
      },
      {
        id: 14574,
        title: 'Output Robot Framework report using Github Actions'
      },
      {
        id: 14705,
        title: 'Reactive Robot - Fastest way to turn Robot Framework projects into event-driven services'
      },
      {
        id: 14314,
        title: '\\u201cFor the very first time\\u201d - Start to Code, Test, Package & Publish your first Library'
      },
      {
        id: 14337,
        title: 'robotframework for silicon validation'
      },
      {
        id: 14327,
        title: 'HybridApp - hybrid testing'
      },
      {
        id: 13716,
        title: 'Introducing OpenApiDriver...and OpenApiLibCore!'
      },
      {
        id: 14335,
        title: 'Robot Framework and commercial testing tools integration - based on regression project for SWT app'
      },
      {
        id: 15637,
        title: 'Eggplant Library - connecting Robot Framework to advanced image based automation'
      },
      {
        id: 14297,
        title: 'Year with Browser library'
      },
      {
        id: 14681,
        title: 'Robots in the Clouds: Experiences with Using Robotframework with Cloud Providers'
      },
      {
        id: 16203,
        title: 'The neuroscience of learning, creativity and collaboration'
      }
    ],
    loaded: false
  }),
  mounted() {
    this.ticket = this.$tm('home.tickets').find(({ side }) => side === '2022-MAY')
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
            yt_link: null,
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
              .map((talk) => ({
                ...talk,
                yt_link: this.youTubeLinks.find(({ id }) => id === talk.id)?.link
              }))
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
            this.talks.forEach((talk) => {
              const foundTalk = talks.find(({ url }) => url.includes(talk.code))
              if (foundTalk) talk.yt_link = foundTalk.yt_link
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
