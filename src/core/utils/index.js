// import get from "lodash-es/get";
// import set from "lodash-es/set";
// import { kmap } from "../config/kmap";

/**
 * @author Elwin
 * @description 創建表單子項id
 * @param {String} typeId 組件類型
 * @returns {String}
 */
export function createFormItemId(typeId) {
  return `${typeId.toLowerCase()}${new Date().getTime()}`;
}

/**
 * @author Elwin
 * @description 生成renderKey
 * @returns {String}
 */
export function createRenderKey() {
  return `${new Date().getTime()}`;
}

export function convertFormItem(item, formKey) {
  const data = {
    type: item.typeId,
    formItemId: item.config.formId,
    formKey: formKey,
    label: item.config.label,
    placeholder: item.placeholder,
    regList: item.config.regList,
    required: item.config.required,
    showLabel: item.config.showLabel,
    span: item.config.span,
    schema: item,
  };
  // let schema = {
  //   vModel: item.config.formId,
  // };
  // let componentKmap = kmap[item.typeId];
  // if (componentKmap) {
  //   Object.keys(componentKmap).forEach((key) => {
  //     const value = get(item, componentKmap[key]);
  //     set(schema, key, value);
  //   });
  //   set(data, "schema", schema);
  // }

  return data;
}
