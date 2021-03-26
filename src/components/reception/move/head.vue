<template>
  <div class="head">
    <div
      style="
        position: absolute;
        top: 60px;
        left: 0px;
        width: 100%;
        min-width: 1200px;
      "
    >
      <div class="logo">
        <el-image></el-image>
      </div>
      <div class="search">
        <el-input
          prefix-icon="el-icon-search"
          placeholder="请输入商品关键词"
          v-model="movesearch"
          style="margin-bottom: 10px; width: 300px"
          clearable
        ></el-input>
        <el-button
          style="margin-bottom: 10px"
          type="primary"
          @click="flowerlistchange($store.state.move.movesearch)"
          >搜索</el-button
        ><br />
        <span>推荐搜索：</span>
        <a href="javasrcipt:void(0)">爱情</a>
        <a href="javasrcipt:void(0)">友情</a>
        <a href="javasrcipt:void(0)">花篮</a>
        <a href="javasrcipt:void(0)">蛋糕</a>
      </div>
      <div class="tel">
        <b>Tel:000-0000-0000</b>
      </div>
    </div>
    <div
      style="
        position: absolute;
        top: 180px;
        left: 0px;
        width: 100%;
        min-width: 1200px;
        height: 60px;
        background-color: orangered;
      "
    >
      <div class="nav-top">
        <div class="nav-top-span" @mouseenter="enter()" @mouseleave="leave()">
          <span
            style="
              color: white;
              position: absolute;
              top: 15px;
              left: 10px;
              width: 220px;
              font-size: 25px;
            "
          >
            全部商品导航<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <div class="navhide" v-show="false">
            <div>
              <li>
                <el-popover placement="right" width="400" trigger="hover">
                  <el-table :data="gridData">
                    <el-table-column
                      width="150"
                      property="date"
                      label="日期"
                    ></el-table-column>
                    <el-table-column
                      width="100"
                      property="name"
                      label="姓名"
                    ></el-table-column>
                    <el-table-column
                      width="300"
                      property="address"
                      label="地址"
                    ></el-table-column>
                  </el-table>
                  <el-button slot="reference">click 激活</el-button>
                </el-popover>
              </li>
              <li>
                <el-popover placement="right" width="400" trigger="hover">
                  <el-table :data="gridData">
                    <el-table-column
                      width="150"
                      property="date"
                      label="日期"
                    ></el-table-column>
                    <el-table-column
                      width="100"
                      property="name"
                      label="姓名"
                    ></el-table-column>
                    <el-table-column
                      width="300"
                      property="address"
                      label="地址"
                    ></el-table-column>
                  </el-table>
                  <el-button slot="reference">click 激活</el-button>
                </el-popover>
              </li>
              <li>
                <el-popover placement="right" width="400" trigger="hover">
                  <el-table :data="gridData">
                    <el-table-column
                      width="150"
                      property="date"
                      label="日期"
                    ></el-table-column>
                    <el-table-column
                      width="100"
                      property="name"
                      label="姓名"
                    ></el-table-column>
                    <el-table-column
                      width="300"
                      property="address"
                      label="地址"
                    ></el-table-column>
                  </el-table>
                  <el-button slot="reference">click 激活</el-button>
                </el-popover>
              </li>
              <li>
                <el-popover placement="right" width="400" trigger="hover">
                  <el-table :data="gridData">
                    <el-table-column
                      width="150"
                      property="date"
                      label="日期"
                    ></el-table-column>
                    <el-table-column
                      width="100"
                      property="name"
                      label="姓名"
                    ></el-table-column>
                    <el-table-column
                      width="300"
                      property="address"
                      label="地址"
                    ></el-table-column>
                  </el-table>
                  <el-button slot="reference">click 激活</el-button>
                </el-popover>
              </li>
              <li>
                <el-popover placement="right" width="400" trigger="hover">
                  <el-table :data="gridData">
                    <el-table-column
                      width="150"
                      property="date"
                      label="日期"
                    ></el-table-column>
                    <el-table-column
                      width="100"
                      property="name"
                      label="姓名"
                    ></el-table-column>
                    <el-table-column
                      width="300"
                      property="address"
                      label="地址"
                    ></el-table-column>
                  </el-table>
                  <el-button slot="reference">click 激活</el-button>
                </el-popover>
              </li>
              <li>
                <el-popover placement="right" width="400" trigger="hover">
                  <el-table :data="gridData">
                    <el-table-column
                      width="150"
                      property="date"
                      label="日期"
                    ></el-table-column>
                    <el-table-column
                      width="100"
                      property="name"
                      label="姓名"
                    ></el-table-column>
                    <el-table-column
                      width="300"
                      property="address"
                      label="地址"
                    ></el-table-column>
                  </el-table>
                  <el-button slot="reference">click 激活</el-button>
                </el-popover>
              </li>
              <li>
                <el-popover placement="right" width="400" trigger="hover">
                  <el-table :data="gridData">
                    <el-table-column
                      width="150"
                      property="date"
                      label="日期"
                    ></el-table-column>
                    <el-table-column
                      width="100"
                      property="name"
                      label="姓名"
                    ></el-table-column>
                    <el-table-column
                      width="300"
                      property="address"
                      label="地址"
                    ></el-table-column>
                  </el-table>
                  <el-button slot="reference">click 激活</el-button>
                </el-popover>
              </li>
            </div>
          </div>
        </div>
        <div class="nav-top-span-a">
          <a href="javasrcipt:void(0)"
            ><span @click="move('Love')">爱情系列</span></a
          >
          <a href="javasrcipt:void(0)"
            ><span @click="move('Friend')">友情系列</span></a
          >
          <a href="javasrcipt:void(0)"
            ><span @click="move('Box')">礼盒系列</span></a
          >
          <a href="javasrcipt:void(0)"
            ><span @click="move('Cake')">蛋糕系列</span></a
          >
          <a href="javasrcipt:void(0)"
            ><span @click="move('Basket')">花篮系列</span></a
          >
          <a href="javasrcipt:void(0)"
            ><span @click="move('Plant')">绿植系列</span></a
          >
          <a href="javasrcipt:void(0)"
            ><span @click="move('New')">新品上架</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  inject: ["reload"],
  computed: {
    movesearch: {
      get() {
        return this.$store.state.move.movesearch;
      },
      set(val) {
        this.$store.commit("move/searchchange", val);
      },
    },
  },
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  methods: {
    ...mapActions("move", ["flowerlistchange"]),
  },
};
</script>

<style>
.head {
  margin: 0px auto;
  height: 200px;
  min-width: 1200px;
  width: 100%;
}

.logo {
  position: absolute;
  top: 0px;
  left: 20px;
  width: 200px;
  height: 100px;
  border: 1px solid black;
}

.logo .el-image {
  width: 200px;
  height: 100px;
}

.search {
  position: absolute;
  top: 20px;
  width: 400px;
  height: 100px;
  left: 50%;
  margin-left: -200px;
}

.search a,
.search span {
  font-size: 10px;
}

.tel {
  position: absolute;
  top: 30px;
  left: 50%;
  width: 200px;
  height: 100px;
  margin-left: 400px;
}
.nav-top {
  position: absolute;
  top: 0px;
  left: 50%;
  width: 1200px;
  height: 60px;
  margin-left: -600px;
}

.nav-top-span {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 230px;
  height: 60px;
  background-color: red;
}

.nav-top-span i {
  position: absolute;
  top: 10px;
  left: 190px;
  font-size: 20px;
}

.navhide {
  position: absolute;
  top: 60px;
  left: 0px;
  width: 230px;
  height: 400px;
  background-color: gray;
  z-index: 2;
}

.navhide div {
  position: absolute;
  width: 230px;
  height: 350px;
  top: 25px;
  background-color: violet;
}

.navhide div li {
  list-style: none;
  width: 230px;
  height: 50px;
  text-align: center;
}

.navhide div li .el-button {
  width: 230px;
  background-color: gray;
  height: 50px;
  border: none;
  border-radius: 0px;
  color: white;
}

.navhide div li .el-button:hover {
  background-color: orangered;
}

.nav-top-span-a {
  position: absolute;
  top: 0px;
  left: 230px;
  width: 1000px;
  height: 60px;
}

.nav-top-span-a a {
  position: relative;
  top: 17px;
  left: 0px;
  font-size: 20px;
  padding: 16.5px 20px;
}
.nav-top-span-a a:hover {
  background-color: gray;
}
</style>