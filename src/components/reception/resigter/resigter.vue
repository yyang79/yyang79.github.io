<template>
  <div id="resigter">
    <Resigterhead />
    <el-container
      style="
        position: absolute;
        top: 40px;
        left: 0px;
        width: 100%;
        height: 760px;
      "
    >
      <el-header
        style="
          width: 100%;
          min-width: 1200px;
          height: 120px;
          background-color: #f3f3f3;
        "
      >
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
        style="width: 100%;min-width:1200px height: 460px"
        :style="{ background: 'url(' + backimage + ')' }"
      >
        <div
          style="
            position: absolute;
            top: 140px;
            left: 70%;
            width: 300px;
            height: 400px;
            background-color: #f3f3f3;
            border-radius: 10px;
          "
        >
          <el-tabs v-model="activeName" stretch="fasle" style="padding: 10px">
            <el-tab-pane label="手机号注册" name="first">
              <el-form :model="form1" status-icon :rules="rules1" ref="form1">
                <el-form-item prop="tel">
                  <el-input
                    style="width: 260px"
                    prefix-icon="el-icon-user"
                    maxlength="11"
                    v-model="form1.tel"
                    placeholder="请输入手机号"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="telcode">
                  <el-input
                    style="width: 150px"
                    maxlength="6"
                    v-model="form1.telcode"
                    placeholder="请输入短信验证码"
                  ></el-input>
                  <el-button
                    type="primary"
                    @click="sendnote"
                    style="width: 100px; margin-left: 10px"
                    >发送短信</el-button
                  >
                </el-form-item>
                <el-form-item prop="tel_pad">
                  <el-input
                    style="width: 260px"
                    prefix-icon="el-icon-lock"
                    v-model="form1.tel_pad"
                    show-password
                    placeholder="请输入密码"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="tel_apad">
                  <el-input
                    style="width: 260px"
                    prefix-icon="el-icon-lock"
                    v-model="form1.tel_apad"
                    show-password
                    placeholder="请再次输入密码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    style="width: 100%"
                    @click="submitForm('form1')"
                    >立即注册</el-button
                  >
                </el-form-item>
                <el-form-item style="margin-top: -15px; text-align: center">
                  <router-link to="/login">已有账号，立即登录！！</router-link>
                </el-form-item>
              </el-form></el-tab-pane
            >
            <el-tab-pane label="邮箱注册" name="second">
              <el-form :model="form2" status-icon :rules="rules2" ref="form2">
                <el-form-item prop="email">
                  <el-input
                    style="width: 260px"
                    prefix-icon="el-icon-user"
                    v-model="form2.email"
                    placeholder="请输入邮箱账号"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="emailcode">
                  <el-input
                    style="width: 140px"
                    maxlength="6"
                    v-model="form2.emailcode"
                    placeholder="请输入验证码"
                  ></el-input>
                  <el-button
                    type="primary"
                    @click="sendemail"
                    style="width: 110px; margin-left: 10px"
                    >发送验证码</el-button
                  >
                </el-form-item>
                <el-form-item prop="email_pad">
                  <el-input
                    style="width: 260px"
                    prefix-icon="el-icon-lock"
                    v-model="form2.email_pad"
                    show-password
                    placeholder="请输入密码"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="email_apad">
                  <el-input
                    style="width: 260px"
                    prefix-icon="el-icon-lock"
                    v-model="form2.email_apad"
                    show-password
                    placeholder="请再次输入密码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    style="width: 100%"
                    @click="submitForm('form2')"
                    >立即注册</el-button
                  >
                </el-form-item>
                <el-form-item style="margin-top: -15px; text-align: center">
                  <router-link to="/login">已有账号，立即登录！！</router-link>
                </el-form-item>
              </el-form></el-tab-pane
            >
          </el-tabs>
        </div>
      </el-main>
      <el-footer style="width: 100%; height: 200px; padding:0px;background-color: #f3f3f3">
        <Resigterfoot />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Resigterhead from "../index/header";
import Resigterfoot from "../index/footer";
import backimage from "../../../assets/images/backimage.jpg";

export default {
  name: "resigter",
  components: {
    Resigterhead,
    Resigterfoot,
  },
  methods: {
    sendnote() {
      this.$axios
        .post("/send/tel", { tel: this.tel })
        .then((res) => {
          if (res.data.message == "短信验证码已发送") {
            this.telcode_1 = res.data.telcode;
            this.$message.success("短信验证码已发送");
          }
        })
        .catch((err) => {
          window.console.log(err);
        });
    },
    sendemail() {
      this.$axios
        .post("/send/message", { email: this.email })
        .then((res) => {
          if (res.data.message == "发送成功") {
            this.emailcode_1 = res.data.code;
            this.$message.success("验证码已发送");
          }
        })
        .catch((err) => {
          window.console.log(err);
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submit();
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
    onSubmit() {
      if (this.code != this.identifyCode) {
        this.$message.warning("验证码不正确");
      } else {
        this.$message.success("注册成功");
      }
      /*       if (this.telcode != this.telcode_1) {
        this.$message.warning("短信验证码不正确");
      } else {
        this.$message.success("注册成功");
      } */
    },
  },
  data() {
    var chackTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入手机号"));
      }
      let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
      setTimeout(() => {
        if (!phoneCodeVerification.test(value)) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      }, 1000);
    };
    var chackEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入邮箱账号"));
      }
      let phoneCodeVerification = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      setTimeout(() => {
        if (!phoneCodeVerification.test(value)) {
          callback(new Error("请输入正确的邮箱账号"));
        } else {
          callback();
        }
      }, 1000);
    };
    var chackCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入验证码"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 1000);
    };
    var telform = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form1.tel_pad !== "") {
          this.$refs.form1.validateField("tel_apad");
        }
        callback();
      }
    };
    var telform2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form1.tel_pad) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var emailform = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form2.email_pad !== "") {
          this.$refs.form2.validateField("email_apad");
        }
        callback();
      }
    };
    var emailform2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form2.email_pad) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form1: {
        tel: "17685396347",
        telcode: "",
        tel_pad: "",
        tel_apad: "",
      },
      telcode_1: "",
      form2: {
        email: "1527393040@qq.com",
        emailcode: "",
        email_pad: "",
        email_apad: "",
      },

      backimage: backimage,
      identifyCode: "",
      logo: require("../../../assets/images/logo.png"),
      activeName: "first",
      rules1: {
        tel: [{ validator: chackTel, trigger: "blur" }],
        telcode: [{ validator: chackCode, trigger: "blur" }],
        tel_pad: [{ validator: telform, trigger: "blur" }],
        tel_apad: [{ validator: telform2, trigger: "blur" }],
      },
      rules2: {
        email: [{ validator: chackEmail, trigger: "blur" }],
        emailcode: [{ validator: chackCode, trigger: "blur" }],
        email_pad: [{ validator: emailform, trigger: "blur" }],
        email_apad: [{ validator: emailform2, trigger: "blur" }],
      },
    };
  },
};
</script>

<style scoped>
.el-footer div a {
  margin: 10px;
}
</style>