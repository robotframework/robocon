<template>
  <div class="container">
    <div v-if="data.twitter === false" class="col-lg-12 col-md-12 mx-auto">
      <div class="row-md-5 row-lg-4 order-1 textblock-left no-border dashed-header link-fix">
        <h1 :class="{'mb-0' : data.talks}" v-html="data.header"/>
        <!--<p style="font-size: 1rem" v-if="data.talks">(Click person's name for more info)</p>-->
      </div>
      <!-- link to workshop tickets -->
      <svg viewBox="0 0 530 530" style="stroke: white; stroke-width: 12; stroke: #01ffd9; width: 24px; height: 24px;">
        <path d="M448.678,128.219l-10.607,10.608c-8.667,8.667-20.191,13.44-32.449,13.44c-12.258,0-23.78-4.773-32.448-13.44
          c-8.667-8.667-13.44-20.191-13.44-32.448s4.773-23.781,13.44-32.449l10.608-10.608L320.459,0L0,320.459l63.322,63.322
          l10.608-10.608c8.667-8.667,20.191-13.44,32.449-13.44c12.258,0,23.78,4.773,32.448,13.44c8.667,8.667,13.44,20.191,13.44,32.448
          s-4.773,23.781-13.44,32.449l-10.608,10.608L191.541,512L512,191.541L448.678,128.219z M169.61,447.636
          c8.237-12.343,12.662-26.839,12.662-42.015c0-20.272-7.894-39.33-22.229-53.664c-14.334-14.335-33.393-22.229-53.664-22.229
          c-15.176,0-29.672,4.425-42.015,12.662l-21.932-21.931L320.459,42.432l21.931,21.932c-8.237,12.343-12.662,26.839-12.662,42.015
          c0,20.272,7.894,39.33,22.229,53.664c14.334,14.335,33.393,22.229,53.664,22.229c15.176,0,29.672-4.425,42.015-12.662
          l21.932,21.931L191.541,469.568L169.61,447.636z"/>
        <rect x="284.001" y="197.94" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -63.0395 273.8137)" width="30.004" height="30.124"/>
        <rect x="241.404" y="155.325" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -45.3819 231.2119)" width="30.004" height="30.124"/>
        <rect x="326.607" y="240.541" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -80.684 316.4184)" width="30.004" height="30.124"/>
      </svg>
      <a
        v-if="data.header === 'Workshops'"
        href="https://tickets.robotframework.org/workshop/"
        target="_blank"
        class="type-body"
        @click="ga('send', 'event', 'click', 'workshopTicketClick')">
        Buy workshop tickets here!
      </a>
      <button
        v-if="data.previousTalks || data.textHiddenByDefault"
        type="button"
        @click="hiddenContentShown = !hiddenContentShown"
        class="button-primary mt-4">
        {{ hiddenContentShown ? 'Hide' : 'Show' }}
      </button>
      <div
        v-if="data.text && (!data.textHiddenByDefault || hiddenContentShown)"
        v-html="data.text"
        class="row order-2 block-text textblock-right p-3 no-border" />
      <div
        v-if="data.previousTalks">
        <transition appear name="fade">
          <div v-if="hiddenContentShown" class="mt-4">
            <talker-item
              v-for="(talk, key) in data.previousTalks"
              :key="key"
              :header="talk.header"
              :margin="talk.margin"
              :authors="talk.authors"
              :title="talk.title"
              :type="talk.type || ''"
              :description="talk.description"
              :description-expanded="talk.descriptionExpanded"
              :bio="talk.bio"
              :img-url="talk.imgUrl"
              :url="talk.url"/>
          </div>
        </transition>
      </div>
      <div
        v-else-if="data.talks">
        <div class="mt-4">
          <talker-item
            v-for="(talk, key) in data.talks"
            :key="key"
            :header="talk.header"
            :margin="talk.margin"
            :authors="talk.authors"
            :title="talk.title"
            :keynote="talk.keynote"
            :time="talk.time"
            :ticket-id="talk.ticketId"
            :sponsored-by="talk.sponsoredBy"
            :type="talk.type || ''"
            :description="talk.description"
            :description-expanded="talk.descriptionExpanded"
            :bio="talk.bio"
            :second-bio="talk.secondBio"
            :third-bio="talk.thirdBio"
            :fourth-bio="talk.fourthBio"
            :img-url="talk.imgUrl"
            :second-img-url="talk.secondImgUrl"
            :third-img-url="talk.thirdImgUrl"
            :fourth-img-url="talk.fourthImgUrl"
            :url="talk.url"/>
        </div>
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
            class="col-lg-7 order-2 block-text textblock-right p-3 no-border"
          />
          <div class="col-md-12 col-lg-5 order-3 textblock-right ml-0 p-3">
            <twitter-timeline
              class="p-xs-5 p-lg-0"
              id="robotframework"
              widget-class="twitterprofile"
              sourceType="profile"
              :style="isMobile ? '' : isTablet ? 'height: 850px; overflow: scroll' : 'height: 580px; overflow: scroll'"
              :options="options"
            />
          </div>
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
      },
      hiddenContentShown: false
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < 992;
    },
    isTablet() {
      return window.innerWidth < 1200;
    }
  },
  created() {
    const anchor = document.URL.split('#').length > 1 ? document.URL.split('#')[1] : null
    if (this.data.textHiddenByDefault && anchor === this.data.header.replace(/ /g, '-').toLowerCase()) this.hiddenContentShown = true
    if (!this.data.talks) return
    if (this.data.talks.some(({ title }) => title && anchor === title.replace(/ /g, '-').toLowerCase())) this.hiddenContentShown = true
  }
};
</script>
