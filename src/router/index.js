import { createWebHistory, createRouter } from "vue-router";

import MainView from "../pages/common/Main.vue";

const routes = [
  { path: "/", component: MainView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
