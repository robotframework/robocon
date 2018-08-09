<template>
<section>
<b-nav  v-b-scrollspy:scroller.50 tag="nav" toggleable="md" id="navigation" class="d-none d-md-block topbar">
    <b-nav-item v-for="item in pages" v-if="item.hide_from_nav != true" v-bind:key="item.title" v-scroll-to="'#'+item.title.toLowerCase()" :href="'#'+item.title.toLowerCase()">{{item.title.replace(/-and-/g,' & ')}}</b-nav-item>
</b-nav>


 <b-navbar  toggleable="md" fixed="top" type="dark" id="navigation-collapsed" class="d-md-none">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand class="p-0 m-0 d-block d-md-none" href="#">
    ROBOCON 2019 <b-img :src="require('@/assets/img/ROBOTFW_Mark_White_LOW_cropped.png')" class="" style="height:30px;"  alt="Robot Frameworkg logo"/>
  </b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav class="align-middle">
      <b-nav-item v-for="item in pages" v-if="item.hide_from_nav != true" v-bind:key="item.title" :href="'#'+item.title.toLowerCase()" v-scroll-to="'#'+item.title.toLowerCase()">{{item.title}}</b-nav-item>
    </b-navbar-nav>
  </b-collapse>

</b-navbar>
</section>
</template>

<script>
export default {
  props: ["pages"],
  methods: {
    onActivate(target) {},
    click(a) {
      console.log(a);
      document.getElementById(a).scrollIntoView();
      }
  },
  created() {
    this.$root.$on("bv::scrollspy::activate", this.onActivate);
  }
};
</script>
