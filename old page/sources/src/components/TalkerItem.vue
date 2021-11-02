<template>
  <div
    :class="[`mb-5 ${isMobile ? '' : 'p-1'}`]">
    <div v-if="header !== ''">
      <h2 class="white mt-4" v-html="header" />
    </div>
    <div v-else class="ml-0 pl-2 border-left-blue">
      <h3
        class="white mb-0"
        v-if="authors && authors.length">
        {{ authors.join(', ') }}
      </h3>
      <div v-else class="mt-4" />
      <button
        class="pl-0"
        style="text-align: left;"
        @click="hasExpandableContent ? expanded = !expanded : false">
        <a
          v-if="title === 'Community time'"
          class="link-title"
          style="color: #01ffd9"
          href="https://gather.town/app/38f5qjlXAKZ7xIBm/RoboCon"
          target="_blank">
          {{ title }}
        </a>
        <a
          v-else
          style="color: #01ffd9"
          :id="title.replace(/ /g, '-').replace(/[?=]/g, '').toLowerCase()"
          :class="['link-title', {['keynote']: keynote},{ 'clickable-title' : descriptionExpanded !== '' || url !== ''}]">
          {{ title }}
        </a>
      </button>
      <div
        v-if="releaseTime"
        class="type-bold white">
        Release: {{ `${months[releaseTime.getMonth()]} ${releaseTime.getDate()} 2021` }}
      </div>
    </div>
    <div
      v-if="expanded"
      key="1"
      style="padding-left: calc(0.5rem + 2px);">
      <!-- YouTube video -->
      <div v-if="url !== ''" class="col-lg-12">
        <b-embed
          type="iframe"
          :src="url"
          allowfullscreen />
      </div>
      <!-- talk description expanded -->
      <div v-else class="row talk-description mt-4">
        <p
          class="col-12 mt-0 mb-0"
          v-html="description" />
        <p
          v-if="descriptionExpanded !== ''"
          class="col-12 mb-0"
          v-html="descriptionExpanded" />
        <!-- ticket link -->
        <div v-if="type === 'workshop' && ticketId !== ''" class="col-12 mt-3 mb-3">
          <div style="display: flex; align-items: center;">
            <svg viewBox="0 0 530 530" style="stroke: white; stroke-width: 8; stroke: #01ffd9; width: 50px; height: 50px;">
              <path d="M448.678,128.219l-10.607,10.608c-8.667,8.667-20.191,13.44-32.449,13.44c-12.258,0-23.78-4.773-32.448-13.44
                c-8.667-8.667-13.44-20.191-13.44-32.448s4.773-23.781,13.44-32.449l10.608-10.608L320.459,0L0,320.459l63.322,63.322
                l10.608-10.608c8.667-8.667,20.191-13.44,32.449-13.44c12.258,0,23.78,4.773,32.448,13.44c8.667,8.667,13.44,20.191,13.44,32.448
                s-4.773,23.781-13.44,32.449l-10.608,10.608L191.541,512L512,191.541L448.678,128.219z M169.61,447.636
                c8.237-12.343,12.662-26.839,12.662-42.015c0-20.272-7.894-39.33-22.229-53.664c-14.334-14.335-33.393-22.229-53.664-22.229
                c-15.176,0-29.672,4.425-42.015,12.662l-21.932-21.931L320.459,42.432l21.931,21.932c-8.237,12.343-12.662,26.839-12.662,42.015
                c0,20.272,7.894,39.33,22.229,53.664c14.334,14.335,33.393,22.229,53.664,22.229c15.176,0,29.672-4.425,42.015-12.662
                l21.932,21.931L191.541,469.568L169.61,447.636z"/>
              <rect x="284.001" y="197.94" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -63.0395 273.8137)" width="30.004" height="30.124"/>
              <rect x="241.404" y="155.325" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -45.3819 231.2119)" width="30.004" height="30.124"/>
              <rect x="326.607" y="240.541" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -80.684 316.4184)" width="30.004" height="30.124"/>
            </svg>
            <a
              class="ml-3"
              :href="`https://tickets.robotframework.org/workshop/${ticketId}/`"
              target="_blank"
              @click="ga('send', 'event', 'click', `workshopTicketClick-${ticketId}`)">
              Buy ticket - {{ title }}
            </a>
          </div>
        </div>
        <!-- bio with img -->
        <div
          v-if="imgUrl !== '' && bio !== ''" class="mt-3 display--flex flex--wrap">
          <div class="col-sm-12 col-md-2 mb-3">
            <img :src="require(`@/assets/img/talkers/${imgUrl}`)" style="width: calc(100% - 0.75rem); border-radius: 20px;">
          </div>
          <div
            class="col-sm-12 col-md-9"
            :class="isMobile ? 'mt-4' : ''">
            <h3>{{ authors[0] }}</h3>
            <p v-html="bio" />
          </div>
          <template v-if="secondBio !== ''">
            <div class="col-sm-12 col-md-2 mb-3">
              <img :src="require(`@/assets/img/talkers/${secondImgUrl}`)" style="width: calc(100% - 0.75rem); border-radius: 20px;">
            </div>
            <div
              class="col-sm-12 col-md-9"
              :class="isMobile ? 'mt-4' : ''">
              <h3>{{ authors[1] || '' }}</h3>
              <p v-html="secondBio" />
            </div>
          </template>
          <template v-if="thirdBio !== ''">
            <div class="col-sm-12 col-md-2 mb-3">
              <img :src="require(`@/assets/img/talkers/${thirdImgUrl}`)" style="width: calc(100% - 0.75rem); border-radius: 20px;">
            </div>
            <div
              class="col-sm-12 col-md-9"
              :class="isMobile ? 'mt-4' : ''">
              <h3>{{ authors[2] || '' }}</h3>
              <p v-html="thirdBio" />
            </div>
          </template>
          <template v-if="fourthBio !== ''">
            <div class="col-sm-12 col-md-2 mb-3">
              <img :src="require(`@/assets/img/talkers/${fourthImgUrl}`)" style="width: calc(100% - 0.75rem); border-radius: 20px;">
            </div>
            <div
              class="col-sm-12 col-md-9"
              :class="isMobile ? 'mt-4' : ''">
              <h3>{{ authors[3] || '' }}</h3>
              <p v-html="fourthBio" />
            </div>
          </template>
          <p v-if="sponsoredBy !== ''">
            Talk sponsored by <span v-html="sponsoredBy" />.
          </p>
        </div>
        <!-- bio with no img -->
        <div v-if="imgUrl === '' && bio !== ''">
          <h3>Bio</h3>
          <p>
            {{ bio }}
          </p>
          <p v-if="sponsoredBy !== ''">
            Talk sponsored by <span v-html="sponsoredBy" />
          </p>
        </div>
      </div>
    </div>
    <div
      v-else-if="description !== ''"
      key="2"
      class="talk-description mt-2 cursor--pointer"
      style="padding-left: calc(0.5rem + 2px);"
      @click="hasExpandableContent ? expanded = !expanded : null">
      <p v-html="`${description.slice(0, 150).trim()}${description.length > 150 ? '...' : ''}`" />
    </div>
    <!-- watch stream -->
    <div v-if="(videoPublic || showAllVideos) && videoId !== ''" class="mb-5">
      <button
        v-if="!showVideo"
        class="button-primary white ml-2"
        type="button"
        style="position: relative; width: 240px; height: 135px;"
        @click="showVideo = true; ga('send', 'event', 'showVideo', title)">
        <img
          :src="require(`../assets/img/previews/${previewImg}`)"
          style="position: absolute; left: 0; top: 0; width: 100%; height: 100%;" />
        <svg
          height="70"
          viewBox="0 0 24 24"
          width="70"
          style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); stroke: white; fill: white; stroke-width: 1px;">
            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
        <label
          style="position: absolute; top: 100%; left: 0; width: 100%;">
          Watch video
        </label>
      </button>
      <!-- Vimeo video -->
      <div v-if="showVideo" class="col-12" style="position: relative;">
        <b-embed
          type="iframe"
          :src="`https://player.vimeo.com/video/${showAllVideos ? videoId : videoIdDecrypted}`"
          allowfullscreen />
        <button
          style="position: absolute; top: 1rem; right: 2rem; stroke: white; fill: white; stroke-width: 1px;"
          @click="showVideo = false">
          <svg
            height="32"
            viewBox="0 0 24 24"
            width="32">
              <path d="M22,3.41l-5.29,5.29L20,12h-8V4l3.29,3.29L20.59,2L22,3.41z M3.41,22l5.29-5.29L12,20v-8H4l3.29,3.29L2,20.59L3.41,22z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment-timezone"
import CryptoJS from 'crypto-js'
import { hashKey } from '../../static/key'

export default {
  name: 'TalkerItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    },
    secondImgUrl: {
      type: String,
      default: ''
    },
    thirdImgUrl: {
      type: String,
      default: ''
    },
    fourthImgUrl: {
      type: String,
      default: ''
    },
    descriptionExpanded: {
      type: String,
      default: ''
    },
    bio: {
      type: String,
      default: ''
    },
    secondBio: {
      type: String,
      default: ''
    },
    thirdBio: {
      type: String,
      default: ''
    },
    fourthBio: {
      type: String,
      default: ''
    },
    authors: {
      type: Array,
      default: () => []
    },
    url: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    time: {
      type: Object,
      default: () => ({
        start: '',
        end: ''
      })
    },
    ticketId: {
      type: String,
      default: ''
    },
    sponsoredBy: {
      type: String,
      default: ''
    },
    keynote: {
      type: Boolean,
      default: false
    },
    videoId: {
      type: String,
      default: ''
    },
    previewImg: {
      type: String,
      default: ''
    },
    releaseTime: {
      type: Date,
      required: false
    },
    showAllVideos: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    expanded: false,
    showVideo: false,
    timeNow: Date.now(),
    months: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dev'
    ]
  }),
  computed: {
    hasExpandableContent () {
      return this.descriptionExpanded !== '' || this.url !== '' || this.bio !== ''
    },
    isMobile () {
      return window.innerWidth < 692
    },
    local_tz() {
      return moment.tz.guess()
    },
    videoPublic() {
      return this.releaseTime < new Date() || !this.releaseTime
    },
    videoIdDecrypted() {
      if (!this.videoPublic) return ''
      const bytes = CryptoJS.AES.decrypt(this.videoId, hashKey())
      return bytes.toString(CryptoJS.enc.Utf8)
    }
  },
  watch: {
    expanded: {
      handler() {
        if (this.expanded) history.pushState(null, null, `#${this.title.replace(/ /g, '-').replace(/[?=]/g, '').toLowerCase()}`)
      }
    }
  },
  mounted() {
    const anchor = document.URL.split('#').length > 1 ? document.URL.split('#')[1] : null
    if (anchor === this.title.replace(/ /g, '-').replace(/[?=]/g, '').toLowerCase()) this.expanded = true
    setInterval(() => {
      this.timeNow = Date.now()
    }, 60000) // every 1min
  },
  methods: {
    dateString(dataTime) {
      const locale = window.navigator.userLanguage || window.navigator.language
      moment.locale(locale);
      return moment.tz(dataTime, moment.tz.guess()).format("DD MMM")
    },
    utc_dateString(dataTime) {
      const locale = window.navigator.userLanguage || window.navigator.language
      moment.locale(locale);
      return moment.tz(dataTime, "Africa/Freetown").format("DD MMM")
    },
    utc_time(dataTime) {
      const locale = window.navigator.userLanguage || window.navigator.language;
      moment.locale(locale);
      return moment.tz(dataTime, "Africa/Freetown").format("LT");
    },
    local_time(dataTime) {
      const locale = window.navigator.userLanguage || window.navigator.language;
      moment.locale(locale);
      return moment.tz(dataTime, moment.tz.guess()).format("LT");
    }
  }
};
</script>
