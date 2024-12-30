import axios from "axios";
import { defineStore } from "pinia";

export const useReviewStore = defineStore("review", {
  state: () => ({}),

  actions: {
    async getStoreReview(storeId = 1) {
      const response = await axios
        .get(`https://run.mocky.io/v3/db76d8b3-2699-4ac2-8fd9-699dd091cbb1`)
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      return response.data;
    },
  },
});
