import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("products", {
  state: () => ({
    productsBest: [],
    product: {
      productId: 0,
      productName: "",
      price: 0,
      image: "",
      expirationDate: "",
    },
    products: [],
  }),
  actions: {
    async getProductBestList() {
      const response = await axios.get(
        "https://02bbbbe3-c971-4a76-b853-6bbbc83b2afd.mock.pstmn.io/productBest"
      );

      this.productsBest = response.data;
    },

    async getProductsDetail(id) {
      const response = await axios.get(
        `https://193e67e5-10ed-40ed-ad63-dc23723ce82b.mock.pstmn.io/products/${id}`
      );
      this.product = response.data;
    },

    async getProductsList() {
      const response = await axios.get(
        "https://193e67e5-10ed-40ed-ad63-dc23723ce82b.mock.pstmn.io/products"
      );
      this.products = response.data;
    },
  },
});
