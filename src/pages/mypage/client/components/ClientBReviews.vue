<script setup></script>

<template>
  <div class="review_item">
    <div class="review_left">
      <div class="review_itemName">BBQ 치킨</div>
      <img src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg" alt="Review Image" class="review_image" />
    </div>
    <div class="review_right notYet_right">
      <div class="review_date">2024.11.23</div>
      <button class="review_button">리뷰 쓰러 가기</button>
    </div>
  </div>
</template>

<style scoped>
.review_item {
  display: flex;
  border-bottom: 0.0625rem solid #ddd;
  padding: 1.25rem 0;
}
.review_contents .review_item:first-child {
  border-top: 0.0625rem solid #ddd;
}
.review_left {
  flex: 7;
}
.review_itemName {
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.3125rem;
}
.review_image {
  max-width: 6.25rem;
  max-height: 6.25rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  border-radius: 0.25rem;
}
.review_right {
  flex: 3;
  border-left: 0.0625rem solid #cecece;
  padding-left: 1.25rem;
  padding-top: 1.25rem;
}
.notYet_right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.review_date {
  font-size: 1.25rem;
  margin-bottom: 0.9375rem;
}
.review_button {
  padding: 0.625rem;
  background-color: #ff7400;
  border-radius: 0.25rem;
  color: white;
  margin-bottom: 0.625rem;
}
</style>
