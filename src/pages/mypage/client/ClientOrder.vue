<script setup>

</script>

<template>
  <div class="order_container">
    <h1>주문 내역</h1>
    <ul class="order_list">
      <li class="order_card">
        <div class="order_header">
          <div class="text_box">
            <p>2024.12.19</p>
            <p>주문번호: 274387429</p>
          </div>
          <div>
            <span>주문 상세보기</span>
            <img src="/src/assets/icons/angle_right.svg" alt="상세보기" />
          </div>
        </div>
        <div class="line"></div>
        <div class="order_body">
          <p>결제 완료</p>
          <ul class="product_list">

            <li class="product_item">
              <img
                src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
                alt="주문상품"
              />
              <div class="product_info">
                <p>떡볶이 밀키트</p>
                <div class="price_cnt_box">
                  <span>14,000원</span>
                  <span>1개</span>
                </div>
              </div>
            </li>
            <li class="product_item">
              <img
                src="https://thenaum.cdn-nhncommerce.com/data/goods/15/01/26/1000000463/1000000463_magnify_07.jpg"
                alt="주문상품"
              />
              <div class="product_info">
                <p>떡볶이 밀키트</p>
                <div class="price_cnt_box">
                  <span>14,000원</span>
                  <span>1개</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.order_container {
  width: 100%;
  padding: 2rem 5rem;
}

.order_list {
  width: 100%;
  margin: 2rem auto;
}

.order_card {
  border-radius: 1rem;
  border: 1px solid #ccc;
  padding: 1.5rem;
}

.order_card > .line {
  width: 100%;
  height: 1px;
  background-color: #eceff3;
  margin: 1rem 0 1.2rem;
}

.order_header {
  display: flex;
  justify-content: space-between;
}

.order_header > .text_box > p:first-child {
  font-size: 1.125rem;
  font-weight: 600;
}

.order_header > .text_box > p:last-child {
  color: #848f9a;
}

.order_body > p {
  font-size: 1.125rem;
  color: #ff7400;
  font-weight: 600;
  margin-bottom: 1rem;
}

.product_list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product_item {
  display: flex;
  gap: 1rem;
}

.product_item img {
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
}

.product_info {
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product_info > p {
  font-weight: 600;
}

.price_cnt_box > span::after {
  content: "";
  width: 1px;
  height: 100%;
  color: #ccc;
}

.price_cnt_box {
  display: flex;
  gap: 0.4rem;
}
</style>
