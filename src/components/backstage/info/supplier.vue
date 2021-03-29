<template>
  <div id="supplier">
    <div class="add">
      <el-button type="primary" @click="dialogFormVisible_add = true"
        >新建供应商</el-button
      >
      <el-button v-show="proquit" type="primary" @click="quit()"
        >返回</el-button
      >
      <el-dialog
        title="供应商添加"
        :visible.sync="dialogFormVisible_add"
        :modal-append-to-body="false"
      >
        <el-form :model="addform">
          <el-form-item label="供应商编号" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="供应商名称" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="负责人" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.manager" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.sex" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.tel" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.remark" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible_add = false">取 消</el-button>
          <el-button type="primary" @click="add()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
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
      <h3 style="color: red">供应商资料</h3>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="margin: 0px 30px; width: 1050px"
    >
      <el-table-column prop="supId" label="供应商编号"> </el-table-column>
      <el-table-column prop="supName" label="供应商名称"> </el-table-column>
      <el-table-column prop="supManager" label="负责人"> </el-table-column>
      <el-table-column prop="supSex" label="性别"> </el-table-column>
      <el-table-column prop="supAge" label="年龄"> </el-table-column>
      <el-table-column prop="supTel" label="电话"> </el-table-column>
      <el-table-column prop="supAddress" label="地址"> </el-table-column>
      <el-table-column prop="supRemark" label="备注"> </el-table-column>
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
      title="供应商信息修改"
      :visible.sync="dialogFormVisible_update"
      :modal-append-to-body="false"
    >
      <el-form :model="updateform">
        <el-form-item label="供应商编号" :label-width="formLabelWidth + 'px'">
          <el-input
            v-model="updateform.id"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="名称供名称" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="负责人" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.manager" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.sex" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.tel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.address" autocomplete="off"></el-input>
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
      addform: {
        id: "",
        name: "",
        manager: "",
        sex: "",
        age: "",
        tel: "",
        address: "",
        remark: "",
      },
      updateform: {
        id: "",
        name: "",
        manager: "",
        sex: "",
        age: "",
        tel: "",
        address: "",
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
        .get("http://127.0.0.1:3000/supplier")
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
    add() {
      this.$axios
        .post("http://127.0.0.1:3000/supplier/add", {
          id: this.addform.id,
          name: this.addform.name,
          manager: this.addform.manager,
          sex: this.addform.sex,
          age: this.addform.age,
          tel: this.addform.tel,
          address: this.addform.address,
          remark: this.addform.remark,
        })
        .then((res) => {
          if (res.data == "添加成功") {
            this.dialogFormVisible_add = false;
            this.reload();
            this.showproduct();
            this.$message({ message: "添加成功", type: "success" });
          }
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    handleEdit(row) {
      this.dialogFormVisible_update = true;
      this.updateform.id = row.supId;
      this.updateform.name = row.supName;
      this.updateform.manager = row.supManager;
      this.updateform.sex = row.supSex;
      this.updateform.age = row.supAge;
      this.updateform.tel = row.supTel;
      this.updateform.address = row.supAddress;
      this.updateform.remark = row.supRemark;
    },
    handleDelete(row) {
      var id = row.supId;
      this.$confirm("确定删除吗？", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(() => {
        this.$axios
          .post("http://127.0.0.1:3000/supplier/delete", { id: id })
          .then(() => {
            this.$message({ message: "删除成功", type: "success" });
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
        .post("http://127.0.0.1:3000/supplier/select", {
          id: this.search,
        })
        .then((res) => {
          this.tableData = res.data;
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
        .post("http://127.0.0.1:3000/supplier/update", {
          id: this.updateform.id,
          name: this.updateform.name,
          manager: this.updateform.manager,
          sex: this.updateform.sex,
          age: this.updateform.age,
          tel: this.updateform.tel,
          address: this.updateform.address,
          remark: this.updateform.remark,
        })
        .then((req) => {
          if (req.data == "修改成功") {
            this.dialogFormVisible_update = false;
            this.reload();
            this.showproduct();
            this.$message({ message: "修改成功", type: "success" });
          }
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
  },
};
</script>

<style>
#supplier {
  width: 100%;
}
.add {
  position: absolute;
  top: 10px;
  left: 30px;
}
.search {
  position: absolute;
  width: 200px;
  top: 10px;
  left: 50%;
  margin-left: 200px;
}
.el-form-item .el-input {
  width: 400px;
}
</style>