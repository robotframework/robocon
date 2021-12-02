<template>
  <div
    class="border-top-theme mb-xlarge section-container"
    tabindex="-1">
    <div class="row p-small">
      <div
        class="col-sm-12 col-lg-3"
        :class="$store.state.isMobile ? '' : 'pt-3xsmall'">
        <h2 :id="titleId">
          {{ title }}
        </h2>
      </div>
      <div
        v-if="!poll"
        class="col-sm-12 col-lg-9"
        v-html="body" />
      <div v-else class="col-sm-12 col-lg-9 pt-small">
        <h4>
          🦠 02.12.2021: Options for rescheduled RoboCon 2022 dates
        </h4>
        <p>
          As previously announced, RoboCon 2022 has been rescheduled due to the current Covid situation. There are three dates available. We are surveying the community to understand your preferences. Please consider necessary travel time as part of your choice.
        </p>
        <div v-if="!voted" class="border-theme rounded p-small" style="width: fit-content;">
          <h4 class="mb-small">
            I'd like RoboCon 2022 to be held...
          </h4>
          <div>
            <input type="radio" id="23-24" name="date" value="23.3 - 24.3.2022" v-model="selected" />
            <label class="ml-small" for="23-24">Wed 23rd March - Thu 24th March 2022</label>
          </div>
          <div>
            <input type="radio" id="24-25" name="date" value="24.3 - 25.3.2022" v-model="selected" />
            <label class="ml-small" for="24-25">Thu 24th March - Fri 25th March 2022</label>
          </div>
          <div>
            <input type="radio" id="19-20" name="date" value="19.5 - 20.5.2022" v-model="selected" />
            <label class="ml-small" for="19-20">Thu 19th May - Fri 20th May 2022</label>
          </div>
          <button type="button" class="theme mt-small" @click="submit">Submit</button>
        </div>
        <div v-else class="color-theme">
          Thank you for your vote! Selected date will be announced shortly.
        </div>
        <div v-html="body" />
      </div>
    </div>
    <div
      class="row"
      :class="$store.state.isMobile ? '' : 'pl-small pr-small'">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSection',
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      required: true
    },
    poll: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    selected: '',
    voted: false
  }),
  created() {
    const voted = localStorage.getItem('voted')
    if (voted === 'yes') this.voted = true
  },
  methods: {
    submit() {
      this.voted = true
      localStorage.setItem('voted', 'yes')
      window.plausible('Event date vote', { props: { date: this.selected } })
    }
  }
}
</script>

<style scoped>
  h2::before {
    display: block;
    content: " ";
    margin-top: -100px;
    height: 100px;
    visibility: hidden;
    pointer-events: none;
  }
  h2 {
    clip-path: polygon(0 calc(100% - 2rem), 100% calc(100% - 2rem), 100% 100%, 0% 100%)
  }
  @media screen and (max-width: 700px) {
    h2::before {
      margin-top: -30px;
      height: 30px;
    }
  }
</style>
