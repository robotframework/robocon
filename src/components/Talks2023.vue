<template>
  <h3 class="mt-large">Helsinki</h3>
  <div v-for="talk in talks" :key="talk.code" class="row card p-small mt-large">
    <div class="col-sm-12">
      <div class="row between">
        <div>
          <div v-if="talk.submission_type.en === 'Keynote' && $store.state.isMobile" class="rounded-small bg-grey-dark color-theme px-small pt-3xsmall pb-3xsmall mb-2xsmall" style="width: fit-content">
            Keynote
          </div>
          <h3 class="mb-3xsmall title" :id="getSlug(talk.title)">
            {{ talk.title }}
          </h3>
          <p class="type-small m-none">
            {{ format(new Date(talk.slot.start), 'MMM dd') }} {{ getShownTime(talk.slot.start) }} - {{ getShownTime(talk.slot.end) }}
          </p>
        </div>
        <div class="flex top">
          <a v-if="!$store.state.isMobile" title="get link to talk" :class="talk.submission_type.en === 'Keynote' && 'm-xsmall'" :href="`#${getSlug(talk.title)}`">
            <link-icon style="transform: translateY(2px)" />
          </a>
          <div v-if="talk.submission_type.en === 'Keynote' && !$store.state.isMobile" class="rounded-small bg-grey-dark color-theme p-xsmall" style="height: fit-content">
            Keynote
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12">
      <p
        class="relative"
        :class="!talk.expanded && talk.abstract.length > 100 && 'intro-gradient'"
        v-html="parseText(talk.abstract)" />
      <button v-if="!talk.expanded" class="theme small block mx-auto" @click="talk.expanded = true">
        Show more
      </button>
      <div v-if="talk.expanded" v-html="parseText(talk.description)" />
    </div>
    <div class="col-sm-12">
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
            <p class="type-small mb-none" v-html="parseText(speaker.biography)" />
          </div>
        </template>
      </div>
    </div>
  </div>
  <div class="mt-large">
    Online talks will be released soon, stay tuned!
  </div>
</template>

<script>
import * as DOMPurify from 'dompurify'
import { marked } from 'marked'
import { format } from 'date-fns'
import LinkIcon from './icons/LinkIcon.vue'

export default {
  name: 'Talks2023',
  components: {
    LinkIcon
  },
  props: {
    talks: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    publicPath: process.env.BASE_URL
  }),
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
    getSlug(title) {
      return title.replace(/[ ]/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()
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
