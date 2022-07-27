import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Home2022 from '../views/Home2022.vue'
import HomeGermany from '../views/HomeGermany.vue'
import Archive from '../views/Archive.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/2022',
    name: '2022',
    component: Home2022
  },
  {
    path: '/germany',
    name: 'Germany',
    component: HomeGermany
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router
