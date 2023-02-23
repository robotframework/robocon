<template>
  <div>
    <div class="px-small pt-small bg-black">
      <button class="theme small type-small mr-small" :class="selectedDay === 1 && 'active'" @click="selectedDay = 1">Day 1</button>
      <button class="theme small type-small" :class="selectedDay === 2 && 'active'" @click="selectedDay = 2">Day 2</button>
    </div>
    <div class="stream-container">
      <iframe class="stream col-sm-12 col-md-9" :src="`https://www.youtube.com/embed/${streamUrl}`" title="Robocon stream" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe class="chat col-sm-12 col-md-3" :src="`https://app.sli.do/event/${chatUrl}`" frameBorder="0" title="Stream chat"></iframe>
    </div>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  data: () => ({
    selectedDay: 1,
    day1: 'U2FsdGVkX18hgvPtbPrildTH52V+vOVmNbrC1qQhIfg=',
    day2: 'U2FsdGVkX18hgvPtbPrildTH52V+vOVmNbrC1qQhIfg=',
    chat: 'U2FsdGVkX19iUgtq6fXKX7b83K3ZsMr2V15r2rzX3Ig19Jy3zuP88Xjh+M+qxlBm',
    token: {}
  }),
  computed: {
    streamUrl() {
      const url = this.selectedDay === 1 ? this.day1 : this.day2
      return CryptoJS.AES.decrypt(url, this.token['hash-key']).toString(CryptoJS.enc.Utf8)
    },
    chatUrl() {
      return CryptoJS.AES.decrypt(this.chat, this.token['hash-key']).toString(CryptoJS.enc.Utf8)
    }
  },
  created() {
    const params = new URLSearchParams(window.location.search)
    const auth = Object.fromEntries(params.entries()).auth
    const base64 = auth.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
    this.token = JSON.parse(Buffer.from(base64, 'base64').toString())
  }
}
</script>

<style scoped>
.stream-container {
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 7rem);
}
@media screen and (max-width: 768px) {
  .chat {
    width: 100%;
  }
}
</style>
