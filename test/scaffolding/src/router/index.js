import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Test1 from "../views/Test1.vue";
import Index from "../views/Index.vue";
import Test2 from "../views/Test2.vue";
import Test3 from "../views/Test3.vue";
import Test4 from "../views/Test4.vue";
import Test5 from "../views/Test5.vue";
import Test6 from "../views/Test6.vue";
import Test7 from "../views/Test7.vue";
import Player from "../views/Player.vue";
import PlayerProfile from "../views/Player/Profile.vue";
import PlayerStats from "../views/Player/Stats.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/t1",
    name: "Test1",
    component: Test1,
    // path: '/',
    // name: 'Home',
    // component: Home
  },
  {
    path: "/t2",
    name: "Test2",
    component: Test2,
  },
  {
    path: "/t3",
    name: "Test3",
    component: Test3,
  },
  {
    path: "/t4",
    name: "Test4",
    component: Test4,
  },
  {
    path: "/t5",
    name: "Test5",
    component: Test5,
  },
  {
    path: "/t6",
    name: "Test6",
    component: Test6,
  },
  {
    path: "/rt",
    name: "Test7",
    component: Test7,
  },
  {
    path: "/palyer/:uid",
    name: "Player",
    component: Player,
    children: [
      {
        path: "profile",
        component: PlayerProfile,
      },
      {
        path: "stats",
        component: PlayerStats,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
