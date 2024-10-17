const { defineConfig } = require("@vue/cli-service");
const {
  publicPath,
  outputDir,
  assetsDir,
  lintOnSave,
  transpileDependencies,
  devPort,
  donation,
  providePlugin,
  title,
} = require("./build/build");
const path = require("path");
const dayjs = require("dayjs");
const resolve = (dir) => path.join(__dirname, dir);
// const date = dayjs().format("YYYY_M_D");
const time = dayjs().format("YYYY-M-D HH:mm:ss");
const Webpack = require("webpack");
const WebpackBar = require("webpackbar");
const {
  webpackBarName,
  webpackBanner,
  donationConsole,
} = require("./build/webpackBanner");
if (donation) donationConsole();

const { version, author } = require("./package.json");
process.env.VUE_APP_TITLE = title || "shark-form";
process.env.VUE_APP_AUTHOR = author || "Elwin";
process.env.VUE_APP_UPDATE_TIME = time;
process.env.VUE_APP_VERSION = version;

module.exports = defineConfig({
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  transpileDependencies,
  devServer: {
    port: devPort,
    open: true,
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData(content, loaderContext) {
          const { resourcePath, rootContext } = loaderContext;
          const relativePath = path.relative(rootContext, resourcePath);
          if (relativePath.replace(/\\/g, "/") !== "src/styles/vars.scss") {
            return '@import "~@/styles/vars.scss";' + content;
          }
          return content;
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    plugins: [
      new Webpack.ProvidePlugin(providePlugin),
      new WebpackBar({
        name: webpackBarName,
      }),
    ],
  },
  chainWebpack(config) {
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");

    config.module.rule("svg").exclude.add(resolve("src/assets/icons")).end();

    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    config.when(process.env.NODE_ENV !== "development", (config) => {
      config.optimization.splitChunks({
        automaticNameDelimiter: "-",
        chunks: "all",
        cacheGroups: {
          chunk: {
            name: "sk-chunk",
            test: /[\\/]node_modules[\\/]/,
            minSize: 131072,
            maxSize: 524288,
            chunks: "async",
            minChunks: 2,
            priority: 10,
          },
          vue: {
            name: "vue",
            test: /[\\/]node_modules[\\/](vue(.*)|core-js)[\\/]/,
            chunks: "initial",
            priority: 20,
          },
          elementUI: {
            name: "element-ui",
            test: /[\\/]node_modules[\\/]element-ui(.*)[\\/]/,
            priority: 30,
          },
        },
      });
      config
        .plugin("banner")
        .use(Webpack.BannerPlugin, [`${webpackBanner}${time}`])
        .end();
    });
  },
});
