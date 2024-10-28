<template>
  <div
    class="layout-bg min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto p-16px flex-grow transition-300"
  >
    <MyFormSearch />
    <div class="flex-col-stretch sm:flex-1-hidden table-wrapper">
      <div class="flex-x-between">
        <div>
          <el-button type="primary" plain @click="createBlankForm">
            <svg-icon name="mdi--paper-add" style="margin-right: 5px" />创建表单
          </el-button>
        </div>
      </div>
      <div class="flex-1-hidden">table</div>
    </div>
  </div>
</template>
<script>
import MyFormSearch from "./components/MyFormSearch";
export default {
  name: "MyForm",
  components: {
    MyFormSearch,
  },
  methods: {
    createBlankForm() {
      this.$router.push({ path: "/project/form", query: { key: "key123" } });
    },
  },
};
</script>
<style lang="scss" scoped>
.table-header {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.88);
  font-weight: bold;
}
</style>
