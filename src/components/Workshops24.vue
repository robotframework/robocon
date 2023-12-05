<template>
  <div class="w-100">
    <p>Workshops are held in Helsinki, February 6th 2024.</p>
    <p><a href="https://tickets.robotframework.org/robocon-2024/3997180/">Get your workshop tickets here!</a></p>
    <div v-for="workshop in workshops" :key="workshop.id" class=" mt-large card p-small">
      <a class="anchor" :id="getSlug(workshop['Proposal title'])"></a>
      <div class="flex between">
        <h3>
          {{ workshop['Proposal title'] }}
        </h3>
        <a v-if="!$store.state.isMobile" title="get link to talk" :href="`#${getSlug(workshop['Proposal title'])}`">
          <link-icon style="transform: translateY(2px)" />
        </a>
      </div>
      <p class="type-small m-none">
        {{ format(new Date(workshop.Start), 'MMM dd') }} {{ getShownTime(workshop.Start) }} - {{ getShownTime(workshop.End) }} ({{Intl.DateTimeFormat().resolvedOptions().timeZone}})
      </p>
      <div v-html="parseText(workshop.Abstract)" />
      <details class="details">
        <summary>
          Full description
        </summary>
        <div v-html="parseText(workshop.Description)" class="p-small" />
        <h3 class="pl-small">
          Lessons learned
        </h3>
        <div v-html="parseText(workshop['Lessons Learned'])" class="p-small" />
        <h3 class="pl-small">
          Intended audience
        </h3>
        <div v-html="parseText(workshop['Describe your intended audience'])" class="p-small" />
        <h3 class="pl-small">
          Suitable for
        </h3>
        <div v-html="parseText(workshop['Is this suitable for ..?'])" class="p-small" />
      </details>
      <h3 class="mt-xlarge">Presenters</h3>
      <details
        v-for="(speakerId, i) in workshop['Speaker IDs']"
        :key="speakerId"
        class="card sharper mb-medium mt-medium">
        <summary class="bio">
          <div class="middle" style="display: inline-flex">
            <div class="mr-small">
              <img :src="getSpeaker(speakerId)?.avatar || `${publicPath}/img/speaker_img_placeholder.jpg`" class="rounded-small block" style="width: 5rem; aspect-ratio: 1; object-fit: cover;" />
            </div>
            <div class="">
              <h4 class="type-small type-underline">
                  {{ getSpeaker(speakerId)?.name || workshop['Speaker names']?.[i] || "-" }}
                </h4>
            </div>
          </div>
        </summary>
        <div class="col-sm-12 p-medium pl-large pr-small">
            <p
              class="type-small m-none pl-2xsmall"
              v-html="parseText(getSpeaker(speakerId)?.biography) || '-'" />
          </div>
      </details>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import { format } from 'date-fns'
import LinkIcon from './icons/LinkIcon.vue'
// import talks24 from '../robocon-2024_sessions.json'

export default {
  name: 'Workshops24',
  components: {
    LinkIcon
  },
  props: {
    speakers: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    publicPath: process.env.BASE_URL
  }),
  computed: {
    workshops: () => {
      // const token = 'b74612486ee49e41dea2d8b78e88c745c7e02bd8'

      const talks24 = fetch(
        'https://pretalx.com/robocon-2024/schedule/export/schedule.json?export_format=json&target=confirmed&title=on&state=on&submission_type=on&track=on&abstract=on&description=on&duration=on&slot_count=on&content_locale=on&image=on&speaker_ids=on&speaker_names=on&room=on&start=on&end=on&question_2642=on&question_2647=on&question_2648=on',
        {
          headers: {
            // Authorization: `Token ${token}`,
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Access-Control-Allow-Methods, access-control-allow-origin, Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Method': 'GET'
          }
        })
        .then(r => r.json())
        .then(s => s.schedule.conference.days.flatMap(d => Object.values(d.rooms).flat())
          .map(t => {
            return {
              ID: t.id,
              'Proposal title': t.title,
              'Session type': {
                en: t.type
              },
              Abstract: t.abstract,
              Description: t.description,
              'Speaker IDs': t.persons.map(p => p.code),
              'Speaker names': t.persons.map(p => p.public_name),
              Room: {
                en: t.room
              },
              Start: new Date(t.date).toISOString(),
              End: (() => {
                const end = new Date(t.date)
                const times = t.duration.split(':')
                const duration = times[0] * 60 * 60 * 1000 + times[1] * 60 * 1000
                end.setTime(end.getTime() + duration)
                return end.toISOString()
              })(),
              'Lessons Learned': t.answers.find(a => a.question === 2642)?.answer,
              'Describe your intended audience': t.answers.find(a => a.question === 2647)?.answer,
              'Is this suitable for ..?': t.answers.find(a => a.question === 2648)?.answer
            }
          })).then(t => t.filter((talk) => talk['Session type'].en.includes('Workshop')))
      return talks24
    }
  },
  methods: {
    format,
    getShownTime(time) {
      const date = new Date(time)
      const hours = date.getHours()
      const minutes = date.getMinutes()
      return `${hours}:${minutes === 0 ? '00' : minutes}`
    },
    parseText(description) {
      return marked.parse(description || '')
    },
    getSlug(title) {
      if (!title) return ''
      return `${title.replace(/[ ]/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`
    },
    getSpeaker(speakerId) {
      return this.speakers.find(({ code }) => code === speakerId)
    }
  },
  mounted() {
    setTimeout(() => {
      console.log(this.speakers)
    }, 1000)
  }
}
</script>

<style scoped>
a.anchor {
  display: block;
  position: relative;
  top: -15vh;
  visibility: hidden;
}
details summary {
  cursor: pointer;
  list-style-type: ">";
  color: var(--color-theme);
  font-weight: 600;
}
details[open] > summary {
  list-style-type: '↓';
}
details summary.bio {
  list-style-type: '';
}
details.details >>> p {
  display: inline;
}
details summary.bio::-webkit-details-marker {
  display:none;
}
</style>
