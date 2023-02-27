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
            {{ format(new Date(talk.slot.start), 'MMM dd') }} {{ getShownTime(talk.slot.start) }} - {{ getShownTime(talk.slot.end) }} ({{Intl.DateTimeFormat().resolvedOptions().timeZone}})
          </p>
        </div>
        <div v-if="talk.submission_type !== 'Misc'" class="flex top">
          <div v-if="(talk.submission_type.en || talk.submission_type) === 'Keynote' && !$store.state.isMobile" class="rounded-small bg-grey-dark color-theme px-xsmall py-3xsmall mr-xsmall" style="height: fit-content; margin-top: -0.25rem;">
            Keynote
          </div>
          <a v-if="!$store.state.isMobile && talk.submission_type !== 'Break' && !small" title="get link to talk" :class="talk.submission_type === 'Keynote' && 'm-xsmall'" :href="`#${getSlug(talk.title, talk)}`">
            <link-icon style="transform: translateY(2px)" />
          </a>
        </div>
      </div>
    </div>
    <div v-if="hash && getVideoUrl(talk.code)" class="col-sm-12 p-large">
      <div width="100%" class="video col-sm-12 p-xsmall mx-medium">
        <iframe width="100%" height="100%" class="rounded" :src=getVideoUrl(talk.code) :title="`Recording: ${talk.title}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
          <div :class="small ? 'col-sm-1' : 'col-sm-2'">
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
import CryptoJS from 'crypto-js'
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
    },
    small: {
      type: Boolean,
      default: false
    },
    hash: {
      type: String
    }
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    token: {},
    error: false,
    dataReady: true,
    recordings: {
      CYPVMT: 'U2FsdGVkX1/lIc0urbwV8+qSG4nLnpwBGGiKT5yG7tM=',
      DWKDNS: 'U2FsdGVkX1843EDgruV0d70RFVSEazvu5l6aIYOZ66s=',
      DYRXQH: 'U2FsdGVkX1/R8K6P1dT/IuT9o6ebsf9TWulodtILI5g=',
      U9UFXV: 'U2FsdGVkX1+2t9MUVfwKbevDGwiPDYvw3bs87qVmHSE=',
      HYDNVM: 'U2FsdGVkX18eO+f6AUuwlRwZHi1cJpfw5odT13AgX94=',
      HJ9B3R: 'U2FsdGVkX19ngWzxSC+IXaInRFUbCev03NSasj/Y/AQ=',
      X9CQEZ: 'U2FsdGVkX1+EYItX3WtoInuTldwjhcaQoUhAEIc29/Q=',
      N3QCPT: 'U2FsdGVkX19dmKYJCwOvF1s2HC4pQQLa76IVW7R+BCM=',
      JAXTEX: 'U2FsdGVkX1/z9ItKKBmHoQpca5+i1M44ubzbLejcteA=',
      DRXANT: 'U2FsdGVkX1+M16KuXg2N9UvXgYzAGcRJOgxDRhNMOX0=',
      SAMETK: 'U2FsdGVkX1+0mwbMa5tzAlgdg+e29D8XFi5agSq3iJo=',
      K3EA3U: 'U2FsdGVkX1+THqyYgZ5y8qi/ZD2yp2QzvLcg9WmNCBs=',
      AW8NLK: 'U2FsdGVkX18ZXnwXbh7X7Tt61E4tTbSRZeC0WbtwvJg=',
      XYAJN3: 'U2FsdGVkX18pfOS84kYXSghqdK3gJSsX7az0NakFnRs=',
      BFWKHL: 'U2FsdGVkX19FlLMd1+Po4OTDxY3yqzMn/Lw8E4mhcpQ=',
      T8KEQR: 'U2FsdGVkX18Mx2k9ptU2+zbhdkEjSJahfyf06CEkniM=',
      HYQUWN: 'U2FsdGVkX1/MHvTM+IfVJH7xtdDlh7BWvVYWUoVTDqI=',
      WSBCXF: 'U2FsdGVkX1/bpDvejk5NWlzFVGRvFiODKG5D3G5XVkk=',
      HKSQYD: 'U2FsdGVkX1/LZnM9gP6/i3nw9xikObHK/kmIOeyoXwk=',
      NLM3AS: 'U2FsdGVkX19TQOQxgj9co2haJvuJjNqIxma7FFZx7Ms=',
      AXBYUP: 'U2FsdGVkX197y9tVXFPhS0SL+XM4o365DfYdnJeVHk0=',
      XWZVHN: 'U2FsdGVkX1/187Wksg7wNwE7SUSoszg3m63Oy/YooSM=',
      ASXKLW: 'U2FsdGVkX195OYR9jfdAjdVoX/daiW6Slw+tVouNKJI=',
      MGCBMF: 'U2FsdGVkX1+C35mtZtNFaN3omblmryCPSjXhMV2tlLg=',
      CKHB9J: 'U2FsdGVkX18h15zwTAeNoZvgrHfwZGeW6/FEqahbn7s=',
      MTRCMK: 'U2FsdGVkX185SyiprfNdsRjw98AyaF4Tp56eGGXs5YI=',
      AULYMA: 'U2FsdGVkX1+UQEIBg+tndNgES6UM/2aaCyZzzoeH9+w=',
      ZSLPJF: 'U2FsdGVkX1+OebszkRP3OcIGjCXhiZfzN9xYj31260c=',
      PDKBJK: ''
    }
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
    },
    getVideoUrl(code) {
      if (typeof code === 'undefined') return undefined
      const recording = this.recordings[code]
      if (!recording) {
        console.error(`Code ${code} did not have a recording.`)
        return undefined
      }
      console.log(code)
      const url = CryptoJS.AES.decrypt(recording, this.hash).toString(CryptoJS.enc.Utf8)
      return `https://www.youtube.com/embed/${url}`
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
