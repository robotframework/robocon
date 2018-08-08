<template>
  <div class="col-lg-8 col-md-10 mx-auto">
    <div class="row-md-5 row-lg-4 order-1 textblock-left p-3 no-border dashed-header">
      <h1 v-html="data.header"/>
    </div>
    <div v-if="data.header != 'Examples'" class="col order-2 textblock-right text-justify no-border">
      <div v-html="data.text"/>
    </div>
     <div v-else v-html="data.text" class="row order-2 block-text textblock-right ml-2 p-3"/>

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
