// import { localStg } from "@/utils/storage";

const state = () => ({
  activeFormItemId: null,
  activeFormItem: null,
  formList: [],
});
const getters = {
  activeFormItemId: (state) => state.activeFormItemId,
  activeFormItem: (state) => state.activeFormItem,
  formList: (state) => state.formList,
};
const mutations = {
  setActiveFormItem(state, data) {
    state.activeFormItemId = data.config.formId;
    state.activeFormItem = data;
  },
  setFormItemSort(state, data) {
    const { index, sort } = data;
    state.formList[index].sort = sort;
  },
  addFormList(state, data) {
    state.formList.push(data);
  },
};
const actions = {
  setActiveFormItemId({ commit }, id) {
    commit("setActiveFormItemId", id);
  },
  setFormItemSort({ commit }, data) {
    commit("setFormItemSort", data);
  },
  addFormList({ commit }, data) {
    commit("addFormList", data);
  },
};

export default { state, getters, mutations, actions };
