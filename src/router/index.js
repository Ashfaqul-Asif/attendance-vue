import Vue from "vue";
import VueRouter from "vue-router";
const loadView = view => () => import(`@/views/${view}.vue`);
import { mapMutuation } from "vuex";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: loadView("Login")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

  {
    path: "/users",
    name: "users",
    component: loadView("users")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path != "/" && !store.getters["authenticate/getauthenticated"]) {
    next("/");
    
  }
  else if (to.path == "/" && store.getters["authenticate/getauthenticated"]) {
    next("about")
  }
   else next();
});

export default router;
