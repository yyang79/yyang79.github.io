<template>
  <div id="main">
    <div class="nav">
      <el-col :span="24">
        <template>
          <h3 style="text-align: center; color: #eee">功能导航</h3>
        </template>
        <hr />
        <div class="nav-menu">
          <el-menu
            :unique-opened="true"
            :router="true"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            style="border: none"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-suitcase"></i>
                <span>资料管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/supplier">供应商资料</el-menu-item>
                <el-menu-item index="/customer">客户资料</el-menu-item>
                <el-menu-item index="/product">商品资料</el-menu-item>
                <el-menu-item index="/prosize">规格资料</el-menu-item>
                <el-menu-item index="/protype">类型资料</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-shopping-cart-2"></i>
                <span>采购管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/purchase">采购入库</el-menu-item>
                <el-menu-item index="/historypurchase"
                  >历史入库记录查询</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-sell"></i>
                <span>销售管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/sale">销售出库</el-menu-item>
                <el-menu-item index="/order">订单管理</el-menu-item>
                <el-menu-item index="/historysale">历史销售管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-coin"></i>
                <span>库存管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/stockcheck">库存盘点</el-menu-item>
                <el-menu-item index="/historystockcheck">盘点汇总</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-data-line"></i>
                <span>统计报表</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/purchasechart">采购报表</el-menu-item>
                <el-menu-item index="/salechart">销售报表</el-menu-item>
                <el-menu-item index="/stockchart">库存报表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/user">用户管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
    </div>
    <div class="quick_nav">
      <li><router-link to="/backstage">首页</router-link></li>
      <li><router-link to="/purchase">采购入库</router-link></li>
      <li><router-link to="/sale">销售出库</router-link></li>
      <li><router-link to="/order">订单管理</router-link></li>
      <li><router-link to="/stockcheck">库存盘点</router-link></li>
      <li><router-link to="/user">用户管理</router-link></li>
    </div>
    <div class="show">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
#main {
  width: 100%;
  height: 100%;
}
.nav {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 230px;
  bottom: 0px;
  background-color: #545c64;
}
.nav-menu {
  height: 460px;
  overflow-y: scroll;
  scrollbar-width: none;
}
.nav-menu::-webkit-scrollbar {
  display: none;
}

.nav a {
  text-decoration: none;
  color: black;
}
.quick_nav {
  position: absolute;
  top: 0px;
  height: 40px;
  left: 230px;
  right: 0px;
  background-color: gray;
}
.quick_nav li {
  text-align: center;
  float: left;
  width: 100px;
  height: 30px;
  list-style: none;
}

.quick_nav li a {
  position: absolute;
  top: 0px;
  text-decoration: none;
  color: white;
  padding: 10px 20px;
}

.quick_nav li :hover {
  background-color: red;
}

.show {
  position: absolute;
  top: 40px;
  bottom: 0px;
  left: 230px;
  right: 0px;
  border: 0.1px solid #e7e7e7;
  overflow-y: scroll;
}
</style>