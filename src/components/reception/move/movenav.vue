<template>
  <div id="movenav">
    <div class="movenav">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ type }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="classify">
        <div
          style="border-bottom: 1px dashed gray; border-top: 1px dashed gray"
        >
          <span>用途：</span>
          <p></p>
        </div>
        <div style="border-bottom: 1px dashed gray">
          <span>花材：</span>
          <p></p>
        </div>
        <div style="border-bottom: 1px dashed gray">
          <span>类别：</span>
          <p></p>
        </div>
        <div style="border-bottom: 1px dashed gray">
          <span>枝数：</span>
          <p></p>
        </div>
      </div>
      <div class="showflower">
        <div class="flowerlist">
          <router-link :to="{ path: '/detailpage', query: { search: 's' } }">
            <div
              v-show="moveto"
              v-for="flower in this.$store.state.move.flowers"
              :key="flower.name"
            >
              <el-image :src="flower.src"></el-image>
              <span>{{ flower.name }}</span
              ><br />
              <b>{{ flower.prince }}</b
              ><br />
              <small>已售{{ flower.sale }}件</small>
            </div>
          </router-link>
        </div>
        <div
          v-show="emptyflower"
          style="width: 100%; min-width: 1200px; height: 400px"
        >
          <p style="text-align: center">当前暂无搜索结果,请重新输入查询条件</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("move/moveto", this.$route.query.keyword);
    var val = this.$route.query.keyword;
    if (val == "New") {
      this.type = "新品上架";
    } else if (val == "Love") {
      this.type = "爱情";
    } else if (val == "Friend") {
      this.type = "朋友";
    } else if (val == "Basket") {
      this.type = "花篮";
    } else if (val == "Box") {
      this.type = "礼盒";
    } else if (val == "Cake") {
      this.type = "蛋糕";
    } else if (val == "Plant") {
      this.type = "绿植";
    }
  },
  computed: {
    ...mapState("move", ["moveto", "haveflower", "emptyflower"]),
  },
  data() {
    return {
      type: "",
    };
  },
};
</script>

<style scoped>
#movenav {
  width: 100%;
  min-width: 1200px;
}
.movenav {
  position: relative;
  top: 0px;
  left: 50%;
  width: 1200px;
  height: 300px;
  margin-left: -600px;
}
.breadcrumb {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
  margin-bottom: 10px;
}
.classify {
  position: absolute;
  top: 50px;
  left: 0px;
  width: 100%;
  height: 250px;
}
.classify div {
  width: 100%;
  height: 60px;
}

.classify div span {
  position: relative;
  top: 20px;
  left: 10px;
  font-weight: 800;
}

.classify div p {
  position: relative;
  top: -20px;
  left: 80px;
  width: 1100px;
  height: 30px;
  background-color: chocolate;
}

.showflower {
  position: absolute;
  top: 320px;
  left: 0px;
  width: 1200px;
  height: auto;
  background-color: #e3e3e3;
}
.flowerlist a > div {
  float: left;
  width: 210px;
  height: 300px;
  margin: 15px;
  background-color: white;
}

.flowerlist a > div:hover {
  box-shadow: 0 0 10px 5px gray;
}

.flowerlist a div .el-image {
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