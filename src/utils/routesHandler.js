const BaseLayout = () => import("@/layouts/BaseLayout.vue");
const BlankLayout = () => import("@/layouts/BlankLayout.vue");

/**
 * @author Elwin
 * @description 前端路由模式根据路由meta属性permissions拦截
 * @param {Array} roles
 * @param {*} route
 * @returns {[]}
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.permissions) {
    return roles.some((role) => route.meta.permissions.includes(role));
  } else {
    return true;
  }
}

/**
 * @author Elwin
 * @description 前端路由过滤模式
 * @param {Array} routes
 * @param {Array} roles
 * @returns {[]}
 */
export function filterAsyncRoutes(routes, roles) {
  const accessRoutes = [];
  routes.forEach((route) => {
    const routeCopy = { ...route };
    if (hasPermission(roles, routeCopy)) {
      if (routeCopy.children) {
        routeCopy.children = filterAsyncRoutes(routeCopy.children, roles);
      }
      accessRoutes.push(routeCopy);
    }
  });
  return accessRoutes;
}

/**
 * @author Elwin
 * @description 后端路由模式根据后端返回配置生成路由配置
 * @param {Array} routes
 * @param {Array} roles
 */
export function convertVueRoutes(routes) {
  return routes.map((route) => {
    if (route.component) {
      if (route.component === "BaseLayout") {
        route.component = BaseLayout;
      } else if (route.component === "BlankLayout") {
        route.component = BlankLayout;
      } else {
        const index = route.component.indexOf("views");
        const path =
          index > 0 ? route.component.slice(index) : `views/${route.component}`;
        route.component = (resolve) => require([`@/${path}`], resolve);
      }
    }

    if (route.children && route.children.length) {
      route.children = convertVueRoutes(route.children);
    }

    if (route.children && route.children.length === 0) {
      delete route.children;
    }

    return route;
  });
}
