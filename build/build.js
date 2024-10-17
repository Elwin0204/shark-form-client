module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: true,
  // 进行编译的依赖
  transpileDependencies: true,
  devPort: "5073",
  build7z: false,
  //是否显示终端donation打印
  donation: true,
  imageCompression: true,
  //需要自动注入并加载的模块
  providePlugin: {},
  title: "shark-form",
};
