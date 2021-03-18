<template>
  <div class="su">
    <div>
      <br />
      <div>自定义模板</div>
      <el-select v-model="value1" placeholder="请选择">
        <el-option
          v-for="item in cities"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <span class="st">{{ item.label }}</span>
          <span class="sty">{{ item.value }}</span>
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
      cities: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Nanjing",
          label: "南京",
        },
        {
          value: "Chengdu",
          label: "成都",
        },
        {
          value: "Shenzhen",
          label: "深圳",
        },
        {
          value: "Guangzhou",
          label: "广州",
        },
      ],
      value1: "",
    };
  },
};
</script>

<style>
.su {
  margin-left: 20px;
  margin-top: 20px;
}
.st {
  float: left;
}
.sty {
  float: right;
  color: #8492a6;
  font-size: 13px;
}
</style>