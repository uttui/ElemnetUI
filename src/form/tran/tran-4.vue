<template>
  <div class="su">
    <div>数据项属性别名</div>
    <br/>
    <el-transfer
      v-model="value"
      :props="{
        key: 'value',
        label: 'desc',
      }"
      :data="data"
    >
    </el-transfer>
  </div>
</template>

<script>
export default {
  data() {
    const generateData = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: `备选项 ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [],
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