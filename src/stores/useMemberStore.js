import { defineStore } from "pinia";
import axios from "axios";

export const useMemberStore = defineStore("member", {
  state: () => ({}),
  actions: {
    async login(userData) {
      const response = await axios.post(
        "https://1846f82f-744f-4069-b790-aea1f893e984.mock.pstmn.io/login",
        userData
      );
      return response.data;
    },
  },
});
