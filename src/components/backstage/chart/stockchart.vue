<template>
  <div
    id="dev-month"
    :style="{ width: '100%', height: '100%', fontSize: '25px' }"
  ></div>
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
            title: { text: "库存报表" },
            grid: {containLabel: true},
            tooltip: {},
            xAxis: { type: "value", boundaryGap: [0, 0.01] },
            yAxis: { type: "category", data: xdata },
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
#dev-month {
  width: 100%;
  height: 100%;
}
</style>