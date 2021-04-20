<template>
  <div id="forget">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="80px"
      style="
        width: 400px;
        height: 400px;
        margin: 100px auto;
        border: 1px solid gray;
        border-radius: 20px;
        box-shadow: 0 0 5px 3px gray;
        padding: 10px;
      "
    >
      <el-form-item>
        <h3 style="padding: 0px; margin: 0px 100px">密码重置</h3>
      </el-form-item>
      <el-form-item label="手机号:" prop="tel">
        <el-input
          v-model="ruleForm.tel"
          maxlength="11"
          placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码:" prop="code">
        <el-input
          v-model="ruleForm.code"
          maxlength="6"
          placeholder="请输入验证码"
          style="width: 210px; margin-right: 10px"
        ></el-input
        ><el-button type="primary" @click="sendnote">发送短信</el-button>
      </el-form-item>
      <el-form-item label="新密码:" prop="pad">
        <el-input
          v-model="ruleForm.pad"
          show-password
          placeholder="请输入新密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确定密码:" prop="truepad">
        <el-input
          v-model="ruleForm.truepad"
          show-password
          placeholder="请再次输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
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
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.pad !== "") {
          this.$refs.ruleForm.validateField("truepad");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pad) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        tel: "",
        code: "",
        pad: "",
        truepad: "",
      },
      code_1: "123",
      rules: {
        tel: [{ validator: chackTel, trigger: "blur" }],
        code: [{ validator: chackCode, trigger: "blur" }],
        pad: [{ validator: validatePass, trigger: "blur" }],
        truepad: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!!");
          this.submit();
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    sendnote() {
      this.$axios.post("/send/tel", { tel: this.ruleForm.tel }).then((res) => {
        if (res.data.message == "手机验证码发送成功") {
          this.code_1 = res.data.telcode;
          this.$message.success("验证码发送成功");
        }
      });
    },
    submit() {
      if (this.ruleForm.code == this.code_1) {
        this.tel = "";
        this.code = "";
        this.pad = "";
        this.truepad = "";
        this.$message.success("密码重置成功");
        this.$router.push("/login");
      } else {
        this.$message.warning("验证码不正确");
      }
    },
  },
};
</script>

<style scoped>
#forget {
  width: 100%;
  height: 100%;
  background: #f9f9f9;
}
</style>