<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const userId = 1;
const apiUrl = `https://abc5b35f-117e-49a2-9442-364017e60701.mock.pstmn.io/my/reservation/stores/?userId=${userId}`;
const rezs = ref([]);
const fetchRezs = async () => {
  try {
    const response = await axios.get(apiUrl);
    rezs.value = response.data.stores;
  } catch (error) {
    console.error("리뷰 데이터를 가져오는 중 오류 발생:", error);
  }
};
onMounted(fetchRezs);
</script>

<template>
  <div class="storeRez_item" v-for="(review, index) in rezs" :key="index">
    <div class="storeRez_left">
      <div class="store_name">{{ review.store_name }}</div>
      <div class="review_category store_address">{{ review.store_address }}</div>
      <img src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg" alt="Review Image" class="review_image" />
    </div>
    <div class="storeRez_right notYet_right">
      <div class="review_date">{{ review.reservation }}</div>
      <button class="review_button">예약 취소하기</button>
    </div>
  </div>
</template>

<style scoped>
.storeRez_item {
  display: flex;
  border-bottom: 0.0625rem solid #ddd;
  padding: 1.875rem 0;
}
.storeRez_left {
  flex: 7;
}
.store_name {
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.3125rem;
}
.review_category {
  font-size: 1.125rem;
}
.store_address {
  font-size: 0.9375rem;
  color: rgba(var(--gray50), 1);
}
.review_image {
  max-width: 6.25rem;
  max-height: 6.25rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  border-radius: 0.25rem;
}
.storeRez_right {
  flex: 3;
  border-left: 0.0625rem solid #cecece;
  padding-left: 1.25rem;
  padding-top: 1.25rem;
}
.notYet_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.review_date {
  font-size: 0.9375rem;
  margin-bottom: 0.9375rem;
}
.review_button {
  padding: 0.625rem;
  background-color: #ff7400;
  border-radius: 0.25rem;
  color: white;
}
</style>
