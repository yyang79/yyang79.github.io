<template>
  <div class="friend">
    <div class="friend-top">
      <span> &nbsp;&nbsp;&nbsp;友情鲜花&nbsp;| </span>
      <router-link :to="{ path: '/move/', query: { keyword: 'Friend' } }"
        >查看更多 >></router-link
      >
    </div>
    <div class="show-main">
      <div class="show-image">
        <router-link :to="{ path: '/move/', query: { keyword: 'Friend' } }">
          <el-image style="width: 232px; height: 650px" :src="src"></el-image>
        </router-link>
      </div>
      <div class="show-flower">
        <div
          v-for="flower in this.$store.state.index.friendlist"
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
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lf1 from "../../../../assets/images/friend.jpg";
export default {
  data() {
    return {
      src: lf1,
    };
  },
  created() {
    this.$axios
      .get("http://127.0.0.1:3000/friend")
      .then((res) => {
        var list = [];
        for (let i = 8; i < 16; i++) {
          res.data[i].goodsUrl = require("../../../../../../stytemdata/assets/images/"+res.data[i].goodsUrl+"");
          list.push(res.data[i]);
        }
        this.$store.dispatch("index/friendlist", list);
      })
      .catch((err) => {
        window.console.log(err);
      });
  },
};
</script>

<style scoped>
.friend {
  position: relative;
  top: 0px;
  left: 50%;
  width: 1200px;
  margin-left: -600px;
  height: 730px;
  background-color: #f3f3f3;
}

.friend-top a {
  float: right;
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
a {
  text-decoration: none;
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