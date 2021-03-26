<template>
  <div id="purchase">
    <h3 style="text-align: center; color: red">商品销售出库</h3>
    <el-dialog
      title="收货地址"
      :visible.sync="dialogFormVisible"
      :modal-append-to-body="false"
    >
      <el-form :model="form">
        <el-form-item label="时间" :label-width="formLabelWidth">
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="add(form.address, form.date, form.name)"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <div class="formtop">
      <div style="float: left; margin: 10px 30px 0px 50px">
        <span>销售编号：</span>
        <el-input
          v-model="inputval"
          :disabled="true"
          style="width: 200px"
        ></el-input>
      </div>
      <div style="float: left; margin: 10px 30px 10px 0px">
        <span>出库时间：</span>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
      <div style="float: left; margin: 10px 30px 10px 0px">
        <span>出库操作人：</span>
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
      height="450"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="商品编号" width="120">
      </el-table-column>
      <el-table-column label="商品名称" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="供应商" width="120">
      </el-table-column>
      <el-table-column prop="address" label="类型" width="120">
      </el-table-column>
      <el-table-column prop="name" label="规格" width="120"> </el-table-column>
      <el-table-column prop="name" label="价格" width="120"> </el-table-column>
      <el-table-column prop="name" label="数量" width="120"> </el-table-column>
      <el-table-column prop="name" label="备注" width="120"> </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div style="float: right">
      <el-button
        style="margin: 10px 50px 10px 0px"
        type="primary"
        @click="dialogFormVisible = true"
        >添加商品</el-button
      >
      <el-button
        style="margin: 10px 50px 10px 0px"
        type="primary"
        @click="submit(inputval, value1, value)"
        >提交出库单</el-button
      >
      <el-button
        style="margin: 10px 100px 10px 0px; width: 100px"
        type="primary"
        @click="recovery()"
        >重置</el-button
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
      inputval: "test001",
    };
  },
  methods: {
    handleEdit(index, row) {
      alert(index, row);
    },
    handleDelete(index, row) {
      alert(index, row);
    },
    add(address, date, name) {
      var data = {
        date: date,
        name: name,
        address: address,
      };
      this.$data.tableData.push(data);
      this.$data.dialogFormVisible = false;
    },
    submit(inputval, value1, value) {
      alert(inputval+ value1+value);
    },
    recovery() {
      this.$data.tableData = [];
    },
  },
};
</script>

<style>
.formtop {
  width: 100%;
  min-width: 1200px;
}
</style>