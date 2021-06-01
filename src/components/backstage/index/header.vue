<template>
  <div id="header">
    <div class="logn">
      <span style="font-size: 30px; position: absolute; top: 20px; color: white"
        >花无缺后台管理系统</span
      >
    </div>
    <div class="menu">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        mode="horizontal"
      >
        <el-submenu>
          <template slot="title"
            >您好,{{ this.$store.state.login.backinfo.user }}</template
          >
          <el-menu-item index="1" v-show="admin">数据备份</el-menu-item>
          <el-menu-item index="2" v-show="admin">数据恢复</el-menu-item>
          <el-menu-item index="3" v-show="saler">个人中心</el-menu-item>
          <el-menu-item @click="signout">退出系统</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      admin: false,
      saler: false,
    };
  },
  mounted() {
    if (this.$store.state.login.backinfo.type == "saler") {
      this.saler = true;
    }else{
      this.admin = true
    }
  },
  methods: {
    signout() {
      this.$router.push("/back/login");
      this.$message.success("退出系统成功");
    },
  },
};
</script>
<style scoped>
#header {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  min-width: 1000px;
  height: 80px;
  background-color: #438eb9;
  border-bottom: 0.2px solid #e7e7e7;
}
.logn {
  position: absolute;
  top: 0px;
  left: 30px;
  width: 400px;
  height: 80px;
}
.menu {
  position: absolute;
  top: 10px;
  right: 150px;
  height: 60px;
}
</style>