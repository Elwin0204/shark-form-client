// import { localStg } from "@/utils/storage";

const state = () => ({
  cachedRoutes: [],
  activeTab: "",
});
const getters = {
  cachedRoutes: (state) => state.cachedRoutes,
  activeTab: (state) => state.activeTab,
};
const mutations = {
  addCachedRoute(state, route) {
    const target = state.cachedRoutes.find((item) => item.path === route.path);
    if (target) {
      if (route.fullPath !== target.fullPath) {
        Object.assign(target, route);
      }
    } else {
      state.cachedRoutes.push(Object.assign({}, route));
    }
  },
  removeCachedRoute(state, route) {
    for (let i = 0; i < state.cachedRoutes.length; i++) {
      if (state.cachedRoutes[i].path === route.path) {
        state.cachedRoutes.splice(i, 1);
        break;
      }
    }
  },
  removeLeftCachedRoute(state, route) {
    // 找到与 route.name 匹配的路由项的索引
    const index = state.cachedRoutes.findIndex(
      (item) => item.name === route.name
    );

    if (index !== -1) {
      // 过滤出所有右边的路由以及固定的路由
      state.cachedRoutes = state.cachedRoutes.filter(
        (item, i) => i >= index || item.meta.affix
      );
    }
  },
  removeRightCachedRoute(state, route) {
    // 找到与 route.name 匹配的路由项的索引
    const index = state.cachedRoutes.findIndex(
      (item) => item.name === route.name
    );

    if (index !== -1) {
      // 过滤出所有左边的路由以及固定的路由
      state.cachedRoutes = state.cachedRoutes.filter(
        (item, i) => i <= index || item.meta.affix
      );
    }
  },
  removeAllCachedRoutes(state) {
    state.cachedRoutes = state.cachedRoutes.filter((item) => item.meta.affix);
  },
  updateCachedRoute(state, route) {
    for (let i = 0; i < state.cachedRoutes.length; i++) {
      if (state.cachedRoutes[i].path === route.path) {
        state.cachedRoutes[i] = Object.assign(state.cachedRoutes[i], route);
      }
    }
  },
  setActiveTab(state, tab) {
    state.activeTab = tab;
  },
};
const actions = {
  addCachedRoute({ commit }, route) {
    commit("addCachedRoute", route);
  },
  removeCachedRoute({ commit }, route) {
    commit("removeCachedRoute", route);
  },
  removeLeftCachedRoute({ commit }, route) {
    commit("removeLeftCachedRoute", route);
  },
  removeRightCachedRoute({ commit }, route) {
    commit("removeRightCachedRoute", route);
  },
  removeAllCachedRoutes({ commit }, route) {
    commit("removeAllCachedRoutes", route);
  },
  updateCachedRoute({ commit }, route) {
    commit("updateCachedRoute", route);
  },
  setActiveTab({ commit }, tab) {
    commit("setActiveTab", tab);
  },
};

export default { state, getters, mutations, actions };
