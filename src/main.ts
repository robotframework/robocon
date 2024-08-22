import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { useGlobalStore } from './store'
import { createI18n } from 'vue-i18n'
import { english, german, getEntries } from './content'
import 'Css/index.css'
import vuetify from './plugins/vuetify';
import type { BaseEntry, Entry, EntrySkeletonType } from 'contentful'

const i18n = createI18n({
  locale: 'en-US',
  messages: {
    'en-US': { ...english },
    'de-DE': { ...german }
  },
  warnHtmlInMessage: 'off'
})

const app = createApp(App).use(store).use(i18n).use(vuetify)

getEntries()
  .then((res: unknown) => {
    const pages = (res as Array<Entry<EntrySkeletonType<BaseEntry>>>)?.filter(({ sys }) => sys.contentType.sys.id === 'page')

    const st = useGlobalStore()
    st.updatePages(pages)

    // st.$patch({ pages })
    app.use(router)
    app.mount('#app')
  })
