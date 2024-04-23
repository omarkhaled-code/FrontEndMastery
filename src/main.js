import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/scss/main.scss";
import "./axios";

// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

store.dispatch("attempt", localStorage.getItem("jwt"));

createApp(App)
  .use(store)
  .use(router)
  .component("fontIcon", FontAwesomeIcon)
  .mount("#app");
