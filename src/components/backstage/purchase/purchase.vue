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
            v-model="goods"
            filterable
            placeholder="请选择"
            @change="selectchange()"
          >
            <el-option
              v-for="item in goodslist"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input
            v-model="addform.goodsName"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="商品材料" :label-width="formLabelWidth">
          <el-input
            v-model="addform.goodsMaster"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="商品包装" :label-width="formLabelWidth">
          <el-input
            v-model="addform.goodsPackage"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="商品花语" :label-width="formLabelWidth">
          <el-input
            v-model="addform.goodsLanguage"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="供应商" :label-width="formLabelWidth">
          <el-input
            v-model="addform.supName"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input
            v-model="addform.goodsPrice"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="数量" :label-width="formLabelWidth">
          <el-input
            type="number"
            v-model="goodsnum"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="goodsadd()">确 定</el-button>
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
        <el-select v-model="player" placeholder="请选择">
          <el-option
            v-for="item in playerlist"
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
      style="margin: 20px; width: 1050px"
      height="450"
    >
      <el-table-column prop="goodsId" label="商品编号"></el-table-column>
      <el-table-column prop="goodsName" label="商品名称"></el-table-column>
      <el-table-column prop="goodsPrice" label="商品价格"></el-table-column>
      <el-table-column prop="supName" label="供应商"></el-table-column>
      <el-table-column prop="goodsNum" label="数量"> </el-table-column>
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
      title="入库商品信息修改"
      :visible.sync="updateformvisible"
      :modal-append-to-body="false"
    >
      <el-form :model="updateform">
        <el-form-item label="商品编号" :label-width="formLabelWidth">
          <el-input v-model="updateform.goodsId" disabled></el-input>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input
            v-model="updateform.goodsName"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="供应商" :label-width="formLabelWidth">
          <el-input
            v-model="updateform.supName"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input
            v-model="updateform.goodsPrice"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="数量" :label-width="formLabelWidth">
          <el-input
            type="number"
            v-model="updateform.goodsNum"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="goodsupdate()">确 定</el-button>
      </div>
    </el-dialog>
    <div style="float: right">
      <el-button
        style="margin: 10px 50px 10px 0px"
        type="primary"
        @click="add()"
        >添加商品条目</el-button
      >
      <el-button
        style="margin: 10px 50px 10px 0px"
        type="primary"
        @click="submit()"
        >提交入库</el-button
      >
      <el-button
        style="margin: 10px 100px 10px 0px"
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
      tableData: [],
      multipleSelection: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      goodsdata: [],
      addform: [],
      updateform: [],
      updateformvisible: false,

      formLabelWidth: "100px",
      goodslist: [],
      goods: "",
      goodsnum: "",

      playerlist: [
        {
          value: "选项1",
          label: "选项1",
        },
        {
          value: "选项2",
          label: "选项2",
        },
        {
          value: "选项3",
          label: "选项3",
        },
        {
          value: "选项4",
          label: "选项4",
        },
        {
          value: "选项5",
          label: "选项5",
        },
      ],
      player: "",
      value1: "",
      inputval: "",
    };
  },
  beforeCreate: function () {
    this.$axios
      .get("http://127.0.0.1:3000/purchase")
      .then((res) => {
        this.goods = res.data[0].goodsId;
        this.goodsdata = res.data;
        this.addform = this.goodsdata[0];
        for (var i = 0; i < res.data.length; i++) {
          this.goodslist.push({
            value: res.data[i].goodsId,
            label: res.data[i].goodsId,
          });
        }
      })
      .catch((error) => {
        window.console.log(error);
      });
  },
  methods: {
    add() {
      this.dialogFormVisible = true;
    },
    handleEdit(row) {
      this.updateformvisible = true;
      this.updateform = row;
    },
    handleDelete(row) {
      this.$confirm("确定删除吗？", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          for (var i = 0; i < this.tableData.length; i++) {
            if (this.tableData[i].goodsId == row.goodsId) {
              this.tableData.splice(i, 1);
            }
          }
          this.goodslist.push({
            value: row.goodsId,
            label: row.goodsId,
          });
          this.$message({ message: "删除成功", type: "success" });
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    goodsadd() {
      if (this.goodsnum == "") {
        alert("数目不能为空");
      } else {
        this.tableData.push({
          goodsId: this.addform.goodsId,
          goodsName: this.addform.goodsName,
          goodsPrice: this.addform.goodsPrice,
          supName: this.addform.supName,
          goodsNum: this.goodsnum,
        });
        for (var i = 0; i < this.goodslist.length; i++) {
          if (this.goodslist[i].value == this.addform.goodsId) {
            this.goodslist.splice(i, 1);
          }
        }
        this.goods = this.goodslist[0].value;
        for (var i = 0; i < this.goodsdata.length; i++) {
          if (this.goods == this.goodsdata[i].goodsId) {
            this.addform = this.goodsdata[i];
          }
        }
        this.goodsnum = "";
        this.dialogFormVisible = false;
      }
    },
    goodsupdate() {
      for (var i = 0; i < this.goodsdata.length; i++) {
        if (this.updateform.goodsId == this.goodsdata[i].goodsId) {
          this.goodsdata[i].goodsNum = this.updateform.goodsNum;
        }
      }
      this.updateformvisible = false;
      this.$message({message:"修改成功",type:"success"})
    },
    selectchange() {
      for (var i = 0; i < this.goodsdata.length; i++) {
        if (this.goods == this.goodsdata[i].goodsId) {
          this.addform = this.goodsdata[i];
        }
      }
    },
    submit() {
      if (this.value1 == "") {
        alert("请填写入库时间");
      }else if (this.player == "") {
        alert("请填写入库操作人");
      }else{
        alert("提交成功！")
      }
    },
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