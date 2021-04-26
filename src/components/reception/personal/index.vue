<template>
  <div id="personal">
    <el-container>
      <el-header>
        <Personalhead />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-col :span="24">
            <el-menu
              default-active="/personalinfo"
              :unique-opened="true"
              :router="true"
              style="border: none"
            >
              <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="/personalinfo">
                <i class="el-icon-user"></i>
                <span slot="title">个人信息</span>
              </el-menu-item>
              <el-menu-item index="/myorder">
                <i class="el-icon-notebook-2"></i>
                <span slot="title">我的订单</span>
              </el-menu-item>
              <el-menu-item index="/refundsale">
                <i class="el-icon-shopping-cart-2"></i>
                <span slot="title">退款/退货</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main style="padding: 0px 20px">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <Chat />
  </div>
</template>

<script>
import Personalhead from "../index/header";
import Chat from "../chat/chat";
export default {
  components: {
    Personalhead,
    Chat,
  },
};
</script>

<style scoped>
</style>