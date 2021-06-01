<template>
  <div id="saler">
    <el-button
      style="position: absolute; top: 10px; left: 30px"
      type="primary"
      @click="salerVisible_add = true"
      >添加员工</el-button
    >
    <el-dialog
      title="员工添加"
      :visible.sync="salerVisible_add"
      :modal-append-to-body="false"
    >
      <el-form :model="addform">
        <el-form-item label="用户名" :label-width="formLabelWidth + 'px'">
          <el-input
            v-model="addform.userName"
            disabled
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth + 'px'">
          <el-input
            v-model="addform.userPad"
            disabled
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="姓名：" :label-width="formLabelWidth + 'px'">
          <el-input v-model="addform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别：" :label-width="formLabelWidth + 'px'">
          <el-select v-model="addform.sex" placeholder="请选择">
            <el-option
              v-for="item in sexlist"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄：" :label-width="formLabelWidth + 'px'">
          <el-input v-model="addform.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="工资：" :label-width="formLabelWidth + 'px'">
          <el-input v-model="addform.pay" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话：" :label-width="formLabelWidth + 'px'">
          <el-input v-model="addform.tel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址：" :label-width="formLabelWidth + 'px'">
          <el-input v-model="addform.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="salerVisible_add = false">取 消</el-button>
        <el-button type="primary" @click="saleradd()">确 定</el-button>
      </div>
    </el-dialog>
    <el-button
      v-show="proquit"
      style="position: absolute; top: 10px; left: 30px"
      type="primary"
      @click="quit()"
      >返回</el-button
    >
    <div class="search">
      <el-input
        prefix-icon="el-icon-search"
        v-on:keyup.enter.native="psearch()"
        placeholder="请输入员工编号"
        v-model="search"
        clearable
      ></el-input>
    </div>
    <div style="text-align: center">
      <h3 style="color: red">员工资料</h3>
    </div>
    <el-divider></el-divider>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      :header-cell-style="{ background: '#f7f7f7' }"
      style="margin: 30px auto; width: 952px"
    >
      <el-table-column label="用户名" width="100">
        <template slot-scope="scope">
          <span> {{ scope.row.salerId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="100">
        <template slot-scope="scope">
          <span> {{ scope.row.salerName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="50">
        <template slot-scope="scope">
          <span> {{ scope.row.salerSex }}</span>
        </template>
      </el-table-column>
      <el-table-column label="年龄" width="50">
        <template slot-scope="scope">
          <span> {{ scope.row.salerAge }}</span>
        </template>
      </el-table-column>
      <el-table-column label="工资" width="100">
        <template slot-scope="scope">
          <span> {{ scope.row.salerPay }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联系电话" width="150">
        <template slot-scope="scope">
          <span> {{ scope.row.salerTel }}</span>
        </template>
      </el-table-column>
      <el-table-column label="地址" width="200">
        <template slot-scope="scope">
          <span> {{ scope.row.salerAddress }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="100">
        <template slot-scope="scope">
          <span> {{ scope.row.salerStatus }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="salerdelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
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
      addform: {
        userName: "",
        userPad: "123",
        name: "",
        age: "",
        sex: "",
        tel: "",
        address: "",
        pay: "3000.00",
      },
      sexlist: [
        {
          label: "男",
          value: "男",
        },
        {
          label: "女",
          value: "女",
        },
      ],
      currentPage: 1,
      total: 0,
      search: "",
      formLabelWidth: 100,
      show: true,
      proquit: false,
      salerVisible_add: false,
    };
  },
  created: function () {
    this.showproduct();
  },
  methods: {
    showproduct() {
      this.$axios
        .get("/saler")
        .then((res) => {
          if (res.data.length == 0) {
            this.show = false;
          } else {
            this.tableData = res.data;
            this.total = res.data.length;
            var num = res.data.length + 1;
            this.addform.userName = "YG" + this.getnum(num);
          }
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    getnum(num) {
      if (num < 10) {
        return "00" + num;
      } else if (num > 10 || num < 100) {
        return "00" + num;
      } else {
        return num;
      }
    },
    psearch() {
      this.proquit = true;
      this.$axios
        .post("/saler/select", {
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
    saleradd() {
      this.$axios
        .post("/saler/add", {
          data: this.addform,
        })
        .then((res) => {
          if (res.data == "添加成功") {
            this.salerVisible_add = false;
            this.$message.success("添加员工成功");
          } else {
            this.$message.warning("添加员工失败");
          }
          this.showproduct();
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    salerdelete(row) {
      this.$axios
        .post("/saler/delete", {
          id: row.userName,
        })
        .then((res) => {
          if (res.data == "删除成功") {
            this.salerVisible_add = false;
            this.$message.success("删除员工成功");
          } else {
            this.$message.warning("删除员工失败");
          }
          this.showproduct();
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
  },
};
</script>

<style scoped>
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