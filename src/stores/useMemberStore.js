import { defineStore } from "pinia";
import axios from "axios";

export const useMemberStore = defineStore("member", {
  state: () => ({ isLogin: false }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    async login(userData = null) {
      let response;

      if (userData) {
        // POST 요청: 로그인 처리
        response = await axios.post("/api/login", userData, {
          withCredentials: true, // 쿠키 전달 허용
        });
        console.log("로그인 응답 데이터:", response.data);

        if (response.data.isLogin) {
          const cookieValue = this.getCookie("LOGIN");
          if (cookieValue) {
            sessionStorage.setItem("LOGIN", cookieValue);
            this.isLogin = true;
            alert("로그인 되었습니다.");
          }
        }
      }

      return response.data;
    },

    getCookie(cookieName) {
      const cookies = document.cookie.split("; ");
      for (const cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name === cookieName) {
          return decodeURIComponent(value);
        }
      }
      return null;
    },

    logout() {
      this.isLogin = false;
      sessionStorage.removeItem("LOGIN");
      document.cookie =
        "LOGIN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      alert("로그아웃 되었습니다.");
    },
  },
});
