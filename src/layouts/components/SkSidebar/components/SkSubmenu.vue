<template>
  <el-submenu :index="basePath">
    <!-- <el-submenu :index="basePath" :popper-append-to-body="false"> -->
    <template slot="title">
      <svg-icon v-if="icon" :name="icon" style="margin-right: 5px" />
      <span>{{ title }}</span>
    </template>
    <slot />
  </el-submenu>
</template>
<script>
import { isExternal } from "@/utils/validate";
import path from "path-browserify";
export default {
  name: "SkSubmenu",
  props: {
    routeData: {
      type: Object,
      default: null,
    },
    onlyOneChild: {
      type: Object,
      default: null,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  computed: {
    icon() {
      return this.routeData.meta && this.routeData.meta.icon;
    },
    title() {
      return this.routeData.meta && this.routeData.meta.title;
    },
  },
  methods: {
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>
<style lang="scss" scoped></style>
