import axios from "axios";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    bigCategory: [],
    smallCategory: [],
    bigCate: {
      idx: 0,
      name: "전체",
    },
  }),

  actions: {
    async getBigCategory() {
      await axios
        .get(
          "https://2deee6c7-ce64-440b-80cd-b66969cb5b6e.mock.pstmn.io/category/big"
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
          "https://2deee6c7-ce64-440b-80cd-b66969cb5b6e.mock.pstmn.io/category/small",
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

    setBigCate(cate) {
      this.bigCate = cate;
    },
  },
});
