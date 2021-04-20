<template>
  <div
    style="
      width: 98%;
      height: 98%;
      padding: 0px 10px;
      border-left: 1px solid #eee;
      border-top: 1px solid #eee;
    "
  >
    <el-tabs v-model="activeName">
      <el-tab-pane label="个人信息" name="first">
        <el-form :data="userinfo" label-position="right" label-width="80px">
          <el-form-item label="用户名:">
            <el-input
              v-model="userinfo.custrueName"
              :disabled="status"
            ></el-input>
          </el-form-item>
          <el-form-item label="性别:">
            <el-input
              ref="sex"
              v-model="userinfo.cusSex"
              :disabled="status"
            ></el-input>
          </el-form-item>
          <el-form-item label="年龄:">
            <el-input
              ref="age"
              v-model="userinfo.cusAge"
              :disabled="status"
            ></el-input>
          </el-form-item>
          <el-form-item label="电话:">
            <el-input
              ref="tel"
              v-model="userinfo.cusTel"
              :disabled="status"
            ></el-input>
          </el-form-item>
          <el-form-item label="QQ:">
            <el-input
              ref="qq"
              v-model="userinfo.cusQQ"
              :disabled="status"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱:">
            <el-input
              ref="email"
              v-model="userinfo.cusEmail"
              :disabled="status"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button v-show="button1" @click="modifyinfo">修改信息</el-button>
        <el-button v-show="button2" @click="modify">确定修改</el-button>
      </el-tab-pane>
      <el-tab-pane label="修改密码" name="second">
        <el-form
          :model="pad"
          status-icon
          :rules="rules"
          ref="form"
          :label-position="right"
          label-width="80px"
        >
          <el-form-item label="原密码:" prop="oldpad">
            <el-input v-model="pad.oldpad" show-password></el-input>
          </el-form-item>
          <el-form-item label="新密码:" prop="newpad">
            <el-input v-model="pad.newpad" show-password></el-input>
          </el-form-item>
          <el-form-item label="确定密码:" prop="truepad">
            <el-input v-model="pad.truepad" show-password></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="submitForm('form')">修改密码</el-button>
      </el-tab-pane>
      <el-tab-pane label="收货地址" name="third">
        <el-form :data="address" :label-position="right" label-width="80px">
          <el-form-item label="收货人:">
            <el-input v-model="address.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号码:">
            <el-input v-model="address.tel"></el-input>
          </el-form-item>
          <el-form-item label="选择地区:">
            <v-region
              v-model="address.address"
              v-show="region1"
              type="column"
              :town="true"
              @values="selectLogs"
            ></v-region>
            <el-input v-show="region2" v-model="address.address"></el-input>
          </el-form-item>
          <el-form-item label="详细地址:">
            <el-input v-model="address.detailaddress"></el-input>
          </el-form-item>
        </el-form>
        <el-button>保存</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    var chackCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入原密码"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.pad.pad !== "") {
          this.$refs.form.validateField("truepad");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.pad.newpad) {
        callback(new Error("两次输入新密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      userinfo: [],
      pad: {
        oldpad: "",
        newpad: "",
        truepad: "",
      },
      activeName: "first",
      button1: true,
      button2: false,
      status: true,
      region1: false,
      region2: true,
      address: {
        name: "",
        tel: "",
        address: "",
        detailaddress: "",
      },
      rules: {
        oldpad: [{ validator: chackCode, trigger: "blur" }],
        newpad: [{ validator: validatePass, trigger: "blur" }],
        truepad: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.userinfo = this.$store.state.login.userform;
    this.address.name = this.$store.state.login.userform.custrueName;
    this.address.tel = this.$store.state.login.userform.cusTel;
    this.address.address = this.$store.state.login.userform.cusAddress;
    this.address.detailaddress = this.$store.state.login.userform.cusdetAddress;
  },
  methods: {
    modifyinfo() {
      this.button1 = !this.button1;
      this.button2 = !this.button2;
      this.status = false;
    },
    modify() {
      this.button1 = !this.button1;
      this.button2 = !this.button2;
      this.status = true;
      this.$message({ message: "修改成功！！！", type: "success" });
    },
    selectLogs(e) {
      alert(JSON.stringify(e));
      this.address.address =
        e.province.value + e.city.value + e.area.value + e.town.value;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.modifypad();
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
    modifypad() {
      if (this.pad.oldpad == this.userinfo.userPad) {
        alert("修改成功");
      } else {
        alert("原密码输入错误");
      }

      /*     if (this.pad.oldpad == this.userinfo.userPad) {
        this.$axios
          .post("/modifypad")
          .then((res) => {
            if (res.data == "更新成功") {
              this.$message.sucess("密码修改成功");
            }else{
        this.$message.warning("原密码输入错误");
      }
          })
          .catch((err) => {
            window.console.log(err);
          });
      } */
    },
  },
};
</script>

<style scoped>
.el-form-item .el-input {
  width: 300px;
}
</style>