<template>
  <div id="login">
    <el-container>
      <el-header height="160px">
        <Loginheader />
        <el-cow>
          <el-col :span="4" :offset="2"
            ><el-image
              :src="logo"
              style="width: 200px; height: 100px; margin-top: 10px"
            ></el-image
          ></el-col>
          <el-col :span="4" :offset="12"
            ><h3 style="margin-top: 40px">
              <i class="el-icon-phone"></i>：000-0000-000
            </h3></el-col
          >
        </el-cow>
      </el-header>
      <el-main
        height="500px"
        :style="{ background: 'url(' + loginbackimg + ')' }"
      >
        <div class="table-container">
          <el-form>
            <el-form-item>
              <h2 style="color: red; text-align: center">用户登录</h2>
              <el-divider></el-divider>
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
              ></el-input
            ></el-form-item>
            <el-form-item>
              <el-radio style="margin-left: 30px" v-model="radio" label="admin"
                >管理员</el-radio
              >
              <el-radio v-model="radio" label="user"
                >普通用户</el-radio
              ></el-form-item
            >
            <el-form-item>
              <el-button
                style="width: 380px; margin: 10px"
                @click="login()"
                type="primary"
                >立即登录</el-button
              ></el-form-item
            >
            <el-form-item>
              <router-link to="/forget" style="float: right; margin-right: 10px"
                >忘记密码?</router-link
              >
            </el-form-item>
            <el-form-item>
              <router-link
                to="/resigter"
                style="float: right; margin-right: 10px"
                >没有账号？ 立即注册 >>></router-link
              ></el-form-item
            >
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
import Loginheader from "./reception/index/header";
import Loginfooter from "./reception/index/footer";
export default {
  components: {
    Loginheader,
    Loginfooter,
  },
  data() {
    return {
      user: "user",
      pad: "123",
      radio: "user",
      loginbackimg: require("../assets/images/loginbackimg.jpg"),
      logo:require('../assets/images/logo.png')
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
.el-form-item {
  margin: 0px;
}
</style>