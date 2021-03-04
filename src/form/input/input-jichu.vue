<template>
  <div>
    <div class="inp">
    <div>输入框/基础</div>
    <br />
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <div class="inp">
      <div>输入框/禁止输入状态</div>
      <br />
      <el-input placeholder="请输入内容" v-model="inp" :disabled="true"></el-input>
    </div>
    <div class="inp">
      <div>输入框/可清空</div>
      <br/>
      <el-input placeholder="请输入内容" v-model="inpu" clearable></el-input>
    </div>
    <div class="inp">
      <div>输入框/密码框</div>
      <br/>
      <el-input placeholder="请输入密码" v-model="int" show-password></el-input>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        inp:'',
        inpu:'',
        int:''
      }
    }
  }
</script>

<style>
.inp{
  margin-top: 30px;
}
</style>