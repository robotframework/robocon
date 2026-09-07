<template>
  <div class="row justify-content-between no-gutters">
    <div class="col-md-5 col-lg-4 order-1 textblock-left p-3">
      <h1 v-html="data.header"/>
    </div>
    <div v-if="data.header != 'Examples'" class="col order-2 textblock-right ml-1 p-3">
      <div v-html="data.text"/>
    </div>
     <div v-else v-html="data.text" class="col order-2 block-text textblock-right ml-1 p-3"/>
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
