import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";

const app = createApp(App);
app.use(Toast)
.mount("#app");
