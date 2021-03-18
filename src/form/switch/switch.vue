<template>
  <div class="su">
    <div>
      <br />
      <div>基础用法</div>
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
      <hr />
    </div>
    <div>
      <br />
      <div>文字描述</div>
      <el-switch
        v-model="value1"
        active-text="按月付费"
        inactive-text="按年付费"
      >
      </el-switch>
      <el-switch
        style="display: block"
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="按月付费"
        inactive-text="按年付费"
      >
      </el-switch>
      <hr />
    </div>
    <div>
      <br />
      <div>扩展的 value 类型</div>
      <el-tooltip :content="'Switch value: ' + value3" placement="top">
        <el-switch
          v-model="value3"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="100"
          inactive-value="0"
        >
        </el-switch>
      </el-tooltip>
      <hr />
    </div>
    <div>
      <br />
      <div>禁用状态</div>
      <el-switch v-model="value4" disabled> </el-switch>
      <el-switch v-model="value5" disabled> </el-switch>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      value1: true,
      value2: true,
      value3: "100",
      value4: true,
      value5: false
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