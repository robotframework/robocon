import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { useStore } from './store'
import './assets/css/index.css'
import { getEntries } from './content'

const app = createApp(App)
  .use(store)

getEntries()
  .then((res) => {
    const pages = res.items.filter((item) => item.sys.contentType.sys.id === 'page')
    const store = useStore()
    store.$patch({
      pages,
      entries: res
    })
    app.use(router())
    app.mount('#app')
  })
