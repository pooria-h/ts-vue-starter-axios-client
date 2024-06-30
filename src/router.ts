import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/MainPage.vue'),
      meta: { authRequired: true }, // Optional tag for future authentification
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ],
});

router.beforeEach((to) => {
  // Example of authentification guard
  // if (to.meta.authRequired && !store.isUserLoggedIn) {
  //   return { name: 'signIn' };
  // }
  // if (to.meta.signedOutOnly && store.isUserLoggedIn) {
  //   return { name: 'home' };
  // }
});

export default router;
