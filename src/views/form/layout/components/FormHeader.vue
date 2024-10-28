<template>
  <div class="form-header shadow-header h-full flex-x-between px-12px">
    <svg-icon name="el-icon-back" style="font-size: 24px" />
    <div class="h-full flex-x-between">
      <FormMenu />
    </div>
    <div>
      <el-button type="primary" plain icon="el-icon-view">预览</el-button>
      <el-button type="primary" icon="el-icon-s-promotion">一键发布</el-button>
    </div>
  </div>
</template>
<script>
import FormMenu from "./FormMenu";
export default {
  name: "FormHeader",
  components: {
    FormMenu,
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-menu--horizontal > .el-menu-item {
  height: $form-header-height;
  line-height: $form-header-height;
}
.form-header {
  background-color: #fff;
}
.shadow-header {
  box-shadow: 0 1px 2px rgb(0, 21, 41, 0.08);
}
</style>
