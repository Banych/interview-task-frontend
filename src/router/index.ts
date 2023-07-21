import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Lines',
    component: () => import('@/views/LinesView.vue'),
  },
  {
    path: '/stops',
    name: 'Stops',
    component: () => import('@/views/StopsView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
