<template>
  <div id="sale">
    <h3 style="text-align: center; color: red">商品销售出库</h3>
    <el-dialog
      title="入库商品添加"
      :visible.sync="dialogFormVisible"
      :modal-append-to-body="false"
    >
      <el-form :model="this.$store.state.sale.addform">
        <el-form-item label="商品编号" :label-width="formLabelWidth">
          <el-select
            v-model="this.$store.state.sale.goods"
            filterable
            placeholder="请选择"
            @change="goodsselectchange"
          >
            <el-option
              v-for="item in this.$store.state.sale.goodslist"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input
            :value="this.$store.state.sale.addform.goodsName"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="商品材料" :label-width="formLabelWidth">
          <el-input
            :value="this.$store.state.sale.addform.goodsMaster"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="商品包装" :label-width="formLabelWidth">
          <el-input
            :value="this.$store.state.sale.addform.goodsPackage"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="商品花语" :label-width="formLabelWidth">
          <el-input
            :value="this.$store.state.sale.addform.goodsLanguage"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="供应商" :label-width="formLabelWidth">
          <el-input
            :value="this.$store.state.sale.addform.supName"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input
            :value="this.$store.state.sale.addform.goodsPrice"
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
        <el-button @click="addgoodsquit">取 消</el-button>
        <el-button type="primary" @click="goodsadd()">确 定</el-button>
      </div>
    </el-dialog>
    <div class="formtop">
      <div style="float: left; margin: 10px">
        <span>出库编号：</span>
        <el-input
          v-model="outid"
          :disabled="true"
          style="width: 200px"
        ></el-input>
      </div>
      <div style="float: left; margin: 10px">
        <span>出库时间：</span>
        <el-date-picker
          v-model="date"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </div>
      <div style="float: left; margin: 10px">
        <span>出库操作人：</span>
        <el-select
          v-model="this.$store.state.sale.player"
          placeholder="请选择"
          @change="playerselectchange"
        >
          <el-option
            v-for="item in this.$store.state.sale.playerlist"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div style="float: left; margin: 10px">
        <span>总金额：</span>
        <el-input v-model="totalmoney" disabled style="width: 150px">
        </el-input>
      </div>
    </div>
    <el-table
      ref="multipleTable"
      :data="this.$store.state.sale.tableData"
      border
      tooltip-effect="dark"
      :header-cell-style="{ background: '#f7f7f7' }"
      style="margin: 20px auto; width: 1202px"
    >
      <el-table-column label="商品编号" width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.goodsId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.goodsName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品价格" width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.goodsPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column label="供应商" width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.supName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="数量" width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.goodsNum }}</span>
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
      title="入库商品信息修改"
      :visible.sync="updateformvisible"
      :modal-append-to-body="false"
    >
      <el-form :model="this.$store.state.sale.updateform">
        <el-form-item label="商品编号" :label-width="formLabelWidth">
          <el-input
            v-model="this.$store.state.sale.updateform.goodsId"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input
            v-model="this.$store.state.sale.updateform.goodsName"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="供应商" :label-width="formLabelWidth">
          <el-input
            v-model="this.$store.state.sale.updateform.supName"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input
            v-model="this.$store.state.sale.updateform.goodsPrice"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="数量" :label-width="formLabelWidth">
          <el-input
            type="number"
            v-model="updatenum"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="updateformvisible = false">取 消</el-button>
        <el-button type="primary" @click="goodsupdate()">确 定</el-button>
      </div>
    </el-dialog>
    <div style="float: right">
      <el-button
        style="margin: 10px 50px 10px 0px"
        type="primary"
        @click="add()"
        >添加出库条目</el-button
      >
      <el-button
        style="margin: 10px 50px 10px 0px"
        type="primary"
        @click="submit()"
        >提交出库</el-button
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
  computed: {
    date: {
      get() {
        return this.$store.state.sale.date;
      },
      set(val) {
        return this.$store.commit("sale/datechange", val);
      },
    },
    updatenum: {
      get() {
        return this.$store.state.sale.updateform.goodsNum;
      },
      set(val) {
        return this.$store.commit("sale/updatenum", val);
      },
    },
    goodsnum: {
      get() {
        return this.$store.state.sale.goodsnum;
      },
      set(val) {
        return this.$store.commit("sale/goodsnum", val);
      },
    },
  },
  data() {
    return {
      formLabelWidth: "100px",
      dialogTableVisible: false,
      dialogFormVisible: false,
      updateformvisible: false,

      tableData: [],
      updateform: [],
      addform: [],

      outid: "",
      totalmoney: 0,
    };
  },
  beforeCreate: function () {
    this.$axios
      .get("http://127.0.0.1:3000/sale")
      .then((res) => {
        this.$store.commit("sale/goodsdata", res.data);
        var num = this.$store.state.sale.num;
        for (var i = 0; i < res.data.length; i++) {
          if (num < res.data.length) {
            this.$store.commit("sale/goodslist", {
              value: res.data[i].goodsId,
              lable: res.data[i].goodsId,
            });
            this.$store.commit("sale/countnum", num + res.data.length);
          }
        }
        var purid = "CK" + this.getdate();
        for (var j = 0; j < 4; j++) {
          purid += Math.round(Math.random() * 10);
        }
        this.outid = purid;
      })
      .catch((error) => {
        window.console.log(error);
      });
  },
  methods: {
    playerselectchange(val) {
      this.$store.commit("sale/playerchange", val);
    },
    goodsselectchange(val) {
      this.$store.commit("sale/selectchange", val);
      var list = this.$store.state.sale.goodsdata;
      for (var i = 0; i < list.length; i++) {
        if (val == list[i].goodsId) {
          this.$store.commit("sale/addform", list[i]);
        }
      }
    },
    add() {
      this.dialogFormVisible = true;
    },
    handleEdit(row) {
      this.updateformvisible = true;
      this.$store.commit("sale/updateform", row);
    },
    handleDelete(row) {
      this.$confirm("确定删除吗？", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          var tableData = this.$store.state.sale.tableData;
          for (var i = 0; i < tableData.length; i++) {
            if (tableData[i].goodsId == row.goodsId) {
              this.$store.commit("sale/tableDatadelete", i);
              this.$message({ message: "删除成功", type: "success" });
              this.$store.commit("sale/goodslist", {
                value: row.goodsId,
                lable: row.goodsId,
              });
            }
          }
          this.$store.commit("sale/goodslistsort");
          var money = 0;
          for (var j = 0; j < tableData.length; j++) {
            money += tableData[j].goodsPrice * tableData[j].goodsNum;
          }
          this.totalmoney = money;
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    addgoodsquit() {
      this.dialogFormVisible = false;
      this.$store.commit("sale/goods", "");
      this.$store.commit("sale/goodsnum", "");
    },
    goodsadd() {
      var goods = this.$store.state.sale.goods;
      if (goods == "") {
        alert("请选择商品条目");
      } else if (this.goodsnum == "") {
        alert("商品数目不能为空");
      } else {
        var list = this.$store.state.sale.addform;
        var goodsnum = this.$store.state.sale.goodsnum;
        this.$store.commit("sale/tableDataadd", {
          goodsId: list.goodsId,
          goodsName: list.goodsName,
          goodsPrice: list.goodsPrice,
          num: list.stockNum,
          supName: list.supName,
          goodsNum: goodsnum,
        });
        var tableData = this.$store.state.sale.tableData;
        var money = 0;
        for (var j = 0; j < tableData.length; j++) {
          money += tableData[j].goodsPrice * tableData[j].goodsNum;
        }
        this.totalmoney = money;
        var goodslist = this.$store.state.sale.goodslist;
        for (var i = 0; i < goodslist.length; i++) {
          if (goodslist[i].value == list.goodsId) {
            goodslist.splice(i, 1);
          }
        }
        this.$store.commit("sale/goods", "");
        this.$store.commit("sale/goodsnum", "");
        this.$store.commit("sale/addform", []);
        this.dialogFormVisible = false;
      }
    },
    goodsupdate() {
      var tableData = this.$store.state.sale.tableData;
      var updateform = this.$store.state.sale.updateform;
      for (var i = 0; i < tableData.length; i++) {
        if (updateform.goodsId == tableData[i].goodsId) {
          tableData[i].goodsNum = updateform.goodsNum;
        }
      }
      this.$store.commit("sale/tableDatachange", tableData);
      this.updateformvisible = false;
      this.$message({ message: "修改成功", type: "success" });
      var money = 0;
      for (var j = 0; j < tableData.length; j++) {
        money += tableData[j].goodsPrice * tableData[j].goodsNum;
      }
      this.totalmoney = money;
    },

    submit() {
      var player = this.$store.state.sale.player;
      var goodslist = this.$store.state.sale.goodslist;
      if (this.date == "" || this.date == null) {
        alert("请填写入库时间");
      } else if (player == "") {
        alert("请填写入库操作人");
      } else {
        var tableData = this.$store.state.sale.tableData;
        var list = [];
        for (var i = 0; i < tableData.length; i++) {
          list.push({
            goodsId: tableData[i].goodsId,
            goodsNum:
              parseInt(tableData[i].num) - parseInt(tableData[i].goodsNum),
            num: tableData[i].goodsNum,
          });
          goodslist.push({
            value: tableData[i].goodsId,
            lable: tableData[i].goodsId,
          });
        }
        this.$store.commit("sale/goodslistsort");

        this.$axios
          .post("http://127.0.0.1:3000/sale/submit", {
            id: this.outid,
            date: this.date,
            player: player,
            goodslist: list,
            totalmoney: this.totalmoney,
          })
          .then((res) => {
            if (res.data == "添加成功") {
              this.$message({ message: "提交成功", type: "success" });
              this.$store.commit("sale/goods", "");
              this.$store.commit("sale/goodsnum", "");
              this.$store.commit("sale/addform", []);
              this.$store.commit("sale/tableData", []);
              this.$store.commit("sale/datechange", "");
              this.$store.commit("sale/playerchange", "");
              this.totalmoney = 0;
              this.inputval = "CK" + this.getdate();
              for (var j = 0; j < 4; j++) {
                this.outid += Math.round(Math.random() * 10);
              }
            } else {
              this.$message({ message: "提交失败", type: "warning" });
            }
          })
          .catch((error) => {
            window.console.log(error);
          });
      }
    },
    getdate() {
      var myDate = new Date();
      var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      var myToday = myDate.getDate(); //获取当前日(1-31)
      var myHour = myDate.getHours(); //获取当前小时数(0-23)
      var myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
      var mySecond = myDate.getSeconds(); //获取当前秒数(0-59)
      var time =
        myYear +
        this.fillZero(myMonth) +
        this.fillZero(myToday) +
        this.fillZero(myHour) +
        this.fillZero(myMinute) +
        this.fillZero(mySecond);
      return time;
    },
    fillZero(val) {
      var realNum;
      if (val < 10) {
        realNum = "0" + val;
      } else {
        realNum = val;
      }
      return realNum;
    },
    recovery() {
      alert(JSON.stringify(this.$store.state.sale.num));
    },
  },
};
</script>

<style scoped>
#sale {
  margin: 20px;
  height: auto;
  width: 100%-20px;
  min-width: 1240px;
}
.formtop {
  width: 100%;
  min-width: 1200px;
  margin: 10px auto;
}
</style>