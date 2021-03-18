<template>
  <div class="su">
    <span>展示标记</span>
      <el-slider v-model="value" range :marks="marks"> </el-slider>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        value: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
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