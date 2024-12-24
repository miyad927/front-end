import axios from "axios";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    bigCategory: [],
    smallCategory: [],
  }),

  actions: {
    async getBigCategory() {
      await axios
        .get(
          "https://6b780f16-632b-4655-9324-f7b16531d032.mock.pstmn.io/category/big"
        )
        .then((response) => {
          this.bigCategory = response.data.category;
          return response.data.category;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },

    async getSmallCategory(refId = 1) {
      await axios
        .get(
          "https://6b780f16-632b-4655-9324-f7b16531d032.mock.pstmn.io/category/small",
          {
            ref_id: refId,
          }
        )
        .then((response) => {
          this.smallCategory = response.data.category;
          return response.data.category;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
});
