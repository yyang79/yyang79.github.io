<template>
  <div id="login">
    <el-container>
      <el-header height="160px">
        <Loginheader />
        <el-row>
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
        </el-row>
      </el-header>
      <el-main
        height="500px"
        :style="{ background: 'url(' + loginbackimg + ')' }"
      >
        <div class="table-container">
          <el-form>
            <el-form-item>
              <h2 style="color: red; text-align: center">用户登录</h2>
            </el-form-item>
            <el-form-item>
              <el-input
                style="width: 320px; margin: 0px 10px 0px 10px"
                prefix-icon="el-icon-user"
                placeholder="请输入用户名"
                autofocus="true"
                clearable
                v-model="user"
              ></el-input
            ></el-form-item>
            <el-form-item>
              <el-input
                style="width: 320px; margin: 20px 10px 10px 10px"
                prefix-icon="el-icon-lock"
                placeholder="请输入密码"
                show-password
                v-model="pad"
              ></el-input>
            </el-form-item>
            <el-form-item style="margin: 10px 10px">
              <el-input
                style="width: 180px"
                v-model="code"
                placeholder="请输入验证码"
              ></el-input>
              <div
                @click="coderefresh"
                style="float: right; width: 120px; height: 40px"
              >
                <VerificationCode ref="mychild" :identifyCode="identifyCode" />
              </div>
            </el-form-item>
            <el-form-item>
              <el-button
                style="width: 320px; margin: 10px"
                @click="login()"
                @keyup.enter.native="login()"
                type="primary"
                >立即登录</el-button
              ></el-form-item
            >
            <el-form-item>
              <router-link to="/resigter" style="margin: 0px 10px 0px 100px"
                >没有账号？立即注册</router-link
              >
              |
              <router-link to="/forget" style="margin: 0px 10px"
                >忘记密码?</router-link
              ></el-form-item
            >
          </el-form>
        </div>
      </el-main>
      <el-footer height="100px">
        <div style="width: 100%; height: 200px">
          <Loginfooter />
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Loginheader from "./reception/index/header";
import Loginfooter from "./reception/index/footer";
import VerificationCode from "./reception/verificationcode/verificationcode";
export default {
  components: {
    Loginheader,
    Loginfooter,
    VerificationCode,
  },
  data() {
    return {
      user: "user",
      pad: "123",
      radio: "user",
      code: "",
      identifyCode: "",
      loginbackimg: require("../assets/images/loginbackimg.jpg"),
      logo: require("../assets/images/logo.png"),
    };
  },
  mounted() {
    this.coderefresh();
  },
  methods: {
    login() {
      if (this.code != this.identifyCode) {
        this.$message.error("验证码不正确");
        this.coderefresh();
      } else {
        this.$axios
          .post("/login", {
            user: this.user,
            pad: this.pad,
            type: this.radio,
          })
          .then((res) => {
            if (res.data[1].message == "验证通过") {
              this.$message({ message: "登录成功！！！", type: "success" });
              this.$store.dispatch("login/userform", res.data[0]);
              this.$store.dispatch("login/loginbackstatus");
              this.$router.replace("/index");
            } else {
              this.$message.error("用户名或密码不正确！！！");
            }
          })
          .catch((error) => {
            this.$message.error("NetWork err!!!");
            window.console.log(error);
          });
      }
    },
  },
  coderefresh() {
    this.identifyCode = "";
    this.makeCode(this.identifyCode, 4);
  },
  makeCode(o, l) {
    for (let i = 0; i < l; i++) {
      var val = this.$refs.mychild.randomNum(0, 9);
      this.identifyCode = this.identifyCode + val;
    }
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
  width: 340px;
  height: 400px;
  background-color: #f3f3f3;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  opacity: 0.8;
}
.el-form-item {
  margin: 0px;
}
</style>