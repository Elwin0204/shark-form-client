const settings = {
  title: "鲨鱼快填",
  //加载时显示文字
  loadingText: "正在加载中...",
  //消息框消失时间
  messageDuration: 3000,
  // 最大路由缓存数量
  keepAliveMaxNum: 99,
  //是否开启登录拦截
  loginInterception: true,
  authMode: "client", // client | server
  routesWhiteList: ["/login"],
  // token失效回退到登录页时是否记录本次的路由
  recordRoute: true,
  // 只保持一个子菜单的展开
  uniqueOpened: true,
  baseURL: process.env.VUE_APP_API_URL,
  requestTimeout: 10000,
  contentType: "application/json;charset=UTF-8",
};

export default settings;
