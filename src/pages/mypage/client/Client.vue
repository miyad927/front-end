<script setup>
import ClientMenu from "./components/ClientMenu.vue";
import ClientSummary from "./components/ClientSummary.vue";
</script>

<template>
  <div class="main">
    <ClientMenu></ClientMenu>
    <div class="ClientContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 0;
  display: flex;
}
.ClientContainer {
  padding: 3.125rem;
  width: 100%;
}
</style>
