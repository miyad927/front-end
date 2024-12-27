import { defineStore } from "pinia";
import axios from "axios";

export const useMemberStore = defineStore("member", {
  state: () => ({ isLogin: false }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    async login(userData) {
      const response = await axios.post("/api/login", userData);

      if (response.data.isLogin) {
        this.isLogin = true;
      }

      if (this.isLogin) {
        loginCheck();
      }
      return response.data;
    },

    async loginCheck() {
      const response = await axios.get("/api/login", {
        withCredentials: true,
      });

      if (response.data.isSuccess) {
        this.isLogin = true;
      }

      return response.data;
    },
  },
});
