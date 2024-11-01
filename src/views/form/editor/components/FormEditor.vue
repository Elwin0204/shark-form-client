<template>
  <div class="form-editor size-full flex-col-stretch flex-1-hidden">
    <div class="form-header flex-x-between px-24px">
      <div class="text-auto-save flex-y-center">
        <span class="mr-5px">*表单内容自动保存</span>
        <svg-icon name="el-icon-check" />
      </div>
      <div>
        <el-button type="text" icon="el-icon-download" size="medium">
          导入题目
        </el-button>
        <el-button type="text" icon="el-icon-tickets" size="medium">
          保存为模板
        </el-button>
      </div>
    </div>
    <div class="form-wrapper h-full flex-1-hidden">
      <div class="form-list-scroll h-full">
        <el-row align="middle" justify="center" type="flex">标题</el-row>
        <el-row align="middle" justify="center" type="flex">标题123</el-row>
        <el-form
          :disabled="formConf.disabled"
          :label-position="formConf.labelPosition"
          :label-width="formConf.labelWidth + 'px'"
          :size="formConf.size"
        >
          <draggable
            :animation="340"
            :list="formList"
            group="componentsGroup"
            @end="onEnd"
          >
            <FormItemRenderer
              v-for="(item, index) in formList"
              :key="item.config.renderKey"
              :activeFormItemId="activeFormItemId"
              :currentFormItem="activeFormItem"
              :formList="formList"
              :formConf="formConf"
              :index="index"
              @setActiveFormItem="setActiveFormItem"
              @copyFormItem="copyFormItem"
              @deleteFormItem="deleteFormItem"
            />
          </draggable>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { formConf } from "@/core/config";
import draggable from "vuedraggable";
import cloneDeep from "lodash-es/cloneDeep";
import { queryFormItemSortApi } from "@/api/form.api.js";
import { mapActions, mapGetters } from "vuex";
import FormItemRenderer from "./FormItemRenderer";
export default {
  name: "FormEditor",
  components: {
    draggable,
    FormItemRenderer,
  },
  data() {
    return {
      formConf: {},
    };
  },
  computed: {
    ...mapGetters({
      formList: "form/formList",
      activeFormItemId: "form/activeFormItemId",
      activeFormItem: "form/activeFormItem",
    }),
  },
  methods: {
    ...mapActions({
      setFormItemSort: "form/setFormItemSort",
    }),
    initForm() {
      console.log("formConf", formConf);
      this.formConf = cloneDeep(formConf);
      console.log("this.formConf", this.formConf);
      // this.formKey = this.$route.query.key;
    },
    onEnd(target) {
      const params = { formKey: this.formKey };
      const preIndex = target.newIndex - 1;
      const nextIndex = target.newIndex + 1;
      if (this.formList[preIndex]) {
        const preSort = this.formList[preIndex].sort;
        params.beforePosition = preSort;
      }
      if (this.formList[nextIndex]) {
        const nextSort = this.formList[nextIndex].sort;
        params.afterPosition = nextSort;
      }
      params.formKey = this.formKey;
      params.formItemId = this.formList[target.newIndex].config.formId;
      if (params.beforePosition || params.afterPosition) {
        queryFormItemSortApi(params).then((res) => {
          this.setFormItemSort({ index: target.newIndex, sort: res.data.sort });
        });
      }
    },
    setActiveFormItem() {},
    copyFormItem() {},
    deleteFormItem() {},
  },
  mounted() {
    this.initForm();
  },
};
</script>
<style lang="scss" scoped>
.form-editor {
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
}

.form-header {
  height: 40px;
  background-color: #f4f5f5;
  .text-auto-save {
    font-size: 13px;
    color: #606266;
  }
}

.form-wrapper {
  background-color: #fff;
}

.form-list-scroll {
  overflow-y: auto;
}
</style>
