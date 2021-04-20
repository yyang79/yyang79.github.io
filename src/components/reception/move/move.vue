<template>
  <div id="move">
    <Moveheader />
    <div class="movesearch">
      <Search />
    </div>
    <Movenav />
    <Chat/>
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
import Moveheader from "../index/header";
import Search from "../index/main/head";
import Movenav from "../move/movenav";
import Chat from "../chat/chat"
export default {
  inject: ["reload"],
  name: "move",
  components: {
    Moveheader,
    Search,
    Movenav,
    Chat
  },
    watch: {
    $route() {
      if (this.$route.query.keyword) {
        this.reload();
      }
    },
  },
  created() {
    this.$store.dispatch("index/allnavfalse");
  },
};
</script>

<style>
#move {
  width: 100%;
}
.movesearch {
  border-bottom: orangered 2px solid;
}
</style>