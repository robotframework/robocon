<template>
<div
    class="container">
    <div v-if="data.twitter === false" class="col-lg-12 col-md-12 mx-auto">
    <div class="row-md-5 row-lg-4 order-1 textblock-left no-border dashed-header link-fix">
      <h1 v-html="data.header"/>
    </div>
     <div v-html="data.text" class="row order-2 block-text textblock-right p-3 no-border text-justify"/>
  </div>
  <div
    v-else>
    <div class="col-lg-12 mx-auto">
    <div class="row-md-5 row-lg-4 order-1 textblock-left no-border dashed-header link-fix">
      <h1 v-html="data.header"/>
    </div>
    <div
        class="row">
        <div v-html="data.text" class="col-lg-7 order-2 block-text textblock-right p-3 no-border text-justify"/>
     <div class="col-md-12 col-lg-5 order-3 textblock-right ml-0 p-3">
       <twitter-timeline class="p-xs-5 p-lg-0" id="robotframework" widget-class="twitterprofile" sourceType="profile" :style="isMobile ? '' : isTablet ? 'height: 850px; overflow: scroll' : 'height: 700px; overflow: scroll'" :options="options"/>
     </div>
        </div>
  </div>
    </div>
    </div>
</template>

<script>
import Timeline from "vue-tweet-embed/timeline"
export default {
  props: ["data"],
  components: {
    "twitter-timeline": Timeline
  },
  data () {
    return {
      options: {
        theme: "dark",
        tweetLimit: (window.innerWidth < 992) ? 3 : 10,
        chrome: (window.innerWidth < 992) ? ["nofooter", "noscroll"] : ["nofooter"]
      }
    }
  },
  computed: {
      isMobile() {
          return window.innerWidth < 992
      },
      isTablet() {
          return window.innerWidth < 1200
      }
  }
}
</script>
