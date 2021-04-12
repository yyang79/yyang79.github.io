<template>
  <div id="shopcar">
    <Shopcarhead />
    <div class="car-header">
      <el-row>
        <el-col :span="4" :offset="2"
          ><el-image
            :src="require('../../../assets/images/logo.png')"
            style="
              width: 200px;
              height: 100px;
              margin-top: 20px;
              border: 1px solid #f3f3f3;
            "
          ></el-image
        ></el-col>
        <el-col :span="4" :offset="12"
          ><div
            style="
              width: 200px;
              height: 50px;
              margin-top: 50px;
            "
          >
            <i class="el-icon-phone"></i>
            <b> TEL:000-0000-000</b>
          </div></el-col
        >
      </el-row>
    </div>
    <div class="car-container">
      <div
        v-show="shoplist"
        style="
          margin: 70px auto;
          height: auto;
          width: 1000px;
          border-radius: 10px;
        "
      >
        <div
          style="
            position: relative;
            top: 0px;
            left: 0px;
            width: auto;
            height: auto;
          "
        >
          <el-table
            :data="this.$store.state.shopcar.tableData"
            @selection-change="handleSelectionChange"
            :header-cell-style="{ background: '#f7f7f7'}"
            style="width: 100%; border: 1px solid #f3f3f3"
          >
            <el-table-column type="selection" width="50"> </el-table-column>
            <el-table-column label="商品信息" width="375">
              <template slot-scope="scope">
                <div
                  style="
                    position: relative;
                    top: 0px;
                    left: 0px;
                    width: 375px;
                    height: 100px;
                  "
                >
                  <el-image
                    :src="scope.row.url"
                    style="
                      position: relative;
                      top: 10px;
                      left: 10px;
                      width: 80px;
                      height: 80px;
                      border: 1px solid #f3f3f3;
                    "
                  ></el-image>
                  <div
                    style="
                      position: relative;
                      top: -50px;
                      left: 100px;
                      width: 250px;
                      height: 40px;
                    "
                  >
                    <span>{{ scope.row.name }}</span>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="市场价" width="150">
              <template slot-scope="scope">
                <span style="margin-left: 10px; text-decoration: line-through"
                  >￥{{ scope.row.price + 89 }}.00</span
                >
              </template>
            </el-table-column>
            <el-table-column prop="prince_2" label="订购价" width="150">
              <template slot-scope="scope">
                <span style="margin-left: 10px"
                  >￥{{ scope.row.price }}.00</span
                >
              </template>
            </el-table-column>
            <el-table-column label="数量" width="150">
              <template slot-scope="scope">
                <el-input-number
                  v-model="scope.row.num"
                  :min="1"
                  :max="10"
                  size="mini"
                  @change="handleChange(scope.row.name, scope.row.num)"
                ></el-input-number>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row.name)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div
            style="
              position: relative;
              top: 0px;
              left: 0px;
              margin-top: 20px;
              width: 1000px;
              height: 100px;
              background-color: #f3f3f3;
            "
          >
            <router-link
              style="position: absolute; top: 30px; left: 0px; color: red"
              to="/index"
              >&lt;&lt; 继续购物 GOGOGO</router-link
            >
            <span style="position: absolute; top: 35px; left: 400px">
              应付金额：
              <b style="font-size: 25px; color: red"
                >￥<span>{{ totalprince }}.00</span></b
              >
            </span>
            <el-button
              type="primary"
              @click="settle"
              style="position: absolute; top: 30px; left: 700px"
              >一键结算</el-button
            >
            <el-button
              type="danger"
              @click="shoplistempty"
              style="position: absolute; top: 30px; left: 800px"
              >清空购物车</el-button
            >
          </div>
        </div>
      </div>
      <el-dialog title="确定订单" :visible.sync="orderVisible">
        <div style="width: 100%; height: 80px; border: 1px solid #e3e3e3">
          <el-cow>
            <el-col><span>yyang </span><span> 18368390274</span></el-col>
          </el-cow>
          <el-cow>
            <el-col><span>收货地址：贵州省贵阳市花溪区贵州大学</span></el-col>
          </el-cow>
          <el-cow>
            <el-col><span>收货不便时，可选择暂存服务</span></el-col>
          </el-cow>
        </div>
        <div
          v-for="list in lists"
          :key="list"
          style="
            width: 100%;
            height: 100px;
            margin-top: 10px;
            border: 1px solid #e3e3e3;
          "
        >
          <el-image
            style="width: 80px; height: 80px; margin: 10px"
            :src="list.url"
          ></el-image>
          <div style="float: right; width: 75%; height: 80px; margin: 10px">
            <span>{{ list.name }}</span
            ><br />
            <span>￥{{ list.price }}.00</span><br />
            <span>x{{ list.num }}</span>
          </div>
        </div>
        <div>
          <span>备注：</span>
          <el-input type="textarea" v-model="remark"></el-input>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="orderVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitorder">确 定</el-button>
        </div>
      </el-dialog>
      <div
        v-show="shopnone"
        style="
          margin: 20px auto;
          width: 1000px;
          height: 500px;
          border: 1px solid #f3f3f3;
        "
      >
        <div
          style="
            position: relative;
            top: 0px;
            left: 0px;
            width: 1000px;
            height: auto;
            background-color: #f3f3f3;
          "
        >
          <el-image
            :src="shopempty"
            style="
              position: absolute;
              top: 0px;
              left: 200px;
              width: 601px;
              height: 400px;
            "
          ></el-image>
          <span
            style="
              position: absolute;
              font-size: 30px;
              top: 400px;
              width: auto;
              left: 400px;
            "
            >购物车空空如也</span
          >
          <router-link
            style="position: absolute; top: 450px; left: 800px; color: red"
            to="/index"
            >去购物 GOGOGO >></router-link
          >
        </div>
      </div>
    </div>
    <div class="car-recommend">
      <Recommend />
    </div>
    <Chat />
  </div>
</template>

<script>
import Shopcarhead from "../index/header";
import Recommend from "./recommend";
import Chat from "../chat/chat";
import flower1 from "../../../assets/images/shopempty.png";
export default {
  name: "shopcar",
  inject: ["reload"],
  components: {
    Recommend,
    Shopcarhead,
    Chat,
  },
  data() {
    return {
      shoplist: false,
      shopnone: false,
      shopempty: flower1,
      totalprince: "0",
      checklist: [],
      orderVisible: false,
      lists: [],
      remark: "",
    };
  },
  created() {
    this.decide();
  },
  methods: {
    decide() {
      if (this.$store.state.shopcar.tableData.length > 0) {
        this.shoplist = true;
      } else {
        this.shopnone = true;
      }
    },
    handleDelete(name) {
      var tableData = this.$store.state.shopcar.tableData;
      for (var i = 0; i < tableData.length; i++) {
        if (tableData[i].name == name) {
          this.$store.dispatch("shopcar/delgoods", i);
          this.$message({ message: "删除成功", type: "success" });
        }
      }
      if (tableData.length == 0) {
        this.shoplist = false;
        this.shopnone = true;
      }
    },
    settle() {
      if (this.checklist.length == 0) {
        this.$message({ message: "请勾选购买商品", type: "warning" });
      } else {
        this.lists = this.checklist;
        this.orderVisible = true;
      }
    },
    submitorder() {
      // var goodslist = [];
      // for (let i = 0; i < this.lists.length; i++) {
      //   goodslist.push({ id: this.lists[i].id });
      // }
      // this.$axios
      //   .post("http://127.0.0.1:3000/order", {
      //     id: "DD" + this.getdate(),
      //     name: "user",
      //     time: this.getdate(),
      //     price: this.totalprince,
      //     status: "代发货",
      //     remark: this.remark,
      //     goodslist: goodslist,
      //   })
      //   .then((res) => {
      //     window.console.log(res.data);
      //   })
      //   .catch((err) => {
      //     window.console.log(err);
      //   });
      orderVisible = false;
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
        this.fillZero(myMonth) +
        this.fillZero(myToday) +
        this.fillZero(myHour) +
        this.fillZero(myMinute) +
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
    shoplistempty() {
      this.tableData = [];
      if (this.tableData.length == 0) {
        this.shoplist = false;
        this.shopnone = true;
      }
      this.$message({ message: "清空购物车成功", type: "success" });
    },

    handleSelectionChange(val) {
      var total = 0;
      this.checklist = val;
      for (var i = 0; i < this.checklist.length; i++) {
        var x = Number(this.checklist[i].price);
        var all = x * this.checklist[i].num;
        total = all + total;
      }
      this.totalprince = total;
    },
    handleChange(name, num) {
      var total = 0;
      for (var i = 0; i < this.checklist.length; i++) {
        if (this.checklist[i].id == name) {
          this.checklist[i].num = num;
        }
        var x = Number(this.checklist[i].price);
        var all = x * this.checklist[i].num;
        total = all + total;
      }
      this.totalprince = total;
    },
  },
};
</script>

<style>
.car-header {
  width: 100%;
  height: 100px;
  min-width: 1200px;
}
.car-container {
  width: 100%;
  min-width: 1200px;
  height: auto;
}
.car-recommend {
  height: auto;
  width: 100%;
  min-width: 1200px;
}
</style>