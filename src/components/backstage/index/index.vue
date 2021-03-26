<template>
  <div id="index">
    <header>
      <Header />
    </header>

    <div class="index-mian">
      <Main />
    </div>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
export default {
  name: "index",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style scoped>
.index {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
header {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 80px;
}
.index-mian {
  position: fixed;
  top: 80px;
  left: 0px;
  bottom: 30px;
  width: 100%;
}
footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 30px;
}
</style>