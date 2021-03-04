<template>
<!-- 设置v-model绑定变量 -->
<!-- label可以是String、Number或Boolean -->
  <div>
    <br/>
    <div>基础用法</div>
    <br/>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>

<script>
export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>

<style>
</style>