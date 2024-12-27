<script setup></script>

<template>
  <div class="container">
    <h2>배송 등록</h2>
    <div class="form_group">
      <label for="courier">택배사</label>
      <select id="courier" name="courier" required>
        <option value="CJ대한통운">CJ 대한통운</option>
        <option value="한진택배">한진택배</option>
        <option value="롯데택배">롯데택배</option>
        <option value="우체국">우체국</option>
        <option value="편의점택배">편의점 택배</option>
      </select>
    </div>
    <div class="form_group">
      <label for="trackingNumber">운송장 번호</label>
      <input
        type="text"
        id="trackingNumber"
        name="trackingNumber"
        placeholder="운송장번호를 입력해주세요"
        required
      />
    </div>
    <div class="form_group">
      <label for="orderNumber">주문 번호</label>
      <input
        type="text"
        id="orderNumber"
        name="orderNumber"
        placeholder="주문번호를 입력해주세요"
        required
      />
    </div>
    <div class="button_container">
      <button type="submit" class="submit">등록하기</button>
      <button type="button" class="back">돌아가기</button>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 360px;
  margin: 50px auto;
  padding: 30px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #00a7b3;
  font-size: 1.8rem;
  margin-bottom: 40px;
}

.form_group {
  margin-bottom: 18px;
}

label {
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 6px;
}

input[type="text"],
select {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  margin-bottom: 12px;
  transition: border-color 0.3s;
}

input[type="text"]:focus,
select:focus {
  border-color: #00a7b3;
  outline: none;
}

button {
  width: 48%;
  padding: 12px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.submit, button.back {
  background-color: #00a7b3;
  color: white;
}
button.submit:hover, button.back:hover {
  background-color: #008a92;
}

.button_container {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 20px;
}

#courier {
  height: 40px;
  font-size: 14px;
  border-radius: 6px;
}
</style>
