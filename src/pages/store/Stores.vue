<script setup>
import { onMounted } from "vue";
import { useStoresStore } from "../../stores/useStoresStore";
import Category from "./components/Category.vue";
import OrderBox from "./components/OrderBox.vue";
import StoreCard from "./components/StoreCard.vue";

const storesStore = useStoresStore();

onMounted(async () => { 
  await storesStore.getStoreList();
})

</script>

<template>
  <div class="main">
    <h1>맛집 리스트</h1>
    <Category />
    <OrderBox />
    <div class="store_list">
      <StoreCard
        v-for="store of storesStore.stores"
        :key="store.id"
        :store="store"
      />
    </div>
  </div>
</template>

<style scoped>
.main > h1 {
  margin: 0.625rem 0 1.875rem;
}

.store_list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2.5rem 1.5rem;
  width: 100%;
}

@media (max-width: 960px) {
  .main {
    min-width: 25rem;
    max-width: 35rem;
  }
  .store_list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
