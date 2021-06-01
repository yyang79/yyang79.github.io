<template>
  <div
    style="
      width: 98%;
      height: 98%;
      padding: 0px 10px;
      border-left: 1px solid #eee;
      border-top: 1px solid #eee;
    "
  >
    <el-tabs v-model="activeName">
      <el-tab-pane label="退款" name="first">
        <div
          style="width: 90%; height: 200px; margin-bottom: 10px; padding: 10px"
        >
          <span>当前暂无退款信息</span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="退货" name="second">
        <div
          style="width: 90%; height: 200px; margin-bottom: 10px; padding: 10px"
        >
          <span>当前暂无退货信息</span>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{}, {}, {}, {}],
      activeName: "first",
    };
  },
  methods: {},
};
</script>

<style scoped>
.el-form-item .el-input {
  width: 200px;
}
</style>