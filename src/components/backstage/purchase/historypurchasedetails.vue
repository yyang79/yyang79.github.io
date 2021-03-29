<template>
  <div id="orderdatails">
    <div style="width: 100%; height: 50px; border-bottom: 0.1px solid #e7e7e7">
      <el-page-header style="padding: 15px" @back="goBack" content="详情页面">
      </el-page-header>
    </div>
    <h3 style="text-align: center; color: red">历史入库记录详情表</h3>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 700px; margin: 10px auto"
    >
      <el-table-column label="商品编号">
        <template slot-scope="scope">{{ scope.row.goodsId }}</template>
      </el-table-column>
      <el-table-column label="商品名称">
        <template slot-scope="scope">{{ scope.row.goodsName }}</template>
      </el-table-column>
      <el-table-column label="价格">
        <template slot-scope="scope">{{
          scope.row.goodsPrice
        }}</template></el-table-column
      >
      <el-table-column label="数量">
        <template slot-scope="scope">{{ scope.row.purNum }}</template>
      </el-table-column>
      <el-table-column label="数量" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="lookover(scope.row)"
            >查看商品更多信息</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="商品信息"
      :visible.sync="goodsallinfoVisible"
      :modal-append-to-body="false"
    >
      <el-form :model="goodsinfo" :label-position="right">
        <el-form-item label="商品编号：" :label-width="formLabelWidth + 'px'">
          <el-input
            disabled
            v-model="goodsinfo.goodsId"
            autocomplete="off"
          ></el-input
        ></el-form-item>
        <el-form-item label="商品名称：" :label-width="formLabelWidth + 'px'">
          <el-input
            disabled
            v-model="goodsinfo.goodsName"
            autocomplete="off"
          ></el-input
        ></el-form-item>
        <el-form-item label="商品图片：" :label-width="formLabelWidth + 'px'">
          <el-image
            :src="require('../../../assets/images/love/7.jpg')"
            style="width: 100px; height: 100px"
            :preview-src-list="require('../../../assets/images/love/7.jpg')"
          ></el-image>
        </el-form-item>
        <el-form-item label="商品材料：" :label-width="formLabelWidth + 'px'">
          <el-input
            disabled
            v-model="goodsinfo.goodsMaster"
            autocomplete="off"
          ></el-input
        ></el-form-item>
        <el-form-item label="商品包装：" :label-width="formLabelWidth + 'px'">
          <el-input
            disabled
            v-model="goodsinfo.goodsPackage"
            autocomplete="off"
          ></el-input
        ></el-form-item>
        <el-form-item label="商品花语：" :label-width="formLabelWidth + 'px'">
          <el-input
            disabled
            v-model="goodsinfo.goodsLanguage"
            autocomplete="off"
          ></el-input
        ></el-form-item>
        <el-form-item label="商品价格：" :label-width="formLabelWidth + 'px'">
          <el-input
            disabled
            v-model="goodsinfo.goodsPrice"
            autocomplete="off"
          ></el-input
        ></el-form-item>
        <el-form-item label="供应商：" :label-width="formLabelWidth + 'px'">
          <el-input
            disabled
            v-model="goodsinfo.supName"
            autocomplete="off"
          ></el-input
        ></el-form-item>
        <el-form-item label="商品状态：" :label-width="formLabelWidth + 'px'">
          <el-input
            disabled
            v-model="goodsinfo.goodsStatus"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="类型名称：" :label-width="formLabelWidth + 'px'">
          <el-input
            disabled
            v-model="goodsinfo.typeName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "orderdetails",
  data() {
    return {
      tableData: [],
      goodsinfo: [],
      formLabelWidth: 100,
      goodsallinfoVisible: false,
    };
  },
  created: function () {
    this.$axios
      .post("http://127.0.0.1:3000/purchase/history/detail", {
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
      this.$router.replace("/historypurchase");
    },
    lookover(row) {
      this.goodsallinfoVisible = true;
      this.goodsinfo = row;
    },
  },
};
</script>

<style scoped>
</style>