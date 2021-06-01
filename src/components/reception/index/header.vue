<template>
  <div id="header">
    <div class="header">
      <div class="head-left">
        <span style="color: white; margin-right: 30px"
          >嗨，欢迎来到花无缺花店！</span
        >
        <el-button
          @click="toindex"
          style="border: none; background: gray; color: white"
          ><i class="el-icon-s-home"></i>首页</el-button
        >
        <el-popover trigger="hover">
          <div>
            <el-image
              style="width: 150px; height: 150px"
              :src="weixin"
            ></el-image>
          </div>

          <el-button
            slot="reference"
            style="border: none; background: gray; color: white"
            ><i class=""></i>官方微信</el-button
          >
        </el-popover>
        <el-button
          @click="liuyanban"
          style="border: none; background: gray; color: white"
          ><i class=""></i>留言板</el-button
        >
      </div>
      <div class="head-right">
        <div
          v-show="this.$store.state.login.loginback"
          style="position: relative; top: 0px; left: 80px"
        >
          <el-avatar :src="handimage"></el-avatar>
          <el-dropdown style="position: absolute; top: 10px; left: 45px">
            <span style="color: white">
              <span>你好，{{ this.$store.state.login.userform.userName }}</span
              ><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><span @click="personal">个人中心</span></el-dropdown-item
              >
              <el-dropdown-item
                ><span @click="myorder">注销登陆</span></el-dropdown-item
              >
              <el-dropdown-item
                ><span @click="quitlogin">退出登陆</span></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div
          v-show="this.$store.state.login.loginbefore"
          style="position: absolute; top: 10px; left: 0px"
        >
          <router-link to="/login">你好，请登录</router-link>
          <router-link style="margin-left: 30px" to="/resigter"
            >免费注册</router-link
          >
        </div>
        <div style="position: absolute; top: 10px; left: 240px">
          <a
            href="#"
            @click="goshopcar()"
            style="background-color: red; padding: 10px"
            >购物车({{ this.$store.state.shopcar.tableData.length }})</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      weixin: require("../../../assets/images/weixin.jpg"),
      handimg: "",
    };
  },
  created() {
    this.handimage = require("../../../../../stytemdata/assets/images/" +
      this.$store.state.login.userform.userUrl +
      "");
  },
  methods: {
    goshopcar() {
        this.$router.replace("/shopcar");
    },
    quitlogin() {
      this.$store.commit("login/loginbeforestatus");
      this.reload();
      this.$message({ message: "注销登陆成功", type: "success" });
      this.$router.replace("/index");
    },
    personal() {
      this.$router.push("/personal");
    },
    myorder() {
      this.$store.commit("login/loginbeforestatus");
      this.$router.push("/login");
    },
    liuyanban() {
      if (this.$store.state.login.loginback) {
        this.$router.replace("/commend");
      } else {
        alert("当前未登录，请先登录后查看！！");
      }
    },
    toindex() {
      this.$router.replace("/index");
    },
  },
};
</script>

<style scoped>
a {
  color: white;
}
#header {
  width: 100%;
  min-width: 1249px;
  height: 41.11px;
  background-color: gray;
}
.header {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  min-width: 1200px;
  height: 41.11px;
  margin: 0px auto;
  background-color: gray;
}

.head-left {
  position: absolute;
  top: 0px;
  left: 50px;
  width: 600px;
  height: 41.11px;
}

.head-right {
  position: absolute;
  top: 0px;
  right: 30px;
  width: 350px;
  height: 41.11px;
}
</style>