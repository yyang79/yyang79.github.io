<template>
  <div id="orderdatails">
    <h3 style="text-align: center">历史订单管理</h3>
    <el-table
      ref="multipleTable"
      :data="orderhistory"
      border
      tooltip-effect="dark"
      :header-cell-style="{ background: '#f7f7f7' }"
      style="width: 602px; margin: 10px auto"
    >
      <el-table-column prop="orderId" label="订单编号" width="300">
      </el-table-column>
      <el-table-column prop="saleId" label="出库编号" width="300">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "orderdetails",
  data() {
    return {
      orderhistory: [],
    };
  },
  created() {
    this.$axios
      .get("/order/history")
      .then((res) => {
        this.orderhistory = res.data;
      })
      .catch((err) => {
        window.console.log(err);
      });
  },
  methods: {},
};
</script>

<style scoped>
</style>