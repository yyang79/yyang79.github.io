<template>
  <div id="stockwarn">
    <div style="text-align: center">
      <h3 style="color: red">库存数量警告</h3>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="margin:20px auto;width:841px"
  
    >
      <el-table-column prop="name" label="商品编号" width="120">
      </el-table-column>
      <el-table-column label="商品名称" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="商品类型" width="120">
      </el-table-column>
      <el-table-column prop="name" label="商品规格" width="120">
      </el-table-column>
      <el-table-column prop="name" label="价格" width="120">
      </el-table-column>
      <el-table-column prop="name" label="供应商" width="120">
      </el-table-column>
      <el-table-column prop="name" label="当前库存数量" width="120">
      </el-table-column>
    </el-table>
    <div>
      <el-button type="primary" @click="dialogFormVisible = true"
        >设置商品库存警告值</el-button
      >
      <el-dialog
        title="设置商品库存警告值"
        :visible.sync="dialogFormVisible"
        :modal-append-to-body="false"
      >
        <el-form :model="form">
          <el-form-item label="当前警戒值：" :label-width="formLabelWidth">
            <el-input
              v-model="form.name"
              :disabled="true"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="警戒值设置：" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
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
  </div>
</template>

<script>
export default {
  name: "stockwarn",
  data() {
    return {
      tableData: [
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
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
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
      currentPage4: "",
      total: 50,
      search: "",
      sizeForm: {
        name: "",
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