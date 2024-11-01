/**
 * @author Elwin
 * @description 浏览器环境自动输出controller目录下的mock接口
 */

import Mock from "mockjs";
import { paramObj } from "@/utils";

const mocks = [];
const files = require.context("../../mock/controller", false, /\.js$/);

files.keys().forEach((key) => {
  mocks.push(...files(key));
});

export function mockXHR() {
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false;
      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType;
      }
    }
    this.proxy_send(...arguments);
  };

  function XHRHttpRequest(respond) {
    return function (options) {
      let result;
      if (respond instanceof Function) {
        const { body, type, url } = options;
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: paramObj(url),
        });
      } else {
        result = respond;
      }
      return Mock.mock(result);
    };
  }

  mocks.forEach((item) => {
    Mock.mock(
      new RegExp(item.url),
      item.type || "get",
      XHRHttpRequest(item.respond)
    );
  });
}
