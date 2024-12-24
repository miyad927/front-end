import { createApp } from "vue";
import "./reset.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import VCalendar from 'v-calendar';
import 'v-calendar/style.css'

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(VCalendar, {});
app.mount("#app");
