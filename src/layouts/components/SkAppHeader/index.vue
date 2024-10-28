<template>
  <div class="header-wrapper h-full flex-y-center">
    <div class="h-full flex-y-center flex-1-hidden">
      <ToggleSidebar />
      <Breadcrumb class="ml-12px" />
    </div>
    <!-- <div class="h-full flex-y-center flex-1-hidden">123</div> -->
    <div class="h-full flex-y-center justify-end">
      <FullScreen />
      <UserAvatar />
    </div>
  </div>
</template>
<script>
import ToggleSidebar from "./components/ToggleSidebar";
import Breadcrumb from "./components/Breadcrumb";
import FullScreen from "./components/FullScreen";
import UserAvatar from "./components/UserAvatar";
export default {
  name: "SkAppHeader",
  components: {
    ToggleSidebar,
    Breadcrumb,
    FullScreen,
    UserAvatar,
  },
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  background-color: #fff;
  padding: 0 12px;
  box-shadow: 0 1px 2px rgba(0, 21, 41, 0.08);
}
</style>
