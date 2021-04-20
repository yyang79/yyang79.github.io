<template>
  <div id="index">
<!--     <div style="width:100%;min-width:1249px;height:80px;background-color:red">
      <el-image :src="adv"></el-image>
    </div> -->
    <Head />
    <Main />
    <Footer />
    <Chat />
      <el-backtop  :bottom="60">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        border-radius:50%;
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </el-backtop>
  </div>
</template>

<script>
import Head from "./header";
import Main from "./main";
import Footer from "./footer";
import Chat from "../chat/chat"
export default {
  name: "index",
  components: {
    Head,
    Main,
    Footer,
    Chat
  },
  created() {
    this.$store.dispatch("index/allnavtrue");
  },
  data(){
    return{
/*       src:require('../../assets/images') */
    }
  }
};
</script>

<style>
#index {
  margin: 0px;
  padding: 0px;
  background: #F7F9FA;
}
body {
  margin: 0px;
  padding: 0px;
}
a{
  text-decoration: none;
  color:black
}
</style>