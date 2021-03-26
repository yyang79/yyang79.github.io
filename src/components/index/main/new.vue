<template>
  <div class="new">
    <div class="new-top">
      <h4 style="margin-top: 10px">
        ----------------&nbsp;&nbsp;&nbsp;新品上架&nbsp;&nbsp;&nbsp;----------------
      </h4>
    </div>
    <div class="show-main">
      <router-link :to="{ path: '/detailpage', query: { search: 's' } }">
        <div
          v-for="newflower in this.$store.state.index.newlist"
          :key="newflower.src"
        >
          <el-image :height="200" :width="200" :src="newflower.src"></el-image>
        </div>
      </router-link>
    </div>
    <div class="seemove">
      <router-link :to="{ path: '/move/', query: { keyword: 'New' } }"
        >查看更多</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.new {
  position: relative;
  top: 0px;
  left: 50%;
  width: 1200px;
  margin-left: -600px;
  height: 400px;
  background-color: #f3f3f3;
}

.new-top {
  width: 100%;
  height: 40px;
  text-align: center;
}

.seemove {
  position: absolute;
  top: 350px;
  margin-top: 10px;
  width: 100%;
  height: 40px;
}

.seemove a {
  position: absolute;
  top: 10px;
  left: 47%;
  color: black;
}

.new .show-main {
  width: 100%;
  height: 250px;
}

.new .show-main a > div {
  width: 220px;
  height: 300px;
  margin: 0px 10px;
  background-color: white;
  float: left;
}
.new .show-main a > div:hover {
  box-shadow: 0 0 10px 5px gray;
}
</style>