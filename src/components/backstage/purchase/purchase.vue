<template>
  <div id="purchase">
    <h3 style="text-align: center; color: red">商品入库</h3>
    <el-dialog
      title="入库商品添加"
      :visible.sync="dialogFormVisible"
      :modal-append-to-body="false"
    >
      <el-form :model="addform">
        <el-form-item label="商品编号" :label-width="formLabelWidth">
          <el-select
            v-model="provalue"
            filterable
            placeholder="请选择"
            @change="prochange()"
          >
            <el-option
              v-for="item in prooptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input
            v-model="addform[0].name"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="供应商" :label-width="formLabelWidth">
          <el-input
            v-model="addform[0].supplier"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-input
            v-model="addform[0].type"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="规格" :label-width="formLabelWidth">
          <el-input
            v-model="addform[0].size"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input
            v-model="addform[0].prince"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="数量" :label-width="formLabelWidth">
          <el-input v-model="pronum" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="purchaseadd()">确 定</el-button>
      </div>
    </el-dialog>
    <div class="formtop">
      <div style="float: left; margin: 10px 30px 0px 50px">
        <span>入库编号：</span>
        <el-input
          v-model="inputval"
          :disabled="true"
          style="width: 200px"
        ></el-input>
      </div>
      <div style="float: left; margin: 10px 30px 10px 0px">
        <span>入库时间：</span>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
      <div style="float: left; margin: 10px 30px 10px 0px">
        <span>入库操作人：</span>
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
      style="margin:20px"
      height="450"
    >
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
      <el-table-column label="操作">
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
        style="margin: 10px 50px 10px 0px; width: 100px"
        type="primary"
        @click="dialogFormVisible = true"
        >Add</el-button
      >
      <el-button
        style="margin: 10px 50px 10px 0px; width: 100px"
        type="primary"
        @click="submit()"
        >提交入库</el-button
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
        { name: "", supplier: "", type: "", size: "", prince: "", pronum: "" },
      ],
      multipleSelection: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      addform: [
        { name: "", supplier: "", type: "", size: "", prince: "", pronum: "" },
      ],
      pronum: "",
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
      prooptions: [],
      provalue: "",
      options: [],
      value: "",
      value1: "",
      inputval: "",
    };
  },
  mounted: function () {
    this.proshow();
    this.prochange(this.data.provalue);
  },
  methods: {
    proshow() {
      this.$axios
        .get("http://127.0.0.1:3000/purchase")
        .then((res) => {
          for (var i = 0; i < res.data.length; i++) {
            this.prooptions.push({
              value: res.data[i].pro_name,
            });
          }
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    prochange(val) {
      this.addform = [];
      this.provalue = val;
      this.$axios
        .post("http://127.0.0.1:3000/purchase/select", { data: this.provalue })
        .then((res) => {
          var prolist = {
            name: res.data[0].pro_name,
            supplier: res.data[0].sup_name,
            type: res.data[0].type,
            size: res.data[0].size,
            prince: res.data[0].pro_prince,
          };
          this.addform.push(prolist);
          alert(this.addform[0].name);
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    handleEdit(index, row) {
      alert(index, row);
    },
    handleDelete(index, row) {
      alert(index, row);
    },
    purchaseadd() {
      this.$axios
        .post("http://127.0.0.1:3000/purchase/add", {
          name: this.addform[0].name,
          num: this.pronum,
        })
        .then((res) => {
          var prolist = {
            name: res.data[0].pro_name,
            supplier: res.data[0].sup_name,
            type: res.data[0].type,
            size: res.data[0].size,
            prince: res.data[0].pro_prince,
          };
          this.addform.push(prolist);
          alert(this.addform[0].name);
        })
        .catch((error) => {
          window.console.log(error);
        });
      this.$data.dialogFormVisible = false;
    },
    submit() {},
    recovery() {},
  },
};
</script>

<style>
.formtop {
  width: 100%;
  min-width: 1200px;
}
</style>