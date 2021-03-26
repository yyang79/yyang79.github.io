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
      <router-link :to="{ path: '/detailpage', query: { search: 's' } }">
        <div
          v-for="flower in this.$store.state.shopcar.flowers"
          :key="flower.name"
        >
          <el-image :src="flower.src"></el-image>
          <br>
          <span>{{ flower.name }}</span
          ><br />
          <b>{{ flower.prince }}</b
          ><br />
          <small>已售{{ flower.sale }}件</small>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {};
  },
};
</script>

<style scoped>
.recommend-show {
  width: 100%;
}
.recommend-show a > div {
  width: 200px;
  height: 280px;
  float: left;
  margin: 10px 18px;
  border: 1px solid gray;
}
.recommend-show a > div:hover{
  box-shadow: 0 0 10px 5px gray;
}
.recommend-show a > div .el-image {
  height: 200px;
  width: 200px;
}
</style>