import { defineStore } from "pinia";
import axios from "axios";

const baseUrl =
  "https://1846f82f-744f-4069-b790-aea1f893e984.mock.pstmn.io/productBest";

export const useProductsRanking = defineStore("products", {
  state: () => ({
    productsList: [],
  }),
  actions: {
    async fetchProducts() {
      const response = await axios.get(baseUrl);
      this.products = response.data;
    },
  },
});
