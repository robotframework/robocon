<template>
  <div>
    <h2
      class="mb-0"
      :class="{ 'clickable-title' : descriptionExpanded !== ''}"
      @click="descriptionExpanded !== '' ? expanded = !expanded : false">
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
    }
  },
  data: () => ({
    expanded: false
  })
};
</script>
