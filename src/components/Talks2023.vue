<template>
  <div
    v-for="talk in items"
    :key="talk.code"
    class="row p-small mt-large col-sm-12"
    :class="talk.submission_type === 'Break' ? 'rounded bg-grey-dark' : 'card'">
    <div class="col-sm-12">
      <div class="row between">
        <div>
          <div v-if="(talk.submission_type.en || talk.submission_type) === 'Keynote' && $store.state.isMobile" class="rounded-small bg-grey-dark color-theme px-small pt-3xsmall pb-3xsmall mb-2xsmall" style="width: fit-content">
            Keynote
          </div>
          <h3 class="mb-3xsmall title" :id="getSlug(talk.title, talk)">
            <template v-if="talk.submission_type === 'Break'">
              {{ talk.description.en }} ({{ getBreakLength(talk.slot.start, talk.slot.end) }} min)
            </template>
            <template v-else-if="talk.submission_type === 'Misc'">
              {{ talk.description.en }}
            </template>
            <template v-else>
              {{ talk.title }}
            </template>
          </h3>
          <p class="type-small m-none">
            {{ format(new Date(talk.slot.start), 'MMM dd') }} {{ getShownTime(talk.slot.start) }} - {{ getShownTime(talk.slot.end) }} UTC+2
          </p>
        </div>
        <div v-if="talk.submission_type !== 'Misc'" class="flex top">
          <div v-if="(talk.submission_type.en || talk.submission_type) === 'Keynote' && !$store.state.isMobile" class="rounded-small bg-grey-dark color-theme px-xsmall py-3xsmall mr-xsmall" style="height: fit-content; margin-top: -0.25rem;">
            Keynote
          </div>
          <a v-if="!$store.state.isMobile && talk.submission_type !== 'Break'" title="get link to talk" :class="talk.submission_type === 'Keynote' && 'm-xsmall'" :href="`#${getSlug(talk.title, talk)}`">
            <link-icon style="transform: translateY(2px)" />
          </a>
        </div>
      </div>
    </div>
    <div v-if="!['Break', 'Misc'].includes(talk.submission_type)" class="col-sm-12">
      <p
        class="relative"
        :class="!talk.expanded && talk.abstract && talk.abstract.length > 100 && 'intro-gradient'"
        v-html="parseText(talk.abstract)" />
      <button v-if="!talk.expanded" class="theme small block mx-auto" @click="talk.expanded = true">
        Show more
      </button>
      <div v-if="talk.expanded" v-html="parseText(talk.description)" />
    </div>
    <div v-else-if="talk.submission_type === 'Break'" />
    <div v-if="talk.submission_type !== 'Break'" class="col-sm-12">
      <div
        v-for="speaker in talk.speakers"
        :key="speaker.code"
        class="row bg-grey-dark mt-small rounded mt-small"
        :class="$store.state.isMobile ? 'p-xsmall pt-2xsmall' : 'p-small'">
        <template v-if="$store.state.isMobile">
          <div class="col-sm-12 mb-xsmall">
            <h4 class="type-large">
              {{ speaker.name }}
            </h4>
          </div>
          <div class="col-sm-4">
            <img :src="speaker.avatar || `${publicPath}/img/speaker_img_placeholder.jpg`" class="rounded" />
          </div>
          <div v-if="speaker.biography" class="col-sm-8">
            <p
              class="type-small m-none pl-2xsmall relative"
              :class="!speaker.expanded ? 'bio-trunc pb-none bio-gradient' : ''"
              style="line-height: 1.4;"
              v-html="parseText(speaker.biography)" />
            <button v-if="!speaker.expanded" @click="speaker.expanded = true" class="pl-2xsmall color-theme type-underline type-small">
              Show more
            </button>
          </div>
        </template>
        <template v-else>
          <div class="col-sm-2">
            <img :src="speaker.avatar || `${publicPath}/img/speaker_img_placeholder.jpg`" class="rounded" />
          </div>
          <div class="col-sm-10 pl-small">
            <h4>
              {{ speaker.name }}
            </h4>
            <div
              class="type-small mb-none relative"
              :class="!speaker.expanded ? 'bio-trunc bio-gradient' : ''">
              <div v-html="parseText(speaker.biography)" :id="`${talk.code}${speaker.code}`" />
            </div>
            <button v-if="!speaker.expanded" @click="speaker.expanded = true" class="pl-2xsmall color-theme type-underline type-small" style="transform: translateY(0.25rem);">
              Show more
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import * as DOMPurify from 'dompurify'
import { marked } from 'marked'
import { format, differenceInMinutes } from 'date-fns'
import LinkIcon from './icons/LinkIcon.vue'

export default {
  name: 'Talks2023',
  components: {
    LinkIcon
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    publicPath: process.env.BASE_URL
  }),
  mounted() {
    // check height of rendered bios - truncate if long
    this.items.forEach((talk) => {
      if (!talk.speakers) return
      talk.speakers.forEach((speaker) => {
        const bioElement = document.getElementById(`${talk.code}${speaker.code}`)
        if (!bioElement) return
        if (bioElement.offsetHeight < 100) speaker.expanded = true
      })
    })
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
      return DOMPurify.sanitize(marked.parse(description || ''))
    },
    getSlug(title, talk) {
      if (!title) return ''
      const isOnline = talk?.slot?.room?.en === 'Gather Town'
      if (isOnline) return `online-${title.replace(/[ ]/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`
      return title.replace(/[ ]/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()
    },
    getBreakLength(start, end) {
      return differenceInMinutes(new Date(end), new Date(start))
    }
  }
}
</script>

<style scoped>
  .title {
    padding-top: 5.5rem;
    margin-top: -5.5rem;
  }
  img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: top;
    filter: grayscale();
    transition: filter 0.5s;
  }
  img:hover {
    filter: none;
  }
  .bio-trunc {
    height: 5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
  .bio-gradient::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    background: linear-gradient(0deg, var(--color-grey-dark), transparent);
    pointer-events: none;
  }

  .intro-gradient::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    background: linear-gradient(0deg, var(--color-background), transparent);
    pointer-events: none;
  }
</style>
