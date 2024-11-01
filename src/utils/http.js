import axios from "axios";
import { Loading } from "element-ui";
import Vue from "vue"; // 确保你已经全局注册了Vue
// import store from "@/store"; // 导入你的Vuex store
import router from "@/router"; // 导入你的Vue Router
import errcode from "@/config/errcode.config";
import settings from "@/config/settings.config";

const { invalidCode, noPermissionCode, noFoundCode } = errcode;

const { baseURL, requestTimeout, contentType } = settings;

// 定义一个处理错误码的函数
const handleCode = (code, msg) => {
  switch (code) {
    case invalidCode:
      Vue.prototype.$baseMessage(msg || `后端接口${code}异常`, "error");
      // store.dispatch("user/resetAccessToken").catch(() => {});
      // if (loginInterception) {
      //   // 请确保loginInterception已经在你的应用上下文中定义
      //   location.reload();
      // }
      break;
    case noPermissionCode:
      router.push({ path: "/401" }).catch(() => {});
      break;
    case noFoundCode:
      Vue.prototype.$baseMessage(msg || `${code}：后端接口不存在`, "error");
      break;
    default:
      Vue.prototype.$baseMessage(msg || `${code}：后端接口异常`, "error");
      break;
  }
};

const defaultConfig = {
  baseURL: baseURL,
  timeout: requestTimeout,
  headers: {
    "Content-Type": contentType,
  },
};

class HttpClient {
  constructor() {
    this.instance = axios.create(defaultConfig);
    this.subscribers = {};
    this.loadingInstance = null; // 用于存储loading实例
    this.requestCount = 0; // 请求计数器

    // 添加请求拦截器
    this.instance.interceptors.request.use(
      this.handleRequest,
      this.handleError
    );
    // 添加响应拦截器
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleErrorResponse
    );
  }

  // 订阅方法
  subscribe(eventName, callback) {
    if (!this.subscribers[eventName]) {
      this.subscribers[eventName] = [];
    }
    this.subscribers[eventName].push(callback);
  }

  // 发布/触发事件的方法
  publish(eventName, data) {
    const callbacks = this.subscribers[eventName];
    if (callbacks) {
      callbacks.forEach((callback) => callback(data));
    }
  }

  // 请求拦截器处理器
  handleRequest(config) {
    // 增加请求计数
    this.requestCount++;
    if (this.requestCount === 1) {
      // 如果是第一个请求，则显示loading
      this.showLoading();
    }

    // 在这里可以对请求配置进行修改，例如添加认证token
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    return config;
  }

  // 响应拦截器处理器
  handleResponse(response) {
    // 减少请求计数
    this.requestCount--;
    if (this.requestCount === 0) {
      // 如果没有正在进行的请求，则隐藏loading
      this.hideLoading();
    }

    // 检查是否有业务错误码并处理
    const { data } = response;
    const { code, message } = data || {}; // 假设响应数据中包含code和message字段

    if (code && code !== 200) {
      // 假设200表示成功
      handleCode(code, message);
    }

    // 根据响应类型转换响应
    if (code === 200) {
      // 对于状态码为200的响应，直接返回data
      return data;
    } else if (data instanceof ArrayBuffer) {
      // 对于文件流响应，返回整个response对象
      return response;
    } else {
      return Promise.reject(
        new Error(`Unexpected response with code: ${code}`)
      );
    }
  }

  // 错误处理
  handleError(error) {
    // 减少请求计数
    this.requestCount--;
    if (this.requestCount === 0) {
      // 如果没有正在进行的请求，则隐藏loading
      this.hideLoading();
    }

    // 处理请求错误
    return Promise.reject(error);
  }

  // 错误响应处理
  handleErrorResponse(error) {
    // 减少请求计数
    this.requestCount--;
    if (this.requestCount === 0) {
      // 如果没有正在进行的请求，则隐藏loading
      this.hideLoading();
    }

    // 可以在这里进行错误处理，比如显示错误信息给用户
    if (error.response) {
      const { status, data } = error.response;
      const { message } = data || {}; // 假设错误响应中包含message字段

      // 调用handleCode来处理特定的业务错误码
      handleCode(status, message);
      // 服务器返回了状态码且不在2xx范围内
      console.error("Error Response:", error.response.data);
      this.publish(
        "requestError",
        error.response.data || { message: "An unexpected error occurred." }
      );
    } else if (error.request) {
      // 请求已发出但未收到响应
      console.error("No response received:", error.request);
      this.publish("requestError", {
        message: "No response received from the server.",
      });
    } else {
      // 设置请求时发生了一些问题
      console.error("Error setting up the request:", error.message);
      this.publish("requestError", { message: error.message });
    }
    return Promise.reject(error);
  }

  // 显示loading
  showLoading() {
    this.loadingInstance = Loading.service({
      fullscreen: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)",
    });
  }

  // 隐藏loading
  hideLoading() {
    if (this.loadingInstance) {
      this.loadingInstance.close();
      this.loadingInstance = null;
    }
  }

  // Axios请求的封装
  async request(config) {
    try {
      const response = await this.instance.request(config); // 使用Axios实例发起请求
      this.publish("requestSuccess", response);
      return response;
    } catch (error) {
      console.error("Request failed:", error);
      // 这里的catch主要是在handleErrorResponse未正确reject的情况下提供额外的安全网。
      throw error;
    }
  }
}

export default new HttpClient();
