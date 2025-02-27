import { createPinia } from 'pinia';
import { defineStore } from "pinia";
import type { Entry } from 'contentful';
import type { Page } from '../content';



export const useStore = defineStore("store", {
  state: () => ({
    pages: [] as Entry<Page>[],
    entries: [] as Entry[],
    name: undefined as string,
    token: undefined as string
  })
});

const store = createPinia();

export default store;
