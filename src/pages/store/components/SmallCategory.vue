<script setup>
import { onMounted, onUpdated, reactive } from "vue";
import { useCategoryStore } from "../../../stores/useCategoryStore";
import { useLoadingStore } from "../../../stores/useLoadingStore";

const props = defineProps({
  bigCateIdx: {
    type: Number,
    required: true,
  },
});

let bigCate = props.bigCateIdx;
const loadingStore = useLoadingStore();
const categoryStore = useCategoryStore();

const smallCate = reactive({
  idx: 0,
  name: "전체",
});

const changeSmallCate = (cate) => {
  smallCate.idx = cate.idx;
  smallCate.name = cate.name;
};

// Big Category 바뀔 때마다 Small Category 업데이트
const getSmallCategoryList = async () => {
  loadingStore.startLoading();
  await categoryStore.getSmallCategory(props.bigCateIdx);
  loadingStore.stopLoading();

  bigCate = props.bigCateIdx;
};

onMounted(async () => {
  await getSmallCategoryList();
});

// bigCateIdx가 업데이트 될 때 처리
onUpdated(async () => {
  if (bigCate !== props.bigCateIdx) {
    await getSmallCategoryList();
  }
});
</script>

<template>
  <ul v-if="!loadingStore.isLoading" class="small_category_list">
    <li
      class="small_category"
      :class="{ picked: smallCate.idx === 0 }"
      @click="changeSmallCate({ idx: 0, name: '전체' })"
    >
      전체
    </li>
    <li
      v-for="cate in categoryStore.smallCategory"
      :key="cate.idx"
      class="small_category"
      :class="{ picked: smallCate.idx === cate.idx }"
      @click="changeSmallCate(cate)"
    >
      {{ cate.name }}
    </li>
  </ul>
</template>

<style scoped>
.small_category_list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 2.5rem;
  border: 1px solid #c6c6c6;
}

.small_category {
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  white-space: nowrap;
}

.small_category:active,
.small_category:hover {
  font-weight: 700;
}

.small_category.picked {
  font-weight: 700;
}
</style>
