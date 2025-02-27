import { createRouter, createWebHistory } from 'vue-router'
import ContentPage from '../views/ContentPage.vue'
import Archive from '../views/Archive.vue'
import Stream from '../views/Stream.vue'
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
      path: '/stream',
      name: 'Stream',
      component: Stream
    },
    {
      path: '/cs',
      name: 'CS',
      beforeEnter: () => {
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfVuVGv4cimwv6rTHi869n2b9yFJFXqlV9AS5wQ9MgWIFu1ww/viewform'
        return false
      }
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
