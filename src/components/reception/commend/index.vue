<template>
  <div>
    <Commendheader />
    <el-container style="position: absolute; top: 60px; left: 0px; width: 100%">
      <el-header height="300px">
        <div style="width: 1000px; height: 300px; margin: 0px auto">
          <vue-baberrage
            :isShow="barrageIsShow"
            :barrageList="barrageList"
            :loop="barrageLoop"
            :messageHeight="messageHeight"
            style="width: 1000px; height: 300px; background: #e3e3e3;border:10px solid #B87333"
          >
          </vue-baberrage>
        </div>
      </el-header>
      <el-main>
        <div style="width: 800px; height: 40px; margin: 10px auto">
          <el-input
            v-model="msg"
            placeholder="我也要留言"
            style="width: 600px"
          ></el-input
          ><el-button @click="addToList" style="margin-left: 10px"
            >发送</el-button
          >
        </div>
        <div
          style="
            width: 800px;
            height: 200px;
            margin: 0px auto;
            border-bottom: 10px solid #f9f9f9;
            background: #e3e3e3;
          "
          v-for="item in items"
          :key="item"
        >
          <el-container>
            <el-header width="60px" style="background: #e3e3e3">
              <el-image
                style="
                  width: 40px;
                  height: 40px;
                  margin: 10px 0px;
                  border-radius: 50%;
                "
                :src="item.userUrl"
              ></el-image>
              <div style="position: relative; top: -55px; left: 60px">
                <span>{{ item.userName }}</span
                ><br /><span>{{ item.time }}</span>
              </div>
            </el-header>
            <el-main>
              <p style="text-align: center">{{ item.recommend }}</p></el-main
            >
          </el-container>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Commendheader from "../index/header";
import { MESSAGE_TYPE } from "vue-baberrage";
export default {
  components: {
    Commendheader,
  },
  data() {
    return {
      items: [],
      msg: "",
      barrageIsShow: true,
      messageHeight: 40,
      currentId: 0,
      barrageLoop: true,
      barrageList: [],
    };
  },
  mounted() {
    this.getrecommend();
  },
  methods: {
    addToList() {
      if (this.$store.state.login.loginback == false) {
        this.$message.warning("请先登录！！");
      } else {
        if (this.msg == "") {
          this.$message.warning("评论不能为空");
        } else {
          var data = this.$store.state.login.userform;
          this.$axios
            .post("/submit/recommend", {
              name: data.userName,
              time: this.getdate(),
              recommend: this.msg,
            })
            .then(() => {
              this.barrageList.push({
                id: ++this.currentId,
                avatar: require("../../../../../stytemdata/assets/images/" +
                  data.userUrl +
                  ""),
                msg: data.userName + this.msg,
                time: 5,
                extraWidth: 100,
                type: MESSAGE_TYPE.NORMAL,
              });
              this.msg = "";
              this.getrecommend();
            });
        }
      }
    },
    getrecommend() {
      this.items = [];
      this.$axios.get("/getrecommend").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.barrageList.push({
            id: ++this.currentId,
            avatar: require("../../../../../stytemdata/assets/images/" +
              res.data[i].userUrl +
              ""),
            msg: res.data[i].userName + ": " + res.data[i].recommend,
            time: 5,
            extraWidth: 100,
            type: MESSAGE_TYPE.NORMAL,
          });
          res.data[
            i
          ].userUrl = require("../../../../../stytemdata/assets/images/" +
            res.data[i].userUrl +
            "");
          res.data[i].time = this.renderTime(res.data[i].time);
        }
        res.data.sort(function (a, b) {
          return a.time < b.time ? 1 : -1;
        });
        this.items = res.data;
      });
    },
    renderTime(date) {
      var dateee = new Date(date).toJSON();
      return new Date(+new Date(dateee) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    },
    getdate() {
      var myDate = new Date();
      var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      var myToday = myDate.getDate(); //获取当前日(1-31)
      var myHour = myDate.getHours(); //获取当前小时数(0-23)
      var myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
      var mySecond = myDate.getSeconds(); //获取当前秒数(0-59)
      var time =
        myYear +
        "-" +
        this.fillZero(myMonth) +
        "-" +
        this.fillZero(myToday) +
        " " +
        this.fillZero(myHour) +
        ":" +
        this.fillZero(myMinute) +
        ":" +
        this.fillZero(mySecond);
      return time;
    },
    fillZero(val) {
      var realNum;
      if (val < 10) {
        realNum = "0" + val;
      } else {
        realNum = val;
      }
      return realNum;
    },
  },
};
</script>

<style  scoped>
</style>