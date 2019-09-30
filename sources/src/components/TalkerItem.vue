<template>
  <div class="mb-3 mt-3">
    <div v-if="margin" class="mt-5" />
    <div v-if="header !== ''">
      <h2 class="white no-arrow mt-4">{{ header }}</h2>
    </div>
    <div v-else class="ml-4">
      <h3
        class="white mb-0"
        v-if="author !== ''">
        {{ author }}
        </h3>
      <div v-else class="mt-4" />
      <h2
        class="mb-0"
        :class="{ 'clickable-title' : descriptionExpanded !== '' || url !== ''}"
        @click="descriptionExpanded !== '' || url !== '' ? expanded = !expanded : false">
        {{ title }}
      </h2>
    </div>
    <transition
      name="toggle-content"
      mode="out-in">
      <div v-if="expanded">
        <div class="row mt-3">
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
            <div v-if="imgUrl !== ''" class="col-lg-8 justify word-break">
              <h3>{{ description }}</h3>
              <p v-html="descriptionExpanded"></p>
              <h3>Bio</h3>
              <p v-html="bio"></p>
            </div>
            <div v-else class="col-lg-12">
              <h3>{{ description }}</h3>
              <p v-html="descriptionExpanded"></p>
              <h3>Bio</h3>
              <p v-html="bio"></p>
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
    }
  },
  data: () => ({
    expanded: false
  })
};
</script>
