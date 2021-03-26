<template>
  <div id="shopcar">
    <Shopcarhead />
    <div class="car-header">
      <el-row>
        <el-col :span="4" :offset="2"
          ><el-image
            :src="shopempty"
            style="
              width: 200px;
              height: 80px;
              margin-top: 50px;
              border: 1px solid #f3f3f3;
            "
          ></el-image
        ></el-col>
        <el-col :span="4" :offset="12"
          ><el-image
            :src="shopempty"
            style="
              width: 200px;
              height: 80px;
              margin-top: 50px;
              border: 1px solid #f3f3f3;
            "
          ></el-image
        ></el-col>
      </el-row>
    </div>
    <div class="car-container">
      <div
        v-show="shoplist"
        style="
          margin: 70px auto;
          height: auto;
          width: 1000px;
          border-radius: 10px;
        "
      >
        <div
          style="
            position: relative;
            top: 0px;
            left: 0px;
            width: auto;
            height: auto;
          "
        >
          <el-table
            :data="tableData"
            @selection-change="handleSelectionChange"
            style="width: 100%; border: 1px solid #f3f3f3"
          >
            <el-table-column type="selection" width="50"> </el-table-column>
            <el-table-column label="商品信息" width="375">
              <template slot-scope="scope">
                <div
                  style="
                    position: relative;
                    top: 0px;
                    left: 0px;
                    width: 375px;
                    height: 100px;
                  "
                >
                  <el-image
                    :src="scope.row.src"
                    style="
                      position: relative;
                      top: 10px;
                      left: 10px;
                      width: 80px;
                      height: 80px;
                      border: 1px solid #f3f3f3;
                    "
                  ></el-image>
                  <div
                    style="
                      position: relative;
                      top: -60px;
                      left: 100px;
                      width: 250px;
                      height: 40px;
                    "
                  >
                    <span>{{ scope.row.describe }}</span>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="市场价" width="150">
              <template slot-scope="scope">
                <span style="margin-left: 10px; text-decoration: line-through"
                  >￥{{ scope.row.prince_1 }}</span
                >
              </template>
            </el-table-column>
            <el-table-column prop="prince_2" label="订购价" width="150">
              <template slot-scope="scope">
                <span style="margin-left: 10px"
                  >￥{{ scope.row.prince_2 }}</span
                >
              </template>
            </el-table-column>
            <el-table-column label="数量" width="150">
              <template slot-scope="scope">
                <el-input-number
                  v-model="scope.row.num"
                  :min="1"
                  :max="10"
                  size="mini"
                  @change="handleChange(scope.row.id, scope.row.num)"
                ></el-input-number>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row.id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div
            style="
              position: relative;
              top: 0px;
              left: 0px;
              margin-top: 20px;
              width: 1000px;
              height: 100px;
              background-color: #f3f3f3;
            "
          >
            <router-link
              style="position: absolute; top: 30px; left: 0px; color: red"
              to="/index"
              >&lt;&lt; 继续购物 GOGOGO</router-link
            >
            <span style="position: absolute; top: 35px; left: 400px">
              应付金额：
              <b style="font-size: 25px; color: red"
                >￥<span>{{ totalprince }}.00</span></b
              >
            </span>
            <el-button
              type="primary"
              style="position: absolute; top: 30px; left: 700px"
              >一键结算</el-button
            >
            <el-button
              type="danger"
              @click="shoplistempty"
              style="position: absolute; top: 30px; left: 800px"
              >清空购物车</el-button
            >
          </div>
        </div>
      </div>
      <div
        v-show="shopnone"
        style="
          margin: 20px auto;
          width: 1000px;
          height: 500px;
          border: 1px solid #f3f3f3;
        "
      >
        <div
          style="
            position: relative;
            top: 0px;
            left: 0px;
            width: 1000px;
            height: auto;
            background-color: #f3f3f3;
          "
        >
          <el-image
            :src="shopempty"
            style="
              position: absolute;
              top: 0px;
              left: 200px;
              width: 601px;
              height: 400px;
            "
          ></el-image>
          <span
            style="
              position: absolute;
              font-size: 30px;
              top: 400px;
              width: auto;
              left: 400px;
            "
            >购物车空空如也</span
          >
          <router-link
            style="position: absolute; top: 450px; left: 800px; color: red"
            to="/index"
            >去购物 GOGOGO >></router-link
          >
        </div>
      </div>
    </div>
    <div class="car-recommend">
      <Recommend />
    </div>
  </div>
</template>

<script>
import Shopcarhead from "../index/header";
import Recommend from "./recommend";
import flower1 from "../../../assets/images/love/2.jpg";
import flower2 from "../../../assets/images/love/3.jpg";
import flower3 from "../../../assets/images/love/4.jpg";
import flower4 from "../../../assets/images/love/5.jpg";
import flower5 from "../../../assets/images/love/6.jpg";
import flower6 from "../../../assets/images/love/7.jpg";
import flower7 from "../../../assets/images/love/8.jpg";
import flower8 from "../../../assets/images/love/9.jpg";
export default {
  name: "shopcar",
  inject: ["reload"],
  components: {
    Recommend,
    Shopcarhead,
  },
  data() {
    return {
      shoplist: false,
      shopnone: false,
      shopempty: flower1,
      tableData: [
        {
          id: 2,
          src: flower2,
          describe:
            "商品描述：李四男出款卡时刻将督促更深刻IU菜单是丢是凡科VS库存VS高度us",
          prince_1: "299.00",
          prince_2: "199.00",
          num: 1,
        },
        {
          id: 3,
          src: flower3,
          describe:
            "商品描述：李四男出款卡时刻将督促更深刻IU菜单是丢是凡科VS库存VS高度us",
          prince_1: "299.00",
          prince_2: "199.00",
          num: 1,
        },
        {
          id: 4,
          src: flower4,
          describe:
            "商品描述：李四男出款卡时刻将督促更深刻IU菜单是丢是凡科VS库存VS高度us",
          prince_1: "299.00",
          prince_2: "199.00",
          num: 1,
        },
        {
          id: 5,
          src: flower5,
          describe:
            "商品描述：李四男出款卡时刻将督促更深刻IU菜单是丢是凡科VS库存VS高度us",
          prince_1: "299.00",
          prince_2: "199.00",
          num: 1,
        },
        {
          id: 6,
          src: flower6,
          describe:
            "商品描述：李四男出款卡时刻将督促更深刻IU菜单是丢是凡科VS库存VS高度us",
          prince_1: "299.00",
          prince_2: "199.00",
          num: 1,
        },
        {
          id: 7,
          src: flower7,
          describe:
            "商品描述：李四男出款卡时刻将督促更深刻IU菜单是丢是凡科VS库存VS高度us",
          prince_1: "299.00",
          prince_2: "199.00",
          num: 1,
        },
        {
          id: 8,
          src: flower8,
          describe:
            "商品描述：李四男出款卡时刻将督促更深刻IU菜单是丢是凡科VS库存VS高度us",
          prince_1: "299.00",
          prince_2: "199.00",
          num: 1,
        },
      ],
      totalprince: "0",
      checklist: [],
    };
  },
  created() {
    this.decide();
  },
  methods: {
    decide() {
      if (this.tableData.length > 0) {
        this.shoplist = true;
      } else {
        this.shopnone = true;
      }
    },
    handleDelete(id) {
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].id == id) {
          this.tableData.splice(i, 1);
          this.$message({ message: "删除成功", type: "success" });
        }
      }
      if (this.tableData.length == 0) {
        this.shoplist = false;
        this.shopnone = true;
      }
    },
    shoplistempty() {
      this.tableData = [];
      if (this.tableData.length == 0) {
        this.shoplist = false;
        this.shopnone = true;
      }
      this.$message({ message: "清空购物车成功", type: "success" });
    },

    handleSelectionChange(val) {
      var total = 0;
      this.checklist = val;
      for (var i = 0; i < this.checklist.length; i++) {
        var x = Number(this.checklist[i].prince_2);
        var all = x * this.checklist[i].num;
        total = all + total;
      }
      this.totalprince = total;
    },
    handleChange(id, num) {
      var total = 0;
      for (var i = 0; i < this.checklist.length; i++) {
        if (this.checklist[i].id == id) {
          this.checklist[i].num = num;
        }
        var x = Number(this.checklist[i].prince_2);
        var all = x * this.checklist[i].num;
        total = all + total;
      }
      this.totalprince = total;
    },
  },
};
</script>

<style>
.car-header {
  width: 100%;
  height: 100px;
  min-width: 1200px;
}
.car-container {
  width: 100%;
  min-width: 1200px;
  height: auto;
}
.car-recommend {
  height: auto;
  width: 100%;
  min-width: 1200px;
}
</style>