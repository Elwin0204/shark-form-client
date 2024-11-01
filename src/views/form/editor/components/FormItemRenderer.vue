<script>
import draggable from "vuedraggable";
import render from "@/core/render";

const formItemHandler = (h, currentFormItem, index, list) => {
  const { copyFormItem, deleteFormItem } = this.$listeners;
  return [
    <span
      class="form-item-copy"
      title="复制"
      onClick={(event) => {
        copyFormItem(currentFormItem, list);
        event.stopPropagation();
      }}
    >
      <i class="el-icon-copy-document" />
    </span>,
    <span
      class="form-item-delete"
      title="删除"
      onClick={(event) => {
        deleteFormItem(index, list);
        event.stopPropagation();
      }}
    >
      <i class="el-icon-delete" />
    </span>,
  ];
};

const formItemRenderer = (h, currentFormItem, index, list) => {
  const { setActiveFormItem } = this.$listeners;
  const config = currentFormItem.config;
  // const child =
  const className =
    this.activeFormItemId === config.formId
      ? "form-item-wrapper form-item-active"
      : "form-item-wrapper";
  let labelWidth = config.labelWidth ? `${config.labelWidth}px` : null;
  if (config.showLabel === false) labelWidth = "0";

  return (
    <el-col
      span={config.span}
      class={className}
      nativeOnClick={(event) => {
        setActiveFormItem(currentFormItem);
        event.stopPropagation();
      }}
    >
      <el-form-item
        label-width={labelWidth}
        label={config.showLabel ? config.label : ""}
        required={config.required}
      >
        <render
          key={config.renderKey}
          conf={currentFormItem}
          onInput={(event) => {
            this.$set(config, "defaultValue", event);
          }}
        ></render>
      </el-form-item>
      {formItemHandler.call(this, h, currentFormItem, index, list)}
    </el-col>
  );
};

export default {
  name: "FormItemRenderer",
  components: {
    draggable,
    render,
  },
  props: [
    "currentFormItem",
    "index",
    "formList",
    "activeFormItemId",
    "formConf",
  ],
  render(h) {
    return formItemRenderer.call(
      this,
      h,
      this.currentFormItem,
      this.index,
      this.formList
    );
  },
};
</script>
