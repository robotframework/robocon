<template>
  <div
    :class="[`mb-5 ${isMobile ? '' : 'p-1'}`, {['bg-blue pb-3']: keynote}]">
    <div v-if="header !== ''">
      <h2 class="white mt-4">{{ header }}</h2>
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
          class="link-title"
          style="color: #01ffd9"
          :id="title.replace(/ /g, '-').replace(/[?=]/g, '').toLowerCase()"
          :class="{ 'clickable-title' : descriptionExpanded !== '' || url !== ''}">
          {{ title }}
        </a>
      </button>
        <a v-if="ticketId !== ''" :href="'https://tickets.robotframework.org/workshop/' + ticketId" target="blank" ><h3 class="white" @click="sendEvent(ticketId)">&gt; Buy Tickets</h3></a>
      <div
        v-if="time.start !== '' && time.end !== ''"
        class="white type-body">
        <span class="blue">{{ type === 'workshop' ? `${dateString(time.start)} ` : '' }}{{ local_time(time.start) }}</span> - <span class="blue">{{ local_time(time.end) }}</span> ({{ local_tz }})
      </div>
    </div>
    <transition
      name="toggle-content"
      mode="out-in">
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
        <div v-else class="row talk-description">
          <div
            v-if="time.start !== '' && time.end !== ''"
            class="mb-3 pl-1 type-small" style="margin-left: 0.65rem;">
            {{ type === 'workshop' ? `${utc_dateString(time.start)} ` : '' }}{{ utc_time(time.start) }} - {{ utc_time(time.end) }} (UTC)
          </div>
          <p
            class="col-12 mt-2"
            v-html="description" />
          <p
            v-if="descriptionExpanded !== ''"
            class="col-12"
            v-html="descriptionExpanded" />
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
    </transition>
  </div>
</template>

<script>
import moment from "moment-timezone";

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
    }
  },
  data: () => ({
    expanded: false
  }),
  computed: {
    hasExpandableContent () {
      return this.descriptionExpanded !== '' || this.url !== '' || this.bio !== ''
    },
    isMobile () {
      return window.innerWidth < 692
    },
    local_tz() {
      return moment.tz.guess();
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
  },
  methods: {
    dateString(dataTime) {
      const locale = window.navigator.userLanguage || window.navigator.language;
      moment.locale(locale);
      return moment.tz(dataTime, moment.tz.guess()).format("DD MMM")
    },
    utc_dateString(dataTime) {
      const locale = window.navigator.userLanguage || window.navigator.language;
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
