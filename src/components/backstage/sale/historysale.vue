<template>
  <div id="historypurchase">
    <h3 style="text-align: center; color: red">历史出库记录表</h3>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      :header-cell-style="{ background: '#f7f7f7' }"
      style="width: 922px; margin: 10px auto"
    >
      <el-table-column prop="name" label="出库编号" width="200">
        <template slot-scope="scope">{{ scope.row.saleId }}</template>
      </el-table-column>
      <el-table-column label="出库时间" width="200">
        <template slot-scope="scope">{{ scope.row.saleDate }}</template>
      </el-table-column>
      <el-table-column prop="name" label="出库操作人" width="200">
        <template slot-scope="scope">{{ scope.row.cusName }}</template>
      </el-table-column>
      <el-table-column prop="address" label="出库状态" width="200">
        <template slot-scope="scope">{{ scope.row.saleStatus }}</template>
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)"
            >查看详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created: function () {
    this.$axios
      .get("http://127.0.0.1:3000/sale/history")
      .then((res) => {
        this.tableData = res.data;
      })
      .catch((error) => {
        window.console.log(error);
      });
  },
  methods: {
    handleEdit(row) {
      this.$router.push({
        path: `/sale/history/details/${row.saleId}`,
      });
    },
  },
};
</script>

<style scoped>
</style>