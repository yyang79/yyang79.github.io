<template>
  <div id="movenav">
    <div class="movenav">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ type }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="classify">
        <div
          style="border-bottom: 1px dashed gray; border-top: 1px dashed gray"
        >
          <span>用途：</span>
          <p>
            <router-link :to="{ path: '/move', query: { keyword: '生日' } }"
              >生日</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '婚庆' } }"
              >婚庆</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '探望' } }"
              >探望</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '哀思' } }"
              >哀思</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '道歉' } }"
              >道歉</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '祝福' } }"
              >祝福</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '求婚' } }"
              >求婚</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '纪念' } }"
              >纪念</router-link
            >
          </p>
        </div>
        <div style="border-bottom: 1px dashed gray">
          <span>花材：</span>
          <p>
            <router-link :to="{ path: '/move', query: { keyword: '玫瑰花' } }"
              >玫瑰花</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '康乃馨' } }"
              >康乃馨</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '向日葵' } }"
              >向日葵</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '百合花' } }"
              >百合花</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '扶郎花' } }"
              >扶郎花</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '蓝色妖姬' } }"
              >蓝色妖姬</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '满天星' } }"
              >满天星</router-link
            >
          </p>
        </div>
        <div style="border-bottom: 1px dashed gray">
          <span>对象：</span>
          <p>
            <router-link :to="{ path: '/move', query: { keyword: '恋人' } }"
              >恋人</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '父母' } }"
              >父母</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '妻子' } }"
              >妻子</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '老师' } }"
              >老师</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '老师' } }"
              >朋友</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '长辈' } }"
              >长辈</router-link
            >
          </p>
        </div>
        <div style="border-bottom: 1px dashed gray">
          <span>枝数：</span>
          <p>
            <router-link :to="{ path: '/move', query: { keyword: '1枝' } }"
              >9枝</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '11枝' } }"
              >11枝</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '19枝' } }"
              >19枝</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '21枝' } }"
              >21枝</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '33枝' } }"
              >33枝</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '50枝' } }"
              >50枝</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '55枝' } }"
              >55枝</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '99枝' } }"
              >99枝</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '101枝' } }"
              >101枝</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '108枝' } }"
              >108枝</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '365枝' } }"
              >365枝</router-link
            >
            <router-link :to="{ path: '/move', query: { keyword: '999枝' } }"
              >999枝</router-link
            >
          </p>
        </div>
      </div>
      <div class="showflower">
        <div class="flowerlist" v-show="haveflower">
          <div
            v-for="flower in this.$store.state.move.flowers"
            :key="flower.goodsName"
          >
            <router-link
              :to="{
                path: '/detailpage',
                query: { goodsName: flower.goodsName },
              }"
            >
              <el-image :src="flower.goodsUrl"></el-image>
              <span
                style="
                  overflow: hidden;
                  text-overflow: ellipsis;
                  -o-text-overflow: ellipsis;
                  white-space: nowrap;
                  width: 150px;
                  height: 24px;
                  display: block;
                  position: relative;
                  top: 10px;
                  left: 10px;
                "
                >{{ flower.goodsName }}</span
              ><br />
              <span
                style="
                  color: red;
                  font-size: 20px;
                  position: relative;
                  top: 0px;
                  left: 10px;
                "
                >￥{{ flower.goodsPrice }}.00</span
              >
              <small style="position: relative; top: 10px; left: 30px"
                >已售{{ flower.sallnum }}</small
              ></router-link
            >
          </div>
        </div>
        <div
          v-show="emptyflower"
          style="width: 100%; min-width: 1200px; min-height: 600px"
        >
          <p style="text-align: center">当前暂无搜索结果,请重新输入查询条件</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.type = this.$route.query.keyword;
    this.$axios
      .post("/move", { search: this.$route.query.keyword })
      .then((res) => {
        if (res.data.length == 0) {
          this.$store.dispatch("move/emptyf");
        } else {
          var list = [];
          for (let i = 0; i < res.data.length; i++) {
            res.data[
              i
            ].goodsUrl = require("../../../../../stytemdata/assets/images/" +
              res.data[i].goodsUrl +
              "");
            list.push(res.data[i]);
          }
          this.$store.dispatch("move/havef", list);
          
        }
      })
      .catch((err) => {
        window.console.log(err);
      });
  },
  computed: {
    ...mapState("move", ["moveto", "haveflower", "emptyflower"]),
  },
  data() {
    return {
      type: "",
    };
  },
};
</script>

<style scoped>
#movenav {
  width: 100%;
  min-width: 1200px;
}
.movenav {
  position: relative;
  top: 0px;
  left: 50%;
  width: 1200px;
  height: 300px;
  margin-left: -600px;
}
.breadcrumb {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
  margin-bottom: 10px;
}
.classify {
  position: absolute;
  top: 50px;
  left: 0px;
  width: 100%;
  height: 250px;
}
.classify div {
  width: 100%;
  height: 60px;
}

.classify div span {
  position: relative;
  top: 20px;
  left: 10px;
  font-weight: 800;
}

.classify div p {
  position: relative;
  top: -20px;
  left: 80px;
  width: 1100px;
  height: 30px;
  background-color: chocolate;
}

.showflower {
  position: absolute;
  top: 320px;
  left: 0px;
  width: 1200px;
  height: auto;
  background-color: #e3e3e3;
}

.flowerlist > div {
  float: left;
  width: 210px;
  height: 300px;
  margin: 15px;
  background-color: white;
}

.flowerlist > div:hover {
  box-shadow: 0 0 10px 5px gray;
}

.flowerlist div a .el-image {
  padding: 0px;
  margin: 5px;
  width: 200px;
  height: 200px;
}
.flowerlist a div small {
  position: relative;
  bottom: 0px;
  left: 100px;
}
.flowerlist a div b {
  position: relative;
  bottom: -10px;
  left: 25px;
  color: red;
  font-size: 20px;
}
.flowerlist a div span {
  position: relative;
  bottom: 0px;
  left: 10px;
}
p a {
  margin: 0 10px;
  padding-top: 5px;
}
</style>