<template>
  <transition mode="out-in" name="fade-slide">
    <keep-alive :include="cachedRoutes" :max="keepAliveMaxNum">
      <router-view :key="key" class="flex-grow layout-bg transition-300" />
    </keep-alive>
  </transition>
</template>
<script>
import settings from "@/config/settings.config";
export default {
  name: "SkAppContent",
  data() {
    return {
      keepAliveMaxNum: settings.keepAliveMaxNum,
    };
  },
  computed: {
    cachedRoutes() {
      return [];
    },
    key() {
      return this.$route.path;
    },
  },
};
</script>
<style lang="scss" scoped></style>
