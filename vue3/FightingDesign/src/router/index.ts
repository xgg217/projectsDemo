import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/button",
      name: "button",
      component: () => import("@/views/button/index.vue"),
    },
    {
      path: "/calendar",
      name: "calendar",
      component: () => import("@/views/calendar/index.vue"),
    },
  ],
});

export default router;
