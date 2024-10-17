import { localStg } from "@/utils/storage";

const state = () => ({
  token: localStg.get("token"),
  userInfo: localStg.get("userInfo"),
});
const getters = {
  isAuth: (state) => state.token,
  userInfo: (state) => state.userInfo,
  username: (state) => (state.userInfo ? state.userInfo.username : ""),
};
const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data;
    localStg.set("userInfo", data);
  },
  setToken(state, data) {
    state.token = data;
    localStg.set(data);
  },
  resetUserInfo(state) {
    state.userInfo = "";
    state.token = "";
    localStg.remove("userInfo");
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
};

export default { state, getters, mutations, actions };
