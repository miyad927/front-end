<script setup>
import { reactive, onMounted } from "vue";
import { useProductsRanking } from "../../stores/useProductsRanking";
import Products from "../product/components/Product.vue";

const productRankingStore = useProductsRanking();
const ProductList = reactive([
  {
    id: 1,
    name: "고객후기1위! 옛날 국물떡볶이 570g 1",
    starPoint: 4.9,
    reviewCnt: 2718,
    price: 7980,
    imgPath:
      "https://thenaum.cdn-nhncommerce.com/data/goods/14/06/04/1000000307/1000000307_magnify_079.jpg",
  },
  {
    id: 2,
    name: "고객후기1위! 옛날 국물떡볶이 570g 2",
    starPoint: 4.9,
    reviewCnt: 2718,
    price: 7980,
    imgPath:
      "https://thenaum.cdn-nhncommerce.com/data/goods/19/05/21/1000002179/1000002179_add3_045.jpg",
  },
  {
    id: 3,
    name: "고객후기1위! 옛날 국물떡볶이 570g 3",
    starPoint: 4.9,
    reviewCnt: 2718,
    price: 7980,
    imgPath:
      "https://thenaum.cdn-nhncommerce.com/data/goods/16/01/14/1000000838/1000000838_magnify_010.jpg",
  },
  {
    id: 4,
    name: "고객후기1위! 옛날 국물떡볶이 570g 4",
    starPoint: 4.9,
    reviewCnt: 2718,
    price: 7980,
    imgPath:
      "https://thenaum.cdn-nhncommerce.com/data/goods/19/03/10/1000002060/1000002060_magnify_012.jpg",
  },
  {
    id: 5,
    name: "고객후기1위! 옛날 국물떡볶이 570g 5",
    starPoint: 4.9,
    reviewCnt: 2718,
    price: 7980,
    imgPath:
      "https://thenaum.cdn-nhncommerce.com/data/goods/14/06/04/1000000303/1000000303_magnify_07.jpg",
  },
  {
    id: 6,
    name: "고객후기1위! 옛날 국물떡볶이 570g 6",
    starPoint: 4.9,
    reviewCnt: 2718,
    price: 7980,
    imgPath:
      "https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg",
  },
]);

onMounted(async () => {
  await productRankingStore.fetchProducts();
});
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
        <div class="food_category_list">
          <ul>
            <li class="goodsCateList goodsActive">전체</li>
            <li class="goodsCateList">한식</li>
            <li class="goodsCateList">중식</li>
            <li class="goodsCateList">일식</li>
            <li class="goodsCateList">분식</li>
            <li class="goodsCateList">아시아</li>
            <li class="goodsCateList">패스트푸드</li>
          </ul>
        </div>
        <div class="product-grid-6">
          <Products v-for="product in ProductList" :product="product" />
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
          v-for="product in productRankingStore.products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
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
.food_category_list {
  max-width: 78.75rem;
  overflow-y: hidden;
  overflow-x: auto;
  margin: 0 0 3.125rem 0;
}
.food_category_list ul {
  height: 3.5rem;
  display: flex;
  border-bottom: 0.0625rem solid #cecece;
}
.food_category_list ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.05em;
  color: #666970;
  position: relative;
  word-break: keep-all;
}
.food_category_list ul li.goodsActive {
  font-weight: 700;
  color: #ff7400;
}
.food_category_list ul li.goodsActive:after {
  content: "";
  width: 100%;
  height: 0.125rem;
  position: absolute;
  bottom: -0.0625rem;
  left: 0;
  background: #ff7400;
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

@media (max-width: 500px) {
  .food_category_list ul li {
    min-width: 100px;
  }
}
</style>
