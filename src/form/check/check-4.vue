<template>
  <div>
    <div>带有边框/多选</div>
    <br />
    <div>
    <el-checkbox v-model="checked1" label="备选项1" border></el-checkbox>
    <el-checkbox v-model="checked2" label="备选项2" border></el-checkbox>
  </div>
  <div class="bo">
    <el-checkbox v-model="checked3" label="备选项1" border size="medium"></el-checkbox>
    <el-checkbox v-model="checked4" label="备选项2" border size="medium"></el-checkbox>
  </div>
  <div class="bo">
    <el-checkbox-group v-model="checkboxGroup1" size="small">
      <el-checkbox label="备选项1" border></el-checkbox>
      <el-checkbox label="备选项2" border disabled></el-checkbox>
    </el-checkbox-group>
  </div>
  <div class="bo">
    <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <el-checkbox label="备选项1" border></el-checkbox>
      <el-checkbox label="备选项2" border></el-checkbox>
    </el-checkbox-group>
  </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: []
      };
    }
  }
</script>

<style>
.bo{
  margin-top: 20px
}
</style>
