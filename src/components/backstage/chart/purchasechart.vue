<template>
  <div>
    <h4 style="text-align: center">入库报表</h4>
    本年度共入库1次
    <el-tabs v-model="activeName" style="padding: 0px 20px">
      <el-tab-pane label="系列入库占比" name="系列">
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
            data: [
              { name: "鲜花", value: 20000 },
              { name: "礼盒", value: 11000 },
              { name: "蛋糕", value: 11000 },
              { name: "花篮", value: 10000 },
              { name: "绿植", value: 10000 },
            ],
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
        title: {
          text: "本年度鲜花系列入库表",
          subtext: "",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: [
            "爱莎公主99",
            "粉雪佳人",
            "不变的承诺",
            "恋恋情深",
            "韩式鲜花/此情不渝",
            "韩式系列/你笑起来真好看",
            "甜美公主",
            "星河璀璨",
            "甜蜜相伴",
            "你是唯一",
            "缪斯女神",
            "韩式系列/温柔以待",
            "幸福绽放",
            "留住好时光",
            "韩式系列/亲密爱人",
            "韩式鲜花/小仙女",
            "Best for You",
            "爱在心头",
            "韩式系列/只爱你52",
            "浩瀚星空",
          ],
          selected: [
            "爱莎公主99",
            "粉雪佳人",
            "不变的承诺",
            "恋恋情深",
            "韩式鲜花/此情不渝",
            "韩式系列/你笑起来真好看",
            "甜美公主",
            "星河璀璨",
            "甜蜜相伴",
            "你是唯一",
            "缪斯女神",
            "韩式系列/温柔以待",
            "幸福绽放",
            "留住好时光",
            "韩式系列/亲密爱人",
            "韩式鲜花/小仙女",
            "Best for You",
            "爱在心头",
            "韩式系列/只爱你52",
            "浩瀚星空",
          ],
        },
        series: [
          {
            name: "名称",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            data: [
              { name: "爱莎公主99", value: 1000 },
              { name: "粉雪佳人", value: 1000 },
              { name: "不变的承诺", value: 1000 },
              { name: "恋恋情深", value: 1000 },
              { name: "韩式鲜花/此情不渝", value: 1000 },
              { name: "韩式系列/你笑起来真好看", value: 1000 },
              { name: "甜美公主", value: 1000 },
              { name: "星河璀璨", value: 1000 },
              { name: "甜蜜相伴", value: 1000 },
              { name: "你是唯一", value: 1000 },
              { name: "缪斯女神", value: 1000 },
              { name: "韩式系列/温柔以待", value: 1000 },
              { name: "幸福绽放", value: 1000 },
              { name: "留住好时光", value: 1000 },
              { name: "韩式系列/亲密爱人", value: 1000 },
              { name: "韩式鲜花/小仙女", value: 1000 },
              { name: "Best for You", value: 1000 },
              { name: "爱在心头", value: 1000 },
              { name: "韩式系列/只爱你52", value: 1000 },
              { name: "浩瀚星空", value: 1000 },
            ],
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
      myChart2.setOption({
        title: {
          text: "本年度礼盒系列入库表",
          subtext: "",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: [
            "一往情深",
            "为你钟情",
            "爱在心田",
            "爱的告白",
            "绵绵情谊",
            "缘分天空",
            "一见倾心",
            "永恒的爱",
            "情定一生",
            "美丽的你",
            "幸福守候",
          ],

          selected: [
            "一往情深",
            "为你钟情",
            "爱在心田",
            "爱的告白",
            "绵绵情谊",
            "缘分天空",
            "一见倾心",
            "永恒的爱",
            "情定一生",
            "美丽的你",
            "幸福守候",
          ],
        },
        series: [
          {
            name: "名称",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            data: [
              { name: "幸福守候", value: 1000 },
              { name: "美丽的你", value: 1000 },
              { name: "情定一生", value: 1000 },
              { name: "永恒的爱", value: 1000 },
              { name: "一见倾心", value: 1000 },
              { name: "缘分天空", value: 1000 },
              { name: "绵绵情谊", value: 1000 },
              { name: "爱的告白", value: 1000 },
              { name: "爱在心田", value: 1000 },
              { name: "为你钟情", value: 1000 },
              { name: "一往情深", value: 1000 },
            ],

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
      myChart3.setOption({
        title: {
          text: "本年度蛋糕系列入库表",
          subtext: "",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: [
            "爱的火烈鸟【网红款】",
            "意气风发【网红款】",
            "丝丝甜蜜（8寸）",
            "可爱时光",
            "幸福环绕（8寸）",
            "独一无二【网红款】",
            "快乐时光（10寸）",
            "冰雪女王",
            "你最珍贵【网红款】",
            "甜蜜告白【网红款】",
            "一夜暴富【网红款】",
          ],

          selected: [
            "爱的火烈鸟【网红款】",
            "意气风发【网红款】",
            "丝丝甜蜜（8寸）",
            "可爱时光",
            "幸福环绕（8寸）",
            "独一无二【网红款】",
            "快乐时光（10寸）",
            "冰雪女王",
            "你最珍贵【网红款】",
            "甜蜜告白【网红款】",
            "一夜暴富【网红款】",
          ],
        },
        series: [
          {
            name: "名称",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            data: [
              { name: "一夜暴富【网红款】", value: 1000 },
              { name: "甜蜜告白【网红款】", value: 1000 },
              { name: "你最珍贵【网红款】", value: 1000 },
              { name: "冰雪女王", value: 1000 },
              { name: "快乐时光（10寸）", value: 1000 },
              { name: "独一无二【网红款】", value: 1000 },
              { name: "幸福环绕（8寸）", value: 1000 },
              { name: "可爱时光", value: 1000 },
              { name: "丝丝甜蜜（8寸）", value: 1000 },
              { name: "意气风发【网红款】", value: 1000 },
              { name: "爱的火烈鸟【网红款】", value: 1000 },
            ],

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
      myChart4.setOption({
        title: {
          text: "本年度花篮系列入库表",
          subtext: "",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: [
            "旭日临门（一对）",
            "喜气洋洋（一对）",
            "招财进宝（一对）",
            "好运连连（一对）",
            "生意兴隆（一对）",
            "前程似锦（一对）",
            "开业大卖",
            "喜气迎门（一对)",
            "紫气东来（一对）",
            "生意永盛（一对）",
          ],

          selected: [
            "旭日临门（一对）",
            "喜气洋洋（一对）",
            "招财进宝（一对）",
            "好运连连（一对）",
            "生意兴隆（一对）",
            "前程似锦（一对）",
            "开业大卖",
            "喜气迎门（一对)",
            "紫气东来（一对）",
            "生意永盛（一对）",
          ],
        },
        series: [
          {
            name: "名称",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            data: [
              { name: "生意永盛（一对", value: 1000 },
              { name: "紫气东来（一对）", value: 1000 },
              { name: "喜气迎门（一对）", value: 1000 },
              { name: "开业大卖", value: 1000 },
              { name: "前程似锦（一对）", value: 1000 },
              { name: "生意兴隆（一对）", value: 1000 },
              { name: "好运连连（一对）", value: 1000 },
              { name: "招财进宝（一对）", value: 1000 },
              { name: "喜气洋洋（一对）", value: 1000 },
              { name: "旭日临门（一对）", value: 1000 },
            ],

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
      myChart5.setOption({
        title: {
          text: "本年度绿植系列入库表",
          subtext: "",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: [
            "辫子发财树盆栽",
            "单柱发财树盆栽1",
            "绿宝盆栽",
            "天堂鸟盆栽",
            "落地大富贵竹",
            "三株鸿运当头盆栽",
            "虎皮兰盆栽",
            "心叶藤盆栽",
            "龟背竹盆栽",
            "鸿运当头盆栽",
          ],
          selected: [
            "辫子发财树盆栽",
            "单柱发财树盆栽1",
            "绿宝盆栽",
            "天堂鸟盆栽",
            "落地大富贵竹",
            "三株鸿运当头盆栽",
            "虎皮兰盆栽",
            "心叶藤盆栽",
            "龟背竹盆栽",
            "鸿运当头盆栽",
          ],
        },
        series: [
          {
            name: "名称",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            data: [
              { name: "鸿运当头盆栽", value: 1000 },
              { name: "龟背竹盆栽", value: 1000 },
              { name: "心叶藤盆栽", value: 1000 },
              { name: "虎皮兰盆栽", value: 1000 },
              { name: "三株鸿运当头盆栽", value: 1000 },
              { name: "落地大富贵竹", value: 1000 },
              { name: "天堂鸟盆栽", value: 1000 },
              { name: "绿宝盆栽", value: 1000 },
              { name: "单柱发财树盆栽1", value: 1000 },
              { name: "辫子发财树盆栽", value: 1000 },
            ],

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
    },
  },
};
</script>

<style scoped>
</style>