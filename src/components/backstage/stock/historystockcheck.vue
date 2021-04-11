<template>
  <div id="historypurchase">
    <h3 style="text-align: center; color: red">历史盘点记录表</h3>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      :header-cell-style="{ background: '#f7f7f7' }"
      style="width: 722px; margin: 10px auto"
    >
      <el-table-column prop="name" label="盘点编号" width="200">
        <template slot-scope="scope">{{ scope.row.stoId }}</template>
      </el-table-column>
      <el-table-column label="盘点时间" width="200">
        <template slot-scope="scope">{{ scope.row.stoTime }}</template>
      </el-table-column>
      <el-table-column prop="name" label="盘点操作人" width="200">
        <template slot-scope="scope">{{ scope.row.cusName }}</template>
      </el-table-column>n>
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
      .get("http://127.0.0.1:3000/stockcheck/history")
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
        path:  `/stockcheck/history/details/${row.stoId}`,
      });
    },
  },
};
</script>

<style scoped>
</style>