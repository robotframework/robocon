<template>
  <div :class="header === '' && type === 'workshop' ? 'mb-5 pb-4' : 'mb-5'" :style="header === '' && author !== 'Asko Soukka' && author !== 'Pekka Klärck' && type === 'workshop' ? 'border-bottom: dashed 2px #20f73f' : ''">
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
      <a
        class="mb-0 ml-4 link-title"
        style="color: #20f73f"
        :id="title.replace(/ /g, '-').toLowerCase()"
        :class="{ 'clickable-title' : expandable}"
        @click="expandable ? expanded = !expanded : false">
        {{ title }}
      </a>
    </div>
    <transition
      name="toggle-content"
      mode="out-in">
      <div v-if="expanded">
        <div v-if="hasText" class="row mt-0">
          <div v-if="imgUrl !== ''" class="col-lg-4">
              <div
                v-for="image in imgUrl"
                :key="image">
                  <img class="mb-3" style="width: 100%" :src="require(`@/assets/img/users/${image}`)">
              </div>
          </div>
          <div v-if="imgUrl !== '' && imgUrl.length" class="col-lg-8 justify word-break">
            <h3>{{ description }}</h3>
            <p v-html="descriptionExpanded"></p>
            <template v-if="bio">
              <h3>Bio</h3>
              <p v-html="bio"></p>
            </template>
          </div>
          <div v-else class="col-lg-12 word-break ml-4 pr-4 mt-2 workshop-description">
            <p v-html="description"></p>
            <p v-html="descriptionExpanded"></p>
            <template v-if="bio">
            <h2 class="no-arrow mb-0">Bio</h2>
            <p v-html="bio"></p>
            </template>
          </div>
        </div>
        <div v-if="videoList.length" class="row mt-0">
          <div
            v-for="video in videoList"
            :key="video.url"
            :class="videoList.length > 1 ? 'col-lg-6 mb-3' : 'col-lg-12 mb-3'">
            <h3
              v-if="video.title"
              class="white mb-1 ml-4">
              {{ video.title }}
            </h3>
            <b-embed
              type="iframe"
              :src="video.url"
              allowfullscreen />
          </div>
        </div>
      </div>
      <p v-else-if="header === ''" class="workshop-description ml-4 mt-2 cursor--pointer" v-html="description" @click="expandable ? expanded = !expanded : false"></p>
    </transition>
  </div>
</template>

<script>
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
      type: Array,
      default: () => []
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
    // For entries with more than one recording, e.g. the lightning talk blocks.
    videos: {
      type: Array,
      default: () => []
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
    }
  },
  data() {
    // Agenda talks with a recording start open. Computed properties are not
    // available yet at this point, so this repeats videoList/hasText by hand.
    const hasVideo = this.videos.length > 0 || this.url !== ''
    const hasText = this.description !== '' || this.descriptionExpanded !== '' || this.bio !== ''
    return {
      // The previous-talks lists are video-only indexes and stay collapsed.
      expanded: hasVideo && hasText
    }
  },
  computed: {
    // `url` stays the shorthand for a single recording; `videos` covers the
    // entries that have several, such as the lightning talk blocks.
    videoList() {
      if (this.videos.length) return this.videos
      return this.url !== '' ? [{ url: this.url }] : []
    },
    // The previous-talks lists carry a recording and nothing else, so the
    // abstract/bio block has to stay out of the way when there is no text.
    hasText() {
      return this.description !== '' || this.descriptionExpanded !== '' || this.bio !== ''
    },
    expandable() {
      return this.descriptionExpanded !== '' || this.videoList.length > 0
    }
  },
  watch: {
    expanded: {
      handler() {
        if(this.expanded) history.pushState(null, null, `#${this.title.replace(/ /g, '-').toLowerCase()}`)
      }
    }
  },
  mounted() {
    const anchor = document.URL.split('#').length > 1 ? document.URL.split('#')[1] : null
    if (anchor === this.title.replace(/ /g, '-').toLowerCase()) this.expanded = true
  }
};
</script>
