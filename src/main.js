import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./assets/tailwind.css";
import router from "./routes";
import runtime from "serviceworker-webpack-plugin/lib/runtime";

if ("serviceWorker" in navigator) {
  runtime.register();
}

createApp(App).use(router).mount("#app");
