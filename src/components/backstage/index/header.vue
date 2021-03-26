<template>
  <div id="header">
    <div class="logn">
      <span style="font-size: 30px; position: absolute; top: 20px"
        >xxx鲜花后台管理系统</span
      >
    </div>
    <div class="menu">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-submenu index="2">
          <template slot="title">administrators</template>
          <el-menu-item index="2-1" @click="databackup()"
            >数据备份</el-menu-item
          >
          <el-menu-item index="2-2" @click="datarecovery()"
            >数据恢复</el-menu-item
          >
          <el-menu-item index="2-3" @click="personal()">个人中心</el-menu-item>
          <el-menu-item index="2-4" @click="logout()">注销登录</el-menu-item>
          <el-menu-item index="2-5" @click="quit()">退出系统</el-menu-item>
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
    databackup: function () {},
    datarecovery: function () {},
    personal: function () {},
    logout: function () {
      this.$router.replace("/login");
    },
    quit: function () {
      window.close();
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
  background-image: linear-gradient(#545c64, #9198e5);
  border-bottom: 0.2px solid #e7e7e7;
}
.logn {
  position: absolute;
  top: 0px;
  left: 30px;
  width: 300px;
  height: 80px;
}
.menu {
  position: absolute;
  top: 10px;
  right: 50px;
  width: 200px;
  height: 60px;
}
</style>