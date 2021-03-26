<template>
  <div id="main">
    <div class="Head"><Head ref="headchild" /></div>
    <div class="Nav"><Nav /></div>
    <div class="New"><New /></div>
    <div class="Love"><Love /></div>
    <div class="Friend"><Friend /></div>
    <div class="Basket"><Basket /></div>
    <div class="Box"><Box /></div>
    <div class="Cake"><Cake /></div>
    <div class="Plant"><Plant /></div>
  </div>
</template>

<script>
import Head from "./main/head";
import Nav from "./main/nav";
import New from "./main/new";
import Love from "./main/love";
import Friend from "./main/friend";
import Basket from "./main/basket";
import Box from "./main/box";
import Cake from "./main/cake";
import Plant from "./main/plant";

export default {
  methods: {},
  components: {
    Head,
    Nav,
    New,
    Love,
    Friend,
    Basket,
    Box,
    Cake,
    Plant,
  },
};
</script>

<style>
.Head {
  height: 204px;
  width: 100%;
  min-width: 1200px;
  border-bottom: 2px solid orangered;
}
.Nav {
  height: 400px;
  width: 100%;
  min-width: 1200px;
}
.New {
  margin: 20px auto;
  width: 100%;
  min-width: 1200px;
  height: 400px;
}
.Love {
  margin: 20px auto;
  width: 100%;
  min-width: 1200px;
  height: 730px;
}
.Friend {
  margin: 20px auto;
  width: 100%;
  min-width: 1200px;
  height: 730px;
}
.Basket {
  margin: 20px auto;
  width: 100%;
  min-width: 1200px;
  height: 730px;
}
.Box {
  margin: 20px auto;
  width: 100%;
  min-width: 1200px;
  height: 730px;
}
.Cake {
  margin: 20px auto;
  width: 100%;
  min-width: 1200px;
  height: 730px;
}
.Plant {
  margin: 20px auto;
  width: 100%;
  min-width: 1200px;
  height: 730px;
}
a {
  text-decoration: none;
}
</style>