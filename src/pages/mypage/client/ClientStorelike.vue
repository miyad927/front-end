<script setup>
import ClinetLikes from "./components/ClientLikes.vue";
</script>

<template>
  <div class="like_container">
    <div class="like_header">좋아요 한 식당</div>
    <table class="like_table">
      <thead>
        <tr>
          <th class="col1">식당 이름</th>
          <th class="col2">주소</th>
          <th class="col3">전화번호</th>
          <th class="col4">예약하기 / 삭제하기</th>
        </tr>
      </thead>
      <tbody>
        <ClinetLikes></ClinetLikes>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.like_container {
  width: 59.375rem;
}
.like_header {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
}
.like_table {
  width: 100%;
  border-radius: 1rem;
  border: 1px solid #ccc;
  padding: 1.5rem;
  margin: 1rem 0;
}

table tr:first-child th {
  padding: 0.625rem;
  font-size: 1.25rem;
}
.col1 {
  width: 20%;
}
.col1 {
  width: 30%;
}
.col1 {
  width: 30%;
}
.col4 {
  width: 20%;
}
.like_table th {
  font-weight: bold;
}
</style>
