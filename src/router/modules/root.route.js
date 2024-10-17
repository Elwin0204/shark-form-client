import BaseLayout from "@/layouts/BaseLayout.vue";
const rootRoutes = [
  {
    path: "/login",
    meta: { auth: false },
    component: () => import("@/views/user/login/index.vue"),
  },
  {
    path: "/forget/password",
    meta: { auth: false },
    component: () => import("@/views/user/forget/index.vue"),
  },
  {
    path: "/my-form",
    meta: { auth: true },
    component: BaseLayout,
    children: [
      {
        path: "/",
        meta: { auth: true },
        component: () => import("@/views/project/my/index"),
      },
    ],
  },
];

export default rootRoutes;
