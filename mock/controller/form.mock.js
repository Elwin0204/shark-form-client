module.exports = [
  /**
   * @description 創建表單id
   * @request 
   * description: "<p style=\"text-align: center;\" data-mce-style=\"text-align: center;\">感谢您能抽出几分钟时间来参加本次表单填写，现在我们就马上开始吧！</p>",
   * folderId: 0,
   * name: "<h2 style='text-align: center;'>未命名问卷</h2>",
   * type: "1"
   */
  {
    url: "/form/create",
    type: "post",
    response() {
      return {
        code: 200,
        msg: 'success',
        data: {
          createTime: "2024-10-26 14:22:54",
          deleted: false,
          description: "<p style=\"text-align: center;\" data-mce-style=\"text-align: center;\">感谢您能抽出几分钟时间来参加本次表单填写，现在我们就马上开始吧！</p>",
          folder: null,
          folderId: 0,
          formKey: "wCYqIGPq",
          id: 42753,
          name: "<h2 style='text-align: center;'>未命名问卷</h2>",
          sourceId: null,
          sourceType: 1,
          sourceTypeDesc: "空白创建",
          status: 1,
          statusDesc: "未发布",
          textName: "未命名问卷",
          type: 1,
          typeDesc: "普通表单",
          updateTime: null,
          userId: 8711
        },
      };
    },
  },
  /**
   * @description 通过id获取表单配置
   */
  {
    url: "/\/form\/\w+/",
    type: "get",
    response() {
      return {
        code: 200,
        msg: 'success',
        data: {
          createTime: "2024-10-26 14:22:54",
          deleted: false,
          description: "<p style=\"text-align: center;\" data-mce-style=\"text-align: center;\">感谢您能抽出几分钟时间来参加本次表单填写，现在我们就马上开始吧！</p>",
          folder: null,
          folderId: 0,
          formKey: "wCYqIGPq",
          id: 42753,
          name: "<h2 style='text-align: center;'>未命名问卷</h2>",
          sourceId: null,
          sourceType: 1,
          sourceTypeDesc: "空白创建",
          status: 1,
          statusDesc: "未发布",
          textName: "未命名问卷",
          type: 1,
          typeDesc: "普通表单",
          updateTime: null,
          userId: 8711
        }
      };
    },
  },
  /**
   * @description 创建表单子项
   * @request
   * {
        formItemId: "input1729932511383",
        formKey: "wCYqIGPq",
        label: "单行文本",
        placeholder: "请输入单行文本",
        regList: [],
        required: true,
        scheme: {
          clearable: true,
          config: {
            append: "",
            changeTag: true,
            dataType: {type: "", message: ""},
            formId: "input1729932511383",
            label: "单行文本",
            labelWidth: null,
            prepend: "",
            regList: [],
            renderKey: "input17299325113831729932511383",
            required: true,
            showLabel: true,
            span: 24,
            tag: "t-input",
            tagIcon: "input",
          },
          disabled: false,
          maxlength: null,
          minlength: null,
          notRepeat: false,
          placeholder: "请输入单行文本",
          "prefix-icon": "",
          readonly: false,
          "show-word-limit": false,
          style: {width: "100%"},
          width: "100%",
          "suffix-icon": "",
          typeId: "INPUT",
          vModel: "input1729932511383",
        },
        showLabel: true,
        span: 24,
        type: "INPUT"
      }
   */
  {
    url: "/form/item/create",
    type: "post",
    response() {
      return {
        code: 200,
        msg: 'success',
        data: {
          itemDataId: 242073,
          operateSuccess: true,
          refreshAll: false,
          sort: 65536,
        }
      }
    },
  },
  /**
   * @description 创建表单子项
   * @request 参数同上/form/item/create
   */
  {
    url: "/form/item/update",
    type: "post",
    response() {
      return {
        code: 200,
        msg: 'success',
        data: true,
      }
    },
  },
];