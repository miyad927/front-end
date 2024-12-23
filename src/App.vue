<script setup>
import Header from "./pages/common/components/Header.vue";
import Footer from "./pages/common/components/Footer.vue";
</script>

<template>
  <Header></Header>
  <div class="container">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<style scoped></style>
