// vue-router
import { createRouter, createWebHistory } from 'vue-router';
// Component
import TheHeader from '../components/TheHeader.vue';

// Routers
const routes = [
  {
    path: '/',
    name: 'TheHeader',
    component: TheHeader,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
