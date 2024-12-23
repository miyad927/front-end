<script setup>
import { ref } from "vue";
import BigCategory from "./BigCategory.vue";
import SmallCategory from "./SmallCategory.vue";

const bigCateIdx = ref(1);

const updateBigCateIdx = (idx) => {
  bigCateIdx.value = idx;
};
</script>

<template>
  <BigCategory @big-cate="updateBigCateIdx" />
  <SmallCategory :bigCateIdx="bigCateIdx" />
</template>

<style scoped></style>
