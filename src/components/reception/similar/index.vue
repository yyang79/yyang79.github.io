<template>
  <div>
    <Simliarheader />
    <Simliarsearch />
    <el-container>
      <el-header height="120px" style="padding:20px">
        <span>搜索图片：</span><br />
        <el-image
          style="width: 100px; height: 100px"
          :src="searchimg"
        ></el-image>
      </el-header>
      <el-main>
        <h3 style="text-align: center">相似商品</h3>
        <div class="flowerlist">
          <div
            v-for="list in this.$store.state.index.searchimglist"
            :key="list"
          >
            <router-link
              :to="{
                path: '/detailpage',
                query: { goodsName: list[0].goodsName },
              }"
            >
              <el-image
                style="width: 200px; height: 200px"
                :src="list[0].goodsUrl"
              ></el-image>
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
                >{{ list[0].goodsName }}</span
              ><br />
              <span
                style="
                  color: red;
                  font-size: 20px;
                  position: relative;
                  top: 0px;
                  left: 10px;
                "
                >￥{{ list[0].goodsPrice }}.00</span
              >
              <small style="position: relative; top: 10px; left: 30px"
                >已售{{ list[0].sallnum }}</small
              ></router-link
            >
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Simliarheader from "../index/header";
import Simliarsearch from "../index/main/head";
export default {
  components: {
    Simliarheader,
    Simliarsearch,
  },
  data() {
    return {
      searchimg:require("../../../../../stytemdata/assets/images/"+this.$store.state.index.yuantu+"")
    };
  },
  created() {
    this.$store.dispatch("index/allnavfalse");
  },
  methods: {},
};
</script>

<style scoped>
.flowerlist > div {
  float: left;
  width: 210px;
  height: 300px;
  margin: 15px;
  border: 1px solid gray;
  background-color: white;
}

.flowerlist > div:hover {
  box-shadow: 0 0 10px 5px gray;
}

.flowerlist div a .el-image {
  padding: 0px;
  margin: 5px;
  width: 200px;
  height: 200px;
}
.flowerlist a div small {
  position: relative;
  bottom: 0px;
  left: 100px;
}
.flowerlist a div b {
  position: relative;
  bottom: -10px;
  left: 25px;
  color: red;
  font-size: 20px;
}
.flowerlist a div span {
  position: relative;
  bottom: 0px;
  left: 10px;
}
</style>