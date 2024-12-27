import { createWebHistory, createRouter } from "vue-router";

import MainView from "../pages/common/Main.vue";
import Stores from "../pages/store/Stores.vue";
import StoreDetail from "../pages/store/StoreDetail.vue";
import Login from "../pages/user/LoginView.vue";
import Join from "../pages/user/Join.vue";
import JoinAgreement from "../pages/user/JoinAgreement.vue";
import ProductDetail from "../pages/product/components/ProductDetail.vue";
import JoinForm from "../pages/user/JoinForm.vue";
import Products from "../pages/product/Products.vue";
import Mypage from "../pages/mypage/Mypage.vue";
import Client from "../pages/mypage/client/Client.vue";
import Seller from "../pages/mypage/seller/Seller.vue";
import ClientOrder from "../pages/mypage/client/components/ClientOrder.vue";
import ProductOrder from "../pages/mypage/seller/ProductOrder.vue";
import { useMemberStore } from "../stores/useMemberStore";

const checkUserType = (from, to, next) => {
  // 고객인지 점주인지 확인 후 경로 이동
  const userType = false;
  if (userType) {
    return "/mypage/seller";
  }
  return "/mypage/client";
};

const checkLogin = async (from, to, next) => {
  const memberStore = useMemberStore();
  await memberStore.loginCheck();
  if (memberStore.isLogin) {
    return next();
  }

  next("/login");
};

const routes = [
  { path: "/", component: MainView },
  { path: "/stores", component: Stores },
  { path: "/stores/:id", component: StoreDetail },
  { path: "/login", component: Login },
  { path: "/join", component: Join },
  { path: "/join_agreement", component: JoinAgreement },
  { path: "/products/:id", component: ProductDetail },
  { path: "/join_form", component: JoinForm },
  { path: "/products", component: Products },
  {
    path: "/mypage",
    component: Mypage,
    redirect: checkUserType,
    children: [
      {
        path: "client",
        component: Client,
        children: [{ path: "order", component: ClientOrder }],
      },
      {
        path: "seller",
        component: Seller,
        children: [
          { path: "product", component: ProductOrder },
          
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
