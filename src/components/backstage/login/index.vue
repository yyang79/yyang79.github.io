<template>
  <div
    id="login"
    style="width: 100%; height: 635px"
    :style="{ background: 'url(' + bz + ')' }"
  >
    <div class="table-container">
      <el-form>
        <el-form-item>
          <h2 style="color: red; text-align: center">
            欢迎来到，花无缺后台管理系统
          </h2>
        </el-form-item>
        <el-form-item>
          <el-input
            style="width: 380px; margin: 0px 10px 0px 10px"
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
            autofocus="true"
            clearable
            v-model="user"
          ></el-input
        ></el-form-item>
        <el-form-item>
          <el-input
            style="width: 380px; margin: 20px 10px 10px 10px"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            show-password
            v-model="pad"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio style="margin-left: 30px" v-model="radio" label="admin"
            >管理员</el-radio
          >
          <el-radio v-model="radio" label="saler">售货员</el-radio></el-form-item
        >
        <el-form-item>
          <el-button
            style="width: 380px; margin: 10px"
            @click="login()"
            @keyup.enter.native="login()"
            type="primary"
            >立即登录</el-button
          ></el-form-item
        >
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "admin",
      pad: "123",
      radio: "admin",
      bz: require("../../../assets/images/bz.jpg"),
    };
  },
  methods: {
    login() {
      this.$axios
        .post("/login", {
          user: this.user,
          pad: this.pad,
          type: this.radio,
        })
        .then((res) => {
          if (res.data == "验证通过") {
            this.$message({ message: "登录成功！！！", type: "success" });
            this.$store.dispatch("login/setbackinfo", {
              user: this.user,
              type: this.radio,
            });
            this.$router.replace("/backstage");
          } else {
            this.$message.error("用户名或密码不正确！！！");
          }
        })
        .catch((error) => {
          this.$message.error("NetWork err!!!");
          window.console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.table-container {
  position: absolute;
  left: 50%;
  top: 150px;
  margin-left: -200px;
  width: 400px;
  height: 300px;
  background-color: #f3f3f3;
  opacity: 0.7;
  border-radius: 10px;
}
.el-form-item {
  margin: 0px;
}
</style>