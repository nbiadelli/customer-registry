import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { title: 'login' },
  },
  {    
    path: "/register",
    name: "Register",

    component: () =>
      import("../views/CustomerRegistry.vue"),
      meta: { title: 'register' },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
