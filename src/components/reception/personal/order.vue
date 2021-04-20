<template>
  <div
    style="
      padding: 0px 10px;
      width: 98%;
      height: 98%;
      border-left: 1px solid #eee;
      border-top: 1px solid #eee;
    "
  >
    <el-tabs v-model="activeName">
      <el-tab-pane :label="quanbu" name="first">
        <div
          style="
            width: 500px;
            border: 1px solid #e3e3e3;
            border-radius: 10px;
            margin-bottom: 10px;
            padding: 10px;
          "
          v-for="(order, index) in allorder"
          :key="index"
        >
          <el-row>
            <el-col :span="12"
              ><span>订单号：{{ order.orderId }}</span></el-col
            >
            <el-col :span="10"
              ><span style="float: right">{{ order.orderDtatus }}</span></el-col
            >
          </el-row>
          <el-row>
            <el-col>
              <div
                style="
                  width: 97%;
                  margin: 10px 0px;
                  padding: 10px;
                  background: #e3e3e3;
                "
                v-for="(order1, cindex) in allorder[index].chrildList"
                :key="cindex"
              >
                <el-image
                  style="width: 100px; height: 100px"
                  :src="order1.goodsUrl"
                ></el-image>
                <div style="float: right; width: 200px; margin-right: 150px">
                  <span>{{ order1.goodsName }}</span
                  ><br />
                  <span>￥{{ order1.goodsPrice }}.00</span><br />
                  <span>x{{ order1.orderNum }}</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <span>总价：￥{{ order.orderPrice }}.00</span>
          <el-button>查看详情</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="fahuo" name="second">
        <div
          style="
            width: 500px;
            border: 1px solid #e3e3e3;
            border-radius: 10px;
            margin-bottom: 10px;
            padding: 10px;
          "
          v-for="(send, index) in sends"
          :key="index"
        >
          <el-row>
            <el-col :span="12"
              ><span>订单号：{{ send.orderId }}</span></el-col
            >
            <el-col :span="10"
              ><span style="float: right">{{ send.orderDtatus }}</span></el-col
            >
          </el-row>
          <el-row>
            <el-col>
              <div
                style="
                  width: 97%;
                  margin: 10px 0px;
                  padding: 10px;
                  background: #e3e3e3;
                "
                v-for="(send1, cindex) in sends[index].chrildList"
                :key="cindex"
              >
                <el-image
                  style="width: 100px; height: 100px"
                  :src="send1.goodsUrl"
                ></el-image>
                <div style="float: right; width: 200px; margin-right: 150px">
                  <span>{{ send1.goodsName }}</span
                  ><br />
                  <span>￥{{ send1.goodsPrice }}.00</span><br />
                  <span>x{{ send1.orderNum }}</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <span>总价：￥{{ send.orderPrice }}.00</span>
          <el-button>退款</el-button><el-button>退款</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="shouhuo" name="third">
        <div
          style="
            width: 500px;
            border: 1px solid #e3e3e3;
            border-radius: 10px;
            margin-bottom: 10px;
            padding: 10px;
          "
          v-for="(receive, index) in receives"
          :key="index"
        >
          <el-row>
            <el-col :span="12"
              ><span>订单号：{{ receive.orderId }}</span></el-col
            >
            <el-col :span="10"
              ><span style="float: right">{{
                receive.orderDtatus
              }}</span></el-col
            >
          </el-row>
          <el-row>
            <el-col>
              <div
                style="
                  width: 97%;
                  margin: 10px 0px;
                  padding: 10px;
                  background: #e3e3e3;
                "
                v-for="(receive1, cindex) in receives[index].chrildList"
                :key="cindex"
              >
                <el-image
                  style="width: 100px; height: 100px"
                  :src="receive1.goodsUrl"
                ></el-image>
                <div style="float: right; width: 200px; margin-right: 150px">
                  <span>{{ receive1.goodsName }}</span
                  ><br />
                  <span>￥{{ receive1.goodsPrice }}.00</span><br />
                  <span>x{{ receive1.orderNum }}</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <span>总价：￥{{ receive.orderPrice }}.00</span>
          <el-button>确定收货</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="pingjia" name="fourth">
        <div
          style="
            width: 500px;
            border: 1px solid #e3e3e3;
            border-radius: 10px;
            margin-bottom: 10px;
            padding: 10px;
          "
          v-for="(evaluate, index) in evaluates"
          :key="index"
        >
          <el-row>
            <el-col :span="12"
              ><span>订单号：{{ evaluate.orderId }}</span></el-col
            >
            <el-col :span="10"
              ><span style="float: right">{{
                evaluate.orderDtatus
              }}</span></el-col
            >
          </el-row>
          <el-row>
            <el-col>
              <div
                style="
                  width: 97%;
                  margin: 10px 0px;
                  padding: 10px;
                  background: #e3e3e3;
                "
                v-for="(evaluate1, cindex) in evaluates[index].chrildList"
                :key="cindex"
              >
                <el-image
                  style="width: 100px; height: 100px"
                  :src="evaluate1.goodsUrl"
                ></el-image>
                <div style="float: right; width: 200px; margin-right: 150px">
                  <span>{{ evaluate1.goodsName }}</span
                  ><br />
                  <span>￥{{ evaluate1.goodsPrice }}.00</span><br />
                  <span>x{{ evaluate1.orderNum }}</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <div style="margin-left:300px;width:300px">
            <span>总价：￥{{ evaluate.orderPrice }}.00</span>
            <el-button style="margin-left: 20px" size="mini">评价</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      allorder: [],
      sends: [],
      receives: [],
      evaluates: [],
      quanbu: "",
      fahuo: "",
      shouhuo: "",
      pingjia: "",
    };
  },
  mounted() {
    this.$axios
      .post("/getorder", { name: this.$store.state.login.userform.custrueName })
      .then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          for (var j = 0; j < res.data[i].chrildList.length; j++) {
            res.data[i].chrildList[
              j
            ].goodsUrl = require("../../../../../stytemdata/assets/images/" +
              res.data[i].chrildList[j].goodsUrl +
              "");
          }
          if (res.data[i].orderDtatus == "待发货") {
            this.sends.push(res.data[i]);
          } else if (res.data[i].orderDtatus == "待收货") {
            this.receives.push(res.data[i]);
          } else if (res.data[i].orderDtatus == "已收货") {
            this.evaluates.push(res.data[i]);
          }
        }
        this.allorder = res.data;
        this.quanbu = "全部(" + this.allorder.length + ")";
        this.fahuo = "待发货(" + this.sends.length + ")";
        this.shouhuo = "待收货(" + this.receives.length + ")";
        this.pingjia = "待评价(" + this.evaluates.length + ")";
      })
      .catch((err) => {
        window.console.log(err);
      });
  },
};
</script>

<style>
</style>