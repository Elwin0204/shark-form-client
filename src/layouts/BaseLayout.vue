<template>
  <div class="relative h-full transition-all-300">
    <div class="h-full flex flex-col transition-all-300">
      <header
        class="app-header flex-shrink-0 absolute top-0 left-0 w-full"
        :class="{ collapse: sidebarCollapse }"
      >
        <SkAppHeader />
      </header>
      <div class="app-header-placement flex-shrink-0 overflow-hidden"></div>
      <div
        class="app-tabbar transition-all-300 flex-shrink-0 absolute left-0 w-full"
        :class="{ collapse: sidebarCollapse }"
      >
        <SkTabbar />
      </div>
      <div class="app-tabbar-placement flex-shrink-0 overflow-hidden"></div>
      <aside
        class="app-sidebar absolute top-0 left-0 h-full transition-all-300"
        :class="{ collapse: sidebarCollapse }"
      >
        <SkSidebar />
      </aside>
      <main
        class="app-main flex flex-col flex-grow transition-all-300"
        :class="{ collapse: sidebarCollapse }"
      >
        <SkAppContent />
      </main>
      <footer
        class="app-footer flex-shrink-0"
        :class="{ collapse: sidebarCollapse }"
      >
        <SkAppFooter />
      </footer>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import SkAppHeader from "./components/SkAppHeader/index";
import SkAppContent from "./components/SkAppContent/index";
import SkSidebar from "./components/SkSidebar/index";
import SkTabbar from "./components/SkTabbar/index";
import SkAppFooter from "./components/SkAppFooter/index";
export default {
  name: "SkBaseLayout",
  components: {
    SkAppHeader,
    SkAppContent,
    SkSidebar,
    SkTabbar,
    SkAppFooter,
  },
  computed: {
    ...mapGetters({
      sidebarCollapse: "app/sidebarCollapse",
    }),
  },
  methods: {
    ...mapActions({
      toggleSidebar: "app/toggleSidebar",
    }),
  },
};
</script>
<style lang="scss" scoped>
.app-header {
  z-index: $base-header-z-index;
  padding-left: $base-sidebar-width;
  &.collapse {
    padding-left: $base-sidebar-collapse-width;
  }
}
.app-header,
.app-header-placement {
  height: $base-header-height;
}
.app-sidebar {
  width: $base-sidebar-width;
  z-index: $base-sidebar-z-index;
  &.collapse {
    width: $base-sidebar-collapse-width;
  }
}
.app-tabbar {
  top: $base-header-height;
  height: $base-tabbar-height;
  z-index: $base-tabbar-z-index;
  padding-left: $base-sidebar-width;
  &.collapse {
    padding-left: $base-sidebar-collapse-width;
  }
}

.app-tabbar-placement {
  height: $base-tabbar-height;
}

.app-footer {
  height: $base-footer-height;
  z-index: $base-footer-z-index;
  padding-left: $base-sidebar-width;
  &.collapse {
    padding-left: $base-sidebar-collapse-width;
  }
}

.app-main {
  padding-left: $base-sidebar-width;
  &.collapse {
    padding-left: $base-sidebar-collapse-width;
  }
}
</style>
