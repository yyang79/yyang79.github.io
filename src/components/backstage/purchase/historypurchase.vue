<template>
  <div id="historypurchase">
    <h3 style="text-align: center; color: red">历史入库记录表</h3>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      :header-cell-style="{ background: '#f7f7f7' }"
      style="width: 922px; margin: 10px auto"
    >
      <el-table-column prop="name" label="入库编号" width="200">
        <template slot-scope="scope">{{ scope.row.purId }}</template>
      </el-table-column>
      <el-table-column label="入库时间" width="200">
        <template slot-scope="scope">{{ scope.row.purDate }}</template>
      </el-table-column>
      <el-table-column prop="name" label="入库操作人" width="200">
        <template slot-scope="scope">{{ scope.row.cusName }}</template>
      </el-table-column>
      <el-table-column prop="address" label="入库状态" width="200">
        <template slot-scope="scope">{{ scope.row.purStatus }}</template>
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
  name: "historypurchase",
  data() {
    return {
      tableData: [],
    };
  },
  created: function () {
    this.$axios
      .get("http://127.0.0.1:3000/purchase/history")
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
        path: `/purchase/history/details/${row.purId}`,
      });
    },
  },
};
</script>

<style scoped>
</style>