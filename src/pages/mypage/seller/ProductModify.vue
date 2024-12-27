<script setup></script>

<template>
  <div class="container">
    <h1>상품 수정</h1>
    <form>
      <div class="form_group">
        <label for="product_name">상품명</label>
        <input
          type="text"
          id="product_name"
          name="product_name"
          value=""
          required
        />
      </div>

      <div class="form_group">
        <label for="product_price">가격</label>
        <input
          type="number"
          id="product_price"
          name="product_price"
          value=""
          required
        />
      </div>

      <div class="form_group">
        <label for="product_stock">재고</label>
        <input
          type="number"
          id="product_stock"
          name="product_stock"
          value=""
          required
        />
      </div>

      <div class="form_group">
        <label for="product_description">상품 설명</label>
        <textarea
          id="product_descriptions"
          name="product_descriptions"
          required
        ></textarea>
      </div>

      <div class="form_group">
        <label for="product_image">상품 이미지</label>
        <input type="file" id="product_image" name="product_image" />
      </div>

      <div class="form_group buttons">
        <button type="submit">수정하기</button>
        <button type="button" class="cancel_btn">취소하기</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

.container {
  width: 100%;
  max-width: 400px;
  margin: 50px auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

h1 {
  text-align: center;
  color: #00a7b3;
  font-size: 2rem;
  margin-bottom: 50px;
  margin-top: 30px;
}

.form_group {
  margin-bottom: 10px;
}

.form_group label {
  display: block;
  font-size: 16px;
  color: #333;
  margin-bottom: 9px;
}

.form_group input,
.form_group textarea {
  width: 100%;
  padding: 12px;
  font-size: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.form_group input:focus,
.form_group textarea:focus {
  border-color: #00a7b3;
  outline: none;
}

.form_group textarea {
  min-height: 110px;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
  gap: 15px;
}

button {
  padding: 3px 18px;
  background-color: #00a7b3;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 12px;
}

.cancel_btn {
  background-color: #00a7b3;
}

input[type="file"] {
  padding: 6px 12px; 
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f9f9f9;
  font-size: 14px; 
}

input[type="file"]:focus {
  border-color: #00a7b3;
  outline: none;
}

.form_group label {
  font-size: 16px;
  margin-bottom: 10px;
}

button:hover {
  background-color: #008a92;
}

.cancel_btn:hover {
  background-color: #008a92;
}
</style>
