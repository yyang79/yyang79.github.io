<template>
  <div>
    <div class="purlist">
      <li><i class="el-icon-shopping-cart-1"></i><span>交易金额<br><b>￥25358.72</b></span></li>
      <li><i class="el-icon-shopping-cart-1"></i><span>订单数量<br><b>632</b></span></li>
      <li><i class="el-icon-shopping-cart-1"></i><span>交易成功<br><b>583</b></span></li>
      <li><i class="el-icon-shopping-cart-1"></i><span>交易失败<br><b>49</b></span></li>
      <li><i class="el-icon-shopping-cart-1"></i><span>退款金额<br><b>4634.84</b></span></li>
    </div>
    <div id="dev-month" :style="{ width: '1000px', height: '500px' }"></div>
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
            xAxis: {
              type: "category",
              data: xdata,
              axisLabel: {
                rotate: 30,
              },
            },
            yAxis: { type: "value", boundaryGap: [0, 0.01] },
            series: [
              {
                name: "库存量",
                type: "bar",
                data: ydata,
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