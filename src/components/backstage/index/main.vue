<template>
  <div id="main">
    <div class="nav">
      <div style="height: 40px; left: 200px; border-bottom: 1px solid #ccc">
        <p style="text-align: center; margin: 0px; padding: 10px 0px">
          功能导航
        </p>
      </div>
      <el-col :span="24">
        <div class="nav-menu">
          <el-menu :unique-opened="true" :router="true" style="border: none">
            <el-submenu index="1" v-show="sale">
              <template slot="title">
                <i class="el-icon-suitcase"></i>
                <span>资料管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/supplier">供应商资料</el-menu-item>
                <el-menu-item index="/customer">客户资料</el-menu-item>
                <el-menu-item index="/saler">员工资料</el-menu-item>
                <el-menu-item index="/product">商品资料</el-menu-item>
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
                <el-menu-item index="/purchase/history"
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
                <el-menu-item index="/sale/history">历史销售管理</el-menu-item>
                <el-menu-item index="/order/history">历史订单管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-coin"></i>
                <span>库存管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/stockcheck">库存盘点</el-menu-item>
                <el-menu-item index="/stockcheck/history"
                  >盘点汇总</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5" v-show="sale">
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
            <el-submenu index="6" v-show="sale">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/user">用户登陆管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
    </div>
    <div class="quick_nav">
      <li>
        <router-link to="/backstage"
          ><i class="el-icon-s-home"></i> 首页</router-link
        >
      </li>
      <li>
        <router-link to="/purchase">采购入库</router-link>
      </li>
      <li>
        <router-link to="/sale">销售出库</router-link>
      </li>
      <li>
        <router-link to="/order">订单管理</router-link>
      </li>
      <li>
        <router-link to="/stockcheck">库存盘点</router-link>
      </li>
      <li>
        <router-link to="/salechart">销售图表</router-link>
      </li>
      <li>
        <a href="javascript:void(0)" @click="chat()">消息管理</a>
      </li>
      <li>
        <router-link to="/liuyan">留言管理</router-link>
      </li>
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
    return {
      sale: true,
    };
  },
  mounted() {
    if (this.$store.state.login.backinfo.type == "saler") {
      this.sale = false;
    }
  },
  methods: {
    chat() {
      this.$store.dispatch("backstage_index/showchat");
    },
  },
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
  width: 200px;
  bottom: 0px;
  background-color: white;
}
.nav-menu {
  height: 500px;
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
  left: 200px;
  right: 0px;
  background-color: white;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.quick_nav li {
  float: left;
  width: 100px;
  height: 30px;
  list-style: none;
}

.quick_nav li a {
  position: absolute;
  top: 0px;
  text-decoration: none;
  color: black;
  padding: 10px 10px;
}

.quick_nav li :hover {
  background-color: #e3e3e3;
}

.show {
  position: absolute;
  top: 40px;
  bottom: 0px;
  left: 200px;
  right: 0px;
  border-left: 1px solid #ccc;
  overflow-y: scroll;
}
</style>