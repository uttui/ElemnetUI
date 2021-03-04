<template>
<!-- el-radio-group元素和子元素el-radio可以实现单选组 -->
  <div>
    <br/>
    <div>单选框组</div>
    <br/>
    <el-radio-group v-model="radio">
    <el-radio :label="3">备选项</el-radio>
    <el-radio :label="6">备选项</el-radio>
    <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>

<style>
</style>

