<template>
  <div class="container">
    <div class="main">
      <h1>밀키트</h1>
      <div class="category_box">
        <ul class="category_list">
          <li class="big_category picked">전체</li>
          <li class="big_category">한식</li>
          <li class="big_category">중식</li>
          <li class="big_category">양식</li>
          <li class="big_category">분식</li>
          <li class="big_category">아시아</li>
          <li class="big_category">패스트푸드</li>
        </ul>

        <ul class="small_category_list">
          <li class="small_category picked">전체</li>
          <li class="small_category">찜/탕</li>
          <li class="small_category">고기/구이</li>
          <li class="small_category">족발/보쌈</li>
          <li class="small_category">백반/죽</li>
          <li class="small_category">도시락</li>
        </ul>
      </div>
      <div class="order_box">
        <ul class="orderby">
          <li>
            <a href="" class="orderby_list active">좋아요순</a>
          </li>
          <li>
            <a href="" class="orderby_list">평점순</a>
          </li>
          <li>
            <a href="" class="orderby_list">리뷰 많은 순</a>
          </li>
        </ul>
      </div>
      <!-- <div class="store_list">
        <a href="/store/store_detail.html" target="_blank" class="store_item">
          <div class="img_box">
            <img
              src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
            />
          </div>
          <div class="info_box">
            <span class="subtitle">떡볶이</span>
            <span class="store_name">장뜰떡볶이</span>
            <div class="review_box">
              <img
                src="../../assets/icons/star_fill.svg"
                alt="star"
                class="icon"
              />
              <div class="review_content_box">
                <span>4.9</span>
                <span class="subtitle">(38)</span>
              </div>
            </div>
            <span class="subtitle">서울 동작구</span>
          </div>
        </a>
        <a href="/store/store_detail.html" target="_blank" class="store_item">
          <div class="img_box">
            <img
              src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
            />
          </div>
          <div class="info_box">
            <span class="subtitle">떡볶이</span>
            <span class="store_name">장뜰떡볶이</span>
            <div class="review_box">
              <img
                src="../../assets/icons/star_fill.svg"
                alt="star"
                class="icon"
              />
              <div class="review_content_box">
                <span>4.9</span>
                <span class="subtitle">(38)</span>
              </div>
            </div>
            <span class="subtitle">서울 동작구</span>
          </div>
        </a>
        <a href="/store/store_detail.html" target="_blank" class="store_item">
          <div class="img_box">
            <img
              src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
            />
          </div>
          <div class="info_box">
            <span class="subtitle">떡볶이</span>
            <span class="store_name">장뜰떡볶이</span>
            <div class="review_box">
              <img
                src="../../assets/icons/star_fill.svg"
                alt="star"
                class="icon"
              />
              <div class="review_content_box">
                <span>4.9</span>
                <span class="subtitle">(38)</span>
              </div>
            </div>
            <span class="subtitle">서울 동작구</span>
          </div>
        </a>
        <a href="/store/store_detail.html" target="_blank" class="store_item">
          <div class="img_box">
            <img
              src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
            />
          </div>
          <div class="info_box">
            <span class="subtitle">떡볶이</span>
            <span class="store_name">장뜰떡볶이</span>
            <div class="review_box">
              <img
                src="../../assets/icons/star_fill.svg"
                alt="star"
                class="icon"
              />
              <div class="review_content_box">
                <span>4.9</span>
                <span class="subtitle">(38)</span>
              </div>
            </div>
            <span class="subtitle">서울 동작구</span>
          </div>
        </a>
        <a href="/store/store_detail.html" target="_blank" class="store_item">
          <div class="img_box">
            <img
              src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
            />
          </div>
          <div class="info_box">
            <span class="subtitle">떡볶이</span>
            <span class="store_name">장뜰떡볶이</span>
            <div class="review_box">
              <img
                src="../../assets/icons/star_fill.svg"
                alt="star"
                class="icon"
              />
              <div class="review_content_box">
                <span>4.9</span>
                <span class="subtitle">(38)</span>
              </div>
            </div>
            <span class="subtitle">서울 동작구</span>
          </div>
        </a>
        <a href="/store/store_detail.html" target="_blank" class="store_item">
          <div class="img_box">
            <img
              src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
            />
          </div>
          <div class="info_box">
            <span class="subtitle">떡볶이</span>
            <span class="store_name">장뜰떡볶이</span>
            <div class="review_box">
              <img
                src="../../assets/icons/star_fill.svg"
                alt="star"
                class="icon"
              />
              <div class="review_content_box">
                <span>4.9</span>
                <span class="subtitle">(38)</span>
              </div>
            </div>
            <span class="subtitle">서울 동작구</span>
          </div>
        </a>
        <a href="/store/store_detail.html" target="_blank" class="store_item">
          <div class="img_box">
            <img
              src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
            />
          </div>
          <div class="info_box">
            <span class="subtitle">떡볶이</span>
            <span class="store_name">장뜰떡볶이</span>
            <div class="review_box">
              <img
                src="../../assets/icons/star_fill.svg"
                alt="star"
                class="icon"
              />
              <div class="review_content_box">
                <span>4.9</span>
                <span class="subtitle">(38)</span>
              </div>
            </div>
            <span class="subtitle">서울 동작구</span>
          </div>
        </a>
        <a href="/store/store_detail.html" target="_blank" class="store_item">
          <div class="img_box">
            <img
              src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
            />
          </div>
          <div class="info_box">
            <span class="subtitle">떡볶이</span>
            <span class="store_name">장뜰떡볶이</span>
            <div class="review_box">
              <img
                src="../../assets/icons/star_fill.svg"
                alt="star"
                class="icon"
              />
              <div class="review_content_box">
                <span>4.9</span>
                <span class="subtitle">(38)</span>
              </div>
            </div>
            <span class="subtitle">서울 동작구</span>
          </div>
        </a>
        <a href="/store/store_detail.html" target="_blank" class="store_item">
          <div class="img_box">
            <img
              src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
            />
          </div>
          <div class="info_box">
            <span class="subtitle">떡볶이</span>
            <span class="store_name">장뜰떡볶이</span>
            <div class="review_box">
              <img
                src="../../assets/icons/star_fill.svg"
                alt="star"
                class="icon"
              />
              <div class="review_content_box">
                <span>4.9</span>
                <span class="subtitle">(38)</span>
              </div>
            </div>
            <span class="subtitle">서울 동작구</span>
          </div>
        </a>
        <a href="/store/store_detail.html" target="_blank" class="store_item">
          <div class="img_box">
            <img
              src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
            />
          </div>
          <div class="info_box">
            <span class="subtitle">떡볶이</span>
            <span class="store_name">장뜰떡볶이</span>
            <div class="review_box">
              <img
                src="../../assets/icons/star_fill.svg"
                alt="star"
                class="icon"
              />
              <div class="review_content_box">
                <span>4.9</span>
                <span class="subtitle">(38)</span>
              </div>
            </div>
            <span class="subtitle">서울 동작구</span>
          </div>
        </a>
        <a href="/store/store_detail.html" target="_blank" class="store_item">
          <div class="img_box">
            <img
              src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
            />
          </div>
          <div class="info_box">
            <span class="subtitle">떡볶이</span>
            <span class="store_name">장뜰떡볶이</span>
            <div class="review_box">
              <img
                src="../../assets/icons/star_fill.svg"
                alt="star"
                class="icon"
              />
              <div class="review_content_box">
                <span>4.9</span>
                <span class="subtitle">(38)</span>
              </div>
            </div>
            <span class="subtitle">서울 동작구</span>
          </div>
        </a>
        <a href="/store/store_detail.html" target="_blank" class="store_item">
          <div class="img_box">
            <img
              src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
            />
          </div>
          <div class="info_box">
            <span class="subtitle">떡볶이</span>
            <span class="store_name">장뜰떡볶이</span>
            <div class="review_box">
              <img
                src="../../assets/icons/star_fill.svg"
                alt="star"
                class="icon"
              />
              <div class="review_content_box">
                <span>4.9</span>
                <span class="subtitle">(38)</span>
              </div>
            </div>
            <span class="subtitle">서울 동작구</span>
          </div>
        </a>
      </div> -->
      <div class="store_list">
        <Product v-for="product of productsStore.products" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import "../../assets/products/products.css";
import Product from "./components/Product.vue";
import { useProductsStore } from "../../stores/useProductsStore";
import { onMounted } from "vue";

const productsStore = useProductsStore();

onMounted(async () => {
  await productsStore.getProductsList();
});
</script>

<style lang="scss" scoped></style>
