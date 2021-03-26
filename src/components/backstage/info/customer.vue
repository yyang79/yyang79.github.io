<template>
  <div id="customer">
    <el-button v-show="proquit" style="position:absolute;top:10px;left:30px" type="primary" @click="quit()">返回</el-button>
    <div class="search">
      <el-input
        prefix-icon="el-icon-search"
        v-on:keyup.enter.native="psearch()"
        placeholder="请输入供应商编号"
        v-model="search"
        clearable
      ></el-input>
    </div>
    <div style="text-align: center">
      <h3 style="color: red">客户资料</h3>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: auto"
      height="380"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="pro_id" label="客户编号" width="120">
      </el-table-column>
      <el-table-column prop="pro_name" label="客户名称" width="120">
      </el-table-column>
      <el-table-column prop="size" label="性别" width="120"> </el-table-column>
      <el-table-column prop="sup_name" label="年龄" width="120">
      </el-table-column>
      <el-table-column prop="pro_prince" label="联系电话" width="120">
      </el-table-column>
      <el-table-column prop="sup_name" label="地址" width="120">
      </el-table-column>
      <el-table-column prop="pro_remark" label="备注" width="120">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="客户信息修改"
      :visible.sync="dialogFormVisible_update"
      :modal-append-to-body="false"
    >
      <el-form :model="updateform">
        <el-form-item label="客户编号" :label-width="formLabelWidth + 'px'">
          <el-input
            v-model="updateform.id"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="客户名称" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.size" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.prince" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.supplier" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.supplier" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible__update = false">取 消</el-button>
        <el-button type="primary" @click="update()">确 定</el-button>
      </div>
    </el-dialog>
    <div v-show="show" style="margin: 10px 0px 10px 0px; text-align: center">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 15, 20, 25, 30]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      form: {
        id: "",
        name: "",
        type: "",
        size: "",
        prince: "",
        supplier: "",
        remark: "",
      },
      updateform: {
        id: "",
        name: "",
        type: "",
        size: "",
        prince: "",
        supplier: "",
        remark: "",
      },
      dialogFormVisible_add: false,
      dialogFormVisible_update: false,
      formLabelWidth: 100,
      currentPage: 1,
      total: 0,
      search: "",
      show: true,
      proquit: false,
    };
  },
  created: function () {
    this.showproduct();
  },
  methods: {
    showproduct() {
      this.$axios
        .get("http://127.0.0.1:3000/product")
        .then((res) => {
          if (res.data.length == 0) {
            this.show = false;
          }
          this.tableData = res.data;
          this.searchlist = res.data;
          this.total = res.data.length;
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    func2() {
      this.$message({ message: "删除成功", type: "success" });
    },
    func3() {
      this.$message({ message: "修改成功", type: "success" });
    },
    handleEdit(row) {
      this.dialogFormVisible_update = true;
      this.updateform.id = row.pro_id;
      this.updateform.name = row.pro_name;
      this.updateform.type = row.type;
      this.updateform.size = row.size;
      this.updateform.prince = row.pro_prince;
      this.updateform.supplier = row.sup_name;
      this.updateform.remark = row.pro_remark;
    },
    handleDelete(row) {
      var id = row.pro_id;
      this.$confirm("确定删除吗？", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(() => {
        this.$axios
          .post("http://127.0.0.1:3000/product/delete", { id: id })
          .then((res) => {
            this.func2();
            this.showproduct();
          })
          .catch((error) => {
            window.console.log(error);
          });
      });
    },
    psearch() {
      this.proquit = true;
      this.$axios
        .post("http://127.0.0.1:3000/product/select", {
          id: this.search,
        })
        .then((req) => {
          this.tableData = req.data;
          this.show = false;
          this.search = "";
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    quit() {
      this.showproduct();
      this.reload();
    },
    update() {
      this.$axios
        .post("http://127.0.0.1:3000/product/update", {
          id: this.updateform.id,
          name: this.updateform.name,
          type: this.updateform.type,
          size: this.updateform.size,
          prince: this.updateform.prince,
          supplier: this.updateform.supplier,
          remark: this.updateform.remark,
        })
        .then((req) => {
          this.dialogFormVisible_update = false;
          this.reload();
          this.showproduct();
          this.func3();
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
  },
};
</script>

<style>
#customer {
  width: 100%;
}

.search {
  position: absolute;
  width: 200px;
  top: 10px;
  right: 50px;
}
.el-form-item .el-input {
  width: 400px;
}
</style>