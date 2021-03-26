<template>
  <div id="detailpage">
    <Detailheader />
    <div class="Head">
      <Search />
    </div>
    <div class="detailbreadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/move/Love' }"
          >鲜花</el-breadcrumb-item
        >
        <el-breadcrumb-item>商品名称</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="flowerdetail">
        <div class="detailimg">
          <el-image
            :src="this.$store.state.index.newlist[0].src"
            style="width: 360px; height: 360px; margin: 20px"
          ></el-image>
        </div>
        <div class="detaildescribe">
          <h2 style="margin-left: 20px">产品名称</h2>
          <el-divider></el-divider>
          <el-col><span>材料：</span><span>xxxxxxxx</span></el-col>
          <el-col><span>包装：</span><span>xxxxxxxx</span></el-col>
          <el-col><span>附送：</span><span>xxxxxxxx</span></el-col>
          <el-col><span>配送：</span><span>xxxxxxxx</span></el-col>
          <el-col><span>优惠券：</span><span>暂无优惠券</span></el-col>
          <el-col
            ><div
              style="width: 760px; height: 100px; background-color: #f3f3f3"
            >
              <el-row :gutter="20">
                <el-col :span="8" style="margin-top: 15px"
                  ><span>市场价：</span
                  ><big style="text-decoration: line-through"
                    >￥9999.99</big
                  ></el-col
                ></el-row
              >
              <el-row :gutter="20">
                <el-col :span="15"
                  ><span>店铺价：</span
                  ><big style="color: red">￥9999.99</big></el-col
                >
                <el-col :span="7"
                  ><small>销量XXX笔 </small>&nbsp;&nbsp;&nbsp;<small>
                    库存剩余XXX件</small
                  ></el-col
                >
              </el-row>
            </div></el-col
          >
          <div style="position: absolute; top: 430px; left: 20px">
            <span>数量：</span>
            <el-input-number
              v-model="num"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
            <el-button style="position: absolute; top: 0px; left: 450px"
              >加入购物车</el-button
            >
            <el-button
              type="primary"
              style="position: absolute; top: 0px; left: 600px"
              >立即购买</el-button
            >
          </div>
        </div>
        <div class="info-container">
          <div class="info-container-left">
            <h2 style="text-align: center; color: red">热卖推荐</h2>
            <el-divider></el-divider>
            <div
              v-for="flower in this.$store.state.index.newlist"
              :key="flower.src"
            >
              <router-link
                :to="{ path: '/detailpage', query: { search: 's' } }"
              >
                <el-image style="margin: 10px" :src="flower.src"></el-image>
              </router-link>
            </div>
          </div>
          <div class="info-container-right">
            <el-tabs v-model="activeName">
              <el-tab-pane label="产品详情" name="first">用户管理</el-tab-pane>
              <el-tab-pane label="用户评论（xxx）" name="second"
                >配置管理</el-tab-pane
              >
              <el-tab-pane label="常见问题" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="购物保障" name="fourth">角色管理</el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 1900px;
            width: 100%;
            height: 600px;
            background-color: #f3f3f3;
          "
        >
          <h2 style="text-align: center">猜你喜欢</h2>
          <router-link :to="{ path: '/detailpage', query: { search: 's' } }">
            <div
              style="float: left"
              v-for="flower in this.$store.state.index.friendlist"
              :key="flower.src"
            >
              <el-image
                style="margin: 10px; width: 220px; height: 220px"
                :src="flower.src"
              ></el-image>
            </div>
          </router-link>
        </div>
        <div
          style="
            position: absolute;
            top: 2520px;
            width: 100%;
            height: 300px;
            background-color: #f3f3f3;
          "
        >
          <Detailfooter />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Detailheader from "../index/header";
import Search from "../index/main/head";
import Detailfooter from "../index/footer";

export default {
  name: "detailpage",
  components: {
    Detailheader,
    Search,
    Detailfooter,
  },
  created() {
    this.$store.dispatch("index/allnavfalse");
  },
  data() {
    return {
      activeName: "first",
      num: 1,
    };
  },
};
</script>

<style>
.detailbreadcrumb {
  position: absolute;
  top: 270px;
  left: 50%;
  width: 1200px;
  margin-left: -600px;
}
.flowerdetail {
  position: absolute;
  top: 30px;
  width: 100%;
  height: 500px;
}
.detailimg {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 400px;
  height: 500px;
  background-color: #f3f3f3;
}
.detaildescribe {
  position: absolute;
  top: 0px;
  left: 400px;
  width: 800px;
  height: 500px;
}
.detaildescribe .el-col {
  margin: 0px 0px 20px 20px;
}
.info-container {
  position: absolute;
  top: 520px;
  width: 1200px;
  height: 1320px;
}
.info-container .el-tabs {
  margin-left: 10px;
}
.info-container-left {
  position: absolute;
  top: 0px;
  width: 240px;
  height: 100%;
  background-color: #f3f3f3;
}
.info-container-right {
  position: absolute;
  top: 0px;
  left: 260px;
  width: 940px;
  height: 100%;
  background-color: #f3f3f3;
}
</style>