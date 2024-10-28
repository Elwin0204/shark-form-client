const rootRoutes = [
  {
    path: "/login",
    meta: { title: "登录", auth: true, hidden: true },
    component: () => import("@/views/user/login/index.vue"),
  },
  {
    path: "/forget/password",
    meta: { title: "忘记密码", auth: true, hidden: true },
    component: () => import("@/views/user/forget/index.vue"),
  },
  {
    path: "/401",
    meta: { title: "401", auth: true, hidden: true },
    component: () => import("@/views/error/401.vue"),
  },
  {
    path: "/404",
    meta: { title: "404", auth: true, hidden: true },
    component: () => import("@/views/error/404.vue"),
  },
];

export default rootRoutes;
