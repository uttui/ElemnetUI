<template>
  <div class="su">
    <el-transfer v-model="value" :data="data"></el-transfer>
  </div>
</template>

<script>
export default {
  data() {
    const generateData = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [1, 4],
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
