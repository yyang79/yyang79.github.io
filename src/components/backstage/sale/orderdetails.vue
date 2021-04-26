<template>
  <div id="orderdatails">
    <div style="width: 100%; height: 50px; border-bottom: 0.1px solid #e7e7e7">
      <el-page-header
        style="padding: 15px"
        @back="goBack"
        content="订单处理页面"
      >
      </el-page-header>
    </div>
    <h3 style="text-align: center">订单处理</h3>
    <span>出库编号：</span
    ><el-input v-model="outinfo.outid" disabled style="width: 200px"></el-input>
    <span>出库时间：</span>
    <el-date-picker
      v-model="outinfo.outtime"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      style="width: 200px"
    >
    </el-date-picker>
    <span>出库人：</span
    ><el-input
      v-model="outinfo.outplayer"
      disabled
      style="width: 200px"
    ></el-input>
    <span>总金额：</span
    ><el-input
      v-model="outinfo.totalprice"
      disabled
      style="width: 200px"
    ></el-input>
    <el-table
      ref="multipleTable"
      :data="detaillist"
      border
      tooltip-effect="dark"
      :header-cell-style="{ background: '#f7f7f7' }"
      style="width: 802px; margin: 10px auto"
    >
      <el-table-column prop="goodsId" label="商品编号" width="200">
      </el-table-column>
      <el-table-column label="商品名称" width="200">
        <template slot-scope="scope">{{ scope.row.goodsName }}</template>
      </el-table-column>
      <el-table-column prop="goodsPrice" label="商品价格" width="200">
      </el-table-column>
      <el-table-column prop="orderNum" label="商品数量" width="200">
      </el-table-column>
    </el-table>
    <div style="width: 300px; margin: 50px auto">
      <el-button type="primary" @click="submit">提交出库</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderdetails",
  data() {
    return {
      outinfo: {
        outid: this.getoutid(),
        outtime: "",
        outplayer: "张三",
        totalprice: 0,
      },
      detaillist: [],
    };
  },
  created() {
    this.$axios
      .post("/order/detail", { id: this.$route.params.id })
      .then((res) => {
        this.detaillist = res.data;
        for (var i = 0; i < res.data.length; i++) {
          this.outinfo.totalprice += parseInt(res.data[i].goodsPrice);
        }
      })
      .catch((err) => {
        window.console.log(err);
      });
  },
  methods: {
    getoutid() {
      var id = "CK" + this.getdate();
      for (var j = 0; j < 4; j++) {
        id += Math.round(Math.random() * 10);
      }
      return id;
    },
    goBack() {
      this.$router.replace("/order");
    },
    submit() {
      if (this.outinfo.outtime == "") {
        this.$message({ message: "请填写出库时间", type: "warning" });
      } else {
        var list = [];
        for (var i = 0; i < this.detaillist.length; i++) {
          list.push({
            goodsId: this.detaillist[i].goodsId,
            num: this.detaillist[i].orderNum,
          });
        }
        this.$axios
          .post("http://127.0.0.1:3000/sale/submit", {
            id: this.outinfo.outid,
            date: this.outinfo.outtime,
            player: this.outinfo.outplayer,
            goodslist: list,
            totalmoney: this.outinfo.totalmoney,
          })
          .then((res) => {
            if (res.data == "添加成功") {
              this.$message({ message: "提交成功", type: "success" });
              this.outinfo.outid = this.getoutid();
              this.$router.replace("/order");
            } else {
              this.$message({ message: "提交失败", type: "warning" });
            }
          })
          .catch((error) => {
            window.console.log(error);
          });
        this.$axios
          .post("http://127.0.0.1:3000/order/status", {
            id: this.$route.params.id,
            saleid:this.outinfo.outid
          })
          .then(() => {})
          .catch((error) => {
            window.console.log(error);
          });
      }
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
  },
};
</script>

<style scoped>
.el-input {
  width: 400px;
}
</style>