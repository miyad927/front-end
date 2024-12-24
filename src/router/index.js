import { createWebHistory, createRouter } from "vue-router";

import MainView from "../pages/common/Main.vue";
import Stores from "../pages/store/Stores.vue";

const routes = [
  { path: "/", component: MainView },
  { path: "/store", component: Stores },
  { path: "/login", component: Login },
  { path: "/join", component: Join },
  { path: "/join_agreement", component: JoinAgreement },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
