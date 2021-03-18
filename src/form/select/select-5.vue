<template>
  <div class="su">
    <div>
      <br />
      <div>创建条目</div>
      <el-select
        v-model="value"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择文章标签"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "HTML",
          label: "HTML",
        },
        {
          value: "CSS",
          label: "CSS",
        },
        {
          value: "JavaScript",
          label: "JavaScript",
        },
      ],
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