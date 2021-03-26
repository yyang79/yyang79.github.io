<template>
  <div id="historypurchase">
    <h3 style="text-align: center; color: red">历史盘点记录表</h3>
    <el-table
      ref="multipleTable"
      :data="tableData1"
      border
      tooltip-effect="dark"
      style="width: 100%"
      height="500"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="盘点编号" width="120">
      </el-table-column>
      <el-table-column label="盘点时间" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="盘点操作人" width="120">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
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
      tableData1: [
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
      multipleSelection: [],
    };
  },
  methods: {
        handleEdit(id) {
      this.$router.push({
        path:  `/historystockcheckdetails/${id}`,
      });
    },
  },
};
</script>

<style>
</style>