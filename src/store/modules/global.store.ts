import { defineStore } from 'pinia';
import type { BaseEntry, Entry, EntrySkeletonType } from 'contentful'
import { reactive, ref } from 'vue';


// const useGlobalStore = defineStore('global', () => {
//   const isMobile = ref(false);
//   const pages = reactive<Array<Entry<EntrySkeletonType<BaseEntry>>>>([]);

//   function toggleMobile(val: boolean) {
//     isMobile.value = val
//   }

//   function updatePages(v: Array<Entry<EntrySkeletonType<BaseEntry>>>) {
//     pages.push(v)
//   }

//   return {
//     isMobile,
//     toggleMobile,
//     updatePages
//   }
// });

const useGlobalStore = defineStore('global', {
  state: () => ({
    isMobile: false,
    pages: [] as Array<Entry<EntrySkeletonType<BaseEntry>>>
  }),
  actions: {
    updatePages(pages: Array<Entry<EntrySkeletonType<BaseEntry>>>) {
      this.pages = pages
    }
  },
});


export {
  useGlobalStore
}