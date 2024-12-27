import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        // 프록시할 경로
        target: "https://1846f82f-744f-4069-b790-aea1f893e984.mock.pstmn.io", // 대상 서버
        changeOrigin: true, // 대상 서버의 호스트 헤더 변경 여부
        rewrite: (path) => path.replace(/^\/api/, ""), // '/api' 부분 제거
      },
    },
  },
});
