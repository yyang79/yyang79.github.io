<template>
  <div class="head">
    <div class="logo">
      <el-image :src="logo"></el-image>
    </div>
    <div class="search">
      <el-input
        prefix-icon="el-icon-search"
        placeholder="请输入商品关键词"
        v-model="search"
        style="margin-bottom: 10px; width: 300px"
      >
      </el-input>
      <el-upload
        style="position: absolute; top: 1px; left: 250px"
        action="http://127.0.0.1:3000/search/img"
        :on-success="uploadsuccess"
        :limit="1"
      >
        <el-button size="small" style="border: 0"
          ><i class="el-icon-camera" style="font-size: 19px"></i
        ></el-button>
      </el-upload>
      <el-button
        style="margin-bottom: 10px"
        type="primary"
        @click="searchf(search)"
        >搜索</el-button
      ><br />
      <span>推荐：</span>
      <router-link :to="{ path: '/move', query: { keyword: 'Love' } }"
        >爱情</router-link
      >
      <router-link :to="{ path: '/move', query: { keyword: 'Friend' } }"
        >友情</router-link
      >
      <router-link :to="{ path: '/move', query: { keyword: 'Basket' } }"
        >花篮</router-link
      >
      <router-link :to="{ path: '/move', query: { keyword: 'Cake' } }"
        >蛋糕</router-link
      >
    </div>
    <div class="tel">
      <b>Tel:000-0000-0000</b>
    </div>
    <div class="nav-top">
      <div class="nav-top-span">
        <span
          @click="navstatuschange"
          style="
            color: white;
            position: absolute;
            top: 15px;
            left: 10px;
            width: 220px;
            font-size: 25px;
          "
          icon="el-icon-s-unfold"
        >
          全部商品导航<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <div class="navhide" v-show="this.$store.state.index.allnav">
          <div>
            <li>
              <el-popover
                placement="right"
                width="650"
                visible-arrow="false"
                trigger="hover"
              >
                <div>
                  <router-link
                    :to="{ path: '/move', query: { keyword: '热卖鲜花' } }"
                    >热卖鲜花</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '新款上市' } }"
                    >新款上市</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '女神最爱' } }"
                    >女神最爱</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '生日鲜花' } }"
                    >生日鲜花</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '节日鲜花' } }"
                    >节日鲜花</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '礼品' } }"
                    >礼品</router-link
                  >
                </div>
                <el-button slot="reference">热门分类</el-button>
              </el-popover>
            </li>
            <li>
              <el-popover
                placement="right"
                width="650"
                visible-arrow="false"
                trigger="hover"
              >
                <div>
                  <router-link
                    :to="{ path: '/move', query: { keyword: '爱情' } }"
                    >爱情</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '生日' } }"
                    >生日</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '婚庆' } }"
                    >婚庆</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '友情' } }"
                    >友情</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '探望' } }"
                    >探望</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '哀思' } }"
                    >哀思</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '道歉' } }"
                    >道歉</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '祝福' } }"
                    >祝福</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '求婚' } }"
                    >求婚</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '纪念' } }"
                    >纪念</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '开业花篮' } }"
                    >开业花篮</router-link
                  >
                </div>
                <el-button slot="reference">按用途分类</el-button>
              </el-popover>
            </li>
            <li>
              <el-popover
                placement="right"
                width="650"
                visible-arrow="false"
                trigger="hover"
              >
                <div>
                  <router-link
                    :to="{ path: '/move', query: { keyword: '恋人' } }"
                    >恋人</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '父母' } }"
                    >父母</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '妻子' } }"
                    >妻子</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '老师' } }"
                    >老师</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '朋友' } }"
                    >朋友</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '长辈' } }"
                    >长辈</router-link
                  >
                </div>
                <el-button slot="reference">按对象分类</el-button>
              </el-popover>
            </li>
            <li>
              <el-popover
                placement="right"
                width="650"
                visible-arrow="false"
                trigger="hover"
              >
                <div>
                  <router-link
                    :to="{ path: '/move', query: { keyword: '玫瑰花' } }"
                    >玫瑰花</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '康乃馨' } }"
                    >康乃馨</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '向日葵' } }"
                    >向日葵</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '百合花' } }"
                    >百合花</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '扶郎花' } }"
                    >扶郎花</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '花篮' } }"
                    >花篮</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '蓝色妖姬' } }"
                    >蓝色妖姬</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '绿植' } }"
                    >绿植</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '巧克力' } }"
                    >巧克力</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '礼盒花' } }"
                    >礼盒花</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '满天星' } }"
                    >满天星</router-link
                  >
                </div>
                <el-button slot="reference">按花材分类</el-button>
              </el-popover>
            </li>
            <li>
              <el-popover
                placement="right"
                width="650"
                visible-arrow="false"
                trigger="hover"
              >
                <div>
                  <router-link
                    :to="{ path: '/move', query: { keyword: '9朵' } }"
                    >9朵</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '11朵' } }"
                    >11朵</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '19朵' } }"
                    >19朵</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '21朵' } }"
                    >21朵</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '33朵' } }"
                    >33朵</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '50朵' } }"
                    >50朵</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '55朵' } }"
                    >55朵</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '99朵' } }"
                    >99朵</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '101朵' } }"
                    >101朵</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '108朵' } }"
                    >108朵</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '365朵' } }"
                    >365朵</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '999朵' } }"
                    >999朵</router-link
                  >
                </div>
                <el-button slot="reference">按朵数分类</el-button>
              </el-popover>
            </li>
            <li>
              <el-popover
                placement="right"
                width="650"
                visible-arrow="false"
                trigger="hover"
              >
                <div>
                  <router-link
                    :to="{ path: '/move', query: { keyword: '情人节' } }"
                    >情人节</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '母亲节' } }"
                    >母亲节</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '父亲节' } }"
                    >父亲节</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '七夕节' } }"
                    >七夕节</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '中秋节' } }"
                    >中秋节</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '清明节' } }"
                    >清明节</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '国庆节' } }"
                    >国庆节</router-link
                  >
                </div>
                <el-button slot="reference">按节日分类</el-button>
              </el-popover>
            </li>
            <li>
              <el-popover
                placement="right"
                width="650"
                visible-arrow="false"
                trigger="hover"
              >
                <div>
                  <router-link
                    :to="{ path: '/move', query: { keyword: '鲜奶蛋糕' } }"
                    >鲜奶蛋糕</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '水果蛋糕' } }"
                    >水果蛋糕</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '情人蛋糕' } }"
                    >情人蛋糕</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '生日蛋糕' } }"
                    >生日蛋糕</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '婚庆蛋糕' } }"
                    >婚庆蛋糕</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '无糖蛋糕' } }"
                    >无糖蛋糕</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '儿童蛋糕' } }"
                    >儿童蛋糕</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '巧克力蛋糕' } }"
                    >巧克力蛋糕</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '欧式蛋糕' } }"
                    >欧式蛋糕</router-link
                  >
                  <router-link
                    :to="{ path: '/move', query: { keyword: '冰淇淋蛋糕' } }"
                    >冰淇淋蛋糕</router-link
                  >
                </div>
                <el-button slot="reference">蛋糕分类</el-button>
              </el-popover>
            </li>
          </div>
        </div>
      </div>
      <div class="nav-top-a">
        <router-link to="/index"> 主页</router-link>
        <router-link :to="{ path: '/move', query: { keyword: 'Love' } }"
          >爱情系列</router-link
        >
        <router-link :to="{ path: '/move', query: { keyword: 'Friend' } }"
          >友情系列</router-link
        >
        <router-link :to="{ path: '/move', query: { keyword: 'Box' } }"
          >礼盒系列</router-link
        >
        <router-link :to="{ path: '/move', query: { keyword: 'Cake' } }"
          >蛋糕系列</router-link
        >
        <router-link :to="{ path: '/move', query: { keyword: 'Basket' } }"
          >花篮系列</router-link
        >
        <router-link :to="{ path: '/move', query: { keyword: 'Plant' } }"
          >绿植系列</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../../../assets/images/logo.png";
export default {
  inject: ["reload"],
  data() {
    return {
      logo: logo,
      search: "",
      show: true,
    };
  },
  methods: {
    navstatuschange() {
      this.$store.dispatch("index/navstatuschange");
    },
    uploadsuccess(response, file, fileList) {
      for (let i = 0; i < response.length; i++) {
        response[
          i
        ][0].goodsUrl = require("../../../../../../stytemdata/assets/images/" +
          response[i][0].goodsUrl +
          "");
      }
      this.$store.dispatch("index/setimglist", response);
      this.$store.dispatch("index/setyuantu", file.name);
      this.reload();
      this.$router.push("/similar");
    },
    searchf(data) {
      this.$router.replace({
        path: "/move",
        query: { keyword: data },
      });
      this.reload();
    },
  },
};
</script>

<style scoped>
.head {
  position: relative;
  height: 200px;
  width: 1200px;
  top: 0px;
  left: 50%;
  margin-left: -600px;
}

.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  height: 100px;
  border: 1px solid #f7f7f7;
  border-radius: 10%;
}

.logo .el-image {
  width: 200px;
  height: 100px;
  border-radius: 10%;
}

.search {
  position: absolute;
  top: 40px;
  width: 400px;
  height: 100px;
  left: 50%;
  margin-left: -200px;
}

.search span {
  font-size: 10px;
}

.search a {
  font-size: 10px;
  margin: 0px 10px;
}

.tel {
  position: absolute;
  top: 50px;
  left: 50%;
  width: 200px;
  height: 100px;
  margin-left: 400px;
}
.nav-top {
  position: absolute;
  top: 140px;
  width: 1200px;
  height: 60px;
}

.nav-top-span {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 230px;
  height: 60px;
  background-color: orangered;
}

.nav-top-span i {
  position: absolute;
  top: 10px;
  left: 190px;
  font-size: 20px;
}

.navhide {
  position: absolute;
  top: 60px;
  left: 0px;
  width: 230px;
  height: 400px;
  background-color: gray;
  z-index: 2;
}

.navhide div {
  position: absolute;
  width: 230px;
  height: 350px;
  top: 25px;
  background-color: violet;
}

.navhide div li {
  list-style: none;
  width: 230px;
  height: 50px;
  text-align: center;
}

.navhide div li .el-button {
  width: 230px;
  background-color: gray;
  height: 50px;
  border: none;
  border-radius: 0px;
  color: white;
}

.navhide div li .el-button:hover {
  background-color: orangered;
}

.nav-top-a {
  position: absolute;
  top: 0px;
  left: 240px;
  width: 1000px;
  height: 60px;
}

.nav-top-a a {
  position: relative;
  top: 17px;
  left: 0px;
  font-size: 20px;
  padding: 16.5px 20px;
}
.el-popover div a {
  width: 100px;
  height: 40px;
  margin: 10px 0px 10px 20px;
  float: left;
  border: 1px solid #e3e3e3;
}
</style>