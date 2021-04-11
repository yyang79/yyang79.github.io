<template>
  <div id="supplier">
    <div class="search">
      <el-input
        prefix-icon="el-icon-search"
        v-on:keyup.enter.native="psearch()"
        placeholder="请输入查询信息"
        v-model="search"
        clearable
      ></el-input>
    </div>
    <div style="text-align: center">
      <h3 style="color: red">用户资料</h3>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 641px; margin: 0px auto"
    >
      <el-table-column label="用户编号" width="100">
        <template slot-scope="scope">{{ scope.row.userId }}</template>
      </el-table-column>
      <el-table-column label="用户名" width="120">
        <template slot-scope="scope">{{ scope.row.userName }}</template>
      </el-table-column>
      <el-table-column label="密码" width="120">
        <template slot-scope="scope">{{ scope.row.userPad }}</template>
      </el-table-column>
      <el-table-column label="联系电话" width="150">
        <template slot-scope="scope">{{ scope.row.cusTel }}</template>
      </el-table-column>
      <el-table-column label="邮箱" width="150">
        <template slot-scope="scope">{{ scope.row.cusEmail }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      search: "",
    };
  },
  created() {
    this.$axios
      .get("http://127.0.0.1:3000/user")
      .then((res) => {
        this.tableData = res.data;
      })
      .catch((err) => {
        window.console.log(err);
      });
  },
  methods: {
    psearch() {
      this.$axios
        .post("http://127.0.0.1:3000/user/select", { search: this.search })
        .then((res) => {
          this.tableData = res.data;
          this.search = "";
        })
        .catch((err) => {
          window.console.log(err);
        });
    },
  },
};
</script>

<style scoped>
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
  right: 50px;
}
</style>