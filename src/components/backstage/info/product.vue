<template>
  <div id="product">
    <div class="add">
      <el-button type="primary" @click="dialogFormVisible_add = true"
        >新建商品信息</el-button
      >
      <el-button v-show="proquit" type="primary" @click="quit()"
        >返回</el-button
      >
      <el-dialog
        title="商品添加"
        :visible.sync="dialogFormVisible_add"
        :modal-append-to-body="false"
      >
        <el-form :model="addform">
          <el-form-item label="商品编号" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品名称" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品材料" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.master" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品包装" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.package" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品花语" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.language" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品花语" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.prince" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="供应商" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.supplier" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品状态" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.status" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品类型" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.type" autocomplete="off"></el-input>
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
        placeholder="请输入商品编号"
        v-model="search"
        clearable
      ></el-input>
    </div>
    <div style="text-align: center">
      <h3 style="color: red">商品信息资料</h3>
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
      <el-table-column prop="goodsId" label="商品编号"></el-table-column>
      <el-table-column prop="goodsName" label="商品名称"></el-table-column>
      <el-table-column prop="goodsMaster" label="商品材料"> </el-table-column>
      <el-table-column prop="goodsPackage" label="商品包装"> </el-table-column>
      <el-table-column prop="goodsLanguage" label="商品花语"></el-table-column>
      <el-table-column prop="supName" label="供应商"></el-table-column>
      <el-table-column prop="goodsStatus" label="商品状态"></el-table-column>
      <el-table-column prop="typeName" label="商品类型"></el-table-column>
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
      title="商品信息修改"
      :visible.sync="dialogFormVisible_update"
      :modal-append-to-body="false"
    >
        <el-form :model="updateform">
          <el-form-item label="商品编号" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品名称" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品材料" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.master" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品包装" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.package" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品花语" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.language" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品花语" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.prince" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="供应商" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.supplier" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品状态" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.status" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品类型" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.type" autocomplete="off"></el-input>
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
        master: "",
        package: "",
        prince: "",
        language: "",
        supplier: "",
        status: "",
        type: "",
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
        .get("http://127.0.0.1:3000/goods")
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
        .post("http://127.0.0.1:3000/goods/add", {
          id: this.addform.id,
          name: this.addform.name,
          master: this.addform.master,
          package: this.addform.package,
          prince: this.addform.prince,
          language: this.addform.language,
          supplier: this.addform.supplier,
          status: this.addform.status,
          type: this.addform.type,
        })
        .then((req) => {
          this.dialogFormVisible_add = false;
          this.reload();
          this.showproduct();
          this.$message({ message: "添加成功", type: "success" });
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    handleEdit(row) {
      this.dialogFormVisible_update = true;
      this.updateform.id = row.id;
      this.updateform.name = row.name;
      this.updateform.master = row.master;
      this.updateform.package = row.package;
      this.updateform.prince = row.prince;
      this.updateform.language = row.language;
      this.updateform.supplier = row.supplier;
      this.updateform.status = row.status;
      this.updateform.type = row.type;
    },
    handleDelete(row) {
      var id = row.pro_id;
      this.$confirm("确定删除吗？", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(() => {
        this.$axios
          .post("http://127.0.0.1:3000/goods/delete", { id: id })
          .then((res) => {
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
        .post("http://127.0.0.1:3000/goods/select", {
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
        .post("http://127.0.0.1:3000/goods/update", {
          id: this.updateform.id,
          name: this.updateform.name,
          master: this.updateform.master,
          package: this.updateform.package,
          prince: this.updateform.prince,
          language: this.updateform.language,
          supplier: this.updateform.supplier,
          status: this.updateform.status,
          type: this.updateform.type,
        })
        .then((req) => {
          this.dialogFormVisible_update = false;
          this.reload();
          this.showproduct();
          this.$message({ message: "修改成功", type: "success" });
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
  },
};
</script>

<style>
#product {
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