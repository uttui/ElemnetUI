<template>
  <div class="su">
    <div>
      <span>不显示间断点</span>
      <el-slider v-model="value1" :step="10"> </el-slider>
    </div>
    <div>
      <span>显示间断点</span>
      <el-slider v-model="value2" :step="10" show-stops> </el-slider>
    </div>
    <div>
      <span>带有输入框</span>
      <el-slider v-model="value3" show-input> </el-slider>
    </div>
    <div>
      <span>范围选择</span>
      <el-slider v-model="value4" range show-stops :max="10"> </el-slider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      value4: [4, 8],
    };
  },
};
</script>

<style>
.su {
  margin-left: 20px;
  margin-top: 20px;
}
</style>