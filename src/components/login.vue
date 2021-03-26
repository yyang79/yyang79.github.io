<template>
  <div id="login">
    <el-container>
      <el-header height="100px">
        <div style="width: 100%; height: 100px; background-color: red"></div>
      </el-header>
      <el-main
        height="500px"
        :style="{ background: 'url(' + loginbackimg + ')' }"
      >
        <div class="login-mian"></div>
        <div class="table-container">
          <el-form>
            <h2 style="color: red; text-align: center">用户登录</h2>
            <el-divider></el-divider>
            <el-input
              style="width: 380px; margin: 0px 10px 0px 10px"
              prefix-icon="el-icon-user"
              placeholder="请输入用户名"
              clearable
              v-model="user"
            ></el-input>
            <el-input
              style="width: 380px; margin: 20px 10px 20px 10px"
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              show-password
              clearable
              v-model="pad"
            ></el-input>
            <el-radio style="margin-left: 30px" v-model="radio" label="admin"
              >管理员</el-radio
            >
            <el-radio v-model="radio" label="user">普通用户</el-radio>
            <el-button
              style="width: 380px; margin: 20px 10px 10px 10px"
              @click="login"
              type="primary"
              >立即登录</el-button
            >
            <div style="margin-bottom: 30px; text-align: center">
              <router-link to="/forgtpad">忘记密码?</router-link>
            </div>
            <el-row>
              <el-col :span="17">&nbsp;</el-col>
              <el-col :span="4">
                <router-link to="/resigter">立即注册 >>></router-link>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-main>
      <el-footer height="100px">
        <div style="width: 100%; height: 300px">
          <Loginfooter />
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Loginfooter from "./reception/index/footer";
export default {
  components: {
    Loginfooter,
  },
  data() {
    return {
      user: "",
      pad: "",
      loginbackimg: require("../assets/images/loginbackimg.jpg"),
      radio: "user",
    };
  },
  methods: {
    login() {
      if (this.radio == "admin") {
        this.$axios
        .post("http://127.0.0.1:3000/login", {
            user: this.user,
            pad: this.pad,
            type: this.radio,
          })
          .then((res) => {
            if (res.data == "验证通过") {
              this.$message({ message: "登录成功！！！", type: "success" });
              this.$router.replace("/backstage");
            } else {
              this.$message.error("用户名或密码不正确！！！");
            }
          })
          .catch((error) => {
            window.console.log(error);
          });
      } else if (this.radio == "user") {
        this.$axios
        .post("http://127.0.0.1:3000/login", {
            user: this.user,
            pad: this.pad,
            type: this.radio,
          })
          .then((res) => {
            if (res.data == "验证通过") {
              this.$message({ message: "登录成功！！！", type: "success" });
              this.$store.dispatch("login/loginbackstatus");
              this.$router.replace("/index");
            } else {
              this.$message.error("用户名或密码不正确！！！");
            }
          })
          .catch((error) => {
            window.console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
.el-container,
.el-header,
.el-main,
.el-footer {
  margin: 0px;
  padding: 0px;
  width: 100%;
  min-width: 1300px;
}
.table-container {
  float: left;
  margin: 50px 100px 50px 800px;
  width: 400px;
  height: 400px;
  background-color: #f3f3f3;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
}
</style>