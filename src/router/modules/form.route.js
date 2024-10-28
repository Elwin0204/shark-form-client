const formRoutes = [
  {
    path: "/project/form",
    meta: { title: "", auth: true, hidden: true },
    component: () => import("@/views/form/layout/index.vue"),
    children: [
      {
        path: "",
        meta: { title: "编辑", auth: true, hidden: true },
        component: () => import("@/views/form/editor/index.vue"),
      },
      {
        path: "editor",
        meta: { title: "编辑", auth: true, hidden: true },
        component: () => import("@/views/form/editor/index.vue"),
      },
      {
        path: "logic",
        meta: { title: "逻辑", auth: true, hidden: true },
        component: () => import("@/views/form/logic/index.vue"),
      },
      {
        path: "theme",
        meta: { title: "外观", auth: true, hidden: true },
        component: () => import("@/views/form/theme/index.vue"),
      },
      {
        path: "setting",
        meta: { title: "设置", auth: true, hidden: true },
        component: () => import("@/views/form/setting/index.vue"),
      },
      {
        path: "publish",
        meta: { title: "发布", auth: true, hidden: true },
        component: () => import("@/views/form/publish/index.vue"),
      },
      {
        path: "data",
        meta: { title: "数据", auth: true, hidden: true },
        component: () => import("@/views/form/data/index.vue"),
      },
      {
        path: "statistics",
        meta: { title: "统计", auth: true, hidden: true },
        component: () => import("@/views/form/statistics/index.vue"),
      },
    ],
  },
  {
    path: "/project/view",
    meta: { title: "", auth: true, hidden: true },
    component: () => import("@/views/form/preview/ProjectForm.vue"),
  },
  {
    path: "/project/public/result",
    meta: { title: "", auth: true, hidden: true },
    component: () => import("@/views/form/report/ReportPublic.vue"),
  },
  {
    path: "/s/:key",
    meta: { title: "", auth: true, hidden: true },
    component: () => import("@/views/form/write/index.vue"),
  },
  {
    path: "/project/write",
    meta: { title: "", auth: true, hidden: true },
    component: () => import("@/views/form/write/index.vue"),
  },
];

export default formRoutes;
