<script setup></script>

<template>
  <div class="container">
    <h2>주문 상세 내역</h2>
    <table class="order_details">
      <tr>
        <th>이름</th>
        <td>홍길동</td>
      </tr>
      <tr>
        <th>전화번호</th>
        <td>010-1234-5678</td>
      </tr>
      <tr>
        <th>주소</th>
        <td>서울시 강남구 테헤란로 123</td>
      </tr>
      <tr>
        <th>요청사항</th>
        <td>배송시 문 앞에 두고 가주세요.</td>
      </tr>
      <tr>
        <th>주문일자</th>
        <td>2024-12-20</td>
      </tr>
    </table>
    <div class="btn-container">
      <a href="#" class="back_btn"><em>닫기</em></a>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

.container {
  width: 30%;
  max-width: 600px;
  margin: 30px auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

h2 {
  font-size: 2rem;
  margin-bottom: 80px;
  color: #00a7b3;
  text-align: center;
  margin-top: 30px;
}

.order_details {
  width: 90%;
  border-collapse: collapse;
  margin: 0 auto;
}

.order_details th,
.order_details td {
  padding: 7px;
  text-align: left;
  border: 1px solid #ddd;
  font-size: 15px;
}

.order_details th {
  background-color: #83a2a5;
  color: white;
  font-size: 15px;
}

.order_details td {
  color: #070707;
  font-size: 15px;
}

.order_details tr:nth-child(even) {
  background-color: #f9f9f9;
}

.back_btn {
  display: inline-block;
  background-color: #00a7b3;
  color: white;
  padding: 12px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
  
}

.back_btn:hover {
  background-color: #008a92;
}


.btn-container {
  text-align: center;
  margin-top: 3px;
}
</style>
