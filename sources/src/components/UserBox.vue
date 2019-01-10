<template>
<div
    class="container">
  <div class="col-lg-12" style="display: flex; flex-wrap: wrap">
  <div v-for="(user, index) in data" :key="index" v-if="!user.silver" class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-2 pr-lg-1 pl-lg-3 pl-md-0 pl-sm-3 p-xs-1">
        <div class="text-center p-3" :style="(user.title === 'Eficode') ? 'height:100px' : 'height:100px;background-color:#fff;'">
        <a :href="user.href" style="margin-top: 35px; display: inline-block; transform: translateY(-50%)"><img class="img-fluid pb-2 user-image" style="max-height: 100%" :src="user.img"/></a>
        </div>
        <div class="card-body">
        <p v-html="user.text"></p>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ["data"]
};
</script>
