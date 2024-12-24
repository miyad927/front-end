<script setup>
import { onMounted } from "vue";
import ReservationBox from "./components/ReservationBox.vue";
import { useRoute } from "vue-router";

const route = useRoute()

onMounted(() => {
  const storeIdx = route.params.id;
  console.log(storeIdx);
});
</script>

<template>
  <div class="main">
    <section class="store"></section>
    <aside class="reservation">
      <ReservationBox />
    </aside>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
}

.store {
  width: 100%;
}

.reservation {
  width: 20rem;
  margin-left: 3rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
}
</style>
