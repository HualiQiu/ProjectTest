import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () =>
      import(/* webpackChunkName: "welcome" */ "../views/Welcome.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import(/* webpackChunkName: "main" */ "../views/Main.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
