<template>
  <div id="move">
    <Moveheader />
    <div class="movesearch">
      <Search />
    </div>
    <Movenav />
  </div>
</template>

<script>
import Moveheader from "../index/header";
import Search from "../index/main/head";
import Movenav from "../move/movenav";
export default {
  inject: ["reload"],
  name: "move",
  components: {
    Moveheader,
    Search,
    Movenav,
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