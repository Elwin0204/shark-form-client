<template>
  <div class="login-container">
    <div class="login-form-wrapper">
      <div class="login-form">
        <h1>
          <svg-icon
            name="fluent-emoji--shark"
            :style="{ fontSize: '32px', marginRight: '10px' }"
          />
          鲨鱼快填
        </h1>
        <el-form ref="form" :model="form" :rules="rules" label-width="auto">
          <el-form-item>
            <el-input
              v-model="form.username"
              placeholder="请输入用户名"
              size="medium"
            >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="form.password"
              placeholder="请输入密码"
              size="medium"
              show-password
            >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="form-item-remember">
              <el-checkbox v-model="remember">记住密码</el-checkbox>
              <el-button type="text">新用户?注册</el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              style="width: 100%; height: 45px"
              @click="submitForm('form')"
              >登录</el-button
            >
          </el-form-item>
          <el-form-item>
            <div class="form-item-wechat">
              <div @click="handleWechat">
                <svg-icon
                  name="ant-design--wechat-filled"
                  :style="{ fontSize: '24px' }"
                />
                <svg-icon
                  name="ant-design--wechat-work-outlined"
                  :style="{ fontSize: '24px' }"
                />
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
      remember: false,
    };
  },
  methods: {
    handleWechat() {},
    submitForm(formRef) {
      this.$refs[formRef].validate((valid) => {
        if (valid) {
          this.$store.dispatch("user/login", this.form).then(() => {
            if (this.$route.query.redirect) {
              console.log("login replace", this.$route.query.redirect);
              this.$router.replace({ path: this.$route.query.redirect });
            } else {
              this.$router.push({ path: "/" });
              // this.$router.push({ path: "/my-form" });
            }
          });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login-container {
  position: relative;
  width: 100%;
  height: 100%;
  .login-form-wrapper {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
    .login-form {
      width: 500px;
    }
  }
}

.login-form {
  position: relative;
  padding: 40px 90px 60px;
  h1 {
    font-size: 30px;
    letter-spacing: 4px;
    color: #333;
    text-align: center;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-item-remember {
    display: flex;
    justify-content: space-between;
  }
  .form-item-wechat {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
