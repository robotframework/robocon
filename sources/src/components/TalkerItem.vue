<template>
  <div>
    <h2
      class="mb-0"
      :class="{ 'clickable-title' : expandable}"
      @click="expandable ? expanded = !expanded : false">
      {{ title }}
    </h2>
    <transition
      name="toggle-content"
      mode="out-in">
      <div v-if="expanded">
        <div class="row mt-3">
          <div v-if="imgUrl !== ''"class="col-lg-4">
              <div v-for="image in imgUrl">
                  <img class="mb-3" style="width: 100%" :src="require(`@/assets/img/users/${image}`)">
              </div>
          </div>
          <div v-if="imgUrl !== ''" class="col-lg-8 justify word-break">
            <h3>{{ description }}</h3>
            <p v-html="descriptionExpanded"></p>
            <template v-if="bio !== ''">
              <h3>Bio</h3>
              <p v-html="bio"></p>
            </template>
          </div>
          <div v-else class="col-lg-12">
            <h3>{{ description }}</h3>
            <p v-html="descriptionExpanded"></p>
            <template v-if="bio !== ''">
              <h3>Bio</h3>
              <p v-html="bio"></p>
            </template>
          </div>
        </div>
        <div v-if="videos.length" class="row">
          <div class="col-lg-12">
            <h3>{{ videos.length > 1 ? 'Recordings' : 'Recording' }}</h3>
          </div>
          <div
            v-for="video in videos"
            :key="video.id"
            :class="videos.length > 1 ? 'col-lg-6 mb-4' : 'col-lg-12 mb-4'">
            <h4 v-if="video.title" class="mb-2">{{ video.title }}</h4>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                :src="`https://www.youtube-nocookie.com/embed/${video.id}`"
                :title="video.title || description || title"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <p v-else v-html="description"></p>
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
    videos: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // Talks with a recording start open so the videos are visible up front.
      expanded: this.videos.length > 0
    }
  },
  computed: {
    // Breaks and lunches stay static, but an entry is worth opening as soon as
    // it has either a long abstract or a recording to show.
    expandable() {
      return this.descriptionExpanded !== '' || this.videos.length > 0
    }
  }
};
</script>
