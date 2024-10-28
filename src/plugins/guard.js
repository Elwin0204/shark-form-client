import router from "@/router";
import store from "@/store";
import NProgress from "nprogress";
// import "nprogress/nprogress.css";
import settings from "@/config/settings.config";

const { loginInterception, authMode, routesWhiteList, recordRoute } = settings;

NProgress.configure({
  easing: "ease",
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false,
});

/**
 * @author Elwin
 * @description 路由守卫，前端模式|后端模式
 */
export function setupRouterGuard() {
  router.beforeResolve(async (to, from, next) => {
    NProgress.start();
    let hasToken = store.getters["user/token"];
    if (!loginInterception) hasToken = true;
    if (hasToken) {
      if (to.path === "/login") {
        next({ path: "/" });
        // next({ path: "/my-form" });
        NProgress.done();
      } else {
        const roles = store.getters["user/roles"];
        const hasRoles = roles && roles.length > 0;
        if (hasRoles) {
          next();
        } else {
          try {
            let rolePerms;
            // loginInterception设置为false时, 创建虚拟权限
            if (!loginInterception) {
              await store.dispatch("user/setRoles", ["admin"]);
              rolePerms = ["admin"];
            } else {
              rolePerms = await store.dispatch("user/getUserInfo");
            }
            let accessRoutes = [];
            if (authMode === "client") {
              accessRoutes = await store.dispatch(
                "routes/setRoutesByClient",
                rolePerms
              );
            } else if (authMode === "server") {
              accessRoutes = await store.dispatch("routes/setRoutesByServer");
            }
            accessRoutes.forEach((route) => {
              router.addRoute(route);
            });
            next({ ...to, replace: true });
          } catch {
            await store.dispatch("user/resetToken");
            NProgress.done();
          }
        }
      }
    } else {
      if (routesWhiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        if (recordRoute) {
          next(`/login?redirect=${to.path}`);
        } else {
          next("/login");
        }
        NProgress.done();
      }
    }
  });

  router.afterEach(() => {
    NProgress.done();
  });
}
