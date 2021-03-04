<template>
<!-- 在el-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用 -->
  <div>
    <br/>
    <div>禁用状态</div>
    <br/>
    <el-radio disabled v-model="radio" label="禁用">备选项</el-radio>
    <el-radio disabled v-model="radio" label="选中且禁用">备选项</el-radio>
  </div>
</template>

<script>
export default {
    data () {
      return {
        radio: '选中且禁用'
      };
    }
  }
</script>

<style>
</style>