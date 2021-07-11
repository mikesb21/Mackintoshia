// Vue
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

// Views
import Home from "../views/Home.vue";
import NewFungi from "../views/NewFungi.vue";
import About from "../views/About.vue";
import Fungi from "../views/Fungi.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/new",
    name: "Add Fungi",
    component: NewFungi,
  },
  {
    path: "/fungi/:id",
    name: "Fungi",
    component: Fungi,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
