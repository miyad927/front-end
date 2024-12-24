import { createWebHistory, createRouter } from "vue-router";

import MainView from "../pages/common/Main.vue";
import Stores from "../pages/store/Stores.vue";
import StoreDetail from "../pages/store/StoreDetail.vue";

const routes = [
  { path: "/", component: MainView },
  { path: "/store", component: Stores },
  { path: "/store/:id", component: StoreDetail}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
