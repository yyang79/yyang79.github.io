<template>
  <div id="stockwarn">
    <div style="text-align: center">
      <h3 style="color: red">库存数量警告</h3>
    </div>
    <div style="position: absolute; top: 20px; left: 20px">
      <el-button type="primary" @click="dialogFormVisible = true"
        >设置商品库存警告值</el-button
      >
      <el-dialog
        title="设置商品库存警告值"
        :visible.sync="dialogFormVisible"
        :modal-append-to-body="false"
      >
        <el-form :model="sizeForm">
          <el-form-item label="当前警戒值：" :label-width="formLabelWidth">
            <el-input
              v-model="sizeForm.num"
              :disabled="true"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="警戒值设置：" :label-width="formLabelWidth">
            <el-input
              v-model="sizeForm.updatenum"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      style="margin: 10px auto; width: 1101px"
      tooltip-effect="dark"
      :header-cell-style="{ background: '#f7f7f7' }"
    >
      <el-table-column
        prop="goodsId"
        label="商品编号"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="goodsName"
        label="商品名称"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="goodsPrice"
        label="商品价格"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="supName"
        label="供应商"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="goodsStatus"
        label="商品状态"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="typeName"
        label="商品类型"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="stockNum"
        label="当前库存数量"
        width="150"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "stockwarn",
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      currentPage4: "",
      total: 50,
      search: "",
      sizeForm: {
        num: "95",
        updatenum: "",
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  created() {
    this.$axios
      .post("http://127.0.0.1:3000/stockwarn", { num: this.sizeForm.num })
      .then((res) => {
        this.tableData = res.data;
      })
      .catch((error) => {
        window.console.log(error);
      });
  },
  methods: {
    onSubmit() {
      alert("ksugck");
    },
  },
};
</script>

<style scoped>
#supplier {
  width: 100%;
}
</style>