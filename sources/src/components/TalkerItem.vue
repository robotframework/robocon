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
        :class="{ 'clickable-title' : descriptionExpanded !== '' || url !== ''}"
        @click="descriptionExpanded !== '' || url !== '' ? expanded = !expanded : false">
        {{ title }}
      </a>
    </div>
    <transition
      name="toggle-content"
      mode="out-in">
      <div v-if="expanded">
        <div class="row mt-0">
          <div v-if="url !== ''" class="col-lg-12">
            <b-embed
              type="iframe"
              :src="url"
              allowfullscreen />
          </div>
          <div v-else>
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
              <h3>Bio</h3>
              <p v-html="bio"></p>
            </div>
            <div v-else class="col-lg-12 word-break ml-4 pr-4 mt-2 workshop-description">
              <p>{{ description }}</p>
              <p v-html="descriptionExpanded"></p>
              <template v-if="bio">
              <h2 class="no-arrow mb-0">Bio</h2>
              <p v-html="bio"></p>
              </template>
            </div>
          </div>
        </div>
      </div>
      <p v-else-if="header === ''" class="workshop-description ml-4 mt-2 cursor--pointer" v-html="description" @click="descriptionExpanded !== '' || url !== '' ? expanded = !expanded : false"></p>
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
  data: () => ({
    expanded: false
  }),
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
