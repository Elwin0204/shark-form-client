<template>
  <div class="size-full flex">
    <div class="panel-l flex flex-shrink-0 h-full overflow-hidden">
      <ComponentStore />
    </div>
    <div class="panel-m h-full flex flex-grow transition-all-300">
      <div class="size-full px-100px">
        <FormEditor />
      </div>
    </div>
    <div class="panel-r flex flex-shrink-0 h-full overflow-hidden">
      <AttributeEditor />
    </div>
  </div>
</template>
<script>
import ComponentStore from "./components/ComponentStore";
import FormEditor from "./components/FormEditor";
import AttributeEditor from "./components/AttributeEditor";
export default {
  name: "ProjectEditor",
  components: {
    ComponentStore,
    FormEditor,
    AttributeEditor,
  },
};
</script>
<style lang="scss" scoped>
.panel-l {
  width: 260px;
  // background: red;
}

.panel-r {
  width: 350px;
  background: greenyellow;
}

.panel-m {
  background: pink;
}
</style>
