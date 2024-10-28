/**
 * @author Elwin
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @author Elwin
 * @description 判断是否为element icon
 * @param {String} name
 * @returns {Boolean}
 */
export function isElementIcon(name) {
  return /^el-icon-/.test(name);
}
