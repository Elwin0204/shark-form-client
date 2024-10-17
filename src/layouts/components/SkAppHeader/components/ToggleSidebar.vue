<template>
  <ButtonIcon
    @click="toggleSidebar"
    :tooltipPlacement="sidebarCollapse ? '折叠菜单' : '展开菜单'"
  >
    <svg-icon
      :name="sidebarCollapse ? 'ri--menu-fold-4-fill' : 'ri--menu-fold-3-fill'"
    />
  </ButtonIcon>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ToggleSidebar",
  computed: {
    ...mapGetters({
      sidebarCollapse: "app/sidebarCollapse",
    }),
  },
  methods: {
    ...mapActions({
      toggleSidebar: "app/toggleSidebar",
    }),
  },
};
</script>
