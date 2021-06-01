<template>
  <div>
    <div class="purlist">
      <li>
        <i class="el-icon-shopping-cart-1"></i
        ><span>交易金额<br /><b>￥4798.00</b></span>
      </li>
      <li>
        <i class="el-icon-shopping-cart-1"></i
        ><span>订单数量<br /><b>21</b></span>
      </li>
      <li>
        <i class="el-icon-shopping-cart-1"></i
        ><span>交易成功<br /><b>6</b></span>
      </li>
      <li>
        <i class="el-icon-shopping-cart-1"></i
        ><span>交易失败<br /><b>0</b></span>
      </li>
      <li>
        <i class="el-icon-shopping-cart-1"></i
        ><span>退款金额<br /><b>0.00</b></span>
      </li>
    </div>
    <div
      id="dev-month"
      :style="{
        width: '1000px',
        height: '500px',
        margin: '30px auto',
        border: '2px solid #f3f3f3',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xdata: [],
      ydata: [],
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var xdata = [];
      var ydata = [];
      this.$axios
        .get("http://127.0.0.1:3000/echarts/stock")
        .then((res) => {
          for (var i = 0; i < res.data.length; i++) {
            xdata.push(res.data[i].goodsName);
            ydata.push(res.data[i].stockNum);
          }
          let myChart = this.echarts.init(document.getElementById("dev-month"));
          // 绘制图表
          myChart.setOption({
            title: {},
            grid: { containLabel: true },
            tooltip: {},
            toolbox: {
              show: true,
              feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ["line", "bar"] },
                restore: { show: true },
                saveAsImage: { show: true },
              },
            },
            legend: {
              data: ["所有订单", "已完成", "待发货", "待收货"],
            },
            xAxis: {
              type: "category",
              data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
              ],
            },
            yAxis: { type: "value", boundaryGap: [0, 0.01] },
            series: [
              {
                name: "所有订单",
                type: "bar",
                data: [0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0],
              },
              {
                name: "已完成",
                type: "bar",
                data: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0],
              },
              {
                name: "待发货",
                type: "bar",
                data: [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
              },
              {
                name: "待收货",
                type: "bar",
                data: [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0],
              },
            ],
          });
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.purlist {
  height: 100px;
}
.purlist li {
  float: left;
  margin: 20px;
  padding: 20px;
  list-style: none;
  background: #6ccac9;
}
.purlist i {
  font-size: 40px;
}
.purlist li span {
  font-size: 20px;
  margin-left: 10px;
  position: relative;
  top: -20px;
  left: 0px;
}
.purlist span b {
  padding: 0px;
  margin: 0px;
  font-size: 10px;
  position: absolute;
  top: 30px;
  left: 0px;
}
</style>