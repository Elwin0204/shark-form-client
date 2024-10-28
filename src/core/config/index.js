// 表单属性
export const formConf = {
  formRef: "elForm",
  formModel: "formData",
  size: "mini",
  labelPosition: "top",
  labelWidth: 100,
  formRules: "rules",
  gutter: 20,
  disabled: false,
  span: 24,
  title: "问卷名称",
  description:
    "为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位\n" +
    "用户的宝贵意见，期待您的参与！现在我们就马上开始吧！",
  formBtns: true,
  unFocusedComponentBorder: true,
};

// 组件默认值
export const componentDefaultValue = {
  INPUT: {
    val: undefined,
  },
  TEXTAREA: {
    val: undefined,
  },
  NUMBER_INPUT: {
    val: undefined,
  },
  CASCADER: {
    val: [],
  },
  RADIO: {
    val: undefined,
  },
  CHECKBOX: {
    val: [],
  },
  SWITCH: {
    val: false,
  },
  SLIDER: {
    val: null,
  },
  TIME: {
    val: null,
  },
  TIME_RANGE: {
    val: null,
  },
  DATE: {
    val: null,
  },
  DATE_RANGE: {
    val: null,
  },
  RATE: {
    val: 0,
  },
  COLOR: {
    val: null,
  },
  UPLOAD: {
    val: null,
  },
  IMAGE_CAROUSEL: {
    val: null,
  },
  IMAGE_SELECT: {
    val: null,
  },
  DESC_TEXT: {
    val: "描述文字",
  },
  DIVIDER: {
    val: "",
  },
  SIGN_PAD: {
    val: "",
  },
  PAGINATION: {
    val: "分页",
  },
};

export * from "./components/base.config";
export * from "./components/select.config";
export * from "./components/advanced.config";
