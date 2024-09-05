import type { RouteParams, RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import { Home, NotFound } from '../views';

const ROUTE_PATHS = [
  'Event',
  'Ticket',
  'Sponsor',
  // 'Archive',  'Stream', 'Game'
];

export type AppRouteNames = 'home';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Robot Framework',
      description: 'open source automation framework for test automation'
    }
  },
  ...ROUTE_PATHS.map((p) => {
    const name = p.toLowerCase();
    return {
      path: `/${name}`,
      name,
      component: () => import(`../views/${p}.vue`)
    };
  }),
  {
    path: '/quiz',
    redirect:
      'https://docs.google.com/forms/d/e/1FAIpQLSfsxaOkNju6m7Tp3D3QcdVel8Ikp1U0GUdNZF1LQYtKltp0aw/viewform?usp=sf_link'
  },
  {
    path: '/cs',
    redirect:
      'https://docs.google.com/forms/d/e/1FAIpQLSc8PQLJdrNdrNVV-eBJ7DxqxLCbHZqSSV0zsshCrUK1BlMT6g/viewform'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

export function routerPush(
  name: AppRouteNames,
  params?: RouteParams
): ReturnType<typeof router.push> {
  return params === undefined
    ? router.push({ name })
    : router.push({ name, params });
}

export default router;
