<template>
  <div class="su">
    <div class="bl">
    <span>起始日期时刻为 12:00:00</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00']">
    </el-date-picker>
  </div>
  <div class="bl">
    <span>起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      align="right"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00', '08:00:00']">
    </el-date-picker>
  </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        value1: '',
        value2: ''
      };
    }
  };
</script>

<style>
.su {
  margin-left: 20px;
  margin-top: 20px;
}
.bl {
  margin-left: 20px;
  margin-top: 20px;
}
</style>
