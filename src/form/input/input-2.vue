<template>
  <div>
    <div class="su">
      <!-- 可通过 rows 属性控制 -->
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea"
      ></el-input>
    </div>
    <div class="su">
      <div>可自适应高度的文本域</div>
      <br />
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="textarea1"
      >
      </el-input>
      <div style="margin: 20px 0"></div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="请输入内容"
        v-model="textarea2"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
      textarea1: "",
      textarea2: "",
    };
  },
};
</script>

<style>
.su {
  margin-top: 30px;
}
</style>
