<template>
  <div id="historypurchase">
    <h3 style="text-align: center; color: red">订单列表</h3>
    <el-tabs style="padding:0px 20px" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="dcl" name="first"
        ><el-table
          ref="multipleTable"
          :data="orderlist1"
          border
          tooltip-effect="dark"
          :header-cell-style="{ background: '#f7f7f7' }"
          style="width: 1011px; margin: 0px auto"
        >
          <el-table-column prop="orderId" label="订单编号" width="200">
          </el-table-column>
          <el-table-column label="订单创建时间" width="200">
            <template slot-scope="scope">{{ scope.row.orderDate }}</template>
          </el-table-column>
          <el-table-column prop="userName" label="创立建昵称" width="140">
          </el-table-column>
          <el-table-column prop="orderDtatus" label="订单状态" width="150">
          </el-table-column>
          <el-table-column prop="orderRemark" label="备注" width="200">
          </el-table-column>
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleOrder(scope.row)"
                >订单处理</el-button
              >
            </template>
          </el-table-column>
        </el-table></el-tab-pane
      >
      <el-tab-pane :label="ycl" name="second">
        <el-table
          ref="multipleTable"
          :data="orderlist2"
          border
          tooltip-effect="dark"
          :header-cell-style="{ background: '#f7f7f7' }"
          style="width: 1011px; margin: 0px auto"
        >
          <el-table-column prop="orderId" label="订单编号" width="200">
          </el-table-column>
          <el-table-column label="订单创建时间" width="200">
            <template slot-scope="scope">{{ scope.row.orderDate }}</template>
          </el-table-column>
          <el-table-column prop="userName" label="创立建昵称" width="140">
          </el-table-column>
          <el-table-column prop="orderDtatus" label="订单状态" width="150">
          </el-table-column>
          <el-table-column prop="orderRemark" label="备注" width="200">
          </el-table-column>
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleOrder(scope.row)"
                >查看详情</el-button
              >
            </template>
          </el-table-column>
        </el-table></el-tab-pane
      >
      <el-tab-pane :label="ywc" name="third">
        <el-table
          ref="multipleTable"
          :data="orderlist3"
          border
          tooltip-effect="dark"
          :header-cell-style="{ background: '#f7f7f7' }"
          style="width: 1011px; margin: 0px auto"
        >
          <el-table-column prop="orderId" label="订单编号" width="200">
          </el-table-column>
          <el-table-column label="订单创建时间" width="200">
            <template slot-scope="scope">{{ scope.row.orderDate }}</template>
          </el-table-column>
          <el-table-column prop="userName" label="创立建昵称" width="140">
          </el-table-column>
          <el-table-column prop="orderDtatus" label="订单状态" width="150">
          </el-table-column>
          <el-table-column prop="orderRemark" label="备注" width="200">
          </el-table-column>
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleOrder(scope.row)"
                >查看详情</el-button
              >
            </template>
          </el-table-column>
        </el-table></el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "historypurchase",
  data() {
    return {
      orderlist1: [],
      orderlist2: [],
      orderlist3: [],
      activeName:"first",
      dcl:'',
      ycl:'',
      ywc:'',
    };
  },
  created: function () {
    this.$axios
      .get("/order")
      .then((res) => {
        for(let i=0;i<res.data.length;i++){
          switch(res.data[i].orderDtatus){
            case "待发货" :
                 this.orderlist1.push((res.data[i]));
                 break;
            case "待收货" :
                 this.orderlist2.push((res.data[i]));
                 break;
            case "已收货" :
                this.orderlist3.push((res.data[i]));
                break;
          }
        }
        this.dcl = "待处理("+this.orderlist1.length+")";
        this.ycl = "已处理("+this.orderlist2.length+")";
        this.ywc = "已完成("+this.orderlist3.length+")";
      })
      .catch((error) => {
        window.console.log(error);
      });
  },
  methods: {
    handleOrder(row) {
      this.$router.push({
        path: `/order/details/${row.orderId}`,
      });
    },
  },
};
</script>

<style scoped>
</style>