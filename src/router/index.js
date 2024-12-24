import { createWebHistory, createRouter } from "vue-router";

import MainView from "../pages/common/Main.vue";
import Stores from "../pages/store/Stores.vue";
import StoreDetail from "../pages/store/StoreDetail.vue";
import Login from "../pages/user/LoginView.vue";
import Join from "../pages/user/Join.vue";
import JoinAgreement from "../pages/user/JoinAgreement.vue";
import JoinForm from "../pages/user/JoinForm.vue";

const routes = [
  { path: "/", component: MainView },
  { path: "/store", component: Stores },
  { path: "/store/:id", component: StoreDetail},
  { path: "/login", component: Login },
  { path: "/join", component: Join },
  { path: "/join_agreement", component: JoinAgreement },
  { path: "/join_form", component: JoinForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
