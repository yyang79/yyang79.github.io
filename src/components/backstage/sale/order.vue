<template>
  <div id="historypurchase">
    <h3 style="text-align: center; color: red">订单列表</h3>
    <el-table
      ref="multipleTable"
      :data="orderlist"
      border
      tooltip-effect="dark"
      :header-cell-style="{ background: '#f7f7f7' }"
      style="width: 1010px; margin: 0px auto"
    >
      <el-table-column prop="orderid" label="订单编号" width="200">
      </el-table-column>
      <el-table-column label="订单创建时间" width="200">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="创立建昵称" width="200">
      </el-table-column>
      <el-table-column prop="status" label="订单状态" width="200">
      </el-table-column>
      <el-table-column label="操作" width="210">
        <template slot-scope="scope">
          <el-button size="mini" @click="listdetail(scope.row)"
            >查看详情</el-button
          >
          <el-button size="mini" @click="handleOrder(scope.row)"
            >订单处理</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="订单商品列表"
      :visible.sync="detailpagevisible"
      :modal-append-to-body="false"
    >
      <el-table
        ref="multipleTable"
        :data="detaillist"
        border
        tooltip-effect="dark"
        :header-cell-style="{ background: '#f7f7f7' }"
        style="width: 602px; margin: 10px auto"
      >
        <el-table-column prop="id" label="商品编号" width="150">
        </el-table-column>
        <el-table-column label="商品名称" width="150">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column prop="price" label="商品价格" width="150">
        </el-table-column>
        <el-table-column prop="num" label="商品数量" width="150">
        </el-table-column>
      </el-table>
      <div slot="footer">
        <el-button @click="detailpagevisible = false">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "historypurchase",
  data() {
    return {
      orderlist: [
        {
          orderid: 1,
          date: "2016-05-05",
          name: "yyang",
          status: "未处理",
        },
        {
          orderid: 2,
          date: "2016-06-03",
          name: "yyang",
          status: "未处理",
        },
        {
          orderid: 3,
          date: "2016-07-09",
          name: "yyang",
          status: "未处理",
        },
        {
          orderid: 4,
          date: "2016-12-03",
          name: "yyang",
          status: "未处理",
        },
        {
          orderid: 5,
          date: "2018-02-03",
          name: "yyang",
          status: "未处理",
        },
      ],
      detaillist: [
        { id: 1, name: "商品一", price: "￥99.00", num: 100 },
        { id: 2, name: "商品二", price: "￥179.00", num: 100 },
        { id: 3, name: "商品三", price: "￥259.00", num: 100 },
        { id: 4, name: "商品四", price: "￥939.00", num: 100 },
        { id: 5, name: "商品五", price: "￥59.00", num: 100 },
      ],
      detailpagevisible: false,
    };
  },
  methods: {
    listdetail() {
      this.detailpagevisible = true;
    },
    handleOrder(row) {
      this.$router.push({
        path: `/order/details/${row.orderid}`,
      });
    },
  },
};
</script>

<style scoped>
</style>