<template>
  <div class="su">
    <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
  </div>
</template>

<script>
export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>

<style>
.su {
  margin-left: 20px;
  margin-top: 20px;
}
</style>