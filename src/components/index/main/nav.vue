<template>
    <div class="nav">
        <div class="nav-carousel">
          <el-carousel :height="bannerHeight + 'px'">
            <el-carousel-item v-for="item in items" :key="item.src">
              <el-image :src="item.src"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
  </div>
</template>

<script>
import carousel1 from "../../../assets/images/carousel/x.jpg";
import carousel2 from "../../../assets/images/carousel/y.jpg";
import carousel3 from "../../../assets/images/carousel/z.jpg";
export default {
  data() {
    return {
      items: [{ src: carousel1 }, { src: carousel2 }, { src: carousel3 }],
      bannerHeight: 400,
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
};
</script>

<style>

.nav {
  position: relative;
  height: 400px;
  width: 1200px;
  top: 0px;
  left: 50%;
  margin-left: -600px;
}

.nav-nav {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 230px;
  height: 400px;
  background-color: gray;
}

.nav-carousel {
  position: absolute;
  top: 0px;
  left: 230px;
  width: 970px;
  height: 400px;
}

.nav-carousel .el-image {
  width: 970px;
  height: 400px;
}
</style>