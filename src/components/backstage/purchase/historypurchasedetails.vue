<template>
  <div id="orderdatails">
    <div style="width:100%;height:50px;border-bottom:0.1px solid #e7e7e7">
      <el-page-header style="padding:15px" @back="goBack" content="详情页面"> </el-page-header>
    </div>
    <h3 style="text-align: center; color: red">历史入库记录详情表</h3>
    <el-table
      ref="multipleTable"
      :data="tableData2"
      border
      tooltip-effect="dark"
      style="width: 100%"
      height="450"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="商品编号" width="120">
      </el-table-column>
      <el-table-column label="商品名称" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="价格" width="120"> </el-table-column>
      <el-table-column prop="name" label="数量" width="120"> </el-table-column>
      <el-table-column prop="name" label="备注" width="120"> </el-table-column>
    </el-table>
    {{ this.$route.params.id }}
  </div>
</template>

<script>
export default {
  name: "orderdetails",
  data() {
    return {
      tableData2: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.replace("/historypurchase");
    },
  },
};
</script>

<style>
</style>