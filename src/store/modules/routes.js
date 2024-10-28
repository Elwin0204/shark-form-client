import rootRoutes from "@/router/modules/root.route";
import formRoutes from "@/router/modules/form.route";
import asyncRoutes from "@/router/modules/async.route";
import { filterAsyncRoutes, convertVueRoutes } from "@/utils/routesHandler";
import formSettings from "@/config/form.config";

const constantRoutes = [...rootRoutes, ...formRoutes];
const notFoundRoute = {
  path: "*",
  component: () => import("@/views/error/404.vue"),
  meta: {
    title: "找不到页面",
  },
};

const state = () => ({
  routes: [],
  formRoutes: formSettings.formRoutes || [],
});

const getters = {
  routes: (state) => state.routes,
  formRoutes: (state) => state.formRoutes,
};

const mutations = {
  setRoutesByClient(state, routes) {
    state.routes = constantRoutes.concat(routes);
    state.routes.push(notFoundRoute);
  },
  setRoutesByServer(state, routes) {
    state.routes = constantRoutes.concat(routes);
    state.routes.push(notFoundRoute);
  },
};

const actions = {
  setRoutesByClient({ commit }, roles) {
    const accessRoutes = filterAsyncRoutes([...asyncRoutes], roles);
    commit("setRoutesByClient", accessRoutes);
    return accessRoutes;
  },
  async setRoutesByServer({ commit }) {
    const { data } = await Promise.resolve({ data: [] });
    const accessRoutes = convertVueRoutes(data);
    commit("setRoutesByServer", accessRoutes);
    return accessRoutes;
  },
};

export default { state, getters, mutations, actions };
