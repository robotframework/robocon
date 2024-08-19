import { createPinia, defineStore } from 'pinia';

const store = createPinia();

export default store;

export const useStore = defineStore('store', {
  state: () => ({
    isMobile: false,
    pages: []
  })
});
