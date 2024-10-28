<template>
  <el-menu-item :index="resolvePath(onlyOneChild.path)" @click="handleLink">
    <svg-icon v-if="icon" :name="icon" style="margin-right: 5px" />
    <span>{{ title }}</span>
  </el-menu-item>
</template>
<script>
import { isExternal } from "@/utils/validate";
import path from "path-browserify";
export default {
  name: "SkMenuItem",
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
      return this.onlyOneChild.meta && this.onlyOneChild.meta.icon;
    },
    title() {
      return this.onlyOneChild.meta && this.onlyOneChild.meta.title;
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
    handleLink() {
      const routePath = this.onlyOneChild.path;
      const target = this.onlyOneChild.meta.target;

      if (target === "_blank") {
        if (isExternal(routePath)) {
          window.open(routePath);
        } else if (isExternal(this.basePath)) {
          window.open(this.basePath);
        } else if (
          this.$route.path !== path.resolve(this.basePath, routePath)
        ) {
          const routeData = this.$router.resolve(
            path.resolve(this.basePath, routePath)
          );
          window.open(routeData.href);
        }
      } else {
        if (isExternal(routePath)) {
          window.location.href = routePath;
        } else if (isExternal(this.basePath)) {
          window.location.href = this.basePath;
        } else if (
          this.$route.path !== path.resolve(this.basePath, routePath)
        ) {
          this.$router.push(path.resolve(this.basePath, routePath));
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
