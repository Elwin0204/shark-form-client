<template>
  <div class="size-full flex-y-center px-16px shadow-tab bg-tab">
    <div class="h-full flex-1-hidden">
      <BetterScroll
        ref="bsScroll"
        :options="{ scrollX: true, scrollY: false, click: false }"
        @click="removeFocus"
      >
        <div
          ref="tabRef"
          class="h-full flex pr-18px"
          :class="[
            tabMode === 'chrome' ? 'items-end' : 'items-center gap-12px',
          ]"
        >
          <PageTab
            :tabMode="tabMode"
            v-for="(item, index) in cachedRoutes"
            :key="index"
            :active="isActive(item)"
            :closable="!isAffix(item)"
            @click.native="handleTabClick(item)"
            @close="handleTabClose(item)"
          >
            <template #prefix>
              <svg-icon
                v-if="item.meta.icon"
                :name="item.meta.icon"
                className="tab-prefix-icon"
              />
            </template>
            <div class="tab-title">{{ item.meta.title }}</div>
          </PageTab>
        </div>
      </BetterScroll>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import PageTab from "./components/PageTab";
import path from "path-browserify";
export default {
  name: "SkTabbar",
  components: {
    PageTab,
  },
  computed: {
    ...mapGetters({
      tabMode: "app/tabMode",
      cachedRoutes: "tabbar/cachedRoutes",
      activeTab: "tabbar/activeTab",
      routes: "routes/routes",
    }),
  },
  data() {
    return {
      affixTabs: [],
    };
  },
  watch: {
    $route: {
      handler() {
        this.initTabs();
        this.addTab();
        this.setActiveTab();
      },
      immediate: true,
    },
  },
  methods: {
    removeFocus() {
      document.activeElement.blur();
    },
    isAffix(tab) {
      return tab.meta && tab.meta.affix;
    },
    isActive(tab) {
      return this.activeTab === tab.path;
    },
    filterAffixTabs(routes, basePath = "/") {
      let tabs = [];
      routes.forEach((route) => {
        if (route.meta && route.meta.affix) {
          const tabPath = path.resolve(basePath, route.path);
          tabs.push({
            fullPath: tabPath,
            path: tabPath,
            name: route.name,
            meta: { ...route.meta },
          });
        }
        if (route.children) {
          const tempTabs = this.filterAffixTabs(route.children, route.path);
          if (tempTabs.length >= 1) {
            tabs = [...tabs, ...tempTabs];
          }
        }
      });
      return tabs;
    },
    initTabs() {
      const affixTabs = (this.affixTabs = this.filterAffixTabs(this.routes));
      for (const tab of affixTabs) {
        if (tab.name) {
          this.$store.dispatch("tabbar/addCachedRoute", tab);
        }
      }
    },
    addTab() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("tabbar/addCachedRoute", this.$route);
      }
    },
    setActiveTab() {
      for (let i = 0; i < this.cachedRoutes.length; i++) {
        if (this.cachedRoutes[i].path === this.$route.path) {
          this.$store.dispatch("tabbar/setActiveTab", this.$route.path);
          break;
        }
      }
    },
    handleTabClick(tab) {
      console.log("click123");
      if (this.$route.path !== tab.path) {
        this.$router.push({
          path: tab.path,
          query: tab.query,
          fullPath: tab.fullPath,
        });
      }
    },
    async handleTabClose(tab) {
      await this.$store.dispatch("tabbar/removeCachedRoute", tab);
      if (this.activeTab === tab.path) {
        this.toLastTab();
      }
    },
    toLastTab() {
      const last = this.cachedRoutes.slice(-1)[0];
      if (last) {
        this.$router.push(last);
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.bg-tab {
  background-color: #fff;
}
.shadow-tab {
  box-shadow: 0 1px 2px rgb(0, 21, 41, 0.08);
}
.tab-title {
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tab-prefix-icon {
  display: inline-block;
  vertical-align: text-bottom;
  font-size: 16px;
}
</style>
