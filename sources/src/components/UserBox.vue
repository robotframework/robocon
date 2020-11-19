<template>
<div
    class="container">
  <div class="col-lg-12 mt-5" style="display: flex; flex-wrap: wrap">
  <div v-for="(user, index) in data" :key="index" class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-2 pr-lg-1 pl-lg-3 pl-md-0 pl-sm-3 p-xs-1">
        <div class="text-center p-3" :style="'height:100px'">
        <a :href="user.href" target="blank" style="margin-top: 35px; display: inline-block; transform: translateY(-50%)"><img class="img-fluid pb-2 user-image" style="max-height: 100%" :src="user.img"/></a>
        </div>
        <div class="card-body">
        <p v-html="user.text"></p>
        </div>
    </div>
    <p style="text-align: end; width: 100%; font-size: 0.85rem;">
    Want your logo here?<br><a href="https://forms.gle/qcf8MjwcQ1tgNhDq8">Fill out the form and become a sponsor</a>
    </p>
  </div>
</div>
</template>

<script>
export default {
  props: ["data"]
};
</script>
