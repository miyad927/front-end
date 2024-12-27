<script setup></script>

<template>
  <div class="container">
        <h1>상품 등록</h1>
            <div class="form_row">
                <div class="form_column">
                    <div class="form_group">
                        <label for="product_name">상품명</label>
                        <input type="text" id="product_name" name="product_name" required>
                    </div>
                </div>

                <div class="form_column">
                    <div class="form_group">
                        <label for="price">가격</label>
                        <input type="number" id="price" name="price" required min="1">
                    </div>
                </div>
            </div>

            <div class="form_row">
                <div class="form_column">
                    <div class="form_group">
                        <label for="stock">재고 수량</label>
                        <input type="number" id="stock" name="stock" required min="0">
                    </div>
                </div>

                <div class="form_column">
                    <div class="form_group">
                        <label for="expiry_date">유통기한</label>
                        <input type="date" id="expiry_date" name="expiry_date" required>
                    </div>
                </div>
            </div>

            <div class="form_row">
                <div class="form_column">
                    <div class="form_group">
                        <label for="cooking_time">조리시간 (분)</label>
                        <input type="number" id="cooking_time" name="cooking_time" required min="1">
                    </div>
                </div>
                <div class="form_column">
                    <div class="form_group">
                        <label for="category">카테고리</label>
                        <select id="category" name="category" required>
                            <option value="Korean">한식</option>
                            <option value="Chinese">중식</option>
                            <option value="Japanese">일식</option>
                            <option value="western">양식</option>
                            <option value="Asian">아시안</option>
                            <option value="Asian">분식</option>
                            <option value="Fastfood">패스트푸드</option>
                            
                        </select>
                    </div>
                </div>
            </div>
            <div class="form_row">
                <div class="form_column">
                    <div class="form_group">
                        <label for="description">상품 설명</label>
                        <textarea id="description" name="description" rows="4" required></textarea>
                    </div>
                </div>

                <div class="form_column">
                    <div class="form_group">
                        <label for="image">상품 이미지</label>
                        <input type="file" id="image" name="image" accept="image/*" required>
                    </div>
                </div>
            </div>
            <button type="submit" class = "button">등록</button>
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
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
h1 {
  text-align: center;
  color: #00a7b3;
  font-size: 2rem;
  margin-bottom: 70px;
  margin-top: 40px;
}
.form_group {
  margin-bottom: 20px;
  font-size:15px;
}

label {
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  display: block;
}
.form_row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}
.form_column {
  flex: 1;
  min-width: 250px;
}
input,
textarea,
select {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
  margin: 5px 0;
  box-sizing: border-box;
  transition: border 0.3s ease;
}
input:focus,
textarea:focus,
select:focus {
  border-color: #00a7b3;
  outline: none;
}
textarea {
  resize: vertical;
  min-height: 150px;
}
select {
  cursor: pointer;
}
button {
  width: 80%;
  padding: 15px;
  background-color: #00a7b3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.form_group input[type="file"] {
  padding: 6px;
  font-size: 12px;
}
.form_group input[type="date"],
.form_group input[type="number"] {
  font-size: 12px;
}
button:hover {
  background-color: #008a92;
}

</style>
