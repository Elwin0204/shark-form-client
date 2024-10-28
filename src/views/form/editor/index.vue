<template>
  <div class="size-full flex">
    <div class="panel-l h-full overflow-hidden">
      <ComponentStore />
    </div>
    <div class="panel-m h-full flex flex-grow transition-all-300"></div>
    <div class="panel-r" h-full></div>
  </div>
</template>
<script>
import ComponentStore from "./components/ComponentStore";
export default {
  name: "ProjectEditor",
  components: {
    ComponentStore,
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
