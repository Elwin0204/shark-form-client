<template>
  <div class="relative h-full transition-all-300">
    <div class="h-full flex flex-col transition-all-300">
      <header class="form-header flex-shrink-0 absolute top-0 left-0 w-full">
        form header
      </header>
      <div class="form-header-placement flex-shrink-0 overflow-hidden"></div>
      <main class="form-main flex flex-col flex-grow transition-all-300">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormLayout",
};
</script>
<style lang="scss" scoped>
.form-header {
  z-index: $form-header-z-index;
}
.form-header,
.form-header-placement {
  height: $form-header-height;
}
</style>
