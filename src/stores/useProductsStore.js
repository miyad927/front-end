import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("products", {
  state: () => ({
    product: [],
  }),
  actions: {
    async getProductBestList() {
      const response = await axios.get(
        "https://1846f82f-744f-4069-b790-aea1f893e984.mock.pstmn.io/productBest"
      );
      this.productsBest = response.data;
    },
  },
});
