import axios from "axios";
import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", {
  state: () => ({}),

  actions: {
    async getClientOrderList() {
      const response = await axios
        .get(
          "https://2deee6c7-ce64-440b-80cd-b66969cb5b6e.mock.pstmn.io/client/orders"
        )
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      return response.data;
    },
  },
});
