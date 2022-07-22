import { createApp } from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import 'Css/index.css'
import { createI18n } from 'vue-i18n/index'
import english from './content/english'

// const lang = window.localStorage.getItem('lang')

const i18n = createI18n({
  locale: 'en-US',
  messages: {
    'en-US': { ...english }
  },
  warnHtmlInMessage: 'off'
})

console.log(english)

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app')
