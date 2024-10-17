const formRoutes = [
  {
    path: "/project/form",
    meta: { auth: false },
    component: () => import("@/views/form/index.vue"),
    children: [
      {
        path: "",
        meta: { auth: true },
        component: () => import("@/views/form/editor/index.vue"),
      },
      {
        path: "editor",
        meta: { auth: true },
        component: () => import("@/views/form/editor/index.vue"),
      },
      {
        path: "logic",
        meta: { auth: true },
        component: () => import("@/views/form/logic/index.vue"),
      },
      {
        path: "preview",
        meta: { auth: true },
        component: () => import("@/views/form/preview/index.vue"),
      },
      {
        path: "publish",
        meta: { auth: true },
        component: () => import("@/views/form/publish/index.vue"),
      },
    ],
  },
];

export default formRoutes;
