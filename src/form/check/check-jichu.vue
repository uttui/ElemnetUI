<template>
  <div>
    <div class="fo">
      <br />
      <div>基础用法</div>
      <!-- `checked` 为 true 或 false -->
      <el-checkbox v-model="checked">备选项</el-checkbox>
    </div>
    <div class="fo">>
      <br />
      <div>禁用模式</div>
      <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
      <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
    </div>
    <div class="fo">>
      <br />
      <div>多选框组</div>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true, // 基础用法

      checked1: false, //禁用模式
      checked2: true,

      checkList: ["选中且禁用", "复选框 A"], //多选框组
    };
  },
};
</script>

<style>
.fo{
    margin-top: 30px;
}
</style>
