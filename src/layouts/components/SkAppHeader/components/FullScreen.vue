<template>
  <ButtonIcon
    @click="toggle"
    :tooltipPlacement="isFullScreen ? '退出全屏' : '全屏'"
  >
    <svg-icon
      :name="
        isFullScreen ? 'gridicons--fullscreen-exit' : 'tdesign--fullscreen-2'
      "
    />
  </ButtonIcon>
</template>
<script>
import screenfull from "screenfull";
export default {
  name: "FullScreen",
  data() {
    return {
      isFullScreen: false,
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    toggle() {
      if (!screenfull.isEnabled) {
        this.$baseMessage("开启全屏失败", "error");
        return false;
      }
      screenfull.toggle();
    },
    change() {
      this.isFullScreen = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on("change", this.change);
      }
    },
    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off("change", this.change);
      }
    },
  },
};
</script>
