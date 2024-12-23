<script setup>
const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <router-link :to="`/store/${store.idx}`" class="store_item">
    <img
      class="store_img"
      src="https://d12zq4w4guyljn.cloudfront.net/750_750_20241123105001_photo1_394db3cb2fa0.jpg"
    />
    <div class="info_box">
      <span class="subtitle">{{ store.category }}</span>
      <span class="store_name">{{ store.name }}</span>
      <div class="review_box">
        <img src="/src/assets/icons/star_fill.svg" alt="star" class="icon" />
        <div class="review_content_box">
          <span>{{ store.starPoint }}</span>
          <span class="subtitle">({{ store.reviewCnt }})</span>
        </div>
      </div>
      <span class="subtitle">{{ store.shortAddress }}</span>
    </div>
  </router-link>
</template>

<style scoped>
.store_item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.store_img {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  border-radius: 0.375rem;
  overflow: hidden;
}

.info_box {
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  white-space: nowrap;
}

.store_name {
  font-weight: 700;
  font-size: 1rem;
}

.review_box {
  font-family: "Open Sans", "Noto Sans KR", sans-serif;
  display: flex;
  align-items: center;
  gap: 0.125rem;
  letter-spacing: -0.01em;
  font-size: 0.75rem;
}

.subtitle {
  font-size: 0.75rem;
  color: gray;
}

.icon {
  width: 1rem;
  height: 1rem;
}

.review_content_box span:first-child {
  font-weight: 500;
  margin-right: 0.2rem;
}
</style>
