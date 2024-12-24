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
          "https://run.mocky.io/v3/1ac410a9-28c4-49aa-9e78-91f0781e7e61",
          {
            sort: "HOT",
            place: "서울",
            category: 1,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
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
    async getStoreBestList() {
      await axios
        .get(
          "https://1846f82f-744f-4069-b790-aea1f893e984.mock.pstmn.io/storeBest",
          {
            sort: "HOT",
            place: "서울",
            category: 1,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
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
