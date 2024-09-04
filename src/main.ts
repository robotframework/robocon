import { Entry } from "contentful";
import { createApp } from "vue";

import App from "./App.vue";
import { getEntries } from "./content";
import { i18nConfig } from "./i18n";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import { useGlobalStore } from "./store/modules";

const app = createApp(App)

app.use(store).use(i18nConfig).use(vuetify)

getEntries().then((res: unknown) => {
  const pages = (res as Array<Entry>)?.filter(
    ({ sys }) => sys.contentType.sys.id === "page",
  );

  const st = useGlobalStore()
  st.setPages(pages);
  app.use(router).mount("#app");
})


