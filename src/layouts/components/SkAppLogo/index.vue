<template>
  <RouterLink to="/" class="logo-height w-full flex-center nowrap-hidden">
    <svg-icon name="fluent-emoji--shark" class-name="text-32px" />
    <h2
      v-if="!sidebarCollapse"
      class="pl-8px text-16px font-bold title-color transition duration-300 ease-in-out"
    >
      {{ title }}
    </h2>
  </RouterLink>
</template>
<script>
import settings from "@/config/settings.config";
import { mapGetters } from "vuex";
export default {
  name: "SkAppLogo",
  computed: {
    title() {
      return settings.title;
    },
    ...mapGetters({
      sidebarCollapse: "app/sidebarCollapse",
    }),
  },
};
</script>
<style lang="scss" scoped>
.title-color {
  color: #409eff;
}

.logo-height {
  height: $base-header-height;
}
</style>
