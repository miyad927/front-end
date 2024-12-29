<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useOrderStore } from "../../../stores/useOrderStore";
import ProductItem from "./components/ProductItem.vue";

const route = useRoute();
const orderStore = useOrderStore();

const orderData = ref({
  idx: 0,
  createdAt: "",
  status: "",
  message: "",
  address: "",
  courierCompany: "",
  trackingNumber: "",
  delivery_status: "",
  payStatus: "",
  payPrice: 0,
  paymentName: "",
  products: [],
});

// 금액 formatting
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

onMounted(async () => {
  const id = Number(route.params.id);
  const result = await orderStore.getClientOrderDetail(id);
  console.log(result);
  orderData.value = result.order;
});
</script>

<template>
  <div class="detail">
    <div class="section">
      <h1>주문 내역 상세</h1>
      <div class="box" id="detail_info">
        <p>{{ orderData.createdAt }}</p>
        <p>주문번호: {{ orderData.idx }}</p>
        <div class="line"></div>
        <p>{{ orderData.address }}</p>
      </div>
    </div>
    <div class="section">
      <h1>주문 상품</h1>
      <div class="box">
        <ul class="product_list">
          <ProductItem
            v-for="product in orderData.products"
            :product="product"
          />
        </ul>
      </div>
    </div>
    <div class="section">
      <h1>결제정보</h1>
      <div class="box">
        <div class="pay_item">
          <p>상품 금액</p>
          <p>{{ formatPrice(orderData.payPrice) }}원</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.line {
  width: 100%;
  height: 1px;
  background-color: #eceff3;
  margin: 1rem 0 1.5rem;
}

.section {
  margin-top: 2rem;
}

.box {
  border-radius: 1rem;
  border: 1px solid #ccc;
  padding: 1.5rem;
  margin: 1rem 0;
}

#detail_info > p:first-child {
  color: #848f9a;
}

#detail_info > p:nth-child(2) {
  font-size: 1.125rem;
  font-weight: 600;
}

#detail_info > p:nth-child(4) {
  font-size: 1rem;
}

.product_list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pay_item {
  display: flex;
  justify-content: space-between;
}
</style>
