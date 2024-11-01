import cloneDeep from "lodash-es/cloneDeep";

/**
 * @description 将slots目录下的文件挂载到对象componentSlots;文件名为key,对应json配置中的config.tag;文件内容为value,解析json配置中slot相关属性
 */
const componentSlots = {};
const slotFiles = require.context("./slots", false, /\.js$/);
const keys = slotFiles.keys() || [];
keys.forEach((key) => {
  const tag = key.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = slotFiles(key).default;
  componentSlots[tag] = value;
});

// 处理v-model
function transformVModel(dataObj, defaultValue) {
  const config = dataObj.attrs.config;
  if (config.tag === "el-upload") {
    console.log("el-upload");
  } else if (config.tag === "pagination") {
    console.log("pagination");
  } else {
    dataObj.props.value = defaultValue;
    dataObj.on.input = (value) => {
      this.$emit("input", value);
    };
  }
}

function transformSlot(h, confClone, children) {
  const slotConf = componentSlots[confClone.conf.tag];
  if (slotConf) {
    Object.keys(slotConf).forEach((key) => {
      const slotFunc = slotConf[key];
      if (confClone.config[key]) {
        children.push(slotFunc(h, confClone, key, this));
      }
    });
  }
}

function createDataObj() {
  return {
    attrs: {},
    props: {},
    nativeOn: {},
    on: {},
    style: {},
  };
}

function clearAttrs(dataObj) {
  delete dataObj.attrs.config;
  // delete dataObj.attrs.config
  // delete dataObj.attrs.config
  // delete dataObj.attrs.__methods__
}

function transformEmitEvent(confClone) {
  ["on", "nativeOn"].forEach((attr) => {
    const eventKeyList = Object.keys(confClone[attr] || {});
    eventKeyList.forEach((key) => {
      const value = confClone[attr][key];
      if (typeof value === "string") {
        confClone[attr][key] = (event) => this.$emit(value, event);
      }
    });
  });
}

function transformDataObj(confClone, dataObj) {
  Object.keys(confClone).forEach((key) => {
    const value = confClone[key];
    if (key === "vModel") {
      transformVModel.call(this, dataObj, confClone.config.defaultValue);
    } else if (dataObj[key]) {
      dataObj[key] = { ...dataObj[key], ...value };
    } else {
      dataObj.attrs[key] = value;
    }
  });

  clearAttrs(dataObj);
}

export default {
  props: {
    conf: {
      type: Object,
      required: true,
    },
  },
  render(h) {
    const dataObj = createDataObj();
    const confClone = cloneDeep(this.conf);
    const children = this.$slots.default || [];

    // 转换slot配置
    transformSlot.call(this, h, confClone, children);
    // 将字符串类型的事件，发送为消息
    transformEmitEvent.call(this, confClone);
    // 将json表单配置转换为vue render可以识别的数据对象
    transformDataObj.call(this, confClone, dataObj);
    return h(this.conf.config.tag, dataObj, children);
  },
};
