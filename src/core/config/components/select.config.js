/**
 * @author Elwin
 * @description 选择组件配置
 * @date 2024-10-24
 */
export const selectComponents = [
  {
    typeId: "SELECT",
    config: {
      label: "下拉选择",
      showLabel: true,
      labelWidth: null,
      tag: "el-select",
      tagIcon: "select",

      span: 24,
      required: true,
      regList: [],
      changeTag: true,
      options: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
    },
    placeholder: "请选择",
    style: { width: "100%" },
    clearable: true,
    disabled: false,
    filterable: false,
    multiple: false,
  },
  {
    typeId: "CASCADER",
    config: {
      label: "级联选择",
      url: "https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList",
      method: "get",
      dataKey: "list",
      showLabel: true,
      labelWidth: null,
      tag: "el-cascader",
      tagIcon: "cascader",

      defaultValue: [],
      dataType: "static",
      span: 24,
      required: true,
      regList: [],
      changeTag: true,
      options: [
        {
          id: 1,
          value: 1,
          label: "选项1",
          children: [
            {
              id: 2,
              value: 2,
              label: "选项1-1",
            },
          ],
        },
      ],
    },
    placeholder: "请选择",
    style: { width: "100%" },
    props: {
      props: {
        multiple: false,
        label: "label",
        value: "value",
        children: "children",
      },
    },
    "show-all-levels": true,
    disabled: false,
    clearable: true,
    filterable: false,
    separator: "/",
  },
  {
    typeId: "RADIO",
    config: {
      label: "单选框组",
      labelWidth: null,
      showLabel: true,
      showRegList: false,
      tag: "el-radio-group",
      tagIcon: "radio",
      changeTag: true,
      defaultValue: undefined,

      span: 24,
      optionType: "default",
      regList: [],
      required: true,
      border: false,
      options: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
    },
    style: {},
    size: "medium",
    disabled: false,
  },
  {
    typeId: "CHECKBOX",
    config: {
      label: "多选框组",
      tag: "el-checkbox-group",
      tagIcon: "checkbox",
      defaultValue: [],
      span: 24,
      showLabel: true,
      showRegList: false,
      labelWidth: null,

      optionType: "default",
      required: true,
      regList: [],
      changeTag: true,
      border: false,
      options: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
    },
    style: {},
    size: "medium",
    min: null,
    max: null,
    disabled: false,
  },
];
