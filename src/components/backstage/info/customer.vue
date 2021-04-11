<template>
  <div id="customer">
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
        placeholder="请输入供应商编号"
        v-model="search"
        clearable
      ></el-input>
    </div>
    <div style="text-align: center">
      <h3 style="color: red">客户资料</h3>
    </div>
        <el-divider></el-divider>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      :header-cell-style="{ background: '#f7f7f7' }"
      style="width: 801px; margin: 30px auto"
    >
      <el-table-column label="客户昵称" width="100">
        <template slot-scope="scope">
          <span> {{ scope.row.userName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="真实姓名" width="100">
        <template slot-scope="scope">
          <span> {{ scope.row.custrueName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="50">
        <template slot-scope="scope">
          <span> {{ scope.row.cusSex }}</span>
        </template>
      </el-table-column>
      <el-table-column label="年龄" width="50">
        <template slot-scope="scope">
          <span> {{ scope.row.cusAge }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联系电话" width="150">
        <template slot-scope="scope">
          <span> {{ scope.row.cusTel }}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" width="150">
        <template slot-scope="scope">
          <span> {{ scope.row.cusEmail }}</span>
        </template>
      </el-table-column>
      <el-table-column label="地址" width="200">
        <template slot-scope="scope">
          <span> {{ scope.row.cusAddress }}</span>
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
        .get("http://127.0.0.1:3000/customer")
        .then((res) => {
          if (res.data.length == 0) {
            this.show = false;
          } else {
            this.tableData = res.data;
            this.total = res.data.length;
          }
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    psearch() {
      this.proquit = true;
      this.$axios
        .post("http://127.0.0.1:3000/customer/select", {
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