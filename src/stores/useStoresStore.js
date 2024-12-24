import axios from "axios";
import { defineStore } from "pinia";

export const useStoresStore = defineStore("stores", {
  state: () => ({
    stores: [],
  }),

  actions: {
    async getStoreList() {
      await axios
        .get(
          "https://2deee6c7-ce64-440b-80cd-b66969cb5b6e.mock.pstmn.io/store",
          {
            sort: "HOT",
          }
        )
        .then((response) => {
          this.stores = response.data.stores;
          return response.data.stores;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
});
