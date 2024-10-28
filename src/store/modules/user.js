import { localStg } from "@/utils/storage";
import Vue from "vue";

const state = () => ({
  token: localStg.get("token"),
  userInfo: localStg.get("userInfo"),
  roles: [],
  btns: [],
});
const getters = {
  token: (state) => state.token,
  userInfo: (state) => state.userInfo,
  username: (state) => (state.userInfo ? state.userInfo.username : ""),
  roles: (state) => state.roles,
};
const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data;
    localStg.set("userInfo", data);
  },
  setToken(state, data) {
    state.token = data;
    localStg.set("token", data);
  },
  resetUserInfo(state) {
    state.userInfo = "";
    state.token = "";
    localStg.remove("userInfo");
    localStg.remove("token");
  },
  setRoles(state, data) {
    state.roles = data;
  },
  resetToken(state) {
    state.token = "";
    localStg.remove("token");
  },
};
const actions = {
  async login({ commit }, payload) {
    return new Promise((resolve) => {
      commit("setUserInfo", payload);
      commit("setToken", "token123");
      resolve();
    });
  },
  async logout({ commit }) {
    return new Promise((resolve) => {
      commit("resetUserInfo");
      resolve();
    });
  },
  setRoles({ commit }, payload) {
    commit("setRoles", payload);
  },
  async getUserInfo({ commit }, payload) {
    console.log("payload", payload);
    const { data } = await Promise.resolve({
      data: { roles: ["admin"], username: "测试" },
    });
    if (!data) {
      Vue.prototype.$baseMessage("验证失败，请重新登录...", "error");
      return false;
    }
    const { roles, username } = data;
    if (roles && username && Array.isArray(roles)) {
      commit("setRoles", roles);
      commit("setUserInfo", { username });
      return roles;
    } else {
      Vue.prototype.$baseMessage("用户信息接口异常", "error");
      return false;
    }
  },
  resetToken({ commit }) {
    commit("resetToken");
  },
};

export default { state, getters, mutations, actions };
