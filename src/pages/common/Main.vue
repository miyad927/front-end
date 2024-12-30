<script setup>
import { ref, reactive, onMounted } from "vue";
import { useProductsStore } from "../../stores/useProductsStore";
import { useStoresStore } from "../../stores/useStoresStore";
import { useCategoryStore } from "../../stores/useCategoryStore";

import Products from "../product/components/Product.vue";
import StoreCard from "../store/components/StoreCard.vue";
import BigCategory from "../store/components/BigCategory.vue";

const storesStore = useStoresStore();
const productStore = useProductsStore();
const categoryStore = useCategoryStore();
const isModal = ref(false);
onMounted(async () => {
  await storesStore.getStoreBestList();
});
onMounted(async () => {
  await productStore.getProductBestList();
});
const closeModal = () => {
  isModal.value = false;
};
</script>

<template>
  <div class="inner_wrap">
    <div class="visual"></div>
    <!-- 베스트 -->
    <section>
      <div class="head_title_wrap">
        <div class="s_title">뭘 좋아할 지 몰라 다 준비했어!</div>
        <div class="b_title">카테고리별 베스트</div>
      </div>
      <div class="best_goods_wrap">
        <BigCategory />
        <div class="product-grid-6">
          <StoreCard
            v-for="store in categoryStore.bigCate.name === '전체'
              ? storesStore.stores.slice(0, 6)
              : storesStore.stores
                  .filter(
                    (store) => store.category === categoryStore.bigCate.name
                  )
                  .slice(0, 6)"
            :key="store.id"
            :store="store"
          />
          <Products
            v-for="(product, index) in ProductList"
            :product="product"
            :index="index"
          />
        </div>
      </div>
    </section>
    <!-- 밀키트 -->
    <section>
      <div class="head_title_wrap">
        <div class="s_title">집에서도 경험하는 미식</div>
        <div class="b_title">밀키트 베스트</div>
      </div>
      <div class="product-grid-6">
        <Products
          v-for="product of productStore.productsBest"
          v-model:isModal="isModal"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
    <div id="addCartLayer" v-if="isModal" class="layer_wrap">
      <!-- <Products  /> -->
      <div
        class="box add_cart_layer"
        style="position: absolute; margin: 0px; top: 211.5px; left: 551px"
      >
        <div class="view">
          <h2>장바구니 담기</h2>
          <div class="scroll_box">
            <p class="success">
              <strong>상품이 장바구니에 담겼습니다.</strong><br />바로
              확인하시겠습니까?
            </p>
          </div>
          <div class="btn_box">
            <button @click="closeModal" class="btn_cancel">
              <span>취소</span>
            </button>
            <router-link to="/carts">
              <button class="btn_confirm btn_move_cart">
                <span>확인</span>
              </button>
            </router-link>
          </div>
          <button
            @click="closeModal"
            title="닫기"
            class="close layer_close"
            type="button"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
section {
  padding: 3.75rem 0;
}

section:not(:last-child) {
  border-bottom: 0.0625rem solid #eee;
}

.head_title_wrap {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.head_title_wrap .s_title {
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
  font-weight: 400;
}

.head_title_wrap .b_title {
  font-size: 2rem;
  line-height: 2.1875rem;
  letter-spacing: -0.02em;
  font-weight: 600;
  margin: 0.625rem 0 1.875rem 0;
  display: flex;
  justify-content: space-between;
}

.visual {
  background: url(/src/assets/icons/main_img.jpeg) no-repeat center 60%;
  border-radius: 0 0 1.25rem 1.25rem;
  color: #fff;
  box-sizing: border-box;
  background-size: cover;
  height: 12.5rem;
}

.best_goods_wrap {
  width: 100%;
  margin: 0 auto;
}

.product-grid-6 {
  grid-template-columns: repeat(6, 1fr);
  display: grid;
  gap: 2.5rem 1.5rem;
  width: 100%;
  letter-spacing: -0.05em;
  flex-direction: column;
  width: 100%;
}

.crema-hide.crema-applied {
  display: none !important;
}

.crema-show {
  font-size: 0.75rem;
  font-family: "Open Sans", "Noto Sans KR", sans-serif;
  display: flex;
  align-items: center;
  gap: 0.125rem;
  letter-spacing: -0.01em;
}

.crema-show:before {
  content: "";
  display: block;
  width: 1.125rem;
  height: 1.125rem;
  background: url(https://thenaum.cdn-nhncommerce.com/data/img/allnew/layout/star_fill.svg)
    no-repeat;
  background-size: contain;
}
.crema-product-reviews-score {
  font-size: 0.875rem;
  font-weight: 500;
  color: #1a1a1a;
}

.crema_product_reviews_score__container {
  display: inline-block;
  font-family: inherit;
}

.crema-product-reviews-count {
  color: #595959;
}

.item_money_box {
  display: flex;
  flex-direction: column;
}

@media (max-width: 960px) {
  .product-grid-6 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 장바구니 담기 */

/* 장바구니에 담으시겠습니까? */
.layer_wrap {
  /* overflow-y: auto; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 210;
}

element.style {
  position: absolute;
  margin: 0px;
  top: 211.5px;
  left: 551px;
}

.layer_wrap .box {
  background: #fff;
  border: 2px solid #555;
}

.add_cart_layer,
.add_wish_layer {
  width: 414px;
  min-height: 312px;
}

.layer_wrap .box .view {
  position: relative;
  margin: 14px 20px;
}

.layer_wrap .box .view h2 {
  padding: 0 0 13px;
  border-bottom: 1px solid #999999;
  color: #000;
  font-size: 18px;
  line-height: 1;
}

.layer_wrap .scroll_box {
  overflow-x: hidden;
  overflow-y: auto;
}

.add_cart_layer p.success {
  background: url(https://thenaum.cdn-nhncommerce.com/data/skin/front/moment/img/common/layer/add_cart_success.png)
    no-repeat center top;
}

.add_cart_layer p {
  margin: 30px 0 0;
  padding: 80px 0 0;
  color: #222;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  background: url(https://thenaum.cdn-nhncommerce.com/data/skin/front/moment/img/common/layer/add_cart_success.png)
    no-repeat center top;
}

.layer_wrap .box .view .close {
  display: block;
  position: absolute;
  top: 6px;
  right: 0;
  width: 18px;
  height: 18px;
  text-indent: -9999px;
  background: url(https://thenaum.cdn-nhncommerce.com/data/skin/front/moment/img/btn/layer-close.png)
    no-repeat left top;
}

.add_cart_layer .btn_box,
.add_wish_layer .btn_box {
  padding: 29px 0 0 0;
  text-align: center;
}

.add_cart_layer .btn_cancel,
.add_wish_layer .btn_cancel {
  min-width: 74px;
  padding: 10px 10px 9px 10px;
  border: 1px solid #cccccc;
  color: #3e3d3c;
  background: #ffffff;
  font-weight: bold;
}

.add_cart_layer .btn_confirm,
.add_wish_layer .btn_confirm {
  min-width: 74px;
  padding: 10px 10px 9px 10px;
  margin: 0 0 0 6px;
  border: 1px solid #00a7b3;
  color: #ffffff;
  background: #00a7b3;
  font-weight: bold;
}

.add_cart_layer .btn_box,
.add_wish_layer .btn_box {
  padding: 29px 0 0 0;
  text-align: center;
}
</style>
