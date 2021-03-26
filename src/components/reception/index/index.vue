<template>
  <div id="index">
<!--     <div style="width:100%;min-width:1249px;height:80px;background-color:red">
      <el-image :src="adv"></el-image>
    </div> -->
    <Head />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Head from "./header";
import Main from "./main";
import Footer from "./footer";
export default {
  name: "index",
  components: {
    Head,
    Main,
    Footer,
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
}
body {
  margin: 0px;
  padding: 0px;
}
a{
  color:black
}
</style>