/**
 * @author Elwin
 * @description Element UI 组件库注册
 */

import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import 'element-ui/lib/theme-chalk/display.css';
import i18n from "@/i18n";

export function setupElement() {
  Vue.use(ElementUI, {
    size: "small",
    i18n: (key, value) => i18n.t(key, value),
  });
}
