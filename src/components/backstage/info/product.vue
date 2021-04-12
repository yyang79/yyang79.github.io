<template>
  <div id="product">
    <div class="add">
      <el-button @click="dialogFormVisible_add = true">新建商品信息</el-button>
      <el-button v-show="proquit" @click="quit()">返回</el-button>
      <el-dialog
        title="商品添加"
        :visible.sync="dialogFormVisible_add"
        :modal-append-to-body="false"
      >
        <el-form :model="addform">
          <el-form-item label="商品编号" :label-width="formLabelWidth + 'px'">
            <el-input
              v-model="addform.id"
              disabled
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="商品名称" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.name" autocomplete="off"></el-input>
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
          <el-form-item label="商品价格" :label-width="formLabelWidth + 'px'">
            <el-input v-model="addform.price" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="供应商" :label-width="formLabelWidth + 'px'">
            <el-select v-model="addform.supplier" placeholder="请选择">
              <el-option
                v-for="item in supplierlist"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品状态" :label-width="formLabelWidth + 'px'">
            <el-select v-model="addform.status" placeholder="请选择">
              <el-option
                v-for="item in statuslist"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品类型" :label-width="formLabelWidth + 'px'">
            <el-select v-model="addform.type" placeholder="请选择">
              <el-option
                v-for="item in typelist"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
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
        placeholder="请输入商品关键词"
        v-model="search"
        clearable
      ></el-input>
    </div>
    <div style="text-align: center">
      <h3 style="color: red">商品信息资料</h3>
    </div>
    <el-divider></el-divider>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      style="margin: 10px auto; width: 951px"
      tooltip-effect="dark"
      :header-cell-style="{ background: '#f7f7f7' }"
    >
      <el-table-column
        prop="goodsId"
        label="商品编号"
        width="100"
      ></el-table-column>
      <el-table-column label="商品名称" width="200">
        <template slot-scope="scope">
          <el-popover placement="right" width="400" trigger="hover">
            <el-row :gutter="20">
              <el-col :span="6"
                ><span style="float: right">材料：</span></el-col
              >
              <el-col :span="18">{{ scope.row.goodsMaster }}</el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6"
                ><span style="float: right">包装：</span></el-col
              >
              <el-col :span="18">{{ scope.row.goodsPackage }}</el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6"
                ><span style="float: right">花语：</span></el-col
              >
              <el-col :span="18">{{ scope.row.goodsLanguage }}</el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6"
                ><span style="float: right">图片：</span></el-col
              >
              <el-col :span="18"
                ><el-image
                  style="width: 100px; height: 100px"
                  :src="scope.row.goodsUrl"
                ></el-image
              ></el-col>
            </el-row>
            <el-button size="mini" type="primary" slot="reference">{{
              scope.row.goodsName
            }}</el-button>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="goodsPrice"
        label="商品价格"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="supName"
        label="供应商"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="goodsStatus"
        label="商品状态"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="typeName"
        label="商品类型"
        width="100"
      ></el-table-column>
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
      title="商品信息修改"
      :visible.sync="dialogFormVisible_update"
      :modal-append-to-body="false"
    >
      <el-form :model="updateform">
        <el-form-item label="商品编号" :label-width="formLabelWidth + 'px'">
          <el-input
            v-model="updateform.id"
            disabled
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品材料" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.master" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品包装" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.package" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品花语" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.language" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth + 'px'">
          <el-input v-model="updateform.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商" :label-width="formLabelWidth + 'px'">
          <el-select v-model="updateform.supplier" placeholder="请选择">
            <el-option
              v-for="item in supplierlist"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品状态" :label-width="formLabelWidth + 'px'">
          <el-select v-model="updateform.status" placeholder="请选择">
            <el-option
              v-for="item in statuslist"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品类型" :label-width="formLabelWidth + 'px'">
          <el-select v-model="updateform.type" placeholder="请选择">
            <el-option
              v-for="item in typelist"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
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
        :current-change="pagechange"
        :prev-click="prev"
        :next-click="next"
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
        url:'',
        master: "",
        package: "",
        price: "",
        language: "",
        supplier: "",
        status: "",
        type: "",
      },
      updateform: {
        id: "",
        name: "",
        master: "",
        package: "",
        price: "",
        language: "",
        supplier: "",
        status: "",
        type: "",
      },
      statuslist: [
        { label: "在售", value: "在售" },
        { label: "停售", value: "停售" },
      ],
      dialogFormVisible_add: false,
      dialogFormVisible_update: false,
      formLabelWidth: 100,
      currentPage: 1,
      total: 0,
      search: "",
      show: true,
      proquit: false,
      supplierlist: [],
      typelist: [],
    };
  },
  created: function () {
    this.showproduct();
    this.$axios
      .get("http://127.0.0.1:3000/type")
      .then((res) => {
        var list = [];
        for (let i = 0; i < res.data.length; i++) {
          list.push({
            value: res.data[i].typeName,
            label: res.data[i].typeName,
          });
        }
        var hash = {};
        list = list.reduce(function (item, next) {
          hash[next.value] ? "" : (hash[next.value] = true && item.push(next));
          return item;
        }, []);
        this.typelist = list;
      })
      .catch((error) => {
        window.console.log(error);
      });
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
          var list = [];
          for (let i = 0; i < res.data.length; i++) {
            list.push({
              value: res.data[i].supName,
              label: res.data[i].supName,
            });
          }
          var hash = {};
          list = list.reduce(function (item, next) {
            hash[next.value]
              ? ""
              : (hash[next.value] = true && item.push(next));
            return item;
          }, []);
          this.supplierlist = list;
          var goodid = "SP_";
          goodid += res.data.length + 1;
          this.addform.id = goodid;
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
          price: this.addform.price,
          language: this.addform.language,
          supplier: this.addform.supplier,
          status: this.addform.status,
          type: this.addform.type,
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
      this.updateform.id = row.goodsId;
      this.updateform.name = row.goodsName;
      this.updateform.master = row.goodsMaster;
      this.updateform.package = row.goodsPackage;
      this.updateform.price = row.goodsPrice;
      this.updateform.language = row.goodsLanguage;
      this.updateform.supplier = row.supName;
      this.updateform.status = row.goodsStatus;
      this.updateform.type = row.typeName;
    },
    handleDelete(row) {
      var id = row.goodsId;
      this.$confirm("确定删除吗？", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(() => {
        this.$axios
          .post("http://127.0.0.1:3000/goods/delete", { id: id })
          .then((res) => {
            alert(res.data);
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
          price: this.updateform.price,
          language: this.updateform.language,
          supplier: this.updateform.supplier,
          status: this.updateform.status,
          type: this.updateform.type,
        })
        .then((req) => {
          if (req.data == "更新成功") {
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
    pagechange() {},
    prev() {},
    next() {},
  },
};
</script>

<style scoped>
#product {
  width: 100%;
}
.add {
  position: absolute;
  top: 10px;
  left: 80px;
}
.search {
  position: absolute;
  width: 200px;
  top: 10px;
  left: 50%;
  margin-left: 200px;
}
.el-form .el-form-item .el-input {
  width: 400px;
}
</style>