<template>
  <div id="type">
    <div class="add">
      <el-button @click="addtype">添加商品类型</el-button>
      <el-button v-show="proquit" @click="quit()"
        >返回</el-button
      >
      <el-dialog
        title="商品类型添加"
        :visible.sync="dialogFormVisible_add"
        :modal-append-to-body="false"
      >
        <el-form :model="addform">
          <el-form-item label="类型编号：" :label-width="formLabelWidth + 'px'">
            <el-input
              disabled
              v-model="addform.typeId"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="类型名称：" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.typeName" autocomplete="off"></el-input>
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
        placeholder="请输入类型关键词"
        v-model="search"
        clearable
      ></el-input>
    </div>
    <div style="text-align: center">
      <h3 style="color: red">商品类型资料</h3>
    </div>
    <el-divider></el-divider>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
            :header-cell-style="{ background: '#f7f7f7'}"
      style="width: 602px; margin: 40px auto"
    >
      <el-table-column label="类型编号" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.typeId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="类型名称" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.typeName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="商品类型信息修改"
      :visible.sync="dialogFormVisible_update"
      :modal-append-to-body="false"
    >
      <el-form :model="updateform">
        <el-form-item label="类型编号：" :label-width="formLabelWidth + 'px'">
          <el-input
            v-model="updateform.typeId"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="类型名称：" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.typeName" autocomplete="off"></el-input>
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
      addform: [],
      updateform: [],
      dialogFormVisible_add: false,
      dialogFormVisible_update: false,
      formLabelWidth: 100,
      currentPage: 1,
      total: 0,
      search: "",
      show: true,
      proquit: false,
      num: "",
    };
  },
  created: function () {
    this.showproduct();
  },
  methods: {
    showproduct() {
      this.$axios
        .get("http://127.0.0.1:3000/type")
        .then((res) => {
          if (res.data.length == 0) {
            this.show = false;
            this.tableData = [];
          } else {
            this.tableData = res.data;
            this.num = res.data.length;
            this.total = res.data.length;
          }
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    addtype() {
      this.dialogFormVisible_add = true;
      var number = this.num + 1;
      this.addform = { typeId: "LX" + number, typeName: "" };
    },
    add() {
      if (this.addform.typeName == "") {
        this.$message({ message: "请输入商品类型名称", type: "warning" });
      } else {
        this.$axios
          .post("http://127.0.0.1:3000/type/add", {
            id: this.addform.typeId,
            name: this.addform.typeName,
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
      }
    },

    handleEdit(row) {
      this.dialogFormVisible_update = true;
      this.updateform = { typeId: row.typeId, typeName: row.typeName };
    },
    handleDelete(row) {
      var id = row.typeId;
      this.$confirm("确定删除吗？", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(() => {
        this.$axios
          .post("http://127.0.0.1:3000/type/delete", { id: id })
          .then((res) => {
            if (res.data == "删除成功") {
              this.$message({ message: "删除成功", type: "success" });
              this.showproduct();
            }
          })
          .catch((error) => {
            window.console.log(error);
          });
      });
    },
    psearch() {
      this.proquit = true;
      this.$axios
        .post("http://127.0.0.1:3000/type/select", {
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
        .post("http://127.0.0.1:3000/type/update", {
          id: this.updateform.typeId,
          name: this.updateform.typeName,
        })
        .then((res) => {
          if (res.data == "更新成功") {
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

<style scoped>
#type {
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
  right: 50px;
}
.el-form-item .el-input {
  width: 400px;
}
</style>