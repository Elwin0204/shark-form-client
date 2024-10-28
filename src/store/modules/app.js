// import { localStg } from "@/utils/storage";

const state = () => ({
  sidebarCollapse: false,
  tabMode: "chrome",
});
const getters = {
  sidebarCollapse: (state) => state.sidebarCollapse,
  tabMode: (state) => state.tabMode,
};
const mutations = {
  toggleSidebar(state) {
    state.sidebarCollapse = !state.sidebarCollapse;
  },
};
const actions = {
  toggleSidebar({ commit }) {
    commit("toggleSidebar");
  },
};

export default { state, getters, mutations, actions };
