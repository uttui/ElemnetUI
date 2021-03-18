<template>
  <div class="su">
    <div>
      <div>基础用法</div>
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
      <hr/>
    </div>
    <div>
      <br/>
      <div>禁用状态</div>
      <el-input-number v-model="num1" :disabled="true"></el-input-number>
      <hr/>
    </div>
    <div>
      <br/>
      <!-- 设置step属性可以控制步长，接受一个Number -->
      <div>步数/允许定义递增递减态</div>
      <el-input-number v-model="num2" :step="2"></el-input-number>
      <br/>
      <el-input-number v-model="num3" :step="3"></el-input-number>
      <hr/>
    </div>
    <div>
      <br/>
      <!-- step-strictly属性接受一个Boolean。如果这个属性被设置为true，则只能输入步数的倍数 -->
      <div>严格步数</div>
      <el-input-number v-model="num4" :step="2" step-strictly></el-input-number>
      <hr/>
    </div>
    <div>
      <br/>
      <!-- 设置 precision 属性可以控制数值精度，接收一个 Number -->
      <div>精确数</div>
      <el-input-number v-model="num5" :precision="2" :step="0.1" :max="10"></el-input-number>
      <br/>
      <el-input-number v-model="num6" :precision="2" :step="0.01" :max="10"></el-input-number>
      <hr/>
    </div>
    <div>
      <br/>
      <div>尺寸</div>
      <el-input-number v-model="numa"></el-input-number>
      <el-input-number size="medium" v-model="numb"></el-input-number>
      <el-input-number size="small" v-model="numc"></el-input-number>
      <el-input-number size="mini" v-model="numd"></el-input-number>
      <hr/>
    </div>
    <div>
      <br/>
      <div>禁用状态</div>
      <el-input-number v-model="num1" :disabled="true"></el-input-number>
      <hr/>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 1,
        num1:1,
        num2:5,
        num3:5,
        num4:2,
        num5:1,
        num6:1,
        numa:1,
        numb:1,
        numc:1,
        numd:1
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