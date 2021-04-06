<template>
  <div>
    <el-select
      v-model="this.$store.state.purchase.player"
      @change="selectchange"
    >
      <el-option
        v-for="item in this.$store.state.purchase.playerlist"
        :key="item.value"
        :value="item.value"
        :label="item.label"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  methods: {
    selectchange(val) {
      this.$store.commit("purchase/playerchange", val);
    },
  },
};
</script>

<style scoped>
</style>