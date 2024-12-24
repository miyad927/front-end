import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    product: {
      productId: 0,
      productName: "",
      price: 0,
      image: "",
      expirationDate: "",
    },
  }),
  actions: {
    async getProductBestList() {
      const response = await axios.get(
        "https://1846f82f-744f-4069-b790-aea1f893e984.mock.pstmn.io/productBest"
      );
      this.products = response.data;
    },

    async getProductsDetail(id) {
      const response = await axios.get(
        `https://193e67e5-10ed-40ed-ad63-dc23723ce82b.mock.pstmn.io/products/${id}`
      );
      this.product = response.data;
    },
  },
});
