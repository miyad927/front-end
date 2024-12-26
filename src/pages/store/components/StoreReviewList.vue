<script setup>
</script>

<template>
  <div>
    <div class="review_header">
      <img src="/src/assets/icons/star_fill.svg" alt="star" />
      <div>
        <p>4.7</p>
        <span>53개의 리뷰</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 리뷰  */
.review_header {
  display: flex;
  justify-content: center;
  gap: 1rem;
  border: 1px solid #ccc;
  padding: 1.5rem 0;
}

.review_header > img {
  width: 3rem;
  height: 3rem;
}

.review_header > div > p {
  font-size: 1.2rem;
  font-weight: 700;
}
</style>
