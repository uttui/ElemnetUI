<template>
  <div class="su">
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div>将文件拖到此处，或<em>点击上传</em></div>
      <div slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
</script>

<style>
.su {
  margin-left: 20px;
  margin-top: 20px;
}
</style>