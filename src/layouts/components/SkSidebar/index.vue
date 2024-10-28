<template>
  <div
    class="container-bg container-text container-shadow size-full transition-300 flex-col-stretch"
  >
    <SkAppLogo />
    <div class="flex-1-hidden">
      <div class="h-full flex-1-hidden">
        <el-menu
          :background-color="vars['menu-background']"
          :text-color="vars['menu-color']"
          :active-text-color="vars['menu-color-active']"
          :default-active="activeMenu"
          :collapse="sidebarCollapse"
          :unique-opened="uniqueOpened"
          :collapse-transition="false"
          mode="vertical"
        >
          <template v-for="(route, index) in routes">
            <SkSidebarItem
              :basePath="route.path"
              :routeData="route"
              :key="index"
            />
          </template>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
import SkAppLogo from "../SkAppLogo/index";
import vars from "@/styles/vars.scss";
import settings from "@/config/settings.config";
import { mapGetters } from "vuex";
import SkSidebarItem from "./components/SkSidebarItem";

export default {
  name: "SkSidebar",
  components: {
    SkAppLogo,
    SkSidebarItem,
  },
  computed: {
    ...mapGetters({
      sidebarCollapse: "app/sidebarCollapse",
      routes: "routes/routes",
    }),
    uniqueOpened() {
      return settings.uniqueOpened;
    },
    activeMenu() {
      const { meta, path } = this.$route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    vars() {
      return vars;
    },
  },
  mounted() {
    // console.log("routes menu", this.routes);
  },
};
</script>
<style lang="scss" scoped>
.container-bg {
  background-color: #fff;
}
.container-text {
  color: #1f1f1f;
}
.container-shadow {
  box-shadow: 2px 0 8px 0 rgb(29, 35, 41, 0.05);
}

.el-menu {
  border: 0;
}
</style>
