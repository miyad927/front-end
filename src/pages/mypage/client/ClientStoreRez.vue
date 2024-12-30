<script setup>
import ClientRezs from "./components/ClientRezs.vue";
</script>

<template>
  <div class="my_storeRezs">
    <div class="storeRez_title">예약 내역</div>
    <div class="storeRez_contents">
      <ClientRezs></ClientRezs>
      <!-- 리뷰 항목 -->
    </div>
  </div>
</template>

<style scoped>
.my_storeRezs {
  padding-left: 1.125rem;
}
.storeRez_title {
  display: flex;
  gap: 1.875rem;
  font-size: 1.875rem;
  margin-bottom: 1.25rem;
}
</style>
