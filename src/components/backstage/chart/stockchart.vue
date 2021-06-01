<template>
  <div>
    <h4 style="text-align: center">库存报表</h4>
    <el-tabs v-model="activeName" style="padding: 0px 20px">
      <el-tab-pane label="系列" name="系列">
        <div
          id="xilie"
          :style="{
            width: '1000px',
            height: '600px',
            fontSize: '25px',
            margin: '30px auto',
            border: '2px solid #f3f3f3',
          }"
        ></div>
      </el-tab-pane>
      <el-tab-pane label="鲜花" name="鲜花">
        <div
          id="flower"
          :style="{
            width: '1000px',
            height: '600px',
            fontSize: '25px',
            margin: '30px auto',
            border: '2px solid #f3f3f3',
          }"
        ></div>
      </el-tab-pane>
      <el-tab-pane label="礼盒" name="礼盒">
        <div
          id="box"
          :style="{
            width: '1000px',
            height: '600px',
            fontSize: '25px',
            margin: '30px auto',
            border: '2px solid #f3f3f3',
          }"
        ></div
      ></el-tab-pane>
      <el-tab-pane label="蛋糕" name="蛋糕">
        <div
          id="cake"
          :style="{
            width: '1000px',
            height: '600px',
            fontSize: '25px',
            margin: '30px auto',
            border: '2px solid #f3f3f3',
          }"
        ></div
      ></el-tab-pane>
      <el-tab-pane label="花篮" name="花篮">
        <div
          id="basket"
          :style="{
            width: '1000px',
            height: '600px',
            fontSize: '25px',
            margin: '30px auto',
            border: '2px solid #f3f3f3',
          }"
        ></div
      ></el-tab-pane>
      <el-tab-pane label="绿植" name="绿植">
        <div
          id="plant"
          :style="{
            width: '1000px',
            height: '600px',
            fontSize: '25px',
            margin: '30px auto',
            border: '2px solid #f3f3f3',
          }"
        ></div
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "系列",
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var xldata = [];
      var flowerxdata = [];
      var flowerydata = [];
      var boxxdata = [];
      var boxydata = [];
      var cakexdata = [];
      var cakeydata = [];
      var basketxdata = [];
      var basketydata = [];
      var plantxdata = [];
      var plantydata = [];
      this.$axios
        .get("http://127.0.0.1:3000/echarts/stock")
        .then((res) => {
          var num1 = 0;
          var num2 = 0;
          var num3 = 0;
          var num4 = 0;
          var num5 = 0;
          for (var i = 0; i < res.data.length; i++) {
            switch (res.data[i].typeName) {
              case "鲜花":
                flowerxdata.push(res.data[i].goodsName);
                flowerydata.push(res.data[i].stockNum);
                num1 = num1 + parseInt(res.data[i].stockNum);
                break;
              case "礼盒":
                boxxdata.push(res.data[i].goodsName);
                boxydata.push(res.data[i].stockNum);
                num2 = num2 + parseInt(res.data[i].stockNum);
                break;
              case "蛋糕":
                cakexdata.push(res.data[i].goodsName);
                cakeydata.push(res.data[i].stockNum);
                num3 = num3 + parseInt(res.data[i].stockNum);
                break;
              case "花篮":
                basketxdata.push(res.data[i].goodsName);
                basketydata.push(res.data[i].stockNum);
                num4 = num4 + parseInt(res.data[i].stockNum);
                break;
              case "绿植":
                plantxdata.push(res.data[i].goodsName);
                plantydata.push(res.data[i].stockNum);
                num5 = num5 + parseInt(res.data[i].stockNum);
                break;
            }
          }
          xldata = [
            { value: num1, name: "鲜花" },
            { value: num2, name: "礼盒" },
            { value: num3, name: "蛋糕" },
            { value: num4, name: "花篮" },
            { value: num5, name: "绿植" },
          ];
          let myChart = this.echarts.init(document.getElementById("xilie"));
          let myChart1 = this.echarts.init(document.getElementById("flower"));
          let myChart2 = this.echarts.init(document.getElementById("box"));
          let myChart3 = this.echarts.init(document.getElementById("cake"));
          let myChart4 = this.echarts.init(document.getElementById("basket"));
          let myChart5 = this.echarts.init(document.getElementById("plant"));
          // 绘制图表
          myChart.setOption({
            title: {
              left: "center",
            },
            tooltip: {
              trigger: "item",
            },
            legend: {
              orient: "vertical",
              left: "left",
            },
            series: [
              {
                name: "访问来源",
                type: "pie",
                radius: "50%",
                data: xldata,
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                  },
                },
              },
            ],
          });

          myChart1.setOption({
            title: {},
            grid: { containLabel: true },
            tooltip: {},
            xAxis: {
              type: "category",
              data: flowerxdata,
              axisLabel: {
                rotate: 30,
              },
            },
            yAxis: { type: "value" },
            series: [
              {
                name: "库存量",
                type: "bar",
                data: flowerydata,
              },
            ],
          });
          myChart2.setOption({
            title: {},
            grid: { containLabel: true },
            tooltip: {},
            xAxis: {
              type: "category",
              data: boxxdata,
              axisLabel: {
                rotate: 30,
              },
            },
            yAxis: { type: "value" },
            series: [
              {
                name: "库存量",
                type: "bar",
                data: boxydata,
              },
            ],
          });
          myChart3.setOption({
            title: {},
            grid: { containLabel: true },
            tooltip: {},
            xAxis: {
              type: "category",
              data: cakexdata,
              axisLabel: {
                rotate: 30,
              },
            },
            yAxis: { type: "value" },
            series: [
              {
                name: "库存量",
                type: "bar",
                data: cakeydata,
              },
            ],
          });
          myChart4.setOption({
            title: {},
            grid: { containLabel: true },
            tooltip: {},
            xAxis: {
              type: "category",
              data: basketxdata,
              axisLabel: {
                rotate: 30,
              },
            },
            yAxis: { type: "value" },
            series: [
              {
                name: "库存量",
                type: "bar",
                data: basketydata,
              },
            ],
          });
          myChart5.setOption({
            title: {},
            grid: { containLabel: true },
            tooltip: {},
            xAxis: {
              type: "category",
              data: plantxdata,
              axisLabel: {
                rotate: 30,
              },
            },
            yAxis: { type: "value" },
            series: [
              {
                name: "库存量",
                type: "bar",
                data: plantydata,
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
</style>