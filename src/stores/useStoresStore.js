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
          "https://6b780f16-632b-4655-9324-f7b16531d032.mock.pstmn.io/store",
          {
            sort: "HOT",
          },
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
