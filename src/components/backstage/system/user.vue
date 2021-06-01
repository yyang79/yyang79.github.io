<template>
  <div id="supplier">
    <div class="search">
      <el-input
        prefix-icon="el-icon-search"
        v-on:keyup.enter.native="psearch()"
        placeholder="请输入用户名"
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
      style="width: 681px; margin: 0px auto"
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
      <el-table-column label="用户类型" width="120">
        <template slot-scope="scope">{{ scope.row.userType }}</template>
      </el-table-column>
      <el-table-column label="用户状态" width="120">
        <template slot-scope="scope">
          <span :class="scope.row.userStatus == '启用' ? 'color1' : 'color2'">{{
            scope.row.userStatus
          }}</span></template
        >
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            :class="scope.row.userStatus == '启用' ? 'hide' : 'show'"
            size="mini"
            type="primary"
            @click="userEnableedit(scope.row)"
            >启用</el-button
          >
          <el-button
            style="margin: 0px"
            :class="scope.row.userStatus == '启用' ? 'show' : 'hide'"
            size="mini"
            type="danger"
            @click="userLimitedit(scope.row)"
            >禁用</el-button
          >
        </template>
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
    this.getdata();
  },
  methods: {
    userEnableedit(row) {
      this.$axios
        .post("/user/enable", { id: row.userName })
        .then((res) => {
          if ((res.data = "更新成功")) {
            this.$message.success("用户启用成功");
          } else {
            this.$message.warning("用户启用失败");
          }
          this.getdata();
        })
        .catch((err) => {
          window.console.log(err);
        });
    },
    userLimitedit(row) {
      this.$axios
        .post("/user/limit", { id: row.userName })
        .then((res) => {
          if ((res.data = "更新成功")) {
            this.$message.success("用户禁用成功");
          } else {
            this.$message.warning("用户禁用失败");
          }
          this.getdata();
        })
        .catch((err) => {
          window.console.log(err);
        });
    },
    psearch() {
      this.$axios
        .post("/user/select", { search: this.search })
        .then((res) => {
          this.tableData = res.data;
        })
        .catch((err) => {
          window.console.log(err);
        });
    },
    getdata() {
      this.$axios
        .get("/user")
        .then((res) => {
          this.tableData = res.data;
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
.show {
  display: block;
}
.hide {
  display: none;
}
.color1 {
  color: #3a8ee6;
}
.color2 {
  color: red;
}
</style>