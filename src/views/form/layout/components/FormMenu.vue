<template>
  <el-menu
    :default-active="activeMenu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="(item, index) in formRoutes"
      :key="index"
      :index="item.path"
    >
      <svg-icon :name="item.icon" />
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "FormMenu",
  computed: {
    ...mapGetters({
      formRoutes: "routes/formRoutes",
    }),
  },
  data() {
    return {
      activeMenu: "",
      projectKey: "",
    };
  },
  methods: {
    handleSelect(value) {
      this.$router.replace({ path: value, query: { key: this.projectKey } });
    },
  },
  mounted() {
    this.activeMenu = this.$route.path;
    this.projectKey = this.$route.query.key;
    console.log("form", this.formRoutes, this.activeMenu);
  },
};
</script>
<style lang="scss" scoped></style>
