<script setup>
import { onMounted } from "vue";
import ClientAReviews from "./components/ClientAReviews.vue";
import ClientBReviews from "./components/ClientBReviews.vue";

onMounted(() => {
  document.querySelectorAll(".tab_button").forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.dataset.tab; // 선택된 탭 ID

      // 모든 버튼에서 active 클래스 제거
      document.querySelectorAll(".tab_button").forEach((btn) => btn.classList.remove("active"));

      // 모든 콘텐츠에서 active 클래스 제거
      document.querySelectorAll(".tab_content").forEach((content) => content.classList.remove("active"));

      // 현재 클릭된 버튼에 active 클래스 추가
      button.classList.add("active");

      // 연결된 콘텐츠에 active 클래스 추가
      document.querySelector(`#${targetTab}`).classList.add("active");
    });
  });
});
</script>

<template>
  <div class="my_resReviews">
    <div class="my_reviewTab">
      <button class="tab_button active" data-tab="tab1">작성가능한 리뷰</button>
      <button class="tab_button" data-tab="tab2">내가 작성한 리뷰</button>
    </div>
    <div class="my_reviewTabContent">
      <div id="tab1" class="tab_content active">
        <div class="review_contents">
          <ClientBReviews></ClientBReviews>
          <ClientBReviews></ClientBReviews>
          <ClientBReviews></ClientBReviews>
        </div>
      </div>
      <div id="tab2" class="tab_content">
        <div class="review_contents">
          <ClientAReviews></ClientAReviews>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my_resReviews {
  padding-left: 1.125rem;
}
.my_reviewTab {
  display: flex;
  gap: 1.875rem;
}
.tab_button {
  font-size: 1.125rem;
  padding: 1.125rem 1.125rem 1.125rem 0;
}
.tab_content {
  display: none;
}

.tab_content.active {
  display: block;
}
.review_contents .review_item:first-child {
  border-top: 0.0625rem solid #ddd;
}
</style>
