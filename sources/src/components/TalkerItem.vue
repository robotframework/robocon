<template>
  <div :class="header === '' && type === 'workshop' ? 'mb-5 pb-4' : 'mb-5 pb-3'" :style="header === '' && author !== 'Asko Soukka' && author !== 'Pekka Klärck' && type === 'workshop' ? 'border-bottom: dashed 2px #20f73f' : ''">
    <div v-if="margin" class="mt-5" />
    <div v-if="header !== ''">
      <h2 class="white no-arrow mt-4">{{ header }}</h2>
    </div>
    <div v-else class="ml-0">
      <h3
        class="white mb-0 ml-4"
        v-if="author !== ''">
        {{ author }}
        </h3>
      <div v-else class="mt-4" />
      <button
        style="text-align: left; width: 100%;"
        @click="hasExpandableContent ? expanded = !expanded : false">
        <div class="row">
          <div style="color: #01ffd9; flex: 0 0 2rem; max-width: 2rem;">
            >
          </div>
          <div style="flex: 0 0 calc(100% - 2rem); max-width: calc(100% - 2rem);">
            <a
              class="link-title"
              style="color: #01ffd9"
              :id="title.replace(/ /g, '-').replace(/[?=]/g, '').toLowerCase()"
              :class="{ 'clickable-title' : descriptionExpanded !== '' || url !== ''}">
              {{ title }}
            </a>
          </div>
          <div class="white ml-4 pl-2 type-body">
            {{ dateString(time.start) }}  <span class="blue">{{ local_time(time.start) }}</span> - <span class="blue">{{ local_time(time.end) }}</span> ({{ local_tz }})
          </div>
        </div>
      </button>
    </div>
    <transition
      name="toggle-content"
      mode="out-in">
      <div
        v-if="expanded"
        key="1"
        class="row mt-0">
        <!-- YouTube video -->
        <div v-if="url !== ''" class="col-lg-12">
          <b-embed
            type="iframe"
            :src="url"
            allowfullscreen />
        </div>
        <!-- talk description expanded -->
        <div v-else class="row ml-4 talk-description">
          <div class="mb-3 pl-1 type-small" style="margin-left: 0.65rem;">
            {{ utc_time(time.start) }} - {{ utc_time(time.end) }} (UTC)
          </div>
          <p
            class="col-12"
            v-html="description" />
          <p
            v-if="descriptionExpanded !== ''"
            class="col-12"
            v-html="descriptionExpanded" />
          <!-- bio with img -->
          <div v-if="imgUrl !== '' && bio !== ''" class="mt-3 display--flex flex--wrap">
            <div class="col-sm-12 col-md-3">
              <img :src="require(`@/assets/img/talkers/${imgUrl}`)" style="width: 100%;border-radius: 50px">
            </div>
            <div
              class="col-sm-12 col-md-9"
              :class="isMobile ? 'mt-4' : ''">
              <h3>Bio</h3>
              <p v-html="bio" />
              <p v-if="sponsoredBy !== ''">
                Talk sponsored by <span v-html="sponsoredBy" />.
              </p>
            </div>
          </div>
          <!-- bio with no img img -->
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
        class="talk-description ml-4 mt-2 cursor--pointer"
        @click="hasExpandableContent ? expanded = !expanded : null">
        <p>
          {{ description.slice(0, 200).trim() }}...
        </p>
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
    descriptionExpanded: {
      type: String,
      default: ''
    },
    bio: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default: ''
    },
    margin: {
      type: Boolean,
      default: false
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
    sponsoredBy: {
      type: String,
      default: ''
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
