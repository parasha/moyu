import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import BaseLayout from "@/layout/base.vue";
import Home from "@/pages/home/index.vue";
import Editor from "@/pages/editor/index.vue";

export const routes: RouteRecordRaw[] | [] = [
  {
    path: "/edit",
    name: "edit",
    component: Editor,
  },
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "",
        component: Home,
        meta: { tabId: "home" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
