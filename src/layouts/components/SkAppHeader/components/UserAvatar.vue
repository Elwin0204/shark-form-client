<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <div>
      <ButtonIcon :disabled="true">
        <svg-icon name="home_top_user" />
        <span class="username ml-1">{{ username }}</span>
      </ButtonIcon>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="UserCenter">
        <svg-icon name="home_top_user" />
        <span class="ml-1">個人中心</span>
      </el-dropdown-item>
      <el-dropdown-item command="Logout" divided>
        <svg-icon name="home_top_exit" />
        <span class="ml-1">退出登錄</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "UserAvatar",
  computed: {
    ...mapGetters({
      username: "user/username",
    }),
  },
  methods: {
    handleCommand(command) {
      if (command === "Logout") {
        this.hanldeLogout();
      }
    },
    hanldeLogout() {
      this.$baseConfirm(
        "确定注销吗",
        "注销",
        () => {
          this.$store.dispatch("user/logout").then(() => {
            this.$router.replace({ path: "/login" });
          });
        },
        () => {}
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.username {
  font-size: 16px;
}
.mr-1 {
  margin-right: 5px;
}
.ml-1 {
  margin-left: 5px;
}
</style>
