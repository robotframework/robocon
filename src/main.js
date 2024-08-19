import { createApp } from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store, { useStore } from './store'
import './assets/css/index.css'
import { createI18n } from 'vue-i18n'
import english from './content/english'
import german from './content/german'
import { getEntries } from './content/contentful'

const i18n = createI18n({
  locale: 'en-US',
  messages: {
    'en-US': { ...english },
    'de-DE': { ...german }
  },
  warnHtmlInMessage: 'off'
})

const app = createApp(App)
  .use(store)
  .use(i18n)

// const lang = window.localStorage.getItem('lang')
getEntries()
  .then((res) => {
    const pages = res.filter((item) => item.sys.contentType.sys.id === 'page')
    const st = useStore()
    st.$patch({
      pages
    })
    app.use(router)
    app.mount('#app')
  })
