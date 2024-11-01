import Vue from "vue";
import "./styles/index.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import { setupPlugins } from "./plugins";

Vue.config.productionTip = false;

if (process.env.VUE_APP_MOCK === "Y") {
  const { mockXHR } = require("@/utils/mockHandler");
  mockXHR();
}

function setupApp() {
  setupPlugins();
  new Vue({
    i18n,
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}

setupApp();
