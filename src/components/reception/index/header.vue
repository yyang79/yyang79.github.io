<template>
  <div id="header">
    <div class="header">
      <div class="head-left">
        <span>嗨，欢迎来到渣渣辉花店！</span>
      </div>
      <div class="head-right">
        <div
          v-show="this.$store.state.login.loginback"
          style="position: relative; top: 0px; left: 0px; width: 110px"
        >
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <el-dropdown style="position: absolute; top: 10px; left: 45px">
            <span style="color: white">
              <span>Admin</span
              ><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><span @click="personal">个人中心</span></el-dropdown-item
              >
              <el-dropdown-item
                ><span @click="myorder">我的订单</span></el-dropdown-item
              >
              <el-dropdown-item
                ><span @click="quitlogin">注销登陆</span></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div
          v-show="this.$store.state.login.loginbefore"
          style="position: absolute; top: 10px; left: 0px"
        >
          <router-link to="/login">你好，请登录</router-link>
        </div>
        <div style="position: absolute; top: 10px; left: 140px">
          <router-link to="/resigter">免费注册</router-link>
        </div>
        <div style="position: absolute; top: 10px; left: 240px">
          <a
            href="#"
            @click="goshopcar()"
            style="background-color: red; padding: 10px"
            >购物车(0)</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  methods: {
    goshopcar() {
      if (this.$store.state.login.loginback) {
        this.$router.replace("/hopcar");
      } else {
        alert("当前未登录，请先登录后查看！！");
      }
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
      this.$router.push("/myorder");
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
  position: relative;
  top: 0px;
  left: 50%;
  width: 1200px;
  height: 41.11px;
  margin-left: -600px;
}

.head-left {
  position: absolute;
  top: 10px;
  left: 0px;
  height: 41.11px;
}

.head-right {
  position: absolute;
  top: 0px;
  left: 850px;
  width: 350px;
  height: 41.11px;
}
</style>