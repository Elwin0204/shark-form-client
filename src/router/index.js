import Vue from "vue";
import VueRouter from "vue-router";
const { publicPath } = require("../../build/build.js");

Vue.use(VueRouter);

const routes = [];
const require_module = require.context("./modules", false, /.js$/);
require_module.keys().forEach((file_name) => {
  routes.push(require_module(file_name).default);
});
routes.push({
  path: "*",
  component: () => import("@/views/error/404.vue"),
  meta: {
    title: "找不到页面",
  },
});
console.log("routes", routes);

const router = new VueRouter({
  mode: "history",
  base: publicPath,
  // routes: [
  //   {
  //     path: "/",
  //     meta: { auth: false },
  //     component: () => import("@/views/AboutView.vue"),
  //   },
  //   {
  //     path: "/login",
  //     meta: { auth: false },
  //     component: () => import("@/views/user/login/index.vue"),
  //   },
  // ],
  routes: routes.flat(),
});

export default router;
