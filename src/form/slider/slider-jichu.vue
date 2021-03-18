<template>
  <div class="su">
    <div>
      <span>默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div>
      <span>自定义初始值</span>
      <el-slider v-model="value2"></el-slider>
    </div>
    <div>
      <span>隐藏 Tooltip</span>
      <el-slider v-model="value3" :show-tooltip="false"></el-slider>
    </div>
    <div>
      <span>格式化 Tooltip</span>
      <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div>
      <span>禁用</span>
      <el-slider v-model="value5" disabled></el-slider>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>

<style>
.su {
  margin-left: 20px;
  margin-top: 20px;
}
</style>