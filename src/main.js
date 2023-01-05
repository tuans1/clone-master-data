import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style/tailwind.css";
import "./style/element-ui/main.scss";

createApp(App).use(store).use(ElementPlus).use(router).mount("#app");
