<template>
  <div class="container">
    <div v-if="data.twitter === false" class="col-lg-12 col-md-12 mx-auto">
      <div class="row-md-5 row-lg-4 order-1 textblock-left no-border dashed-header link-fix">
        <h1 :class="{'mb-0' : data.talks}" v-html="data.header"/>
        <!--<p style="font-size: 1rem" v-if="data.talks">(Click person's name for more info)</p>-->
      </div>
      <div
        v-if="data.text"
        v-html="data.text"
        class="row order-2 block-text textblock-right p-3 no-border"
      />
      <div
        v-if="data.talks">
        <talker-item
          v-for="(talk, key) in data.talks"
          :key="key"
          :header="talk.header"
          :margin="talk.margin"
          :author="talk.author"
          :title="talk.title"
          :type="talk.type || ''"
          :description="talk.description"
          :description-expanded="talk.descriptionExpanded"
          :bio="talk.bio"
          :img-url="talk.imgUrl"
          :url="talk.url"
          :videos="talk.videos"/>
      </div>
    </div>
    <div v-else>
      <div class="col-lg-12 mx-auto">
        <div class="row-md-5 row-lg-4 order-1 textblock-left no-border dashed-header link-fix">
          <h1 v-html="data.header"/>
        </div>
        <div class="row">
          <div
            v-html="data.text"
            class="col-lg-12 order-2 block-text textblock-right p-3 no-border"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "vue-tweet-embed/timeline"
import TalkerItem from "@/Components/TalkerItem"

export default {
  props: ["data"],
  components: {
    "twitter-timeline": Timeline,
    TalkerItem
  },
  data() {
    return {
      options: {
        theme: "dark",
        tweetLimit: window.innerWidth < 992 ? 3 : 10,
        chrome:
          window.innerWidth < 992 ? ["nofooter", "noscroll"] : ["nofooter"]
      }
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < 992;
    },
    isTablet() {
      return window.innerWidth < 1200;
    }
  }
};
</script>
