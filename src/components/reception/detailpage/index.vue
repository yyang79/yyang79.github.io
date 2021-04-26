<template>
  <div id="detailpage">
    <div class="detailheader">
      <Detailheader />
    </div>
    <div class="detailsearch">
      <Search />
    </div>
    <div class="detailmain">
      <el-breadcrumb style="margin: 15px" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/move/Love' }"
          ><span>{{
            this.$store.state.detailpage.goodstype
          }}</span></el-breadcrumb-item
        >
        <el-breadcrumb-item
          ><span>{{
            this.$store.state.detailpage.name
          }}</span></el-breadcrumb-item
        >
      </el-breadcrumb>
      <div class="flowerdetail">
        <el-form :model="goodsinfo">
          <el-form-item>
            <div class="detailimg">
              <el-image
                :src="goodsinfo[0].goodsUrl"
                style="width: 360px; height: 360px; margin: 20px"
              ></el-image>
              <el-image
                :src="goodsinfo[0].goodsUrl"
                style="
                  width: 80px;
                  height: 80px;
                  margin-left: 20px;
                  border: 1px solid red;
                "
              ></el-image>
            </div>
            <div class="detaildescribe">
              <h3 style="margin-left: 20px">{{ goodsinfo[0].goodsName }}</h3>
              <el-row>
                <el-col :span="2"><span>材料：</span></el-col>
                <el-col :span="22"
                  ><span>{{ goodsinfo[0].goodsMaster }}</span></el-col
                >
              </el-row>
              <el-row>
                <el-col :span="2"><span>包装：</span></el-col>
                <el-col :span="22"
                  ><span>{{ goodsinfo[0].goodsPackage }}</span></el-col
                >
              </el-row>
              <el-row>
                <el-col :span="2"><span>花语：</span></el-col>
                <el-col :span="22"
                  ><span>{{ goodsinfo[0].goodsLanguage }}</span></el-col
                >
              </el-row>
              <el-row>
                <el-col :span="2"><span>配送：</span></el-col>
                <el-col :span="22"
                  ><span>全国（小城市请提前1天预订）</span></el-col
                >
              </el-row>
              <el-row>
                <el-col :span="2"><span>优惠券：</span></el-col>
                <el-col :span="22"><span>暂无优惠券</span></el-col>
              </el-row>
              <el-row
                ><div
                  style="width: 760px; height: 100px; background-color: #f3f3f3"
                >
                  <el-row :gutter="20">
                    <el-col :span="8" style="margin-top: 15px"
                      ><span>市场价：</span
                      ><big style="text-decoration: line-through"
                        >￥{{ goodsinfo[0].goodsPrice + 100 }}.00</big
                      ></el-col
                    ></el-row
                  >
                  <el-row :gutter="20">
                    <el-col :span="15"
                      ><span>店铺价：</span
                      ><big style="color: red"
                        >￥{{ goodsinfo[0].goodsPrice }}.00</big
                      ></el-col
                    >
                    <el-col :span="7"
                      ><small>销量XXX笔 </small>&nbsp;&nbsp;&nbsp;<small>
                        库存剩余XXX件</small
                      ></el-col
                    >
                  </el-row>
                </div></el-row
              >
              <div style="position: absolute; top: 430px; left: 20px">
                <span>数量：</span>
                <el-input-number
                  v-model="num"
                  :min="1"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
                <el-button
                  @click="
                    addtoshopcar(
                      goodsinfo[0].goodsId,
                      goodsinfo[0].goodsUrl,
                      goodsinfo[0].goodsName,
                      goodsinfo[0].goodsPrice
                    )
                  "
                  style="position: absolute; top: 0px; left: 450px"
                  >加入购物车</el-button
                >
                <el-button
                  type="primary"
                  @click="
                    buy(
                      goodsinfo[0].goodsId,
                      goodsinfo[0].goodsUrl,
                      goodsinfo[0].goodsName,
                      goodsinfo[0].goodsPrice
                    )
                  "
                  style="position: absolute; top: 0px; left: 600px"
                  >立即购买</el-button
                >
              </div>
            </div>
          </el-form-item>
        </el-form>

        <div class="info-container">
          <div class="info-container-left">
            <h2 style="text-align: center; color: red">热卖推荐</h2>
            <div
              id="list"
              v-for="recommend in recommends"
              :key="recommend[0].goodsUrl"
              style="float: left; margin: 10px; width: 220px; height: 290px"
            >
              <router-link
                :to="{
                  path: '/detailpage',
                  query: { goodsName: recommend[0].goodsName },
                }"
              >
                <el-image
                  style="width: 200px; height: 200px; margin: 0px 10px"
                  :src="recommend[0].goodsUrl"
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
                  >{{ recommend[0].goodsName }}</span
                ><br />
                <span
                  style="
                    color: red;
                    font-size: 20px;
                    position: relative;
                    top: 0px;
                    left: 10px;
                  "
                  >￥{{ recommend[0].goodsPrice }}.00</span
                >
                <small style="position: relative; top: 10px; left: 30px"
                  >已售{{ recommend[0].sallnum }}</small
                ></router-link
              >
            </div>
          </div>
          <div class="info-container-right">
            <el-tabs v-model="activeName">
              <el-tab-pane label="产品详情" name="first"
                ><el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate
              ></el-tab-pane>
              <el-tab-pane :label="comNum" name="second">
                <div
                  v-for="item in items"
                  :key="item.name"
                  style="
                    background: white;
                    width: 920px;
                    height: 200px;
                    margin-bottom: 20px;
                  "
                >
                  <el-container>
                    <el-header height="60px" style="background: #409eff">
                      <el-image
                        :src="item.userUrl"
                        style="
                          position: relative;
                          top: 5px;
                          left: 0px;
                          width: 50px;
                          height: 50px;
                          border-radius: 50%;
                        "
                      ></el-image>
                      <div style="position: relative; top: -50px; left: 60px">
                        <span style="float: left">{{ item.userName }}：</span>
                        <el-rate
                          v-model="item.score"
                          style="float: left;margin：20px"
                          disabled
                          show-score
                          text-color="#ff9900"
                          score-template="{item.score}"
                        >
                        </el-rate>
                      </div>
                      <div style="position: relative; top: -25px; left: -180px">
                        <span>{{ item.goodsName }}-----</span>
                        <span> {{ item.comTime }}</span>
                      </div>
                    </el-header>
                    <el-main>
                      <span>{{ item.comment }}</span>
                      <el-image
                        style="width: 100px; height: 100px; float: right"
                        :src="item.comUrl"
                      ></el-image>
                    </el-main>
                  </el-container>
                </div>
              </el-tab-pane>
              <el-tab-pane label="常见问题" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="购物保障" name="fourth">角色管理</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%; height: 720px; background-color: #e9ecf0">
      <div style="width: 1200px; height: 100%; margin: 0px auto">
        <h2 style="text-align: center; padding: 0px">猜你喜欢</h2>
        <div
          id="list"
          v-for="recommend in recommends"
          :key="recommend[0].goodsUrl"
          style="
            float: left;
            background: white;
            margin: 10px;
            width: 220px;
            height: 310px;
          "
        >
          <router-link
            :to="{
              path: '/detailpage',
              query: { goodsName: recommend[0].goodsName },
            }"
          >
            <el-image
              style="width: 200px; height: 200px; margin: 10px"
              :src="recommend[0].goodsUrl"
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
              >{{ recommend[0].goodsName }}</span
            ><br />
            <span
              style="
                color: red;
                font-size: 20px;
                position: relative;
                top: 0px;
                left: 10px;
              "
              >￥{{ recommend[0].goodsPrice }}.00</span
            >
            <small style="position: relative; top: 10px; left: 30px"
              >已售{{ recommend[0].sallnum }}</small
            ></router-link
          >
        </div>
      </div>
    </div>
    <div style="width: 100%; height: 200px">
      <Detailfooter />
    </div>
    <Chat />
    <el-backtop :bottom="60">
      <div
        style="
           {
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            border-radius: 50%;
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }
        "
      >
        UP
      </div>
    </el-backtop>
  </div>
</template>

<script>
import Detailheader from "../index/header";
import Search from "../index/main/head";
import Detailfooter from "../index/footer";
import Chat from "../chat/chat";

export default {
  name: "detailpage",
  inject: ["reload"],
  components: {
    Detailheader,
    Search,
    Detailfooter,
    Chat,
  },
  watch: {
    $route() {
      if (this.$route.query.goodsName) {
        this.reload();
      }
    },
  },
  data() {
    return {
      goodsinfo: [],
      activeName: "first",
      num: 1,
      comNum: "",
      value: 4.7,
      items: [],
      recommends: [],
    };
  },
  created() {
    this.$store.dispatch("index/allnavfalse");
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
        this.recommends = res.data;
        alert(JSON.stringify(this.recommends[0]))
      })
      .catch((err) => {
        window.console.log(err);
      });
    this.$axios
      .post("http://127.0.0.1:3000/detailpage", {
        goodsName: this.$route.query.goodsName,
      })
      .then((res) => {
        res.data[0].goodsUrl = require("../../../../../stytemdata/assets/images/" +
          res.data[0].goodsUrl +
          "");
        this.goodsinfo = res.data;
        this.$store.dispatch("detailpage/goodstype", res.data[0].typeName);
        this.$store.dispatch("detailpage/name", res.data[0].goodsName);
      })
      .catch((err) => {
        window.console.log(err);
      });
    this.$axios
      .post("http://127.0.0.1:3000/comment", {
        goodsName: this.$route.query.goodsName,
      })
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          res.data[
            i
          ].comUrl = require("../../../../../stytemdata/assets/images/" +
            res.data[i].comUrl +
            "");
          res.data[
            i
          ].userUrl = require("../../../../../stytemdata/assets/images/" +
            res.data[i].userUrl +
            "");
          res.data[i].score = parseInt(res.data[i].score);
        }
        this.comNum = "用户评论(" + res.data.length + ")";
        this.items = res.data;
      })
      .catch((err) => {
        window.console.log(err);
      });
  },
  methods: {
    addtoshopcar(id, url, name, price) {
      var value = {
        id: id,
        url: url,
        name: name,
        price: price,
        num: this.num,
      };
      this.$store.dispatch("shopcar/tableData", value);
      this.$message({ message: "加入购物车成功", type: "success" });
    },
    buy(id, url, name, price) {
      var value = {
        id: id,
        url: url,
        name: name,
        price: price,
        num: this.num,
      };
      this.$store.dispatch("shopcar/tableData", value);
      this.$router.replace("/shopcar");
    },
  },
};
</script>

<style scoped>
#detailpage {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  min-width: 1200px;
}
.detailheader {
  width: 100%;
  height: 100%;
  min-width: 1200px;
}
.detailsearch {
  width: 100%;
  height: 100%;
  min-width: 1200px;
}
.detailmain {
  width: 1200px;
  height: 1900px;
  min-width: 1200px;
  margin: 0px auto;
}
.flowerdetail {
  position: absolute;
  top: 300px;
  width: 1200px;
  height: 500px;
}
.detailimg {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 400px;
  height: 500px;
  background-color: #e9ecf0;
}
.detaildescribe {
  position: absolute;
  top: 0px;
  left: 400px;
  width: 800px;
  height: 500px;
  background-color: #e9ecf0;
}
.detaildescribe .el-col {
  margin: 0px 0px 20px 20px;
}
.info-container {
  position: absolute;
  top: 520px;
  width: 1200px;
  height: 1320px;
}
.info-container .el-tabs {
  margin-left: 10px;
}
.info-container-left {
  position: absolute;
  top: 0px;
  width: 240px;
  height: 100%;
  overflow: hidden;
  background-color: #e9ecf0;
}
.info-container-right {
  position: absolute;
  top: 0px;
  left: 260px;
  width: 940px;
  height: 100%;
  background-color: #e9ecf0;
}
.detaildescribe .el-col {
  margin: 0;
}
#list:hover {
  box-shadow: 0 0 10px 2px red;
}
</style>