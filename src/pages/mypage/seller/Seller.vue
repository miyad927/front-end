<script setup>
import SellerMenu from "./components/SellerMenu.vue";
</script>

<template>
  <div class="main">
    <SellerMenu></SellerMenu>
    <div class="SellerContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 0;
  display: flex;
}
.SellerContainer {
  padding: 3.125rem 3.125rem;
}
</style>
