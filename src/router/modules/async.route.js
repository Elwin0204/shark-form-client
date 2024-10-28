import BaseLayout from "@/layouts/BaseLayout.vue";
const authRoutes = [
  {
    name: "HomeBase",
    path: "/",
    // meta: {
    //   title: "首页",
    //   auth: true,
    //   hidden: false,
    //   affix: true,
    //   icon: "mi--home",
    // },
    component: BaseLayout,
    redirect: "/index",
    children: [
      {
        name: "Home",
        path: "index",
        meta: {
          title: "首页",
          auth: true,
          hidden: false,
          affix: true,
          icon: "mi--home",
        },
        component: () => import("@/views/home/index"),
      },
    ],
  },
  {
    name: "MyFormBase",
    path: "/",
    meta: {
      title: "我的表单",
      auth: true,
      hidden: false,
      icon: "mdi--form-outline",
    },
    component: BaseLayout,
    children: [
      {
        name: "MyForm",
        path: "my-form",
        meta: {
          title: "我的表单",
          auth: true,
          hidden: false,
          icon: "mdi--form-outline",
        },
        component: () => import("@/views/user/my-form/index"),
      },
    ],
  },
  {
    name: "TodoFormBase",
    path: "/",
    meta: {
      title: "待填表单",
      auth: true,
      hidden: false,
      icon: "mdi--form-outline",
    },
    component: BaseLayout,
    children: [
      {
        name: "TodoForm",
        path: "todo",
        meta: {
          title: "待填表单",
          auth: true,
          hidden: false,
          icon: "mdi--form-outline",
        },
        component: () => import("@/views/user/todo/index"),
      },
    ],
  },
  {
    name: "Project",
    path: "/project",
    meta: {
      title: "表单管理",
      auth: true,
      hidden: false,
      icon: "mdi--form-outline",
    },
    component: BaseLayout,
    children: [
      {
        name: "Template",
        path: "template",
        meta: { title: "模板中心", auth: true, hidden: false },
        component: () => import("@/views/project/template/index"),
      },
      {
        name: "Recycle",
        path: "recycle",
        meta: { title: "回收站", auth: true, hidden: false },
        component: () => import("@/views/project/recycle/index"),
      },
      {
        name: "Theme",
        path: "theme",
        meta: { title: "模板主题", auth: true, hidden: false },
        children: [
          {
            name: "TemplateCategory",
            path: "template-category",
            meta: { title: "模板分类", auth: true, hidden: false },
            component: () =>
              import("@/views/project/theme/template-category/index.vue"),
          },
          {
            name: "ThemeCategory",
            path: "theme-category",
            meta: { title: "主题分类", auth: true, hidden: false },
            component: () =>
              import("@/views/project/theme/theme-category/index.vue"),
          },
          {
            name: "ThemeList",
            path: "theme-list",
            meta: { title: "主题列表", auth: true, hidden: false },
            component: () =>
              import("@/views/project/theme/theme-list/index.vue"),
          },
        ],
      },
    ],
  },
  {
    name: "Workflow",
    path: "/workflow",
    meta: {
      title: "流程待办",
      auth: true,
      hidden: false,
      icon: "hugeicons--workflow-circle-06",
    },
    component: BaseLayout,
    children: [
      {
        name: "TodoTask",
        path: "todo",
        meta: { title: "待办任务", auth: true, hidden: false },
        component: () => import("@/views/workflow/task-todo/index"),
      },
      {
        name: "DoneTask",
        path: "done",
        meta: { title: "已办任务", auth: true, hidden: false },
        component: () => import("@/views/workflow/task-done/index"),
      },
      {
        name: "MyFlow",
        path: "my-flow",
        meta: { title: "我的流程", auth: true, hidden: false },
        component: () => import("@/views/workflow/my-flow/index"),
      },
    ],
  },
  {
    name: "UserLayout",
    path: "/user",
    meta: {
      title: "用户管理",
      auth: true,
      hidden: false,
      icon: "mdi--users-outline",
    },
    component: BaseLayout,
    children: [
      {
        name: "UserList",
        path: "list",
        meta: { title: "用户列表", auth: true, hidden: false },
        component: () => import("@/views/user/user-list/index"),
      },
      {
        name: "Role",
        path: "role",
        meta: { title: "角色管理", auth: true, hidden: false },
        component: () => import("@/views/user/role/index"),
      },
      {
        name: "Dept",
        path: "dept",
        meta: { title: "部门管理", auth: true, hidden: false },
        component: () => import("@/views/user/dept/index"),
      },
      {
        name: "Position",
        path: "position",
        meta: { title: "岗位管理", auth: true, hidden: false },
        component: () => import("@/views/user/position/index"),
      },
    ],
  },
  {
    name: "System",
    path: "/system",
    meta: {
      title: "系统管理",
      auth: true,
      hidden: false,
      icon: "hugeicons--system-update-01",
    },
    component: BaseLayout,
    children: [
      {
        name: "Notification",
        path: "notification",
        meta: { title: "通知管理", auth: true, hidden: false },
        component: () => import("@/views/system/notification/index"),
      },
      {
        name: "Menu",
        path: "menu",
        meta: { title: "菜单管理", auth: true, hidden: false },
        component: () => import("@/views/system/menu/index"),
      },
      {
        name: "Dict",
        path: "dict",
        meta: { title: "字典管理", auth: true, hidden: false },
        component: () => import("@/views/system/dict/index"),
      },
    ],
  },
  {
    name: "Message",
    path: "/message",
    meta: {
      title: "消息中心",
      auth: true,
      hidden: false,
      icon: "tabler--message-cog",
    },
    component: BaseLayout,
    children: [
      {
        name: "Notice",
        path: "notice",
        meta: { title: "通知公告", auth: true, hidden: false },
        component: () => import("@/views/message/notice/index"),
      },
      {
        name: "My",
        path: "my",
        meta: { title: "我的消息", auth: true, hidden: false },
        component: () => import("@/views/message/my/index"),
      },
    ],
  },
];

export default authRoutes;
