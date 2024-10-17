import Vue from "vue";
import "./styles/index.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { setupPlugins } from "./plugins";

Vue.config.productionTip = false;

function setupApp() {
  setupPlugins();
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}

setupApp();
