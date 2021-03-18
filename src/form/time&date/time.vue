<template>
  <div class="su">
    <div class="ti">
      <!-- 使用 el-time-select 标签，分别通过start、end和step指定可选的起始时间、结束时间和步长 -->
      <span>固定时间点</span>
      <el-time-select
        v-model="value1"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }"
        placeholder="选择时间"
      >
      </el-time-select>
    </div>
    <div class="ti">
      <!-- 通过selectableRange限制可选时间范围 -->
      <span>任意时间点</span>
      <!-- 1. 默认情况下通过鼠标滚轮进行选择 -->
      <el-time-picker
        v-model="value2"
        :picker-options="{
          selectableRange: '18:30:00 - 20:30:00',
        }"
        placeholder="任意时间点"
      >
      </el-time-picker>
      <!-- 2. 打开arrow-control属性则通过界面上的箭头进行选择 -->
      <el-time-picker
        arrow-control
        v-model="value3"
        :picker-options="{
          selectableRange: '18:30:00 - 20:30:00',
        }"
        placeholder="任意时间点"
      >
      </el-time-picker>
    </div>
    <div class="ti">
      <span>固定时间范围</span>
      <el-time-select
        placeholder="起始时间"
        v-model="startTime"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }"
      >
      </el-time-select>
      <el-time-select
        placeholder="结束时间"
        v-model="endTime"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
          minTime: startTime,
        }"
      >
      </el-time-select>
    </div>
    <div class="ti">
      <!-- 添加is-range属性即可选择时间范围 -->
      <!-- 支持arrow-control属性 -->
      <span>任意时间范围</span>
      <el-time-picker
        is-range
        v-model="value4"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      >
      </el-time-picker>
      <el-time-picker
        is-range
        arrow-control
        v-model="value5"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      >
      </el-time-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: new Date(2016, 9, 10, 18, 40),
      value3: new Date(2016, 9, 10, 18, 40),
      startTime: "",
      endTime: "",
      value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    };
  },
};
</script>

<style>
.su {
  margin-left: 20px;
  margin-top: 20px;
}
.ti {
  margin-left: 20px;
  margin-top: 20px;
}
</style>