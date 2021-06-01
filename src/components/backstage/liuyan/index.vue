<template>
  <div id="liuyan">
    <el-container>
      <el-header><h2 style="text-align: center">留言管理</h2></el-header>
      <el-main>
        <div
          v-for="list in lists"
          :key="list"
          style="width: 800px; margin: 10px auto; background: #f3f3f3"
        >
          <el-row>
            <el-col :span="2"
              ><el-image
                style="width: 50px; height: 50px; border-radius: 50%"
                :src="list.userUrl"
              ></el-image
            ></el-col>
            <el-col :span="3" style="margin-top: 20px"
              ><span >{{ list.userName }}</span></el-col
            >
            <el-col :span="18" style="margin-top: 20px">{{ list.time }}</el-col>
            <el-col :span="1" style="margin-top: 10px"
              ><a href="javascript:void(0)" @click="del(list.id)"
                ><i class="el-icon-close"></i></a
            ></el-col>
          </el-row>
          <el-row style="height: 100px">
            <h4 style="text-align:center">{{ list.recommend }}</h4>
          </el-row>
        </div></el-main
      >
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.$axios
        .get("/getrecommend")
        .then((res) => {
          for (let i = 0; i < res.data.length; i++) {
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
          this.lists = res.data;
        })
        .catch((err) => {
          window.console.log(err);
        });
    },
    renderTime(date) {
      var dateee = new Date(date).toJSON();
      return new Date(+new Date(dateee) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    },

    del(id) {
      this.$axios
        .post("/delrecommend", { id: id })
        .then(() => {
          this.$message.success("删除留言成功！！");
          this.getdata();
        })
        .catch((err) => {
          window.console.log(err);
        });
    },
  },
};
</script>

<style>
</style>