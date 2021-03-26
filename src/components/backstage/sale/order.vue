<template>
  <div id="historypurchase">
    <h3 style="text-align: center; color: red">订单列表</h3>
    <el-table
      ref="multipleTable"
      :data="tableData1"
      border
      tooltip-effect="dark"
      style="width: 100%"
      height="450"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="订单编号" width="120">
      </el-table-column>
      <el-table-column label="订单创立时间" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="用户名" width="120">
      </el-table-column>
      <el-table-column prop="name" label="联系电话" width="120">
      </el-table-column>
      <el-table-column prop="address" label="配送地址" width="120">
      </el-table-column>
      <el-table-column prop="name" label="备注" width="120"> </el-table-column>
      <el-table-column prop="address" label="订单状态" width="120">
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
        path:  `/orderdetails/${id}`,
      });
    },
  },
};
</script>

<style>
</style>