<template>
  <div
    id="recommend"
    style="
      position: relative;
      top: 0px;
      left: 50%;
      width: 1200px;
      margin-left: -600px;
      background-color: #f3f3f3;
    "
  >
    <div class="recommend-header">
      <h2 style="text-align: center; color: red">热门推荐</h2>
    </div>
    <el-divider></el-divider>
    <div class="recommend-show">
      <div
        v-for="flower in this.$store.state.shopcar.flowers"
        :key="flower.goodsName"
      >
        <router-link
          :to="{
            path: '/detailpage',
            query: { goodsName: flower[0].goodsName },
          }"
        >
          <el-image :src="flower[0].goodsUrl"></el-image>
          <br />
          <span>{{ flower[0].goodsName }}</span
          ><br />
          <b>￥{{ flower[0].goodsPrice }}.00</b><br />
          <small>已售{{ flower[0].sale }}件</small>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {};
  },
  created() {
    this.$axios
      .get("/recommend/test")
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          res.data[
            i
          ][0].goodsUrl = require("../../../../../stytemdata/assets/images/" +
            res.data[i][0].goodsUrl +
            "");
        }
        this.$store.dispatch("shopcar/getflower", res.data);
      })
      .catch((err) => {
        window.console.log(err);
      });
  },
};
</script>

<style scoped>
.recommend-show {
  width: 100%;
}
.recommend-show > div {
  width: 200px;
  height: 280px;
  float: left;
  margin: 10px 18px;
  border: 1px solid gray;
}
.recommend-show > div:hover {
  box-shadow: 0 0 10px 5px gray;
}
.recommend-show > div .el-image {
  height: 200px;
  width: 200px;
}
</style>