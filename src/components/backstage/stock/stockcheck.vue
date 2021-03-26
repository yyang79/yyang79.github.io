<template>
  <div id="purchase">
    <h3 style="text-align: center; color: red">库存盘点</h3>
    <div class="formtop">
      <div style="float: left; margin: 10px 30px 0px 50px">
        <span>盘点编号：</span>
        <el-input
          v-model="inputval"
          :disabled="true"
          style="width: 200px"
        ></el-input>
      </div>
      <div style="float: left; margin: 10px 30px 10px 0px">
        <span>盘点时间：</span>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
      <div style="float: left; margin: 10px 30px 10px 0px">
        <span>盘点操作人：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 100%"
      height="390"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="商品编号" width="120">
      </el-table-column>
      <el-table-column label="商品名称" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="价格" width="120"> </el-table-column>
      <el-table-column prop="name" label="当前库存数量" width="120">
      </el-table-column>
      <el-table-column label="实际库存数量" width="120">
        <el-input></el-input>
      </el-table-column>
      <el-table-column prop="name" label="数量差" width="120">
      </el-table-column>
      <el-table-column prop="name" label="价格*差" width="120">
      </el-table-column>
    </el-table>
    <div style="float: right">
      <el-button
        style="margin: 10px 250px 10px 0px;"
        type="primary"
        @click="submit()"
        >提交当前盘点数据</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "purchase",
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
      ],
      multipleSelection: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        address: "",
        date: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      value1: "",
      inputval: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      alert(index, row);
    },
    submit() {},
  },
};
</script>

<style>
.formtop {
  width: 100%;
  min-width: 1200px;
}
</style>