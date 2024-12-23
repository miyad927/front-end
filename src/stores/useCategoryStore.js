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
        .get("https://run.mocky.io/v3/b9e6d81e-421e-47bf-a7cf-e5d38008fdd2")
        .then((response) => {
          this.bigCategory = response.data.category;
          return response.data.category;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },

    async getSmallCategory(ref_id = 1) {
      await axios
        .get(`https://run.mocky.io/v3/d346a78c-dd79-47fd-affa-f03a9c541681`)
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
