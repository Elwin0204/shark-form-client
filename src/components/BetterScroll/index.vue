<template>
  <div ref="bsWrapper" class="h-full text-left">
    <div ref="bsContent" class="inline-block" :class="{ 'h-full': !isScrollY }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
export default {
  name: "BetterScroll",
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      instance: null,
    };
  },
  computed: {
    isScrollY() {
      return Boolean(this.options.scrollY);
    },
  },
  methods: {
    initBetterScroll() {
      if (!this.$refs["bsWrapper"]) {
        return;
      } else {
        this.instance = new BScroll(this.$refs["bsWrapper"], this.options);
        // this.instance.refresh();
      }
    },
  },
  mounted() {
    this.initBetterScroll();
  },
};
</script>
<style lang="scss" scoped></style>
