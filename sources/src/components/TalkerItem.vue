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
          <div class="col-lg-4">
            <img class="mb-3" style="width: 100%" :src="require(`@/assets/img/users/${imgUrl}`)">
          </div>
          <div class="col-lg-8 justify word-break">
            <h3>{{ description }}</h3>
            <p v-html="descriptionExpanded"></p>
            <h3>Bio</h3>
            <p v-html="bio"></p>
          </div>
        </div>
      </div>
      <p v-else>{{ description }}</p>
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
    }
  },
  data: () => ({
    expanded: false
  })
};
</script>
