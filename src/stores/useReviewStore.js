import axios from "axios";
import { defineStore } from "pinia";

export const useReviewStore = defineStore("review", {
  state: () => ({}),

  actions: {
    async getStoreReview(storeId = 1) {
      const response = await axios
        .get(
          `https://2deee6c7-ce64-440b-80cd-b66969cb5b6e.mock.pstmn.io/store/${storeId}/review`
        )
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      return response.data;
    },
  },
});
