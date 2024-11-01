/**
 * @author Elwin
 * @description 后端key与config配置映射
 */
export const kmap = {
  // 单行文本
  INPUT: {
    prepend: "config.prepend",
    prefixIcon: "prefix-icon",
    maxlength: "maxlength",
    showWordLimit: "show-word-limit",
    append: "config.append",
  },
  // 多行文本
  TEXTAREA: {
    minRows: "autosize.minRows",
    maxRows: "autosize.maxRows",
    maxlength: "maxlength",
  },
  // 计数器
  NUMBER_INPUT: {
    min: "min",
    max: "max",
    maxlength: "maxlength",
    step: "step",
    "step-strictly": "step-strictly",
    precision: "precision",
    "controls-position": "controls-position",
  },
  // 下拉选择
  SELECT: {
    options: "config.options",
    filterable: "filterable",
    multiple: "multiple",
  },
  // 级联选择
  CASCADER: {
    options: "options",
    filterable: "filterable",
    "show-all-levels": "showAllLevels",
    multiple: "props.props.multiple",
  },
  // 单选框组
  RADIO: {
    optionType: "config.optionType",
    border: "config.border",
    options: "config.options",
    filterable: "filterable",
    size: "size",
    multiple: "props.props.multiple",
  },
  // 多选框组
  CHECKBOX: {
    optionType: "config.optionType",
    size: "size",
    options: "config.options",
    max: "max",
    min: "min",
  }, // 开关
  SWITCH: {},
  // 滑块
  SLIDER: {
    min: "min",
    max: "max",
    step: "step",
  }, // 时间选择
  TIME: {},
  RATE: {
    max: "max",
    allowHalf: "allow-half",
    showText: "show-text",
    showScore: "show-score",
    disabled: "disabled",
  },
  // 文件上传
  UPLOAD: {
    buttonText: "config.buttonText",
    showTip: "config.showTip",
    fileSize: "config.fileSize",
    sizeUnit: "config.sizeUnit",
    listType: "list-type",
    limit: "limit",
    multiple: "multiple",
    accept: "accept",
  },
  // 图片
  IMAGE: {
    src: "src",
    alt: "alt",
  },
  // 图片选择
  IMAGE_SELECT: {
    options: "options",
    multiple: "multiple",
  },
  // 图片轮播
  IMAGE_CAROUSEL: {
    options: "config.options",
  },
  // 文字描述
  DESC_TEXT: {
    color: "color",
    textAlign: "textAlign",
  },
  // 手写签名
  SIGN_PAD: {
    color: "color",
  },
  // 日期类型
  DATE: {
    type: "type",
    format: "format",
    valueFormat: "value-format",
  },
};
