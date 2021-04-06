<template>
  <div id="purchase">
    <h3 style="text-align: center; color: red">库存盘点</h3>
    <div class="formtop">
      <div style="float: left; margin: 10px 30px 0px 50px">
        <span>盘点编号：</span>
        <el-input
          v-model="pdid"
          :disabled="true"
          style="width: 200px"
        ></el-input>
      </div>
      <div style="float: left; margin: 10px 30px 10px 0px">
        <span>盘点时间：</span>
        <el-date-picker
          v-model="time"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </div>
      <div style="float: left; margin: 10px 30px 10px 0px">
        <span>盘点操作人：</span>
        <el-select v-model="player" placeholder="请选择">
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
    >
      <el-table-column prop="name" label="商品编号" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.goodsId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.goodsName }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="价格" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.goodsPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="当前库存数量" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.stockNum }}</span>
        </template>
      </el-table-column>
      <el-table-column label="实际库存数量" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            parseInt(scope.row.stocktrueNum)
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="数量差" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            parseInt(scope.row.stockNum) - parseInt(scope.row.stocktrueNum)
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="金额差" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            (parseInt(scope.row.stockNum) - parseInt(scope.row.stocktrueNum)) *
            parseInt(scope.row.goodsPrice)
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="210">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)"
            >修改实际数量</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="修改商品实际数量"
      :visible.sync="updatevisible"
      :modal-append-to-body="false"
    >
      <el-form :model="updateform">
        <el-form-item label="商品编号" :label-width="formLabelWidth + 'px'">
          <el-input
            v-model="updateform.goodsId"
            disabled
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="formLabelWidth + 'px'">
          <el-input
            v-model="updateform.goodsName"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth + 'px'">
          <el-input
            v-model="updateform.goodsPrice"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="库存量" :label-width="formLabelWidth + 'px'">
          <el-input
            v-model="updateform.stockNum"
            disabled
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="实际库存" :label-width="formLabelWidth + 'px'">
          <el-input
            v-model="updateform.stocktrueNum"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="updateNum">确定</el-button>
      </div>
    </el-dialog>
    <div style="float: right">
      <el-button
        style="margin: 10px 250px 10px 0px"
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
      tableData: [],
      updatevisible: false,
      updateform: [],
      formLabelWidth: "120px",
      options: [
        {
          value: "player-1",
          label: "player-1",
        },
        {
          value: "player-2",
          label: "player-2",
        },
        {
          value: "player-3",
          label: "player-3",
        },
      ],
      time: "",
      player: "",
      pdid: "",
    };
  },
  beforeCreate: function () {
    this.$axios
      .get("http://127.0.0.1:3000/stockcheck")
      .then((res) => {
        this.tableData = res.data;
        var purid = "PD" + this.getdate();
        for (var j = 0; j < 4; j++) {
          purid += Math.round(Math.random() * 10);
        }
        this.pdid = purid;
      })
      .catch((error) => {
        window.console.log(error);
      });
  },
  methods: {
    handleEdit(row) {
      this.updatevisible = true;
      this.updateform = row;
    },
    updateNum() {
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData.goodsId == this.updateform.goodsId) {
          this.tableData.stocktrueNum = parseInt(this.updateform.stocktrueNum);
        }
      }
      this.updatevisible = false;
    },
    submit() {
      if (this.time == "" || this.player == "") {
        alert("请填写盘点时间及盘点操作人");
      } else {
        var stock = {
          stockId: this.pdid,
          stockDate: this.time,
          player: this.player,
        };
        alert(JSON.stringify(stock));
        var list = [];
        for (let i = 0; i < this.tableData.length; i++) {
          list.push({
            goodsId: this.tableData[i].goodsId,
            stocktrueNume: this.tableData[i].stocktrueNum,
          });
        }
        alert(JSON.stringify(list));
        this.$axios
          .post("http://127.0.0.1:3000/stockcheck/submit", {
            stockinfo: stock,
            stocklist: list,
          })
          .then((res) => {
            if (res.data == "添加成功") {
              this.$message({ message: "提交成功", type: "success" });
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
  },
};
</script>

<style scoped>
.formtop {
  width: 100%;
  min-width: 1200px;
}
</style>