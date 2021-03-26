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
          height: 100px;
          background-color: #f3f3f3;
        "
      >
        <el-cow>
          <el-col :span="4" :offset="2"
            ><el-image
              :src="backimage"
              style="width: 200px; height: 80px; margin-top: 10px"
            ></el-image
          ></el-col>
          <el-col :span="4" :offset="12"
            ><el-image
              :src="backimage"
              style="width: 200px; height: 80px; margin-top: 10px"
            ></el-image
          ></el-col>
        </el-cow>
      </el-header>
      <el-main
        style="width: 100%;min-width:1200px height: 460px"
        :style="{ background: 'url(' + backimage + ')' }"
      >
        <div
          style="
            position: absolute;
            top: 130px;
            left: 70%;
            width: 300px;
            height: 400px;
            background-color: #f3f3f3;
            border-radius: 10px;
          "
        >
          <el-form ref="form">
            <h3 style="text-align: center">账号注册</h3>
            <el-form-item style="margin: 10px 10px">
              <el-input
                prefix-icon="el-icon-user"
                v-model="name"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
            <el-form-item style="margin: 10px 10px">
              <el-input
                style="width: 150px"
                v-model="name"
                placeholder="请输入短信验证码"
              ></el-input>
              <el-button type="primary" style="width: 100px; margin-left: 10px"
                >发送短信</el-button
              >
            </el-form-item>
            <el-form-item style="margin: 10px 10px">
              <el-input
                prefix-icon="el-icon-lock"
                v-model="name"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item style="margin: 10px 10px">
              <el-input
                prefix-icon="el-icon-lock"
                v-model="name"
                placeholder="请再次输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item style="margin: 10px 10px">
              <el-input
                style="width: 150px"
                v-model="name"
                placeholder="请输入验证码"
              ></el-input>
              <div
                @click="coderefresh"
                style="float: right; width: 120px; height: 40px"
              >
                <VerificationCode ref="mychild" :identifyCode="identifyCode" />
              </div>
            </el-form-item>
            <el-form-item style="margin: 10px 10px">
              <el-button type="primary" style="width: 100%" @click="onSubmit"
                >立即注册</el-button
              >
            </el-form-item>
            <el-form-item style="margin-top: -10px; text-align: center">
              <router-link to="/login">已有账号，立即登录！！</router-link>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
      <el-footer style="width: 100%; height: 200px; background-color: #f3f3f3">
        <div>
          <router-link to="/">首页</router-link>
          <router-link to="/">关于我们</router-link>
          <router-link to="/">媒体报道</router-link>
          <router-link to="/">联系方式</router-link>
          <router-link to="/">花店入驻</router-link>
          <router-link to="/">友情链接</router-link>
          <router-link to="/"></router-link>
          <router-link to="/"></router-link>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Resigterhead from "./reception/index/header";
import backimage from "../assets/images/backimage.jpg";
import VerificationCode from "./reception/verificationcode/verificationcode";
export default {
  name: "resigter",
  components: {
    Resigterhead,
    VerificationCode,
  },
  mounted() {
    this.coderefresh();
  },
  methods: {
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
  },
  data() {
    return {
      name: "",
      backimage: backimage,
      identifyCode: "",
    };
  },
};
</script>

<style scoped></style>