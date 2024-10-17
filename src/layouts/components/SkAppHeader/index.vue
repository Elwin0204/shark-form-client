<template>
  <div class="header-wrapper h-full flex-y-center">
    <ToggleSidebar />
    <div class="h-full flex-y-center flex-1-hidden">123</div>
    <div class="h-full flex-y-center justify-end">
      <UserAvatar />
    </div>
  </div>
</template>
<script>
import ToggleSidebar from "./components/ToggleSidebar";
import UserAvatar from "./components/UserAvatar";
export default {
  name: "SkAppHeader",
  components: {
    ToggleSidebar,
    UserAvatar,
  },
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  padding: 0 12px;
  box-shadow: 0 1px 2px rgba(0, 21, 41, 0.08);
}
</style>
