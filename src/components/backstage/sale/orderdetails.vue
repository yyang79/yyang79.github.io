<template>
  <div id="orderdatails">
    <div style="width: 100%; height: 50px; border-bottom: 0.1px solid #e7e7e7">
      <el-page-header
        style="padding: 15px"
        @back="goBack"
        content="订单处理页面"
      >
      </el-page-header>
    </div>
    <el-form ref="form" label-width="120px" style="margin: 20px 100px">
      <el-form-item label="订单号：">
        <el-input placeholder="订单号"></el-input
      ></el-form-item>
      <el-form-item label="创建人昵称："
        ><el-input placeholder="创建人昵称"></el-input
      ></el-form-item>
      <el-form-item label="联系电话："
        ><el-input placeholder="联系电话"></el-input
      ></el-form-item>
      <el-form-item label="配送地址："
        ><el-input placeholder="配送地址"></el-input
      ></el-form-item>
      <el-form-item label="及时配送："
        ><el-switch v-model="delivery"></el-switch
      ></el-form-item>
      <el-form-item label="备注："
        ><el-input placeholder="备注"></el-input
      ></el-form-item>
    </el-form>
    <el-divider></el-divider>
    <el-table
      ref="multipleTable"
      :data="detaillist"
      border
      tooltip-effect="dark"
      style="width: 481px; margin: 0px auto"
    >
      <el-table-column prop="id" label="商品编号" width="120">
      </el-table-column>
      <el-table-column label="商品名称" width="120">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column prop="price" label="商品价格" width="120">
      </el-table-column>
      <el-table-column prop="num" label="商品数量" width="120">
      </el-table-column>
    </el-table>
    <div style="width: 300px; margin: 50px auto">
      <el-button type="primary" @click="submit()">立即配送</el-button>
      {{ this.$route.params.id }}
    </div>
  </div>
</template>

<script>
export default {
  name: "orderdetails",
  data() {
    return {
      detaillist: [
        { id: 1, name: "商品一", price: "￥99.00", num: 100 },
        { id: 2, name: "商品二", price: "￥179.00", num: 100 },
        { id: 3, name: "商品三", price: "￥259.00", num: 100 },
        { id: 4, name: "商品四", price: "￥939.00", num: 100 },
        { id: 5, name: "商品五", price: "￥59.00", num: 100 },
      ],
      delivery: true,
    };
  },
  methods: {
    goBack() {
      this.$router.replace("/order");
    },
    submit() {
      this.$data.tableData2 = [];
      alert("订单处理成功！！！");
      this.$router.replace("/order");
    },
  },
};
</script>

<style scoped>
.el-input {
  width: 400px;
}
</style>