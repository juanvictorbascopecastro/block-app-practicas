import { createRouter, createWebHashHistory } from "vue-router";
import routerBlock from "../modules/block/router";

const routes = [
  {
    path: "/",
    ...routerBlock,
  },
  {
    path: "/404",
    name: "error404",
    component: () => import("../modules/block/views/Error404View.vue"),
  },
  {
    path: "/401",
    name: "error401",
    component: () => import("../modules/block/views/Error401View.vue"),
  },
  {
    path: "/500",
    name: "error500",
    component: () => import("../modules/block/views/Error500View.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
