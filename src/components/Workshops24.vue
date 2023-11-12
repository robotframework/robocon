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
      <div class="mb-small">
        {{ workshop['Speaker names'].join(', ') }}
      </div>
      <div v-html="parseText(workshop.Abstract)" />
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import { format } from 'date-fns'
import LinkIcon from './icons/LinkIcon.vue'
import talks24 from '../robocon-2024_sessions.json'

export default {
  name: 'Workshops24',
  components: {
    LinkIcon
  },
  computed: {
    workshops: () => talks24.filter((talk) => talk['Session type'].en.includes('Workshop'))
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
    }
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
</style>
