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
  {    
    path: "/customer-listing",
    name: "CustomerListing",

    component: () =>
      import("../views/CustomerListing.vue"),
      meta: { title: 'customer-listing' },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
