<template>
<section>
<b-nav  v-b-scrollspy:scroller.50 tag="nav" toggleable="md" id="navigation" class="d-none d-md-block topbar">
    <b-nav-item v-for="item in pages" v-if="item.hide_from_nav != true" v-bind:key="item.title" v-scroll-to="'#'+item.title.toLowerCase()" :href="'#'+item.title.toLowerCase()">{{item.title.replace(/-and-/g,' & ')}}</b-nav-item>
</b-nav>


 <b-navbar  toggleable="md" fixed="top" type="dark" id="navigation-collapsed" class="d-md-none">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <div class="mobile-header"><div style="float: left">RBCN></div>
    <transition name="header-slide" mode="out-in">
      <div :key="currentPageMutable" class="color" style="float: left">
        {{currentPageMutable}}
      </div>
    </transition> 
  </div>
  <b-navbar-brand class="p-0 m-0 d-block d-md-none" href="#">
    <b-img :src="require('@/assets/img/ROBOTFW_Mark_White_LOW_cropped.png')" class="" style="height:33px;"  alt="Robot Frameworkg logo"/>
  </b-navbar-brand>
  <b-collapse is-nav id="nav_collapse" transition-duration="10">
    <b-navbar-nav class="align-middle">
      <b-nav-item v-for="item in pages" v-if="item.hide_from_nav != true" v-bind:key="item.title" :href="'#'+item.title.toLowerCase()" v-scroll-to="'#'+item.title.toLowerCase()">{{item.title}}</b-nav-item>
    </b-navbar-nav>
  </b-collapse>

</b-navbar>
</section>
</template>

<script>
export default {
  props: ["pages", "currentPage"],
  data () {
  return {
      currentPageMutable: this.currentPage
    }
  },
  methods: {
    onActivate(target) {
      this.currentPageMutable = target.substring(1).toUpperCase();
    },
    click(a) {
      document.getElementById(a).scrollIntoView();
    }
  },
  created() {
    this.$root.$on("bv::scrollspy::activate", this.onActivate);
  }
};
</script>
