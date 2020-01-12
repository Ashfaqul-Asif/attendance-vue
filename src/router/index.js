import Vue from "vue";
import VueRouter from "vue-router";
const loadView = view => () => import(`@/views/${view}.vue`);
const loadLayout = view => () => import(`@/views/${view}.vue`);
const loadComponent = c => () => import(`@/components/${c}.vue`);
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
    path: "/dashboard",
    name: "dashboard",
    // route level code-splitting
    // this generates a separate chunk (dashboard.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
      component:loadView("Dashboard"),
      children:[
        
          { path: 'users', name:"users",component: loadView("users") },
          { path: 'checkin', name:"checkin",component: loadComponent("UsersCheckin") }
        
      ]
  },

/*   {
    path: "/home",
    name: "home",
    component: loadView("users")
  } */
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
    next("dashboard")
  }
   else next();
});

export default router;
