<template>
  <div id="header">
    <div class="logn">
      <span style="font-size: 30px; position: absolute; top: 20px; color: white"
        >花无缺后台管理系统</span
      >
    </div>
    <div class="menu">
      <!--       <div style="width:250px;height:40px;background-color:red"><span>2017年12月13日03时16分45秒</span></div> -->
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        mode="horizontal"
      >
        <el-submenu>
          <template slot="title">您好,admin</template>
          <el-menu-item index="1">数据备份</el-menu-item>
          <el-menu-item index="2">数据恢复</el-menu-item>
          <el-menu-item index="3">个人中心</el-menu-item>
          <el-menu-item @click="quitlogin">注销登录</el-menu-item>
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
    return {};
  },
  methods: {
    quitlogin() {
      this.$router.push("/login");
      this.$message.success("注销登录成功")
    },
    signout() {
      this.$router.push("/index");
       this.$message.success("退出系统成功")
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