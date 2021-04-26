<template>
  <div id="resigter">
    <el-container
      v-show="resigter"
      style="
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 800px;
      "
    >
      <el-header
        style="
          width: 100%;
          min-width: 1200px;
          height: 160px;
          background-color: #f3f3f3;
        "
      >
        <Resigterhead />
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
        style="width: 100%; min-width: 1200px"
        :style="{ background: 'url(' + backimage + ')' }"
      >
        <div
          style="
            position: absolute;
            top: 170px;
            left: 70%;
            width: 300px;
            height: 420px;
            background-color: #f3f3f3;
            border-radius: 10px;
          "
        >
          <el-tabs v-model="activeName" stretch="fasle" style="padding: 10px">
            <el-tab-pane label="手机号注册" name="first">
              <el-form :model="form1" status-icon :rules="rules1" ref="form1">
                <el-form-item prop="username">
                  <el-input
                    style="width: 260px"
                    prefix-icon="el-icon-user"
                    v-model="form1.username"
                    placeholder="请输入用户名"
                  ></el-input>
                </el-form-item>
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
              </el-form></el-tab-pane
            >
            <el-tab-pane label="邮箱注册" name="second">
              <el-form :model="form2" status-icon :rules="rules2" ref="form2">
                <el-form-item prop="username">
                  <el-input
                    style="width: 260px"
                    prefix-icon="el-icon-user"
                    v-model="form2.username"
                    placeholder="请输入用户名"
                  ></el-input>
                </el-form-item>
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
              </el-form></el-tab-pane
            >
          </el-tabs>
        </div>
      </el-main>
      <el-footer
        style="
          width: 100%;
          height: 200px;
          padding: 0px;
          background-color: #f3f3f3;
        "
      >
        <Resigterfoot />
      </el-footer>
    </el-container>
    <div v-show="info">
      <h3 style="text-align: center">请填写您的个人信息</h3>
      <el-form
        :model="infoform"
        style="width: 400px; padding: 10px; margin: 0px auto"
        label-width="80px"
      >
        <el-form-item label="真实姓名">
          <el-input v-model="infoform.truename" style="width: 300px"></el-input
          ><span style="color: red">*</span>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="infoform.sex" style="width: 300px"></el-input
          ><span style="color: red">*</span>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="infoform.age" style="width: 300px"></el-input
          ><span style="color: red">*</span>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="infoform.tel" style="width: 300px"></el-input
          ><span style="color: red">*</span>
        </el-form-item>
        <el-form-item label="QQ">
          <el-input v-model="infoform.qq" style="width: 300px"></el-input
          ><span style="color: red">*</span>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="infoform.email" style="width: 300px"></el-input
          ><span style="color: red">*</span>
        </el-form-item>
        <el-form-item label="选择地区">
          <v-region
            v-model="infoform.address"
            @value="region"
            type="column"
            :town="true"
          ></v-region
          ><span style="color: red">*</span>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input
            v-model="infoform.detaddress"
            style="width: 300px"
          ></el-input
          ><span style="color: red">*</span>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitinfo">提交信息</el-button
          ><span>带*为必填项</span>
        </el-form-item>
      </el-form>
    </div>
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
  created() {
    this.$axios
      .get("/user")
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.userlist.push({ user: res.data[i].userName });
        }
      })
      .catch((err) => {
        window.console.log(err);
      });
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
          if (formName == "form1") {
            this.infoform.tel = this.form1.tel;
            this.onSubmit(this.form1.telcode, this.telcode_1);
          } else {
            this.infoform.email = this.form1.email;
            this.onSubmit(this.form2.emailcode, this.emailcode_1);
          }
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
    onSubmit(code1, code2) {
      if (code1 != code2) {
        this.$message.warning("验证码不正确");
      } else {
        this.resigter = false;
        this.info = true;
      }
    },
    submitinfo() {
      var form = [];
      if (this.form1.username != "") {
        form = this.form1;
      } else {
        form = this.form2;
      }
      this.$axios
        .post("/resigter", { user: form, info: this.infoform })
        .then((res) => {
          if (res.data == "添加成功") {
            this.$message.success("注册成功");
          }
        })
        .catch((err) => {
          window.console.log(err);
        });
      this.$message.success("注册成功");
    },
    region(e) {
      this.infoform.address =
        e.province.value + e.city.value + e.area.value + e.town.value;
    },
  },
  data() {
    var userName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入用户名"));
      }
      setTimeout(() => {
        for (let i = 0; i < this.userlist.length; i++) {
          if (value == this.userlist[i].user) {
            callback(new Error("用户名已存在"));
          }
        }
        callback();
      }, 1000);
    };
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
      callback()
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
        username: "",
        tel: "",
        telcode: "",
        tel_pad: "",
        tel_apad: "",
      },
      telcode_1: "",
      form2: {
        username: "",
        email: "",
        emailcode: "",
        email_pad: "",
        email_apad: "",
      },
      emailcode_1: "",
      infoform: {
        truename: "",
        sex: "",
        age: "",
        tel: "",
        qq: "",
        email: "",
        address:"",
        detaddress: "",
      },
      userlist: [],
      resigter: true,
      info: false,
      backimage: backimage,
      logo: require("../../../assets/images/logo.png"),
      activeName: "first",
      rules1: {
        username: [{ validator: userName, trigger: "blur" }],
        tel: [{ validator: chackTel, trigger: "blur" }],
        telcode: [{ validator: chackCode, trigger: "blur" }],
        tel_pad: [{ validator: telform, trigger: "blur" }],
        tel_apad: [{ validator: telform2, trigger: "blur" }],
      },
      rules2: {
        username: [{ validator: userName, trigger: "blur" }],
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