import Vue from "vue";
import VueRouter from "vue-router";
import rootRoutes from "@/router/modules/root.route";
import formRoutes from "@/router/modules/form.route";

const constantRoutes = [...rootRoutes, ...formRoutes];
const { publicPath } = require("../../build/build.js");

Vue.use(VueRouter);

// 解决路由在 push/replace 了相同地址报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: "history",
  base: publicPath,
  routes: constantRoutes,
});

export default router;
