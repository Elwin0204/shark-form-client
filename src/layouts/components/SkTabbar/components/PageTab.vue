<template>
  <component
    :is="tabComponent"
    v-bind="bindProps"
    @mouseup.native="handleMouseup"
  >
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="suffix">
      <svg-icon
        v-if="closable"
        name="mdi--window-close"
        className="svg-close"
        style="font-size: 14px; border-radius: 50%; padding: 2px"
        @click.stop="handleClose"
      />
    </slot>
  </component>
</template>
<script>
import TabChrome from "./TabChrome";
import TabButton from "./TabButton";
const tabMap = {
  chrome: "TabChrome",
  button: "TabButton",
};
export default {
  name: "PageTab",
  components: {
    TabChrome,
    TabButton,
  },
  props: {
    tabMode: {
      type: String,
      default: "chrome",
    },
    closable: {
      type: Boolean,
      default: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tabComponent() {
      return tabMap[this.tabMode];
    },
    bindProps() {
      return {
        tabMode: this.tabMode,
        closable: this.closable,
        active: this.active,
      };
    },
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleMouseup(e) {
      // close tab by mouse wheel button click
      if (e.button === 1) {
        this.handleClose();
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
