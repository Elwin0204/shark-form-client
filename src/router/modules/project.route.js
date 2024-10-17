const projectRoutes = [
  {
    path: "/project",
    meta: { auth: true },
    component: () => import("@/views/project"),
    children: [
      {
        path: "my",
        meta: { auth: true },
        component: () => import("@/views/project/my/index"),
      },
      {
        path: "recycle",
        meta: { auth: true },
        component: () => import("@/views/project/recycle/index"),
      },
      {
        path: "template",
        meta: { auth: true },
        component: () => import("@/views/project/template/index"),
      },
    ],
  },
  {
    path: "/project/view",
    meta: { auth: false },
    component: () => import("@/views/form/preview/ProjectForm.vue"),
  },
  {
    path: "/project/public/result",
    meta: { auth: false },
    component: () => import("@/views/form/report/ReportPublic.vue"),
  },
  {
    path: "/s/:key",
    meta: { auth: false },
    component: () => import("@/views/form/write/index.vue"),
  },
  {
    path: "/project/write",
    meta: { auth: false },
    component: () => import("@/views/form/write/index.vue"),
  },
];

export default projectRoutes;
