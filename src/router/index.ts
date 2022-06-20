import { createRouter, createWebHistory } from "vue-router";
import PomoView from "../views/PomoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "pomo",
      component: PomoView,
    },
  ],
});

export default router;
