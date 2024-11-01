<template>
  <div class="store-wrapper size-full">
    <div class="component-list">
      <div
        class="component-block w-full"
        v-for="(block, index) in componentList"
        :key="index"
      >
        <div class="component-title">
          <svg-icon
            name="fluent-emoji--puzzle-piece"
            style="margin-right: 5px"
          />
          <span>{{ block.title }}</span>
        </div>
        <draggable
          class="component-draggable w-full"
          draggable=".component-item"
          :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
          :sort="false"
          :list="block.list"
          :clone="cloneComponent"
          @end="onEnd"
        >
          <div
            class="component-item transition-300"
            v-for="(component, index) in block.list"
            :key="index"
            @click="addComponent(component)"
          >
            <div class="component-content">
              <svg-icon
                :name="component.config.tagIcon"
                style="margin-right: 5px"
              />
              <span>{{ component.config.label }}</span>
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import {
  baseComponents,
  selectComponents,
  advancedComponents,
  formConf,
} from "@/core/config";
import draggable from "vuedraggable";
import cloneDeep from "lodash-es/cloneDeep";
import {
  createFormItemId,
  createRenderKey,
  convertFormItem,
} from "@/core/utils";
import { saveFormItemApi, queryFormItemSortApi } from "@/api/form.api.js";
import { mapActions, mapGetters } from "vuex";

let tempActiveFormItem;
export default {
  name: "ComponentStore",
  components: {
    draggable,
  },
  computed: {
    ...mapGetters({
      formList: "form/formList",
    }),
  },
  data() {
    return {
      componentList: [
        {
          title: "基础组件",
          list: baseComponents,
        },
        {
          title: "选择组件",
          list: selectComponents,
        },
        {
          title: "高阶组件",
          list: advancedComponents,
        },
      ],
      formConf: null,
      formKey: null,
      formId: null,
    };
  },
  methods: {
    ...mapActions({
      addFormItem: "form/addFormItem",
      setActiveFormItem: "form/setActiveFormItem",
      setFormItemSort: "form/setFormItemSort",
    }),
    initForm() {
      this.formConf = cloneDeep(formConf);
      this.formKey = this.$route.query.key;
    },
    // 获取表单配置
    queryFormConf() {},
    // 获取表单子项
    queryFormItems() {},
    cloneComponent(origin) {
      const clone = cloneDeep(origin);
      const config = clone.config;
      config.span = this.formConf.span;
      this.formId = createFormItemId(clone.typeId);
      this.handleFormItem(clone);
      if (clone.placeholder !== undefined) clone.placeholder += config.label;
      tempActiveFormItem = clone;
      return tempActiveFormItem;
    },
    onEnd(target) {
      if (target.from !== target.to) {
        this.setActiveFormItem(tempActiveFormItem);
        this.saveFormItem(tempActiveFormItem).then(() => {
          this.handleFormItemSort(target);
        });
      }
    },
    handleFormItemSort(target) {
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
    handleFormItem(item) {
      const config = item.config;
      config.formId = this.formId;
      config.renderKey = createRenderKey();
      item.vModel = this.formId;
      // if (config.layout === "colFormItem") {
      //   item.vModel = `field${this.formId}`;
      // } else if (config.layout === "rowFormItem") {
      //   config.componentName = `row${this.formId}`;
      //   if (!Array.isArray(config.children)) config.children = [];
      //   delete config.label; // rowFormItem无需配置label属性
      // }

      // if (Array.isArray(config.children)) {
      //   config.children = config.children.map((child) =>
      //     this.handleFormItem(child)
      //   );
      // }

      return item;
    },
    async saveFormItem(item) {
      let flag = false;
      const params = convertFormItem(item, this.formKey);
      await saveFormItemApi(params).then((res) => {
        item.sort = res.data.sort;
        flag = true;
      });
      return flag;
    },
    addComponent(item) {
      const clone = this.cloneComponent(item);
      this.saveFormItem(clone);
      this.addFormItem(clone);
      this.setActiveFormItem(clone);
    },
  },
  mounted() {
    this.initForm();
    // console.log("componentList", this.componentList);
  },
};
</script>
<style lang="scss" scoped>
.store-wrapper {
  padding: 8px;
}

.component-block {
  .component-title {
    margin: 10px 0;
    span {
      font-size: 16px;
    }
  }
}

.component-draggable {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  .component-item {
    width: calc(50% - 8px);
    border-radius: 6px;
    border: 1px solid transparent;
    box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, 0.1);
    padding: 8px 10px;
    cursor: pointer;
    &:hover {
      border: 1px solid #409eff;
    }
  }
}
</style>
