import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/components/router/index";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import vuetify from "../src/plugins/vuetify";
import "vuetify/dist/vuetify.min.css";

createApp(App).use(router).use(vuetify).mount("#app");
