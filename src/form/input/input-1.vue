<template>
  <div>
    <div>带icon的输入框+输入框尺寸</div>
    <div class="su">
      属性方式：
      <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1" > </el-input>
      <el-input size="medium" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2" >
      </el-input>
    </div>
    <div class="su">
      slot 方式：
      <el-input size="small" placeholder="请选择日期" v-model="input3">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <br/>
      <el-input size="mini" placeholder="请输入内容" v-model="input4">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>

<style>
.su {
  margin-top: 30px;
}
</style>