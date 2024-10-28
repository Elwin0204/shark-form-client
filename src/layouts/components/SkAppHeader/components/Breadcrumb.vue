<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(route, index) in breadcrumbs" :key="index">{{
      formatBreadcrumbTitle(route)
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      breadcrumbs: this.getBreadcrumb(),
    };
  },
  watch: {
    $route() {
      this.breadcrumbs = this.getBreadcrumb();
    },
  },
  methods: {
    getBreadcrumb() {
      return this.$route.matched.filter((item) => item.meta.title);
    },
    formatBreadcrumbTitle(route) {
      return (
        (route.meta.i18nKey && this.$t(route.meta.i18nKey)) || route.meta.title
      );
    },
  },
};
</script>
