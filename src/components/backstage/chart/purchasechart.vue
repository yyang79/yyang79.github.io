<template>
  <div>
    <el-upload
      action="http://127.0.0.1:3000/upload"
      ref="upload"
      :limit="1"
      :auto-upload="false"
      list-type="picture-card"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <i class="el-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <i class="el-icon-download"></i>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <el-button @click="submitimg">上传图片</el-button>
    <el-image
      :src="
        require('C:/Users/yyang/Desktop/Flower System/stytemdata/assets/images/logo.png')
      "
    ></el-image>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    };
  },
  methods: {
    submitimg() {
      this.$refs.upload.submit();
    },
    handleRemove(file) {
      window.console.log(file.raw);
      alert(JSON.stringify(file.raw));
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      window.console.log(file);
    },
    selectchange(val) {
      this.$store.commit("purchase/playerchange", val);
    },
  },
};
</script>

<style scoped>
</style>