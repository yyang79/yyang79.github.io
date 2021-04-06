<template>
  <div id="orderdatails">
    <div style="width: 100%; height: 50px; border-bottom: 0.1px solid #e7e7e7">
      <el-page-header style="padding: 15px" @back="goBack" content="详情页面">
      </el-page-header>
    </div>
    <h3 style="text-align: center; color: red">历史盘点记录详情表</h3>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      :header-cell-style="{ background: '#f7f7f7' }"
      style="width: 602px; margin: 50px auto"
    >
      <el-table-column label="商品编号" width="200">
        <template slot-scope="scope">{{ scope.row.goodsId }}</template>
      </el-table-column>
      <el-table-column label="商品名称" width="200">
        <template slot-scope="scope">{{ scope.row.goodsName }}</template>
      </el-table-column>
      <el-table-column label="实际数量" width="200">
        <template slot-scope="scope">{{ scope.row.trueNum }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "orderdetails",
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.$axios
      .post("http://127.0.0.1:3000/stockcheck/history/details", {
        id: this.$route.params.id,
      })
      .then((res) => {
        this.tableData = res.data;
      })
      .catch((error) => {
        window.console.log(error);
      });
  },
  methods: {
    goBack() {
      this.$router.replace("/stockcheck/history");
    },
  },
};
</script>

<style scoped>
</style>