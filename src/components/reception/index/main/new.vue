<template>
  <div class="new">
    <div class="new-top">
      <h4 style="margin-top: 10px">
        ----------------&nbsp;&nbsp;&nbsp;新品上架&nbsp;&nbsp;&nbsp;----------------
      </h4>
    </div>
    <div class="show-main" style="overflow: hidden">
      <div
        style="padding: 0px"
        v-for="flower in this.$store.state.index.plantlist"
        :key="flower.goodsUrl"
      >
        <router-link
          style="width: 200px; height: 290px"
          :to="{
            path: '/detailpage',
            query: { goodsName: flower.goodsName },
          }"
        >
          <el-image :src="flower.goodsUrl"></el-image>
          <span
            style="
              overflow: hidden;
              text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
              white-space: nowrap;
              width: 150px;
              height: 24px;
              display: block;
              position: relative;
              top: 10px;
              left: 10px;
            "
            >{{ flower.goodsName }}</span
          ><br />
          <span
            style="
              color: red;
              font-size: 20px;
              position: relative;
              top: 0px;
              left: 10px;
            "
            >￥{{ flower.goodsPrice }}.00</span
          >
          <small style="position: relative; top: 10px; left: 30px"
            >已售{{ flower.sallnum }}</small
          >
        </router-link>
      </div>
    </div>
    <div class="seemove">
      <router-link :to="{ path: '/move/', query: { keyword: 'New' } }"
        >查看更多</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
};
</script>

<style scoped>
.new {
  position: relative;
  top: 0px;
  left: 50%;
  width: 1200px;
  margin-left: -600px;
  height: 400px;
  background-color: #f3f3f3;
}

.new-top {
  width: 100%;
  height: 40px;
  text-align: center;
}

.seemove {
  position: absolute;
  top: 350px;
  margin-top: 10px;
  width: 100%;
  height: 40px;
}

.seemove a {
  position: absolute;
  top: 10px;
  left: 47%;
  color: black;
}

.new .show-main {
  width: 100%;
  height: 300px;
}

.new .show-main div a .el-image {
  margin: 0px 10px;
  width: 200px;
  height: 200px;
}
a {
  text-decoration: none;
}
.new .show-main > div {
  width: 220px;
  height: 300px;
  margin: 0px 10px;
  background-color: white;
  float: left;
}
.new .show-main > div:hover {
  box-shadow: 0 0 10px 2px gray;
}
</style>