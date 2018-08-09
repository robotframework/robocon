<template>
  <div class="col-lg-8 col-md-10 mx-auto">
    <div class="row-md-5 row-lg-4 order-1 textblock-left no-border dashed-header link-fix">
      <h1 v-html="data.header"/>
    </div>
     <div v-html="data.text" class="row order-2 block-text textblock-right p-3 no-border text-justify"/>
    <div v-if="data.src" class="row order-2 textblock-right text-justify no-border p-3">
     <b-embed type="iframe"
           aspect="16by9"
           :src="data.src"
           allowfullscreen
      ></b-embed>
    </div>

     <div v-if="data.twitter == true" class="col-md-12 col-lg-3 order-3 textblock-right ml-1 p-3">
       <twitter-timeline class="p-xs-5 p-lg-0" id="robotframework" widget-class="twitterprofile" sourceType="profile" :options="options"/>
     </div>
  </div>
</template>

<script>
import Timeline from "vue-tweet-embed/timeline";
export default {
  props: ["data"],
  components: {
    "twitter-timeline": Timeline
  },
  data() {
    return {
      options: {
        theme: "light",
        tweetLimit: "3",
        chrome: ["nofooter", "noscrollbar"]
      }
    };
  }
};
</script>
