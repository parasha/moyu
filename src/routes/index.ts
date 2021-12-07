import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/home/index.vue";
import Editor from "@/pages/editor/index.vue";

export const routes: RouteRecordRaw[] | [] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/edit",
    name: "edit",
    component: Editor,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
