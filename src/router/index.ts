import { createRouter, createWebHistory } from 'vue-router'
import ContentPage from '../views/ContentPage.vue'
import Archive from '../views/Archive.vue'
import NotFound from '../views/NotFound.vue'
import { useStore } from '../store'

const getRoutes = () => {
  const store = useStore()
  console.log(store.pages.map((page) => ({
    path: page.fields.slug as unknown as string,
    name: page.fields.pageName as unknown as string,
    component: ContentPage,
    children: []
  })))
  return [
    ...store.pages.map((page) => ({
      path: page.fields.slug as unknown as string,
      name: page.fields.pageName as unknown as string,
      component: ContentPage,
      children: []
    })),
    {
      path: '/archive',
      name: 'Archive',
      component: Archive,
      children: []
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
      children: []
    },
  ]
}

const router = () => createRouter({
  history: createWebHistory(),
  routes: getRoutes(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router
