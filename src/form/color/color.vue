<template>
  <div class="su">
    <div class="box">
      <div>基础用法</div>
      <div class="bl">
        <span>有默认值</span>
        <el-color-picker v-model="color1"></el-color-picker>
      </div>
      <div class="bl">
        <span>无默认值</span>
        <el-color-picker v-model="color2"></el-color-picker>
      </div>
      <hr />
    </div>
    <div class="box">
      <div>选择透明度</div>
      <div class="bl">
        <el-color-picker v-model="color3" show-alpha></el-color-picker>
      </div>
      <hr />
    </div>
    <div class="box">
      <div>预定义颜色</div>
      <div class="bl">
        <el-color-picker
          v-model="color4"
          show-alpha
          :predefine="predefineColors"
        >
        </el-color-picker>
        <hr />
      </div>
    </div>
    <div class="box">
      <div>不同尺寸</div>
      <div class="bl">
        <el-color-picker v-model="color5"></el-color-picker>
        <el-color-picker v-model="color5" size="medium"></el-color-picker>
        <el-color-picker v-model="color5" size="small"></el-color-picker>
        <el-color-picker v-model="color5" size="mini"></el-color-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: "#409EFF",
      color2: null,
      color3: "rgba(19, 206, 102, 0.8)",
      color4: "rgba(255, 69, 0, 0.68)",
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577",
      ],
      color5: '#409EFF'
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