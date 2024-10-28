/**
 * @author Elwin
 * @description 基础组件配置
 * @date 2024-10-24
 */
export const baseComponents = [
  {
    // 组件的自定义配置
    typeId: "INPUT",
    __config__: {
      label: "单行文本",
      labelWidth: null,
      showLabel: true,
      changeTag: true,
      tag: "el-input",
      tagIcon: "input",
      defaultValue: undefined,
      required: true,
      layout: "colFormItem",
      span: 24,
      document: "https://element.eleme.cn/#/zh-CN/component/input",
      // 正则校验规则
      regList: [],
    },
    // 组件的插槽属性
    __slot__: {
      prepend: "",
      append: "",
    },
    // 其余的为可直接写在组件标签上的属性
    placeholder: "请输入",
    style: { width: "100%" },
    clearable: true,
    "prefix-icon": "",
    "suffix-icon": "",
    maxlength: null,
    "show-word-limit": false,
    readonly: false,
    disabled: false,
  },
  {
    typeId: "NUMBER_INPUT",
    __config__: {
      label: "数字组件",
      showLabel: true,
      changeTag: true,
      labelWidth: null,
      tag: "el-input-number",
      tagIcon: "number",
      defaultValue: undefined,
      span: 24,
      layout: "colFormItem",
      required: true,
      regList: [],
      document: "https://element.eleme.cn/#/zh-CN/component/input-number",
    },
    placeholder: "",
    min: undefined,
    max: undefined,
    step: 1,
    "step-strictly": false,
    precision: undefined,
    "controls-position": "",
    disabled: false,
  },
  {
    typeId: "TEXTAREA",
    __config__: {
      label: "多行文本",
      labelWidth: null,
      showLabel: true,
      tag: "el-input",
      tagIcon: "textarea",
      defaultValue: undefined,
      required: true,
      layout: "colFormItem",
      span: 24,
      regList: [],
      changeTag: true,
      document: "https://element.eleme.cn/#/zh-CN/component/input",
    },
    type: "textarea",
    placeholder: "请输入",
    autosize: {
      minRows: 4,
      maxRows: 4,
    },
    style: { width: "100%" },
    maxlength: null,
    "show-word-limit": false,
    readonly: false,
    disabled: false,
  },
  {
    typeId: "DATE",
    __config__: {
      label: "日期时间",
      tag: "el-date-picker",
      tagIcon: "date",
      defaultValue: null,
      showLabel: true,
      labelWidth: null,
      span: 24,
      layout: "colFormItem",
      required: true,
      regList: [],
      changeTag: true,
      document: "https://element.eleme.cn/#/zh-CN/component/date-picker",
    },
    placeholder: "请选择",
    type: "date",
    style: { width: "100%" },
    disabled: false,
    clearable: true,
    format: "yyyy-MM-dd",
    "value-format": "yyyy-MM-dd",
    readonly: false,
  },
  {
    typeId: "RATE",
    __config__: {
      label: "评分组件",
      tag: "el-rate",
      tagIcon: "rate",
      defaultValue: 0,
      span: 24,
      showLabel: true,
      showRegList: false,
      labelWidth: null,
      layout: "colFormItem",
      required: true,
      regList: [],
      changeTag: true,
      document: "https://element.eleme.cn/#/zh-CN/component/rate",
    },
    style: {},
    max: 5,
    "allow-half": false,
    "show-text": false,
    "show-score": false,
    disabled: false,
  },
  {
    typeId: "SLIDER",
    __config__: {
      label: "滑块组件",
      tag: "el-slider",
      tagIcon: "slider",
      defaultValue: null,
      showRegList: false,
      span: 24,
      showLabel: true,
      layout: "colFormItem",
      labelWidth: null,
      required: true,
      regList: [],
      changeTag: true,
      document: "https://element.eleme.cn/#/zh-CN/component/slider",
    },
    disabled: false,
    min: 0,
    max: 100,
    step: 1,
    "show-stops": false,
    range: false,
  },
  {
    typeId: "UPLOAD",
    __config__: {
      label: "文件上传",
      tag: "el-upload",
      tagIcon: "upload",
      layout: "colFormItem",
      defaultValue: null,
      showLabel: true,
      showRegList: false,
      labelWidth: null,
      required: true,
      span: 24,
      showTip: false,
      buttonText: "点击上传",
      regList: [],
      changeTag: true,
      fileSize: 10,
      sizeUnit: "MB",
      document: "https://element.eleme.cn/#/zh-CN/component/upload",
    },
    __slot__: {
      "list-type": true,
    },
    action: process.env.VUE_APP_API_ROOT + "/project/file/upload/",
    disabled: false,
    accept: "",
    name: "file",
    "auto-upload": true,
    "list-type": "text",
    limit: 2,
    multiple: false,
  },
];