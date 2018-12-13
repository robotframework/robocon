// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */

import Es6Promise from 'es6-promise'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

import Vue from 'vue'
import App from './App'
import VueScrollTo from 'vue-scrollto'

import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import NavigationVertical from '@/components/NavigationVertical'
import NavigationHorizontal from '@/components/NavigationHorizontal'
import BootstrapVue from 'bootstrap-vue'

Es6Promise.polyfill()

Vue.use(BootstrapVue)

Vue.use(VueScrollTo, {
  duration: 300,
  easing: 'ease'
})

/* if (/robotframework.org/.test(window.location.href)) {
  Vue.use(VueAnalytics, {
    id: ['UA-106835747-2']
  })
} */

require('@/assets/css/main.css')
require('@/assets/css/pygments.css')

Vue.config.productionTip = false

Vue.component('app-header', AppHeader)
Vue.component('navigation-vertical', NavigationVertical)
Vue.component('navigation-horizontal', NavigationHorizontal)
Vue.component('app-footer', AppFooter)

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
