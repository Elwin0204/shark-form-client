/**
 * @author Elwin
 * @description 創建表單子項id
 * @param {String} typeId 組件類型
 * @returns {String}
 */
export function createFormItemId(typeId) {
  return `${typeId.toLowerCase()}${(new Date()).getTime()}`;
}