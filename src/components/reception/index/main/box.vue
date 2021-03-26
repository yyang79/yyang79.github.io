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
        <router-link :to="{ path: '/detailpage', query: { search: 's' } }">
          <div
            v-for="flower in this.$store.state.index.boxlist"
            :key="flower.src"
          >
            <el-image :src="flower.src"></el-image>
            <span
              style="font-size: 20px; position: relative; top: 10px; left: 10px"
              >{{ flower.name }}</span
            ><br />
            <span
              style="
                color: red;
                font-size: 25px;
                position: relative;
                top: 20px;
                left: 10px;
              "
              >{{ flower.price }}</span
            >
            <small style="position: relative; top: 25px; right: -40px"
              >已售{{ flower.sallnum }}</small
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import lf1 from "../../../../assets/images/box/1.jpg";
export default {
  data() {
    return {
      src: lf1,
    };
  },
};
</script>

<style>
.box {
  position: relative;
  top: 0px;
  left: 50%;
  width: 1200px;
  margin-left: -600px;
  height: 690px;
  background-color: #f3f3f3;
}
.box-top a {
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

.show-flower a div {
  width: 200px;
  margin: 10px;
  height: 290px;
  margin: 15px 11px 20px 20px;
  background-color: white;
  float: left;
}

.show-flower a div .el-image {
  margin: 0px;
  padding: 0px;
  width: 200px;
  height: 200px;
  border: none;
}
</style>