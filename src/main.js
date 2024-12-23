import { createApp } from "vue";
import { createPinia } from "pinia";
import "./reset.css";
import "./style.css";
const pinia = createPinia();
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
