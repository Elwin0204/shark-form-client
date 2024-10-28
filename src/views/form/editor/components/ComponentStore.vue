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
          >
            <div class="component-content">
              <svg-icon
                :name="component.__config__.tagIcon"
                style="margin-right: 5px"
              />
              <span>{{ component.__config__.label }}</span>
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
import { createFormItemId } from "@/core/utils";

//let tempActiveData;
export default {
  name: "ComponentStore",
  components: {
    draggable,
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
      projectKey: null,
      formId: null,
    };
  },
  methods: {
    initProject() {
      this.formConf = cloneDeep(formConf);
      this.projectKey = this.$route.key;
    },
    // 获取表单配置
    queryProjectConf() {},
    // 获取表单子项
    queryProjectItems() {},
    cloneComponent(origin) {
      const clone = cloneDeep(origin);
      const config = clone.__config__;
      config.span = this.formConf.span;
      this.formId = createFormItemId(clone.typeId);
    },
    onEnd() {},
    handleFormItem(item) {
      const config = item.__config__;
      config.formId = this.formId;
      config.renderKey = `${config.formId}${+new Date()}`;
      if (config.layout === "colFormItem") {
        item.__vModel__ = `field${this.formId}`;
      } else if (config.layout === "rowFormItem") {
        config.componentName = `row${this.formId}`;
        !Array.isArray(config.children) && (config.children = []);
        delete config.label; // rowFormItem无需配置label属性
      }
    },
  },
  mounted() {
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
