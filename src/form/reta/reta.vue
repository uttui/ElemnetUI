<template>
  <div class="su">
    <div class="box">
      <div>基础用法</div>
      <div class="bl">
        <span>默认不区分颜色</span>
        <el-rate v-model="value1"></el-rate>
      </div>
      <div class="bl">
        <span>区分颜色</span>
        <el-rate v-model="value2" :colors="colors"> </el-rate>
      </div>
      <hr />
    </div>
    <div class="box">
      <div>辅助文字</div>
      <div class="bl">
        <el-rate v-model="value3" show-text> </el-rate>
      </div>
      <hr />
    </div>
    <div class="box">
      <div>带有icon</div>
      <div class="bl">
        <el-rate
          v-model="value4"
          :icon-classes="iconClasses"
          void-icon-class="el-icon-setting"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
        >
          <!--原图标 icon-rate-face-off -->
        </el-rate>
         <hr />
      </div>
    </div>
    <div class="box">
      <div>展示分数</div>
      <div class="bl">
        <el-rate
          v-model="value5"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        >
        </el-rate>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      value3: null,
      value4: null,
      iconClasses: ["el-icon-remove", "el-icon-circle-plus", "el-icon-success"],
      // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      value5: 3.7
    };
  },
};
</script>

<style>
.su {
  margin-left: 20px;
  margin-top: 20px;
}
.box {
  margin-top: 30px;
}
.bl {
  margin-left: 20px;
  margin-top: 10px;
}
</style>