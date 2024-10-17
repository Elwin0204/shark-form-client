// import { localStg } from "@/utils/storage";

const state = () => ({
  sidebarCollapse: false,
});
const getters = {
  sidebarCollapse: (state) => state.sidebarCollapse,
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
