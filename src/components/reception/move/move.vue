<template>
  <div id="move">
    <Moveheader />
    <div>
      <Search />
    </div>
    <Movenav />
  </div>
</template>

<script>
import Moveheader from "../index/header";
import Search from "./head";
import Movenav from "../move/movenav";
export default {
  name: "move",
  components: {
    Moveheader,
    Search,
    Movenav,
  },
};
</script>

<style>
#move {
  width: 100%;
}

</style>