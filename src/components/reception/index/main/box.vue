<template>
  <div class="box">
    <div class="box-top">
      <span>&nbsp;&nbsp;&nbsp;精品礼盒&nbsp;|</span>
      <router-link :to="{ path: '/move/', query: { keyword: 'Box}' } }"
        >查看更多 >></router-link
      >
    </div>
    <div class="show-main">
      <div class="show-image">
        <router-link :to="{ path: '/move/', query: { keyword: 'Box}' } }">
          <el-image style="width: 232px; height: 650px" :src="src"></el-image>
        </router-link>
      </div>
      <div class="show-flower">
        <div
          v-for="flower in this.$store.state.index.boxlist"
          :key="flower.goodsUrl"
        >
          <router-link :to="{ path: '/detailpage', query: { goodsName: flower.goodsName } }">
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
            ></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lf1 from "../../../../assets/images/box.jpg";
export default {
  data() {
    return {
      src: lf1,
    };
  },
  created() {
    this.$axios
      .get("http://127.0.0.1:3000/box")
      .then((res) => {
        var list = [];
        for (let i = 0; i < 8; i++) {
          res.data[i].goodsUrl = require("../../../../../../stytemdata/assets/images/"+res.data[i].goodsUrl+"");
          list.push(res.data[i]);
        }
        this.$store.dispatch("index/boxlist", list);
      })
      .catch((err) => {
        window.console.log(err);
      });
  },
};
</script>

<style scoped>
.box {
  position: relative;
  top: 0px;
  left: 50%;
  width: 1200px;
  margin-left: -600px;
  height: 690px;
  background-color: #e9ecf0;
}
.box-top a {
  float: right;
}
a {
  text-decoration: none;
}
.show-image {
  position: absolute;
  top: 40px;
  left: 0px;
  width: 232px;
  height: 650px;
}

.show-flower {
  position: absolute;
  top: 40px;
  left: 232px;
  width: 968px;
  height: 650px;
}

.show-flower div {
  width: 200px;
  margin: 10px;
  height: 290px;
  margin: 15px 11px 20px 20px;
  background-color: white;
  float: left;
}

.show-flower div a .el-image {
  margin: 0px;
  padding: 0px;
  width: 200px;
  height: 200px;
  border: none;
}
.show-flower > div:hover {
  box-shadow: 0 0 10px 2px gray;
}
</style>