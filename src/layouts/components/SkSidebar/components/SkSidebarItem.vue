<template>
  <component
    v-if="isVisible"
    :is="menuComponent"
    :routeData="routeData"
    :onlyOneChild="onlyOneChild"
    :basePath="basePath"
  >
    <template v-if="renderChildren">
      <SkSidebarItem
        v-for="(route, index) in routeData.children"
        :routeData="route"
        :basePath="resolvePath(route.path)"
        :key="index"
      />
    </template>
  </component>
</template>
<script>
import { isExternal } from "@/utils/validate";
import path from "path-browserify";
import SkMenuItem from "./SkMenuItem";
import SkSubmenu from "./SkSubmenu";
export default {
  name: "SkSidebarItem",
  components: {
    SkMenuItem,
    SkSubmenu,
  },
  props: {
    routeData: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      onlyOneChild: null,
    };
  },
  computed: {
    isVisible() {
      if (this.routeData.path === "*") {
        return false;
      }
      return !(this.routeData.meta && this.routeData.meta.hidden);
    },
    renderChildren() {
      return this.routeData.children && this.routeData.children.length > 0;
    },
    menuComponent() {
      if (this.isMenuItem(this.routeData)) {
        return "SkMenuItem";
      } else {
        return "SkSubmenu";
      }
    },
  },
  methods: {
    isMenuItem(route) {
      const children = route.children || [];
      const parent = route;
      const visibleChildren = children.filter((item) => {
        if (item.meta && item.meta.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });

      if (visibleChildren.length === 1) {
        return true;
      }

      if (visibleChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }

      return false;
    },
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
