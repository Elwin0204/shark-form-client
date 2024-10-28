<template>
  <div
    class="relative inline-flex cursor-pointer items-center justify-center gap-12px whitespace-nowrap border-1px border-solid rounded-4px px-12px py-4px"
    :class="['button-tab', { 'button-tab_active': active }]"
  >
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="suffix"></slot>
  </div>
</template>
<script>
export default {
  name: "TabButton",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.button-tab {
  border-color: #e5e7eb;
}

.button-tab:hover {
  color: #409eff;
  border-color: #b3d8ff;
}

.button-tab_active {
  color: #409eff;
  border-color: #b3d8ff;
  background-color: #ecf5ff;
}

.button-tab .svg-close:hover {
  font-size: 12px;
  color: #ffffff;
  background-color: #409eff;
}
</style>
