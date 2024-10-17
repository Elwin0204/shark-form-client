<template>
  <el-tooltip
    effect="dark"
    :content="tooltipPlacement"
    :placement="tooltipDirection"
    :disabled="disabled"
  >
    <div
      class="button-icon"
      @click="$listeners.click ? $listeners.click($event) : () => {}"
    >
      <div class="flex-center">
        <slot>
          <svg-icon :name="icon" :style="{ fontSize: fontSize }" />
        </slot>
      </div>
    </div>
  </el-tooltip>
</template>
<script>
export default {
  name: "ButtonIcon",
  inheritAttrs: false, // 阻止默认属性继承行为
  props: {
    tooltipPlacement: {
      type: String,
      default: "",
    },
    tooltipDirection: {
      type: String,
      default: "bottom",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    fontSize: {
      type: String,
      default: "1.125rem",
    },
  },
};
</script>
<style lang="scss" scoped>
.button-icon {
  height: 36px;
  padding: 4px 15px;
  border-radius: 6px;
  display: inline-block;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  &:hover {
    color: rgba(0, 0, 0, 0.88);
    background-color: rgba(0, 0, 0, 0.06);
  }
}
</style>
