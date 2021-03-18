<template>
  <div class="su">
    <p class="rt">
      使用 render-content 自定义数据项
    </p>
    <div class="el">
      <el-transfer
        class="lt"
        v-model="value"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :render-content="renderFunc"
        :titles="['Source', 'Target']"
        :button-texts="['到左边', '到右边']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}',
        }"
        @change="handleChange"
        :data="data"
      >
        <el-button class="tf" slot="left-footer" size="small"
          >操作</el-button
        >
        <el-button class="tf" slot="right-footer" size="small"
          >操作</el-button
        >
      </el-transfer>
    </div>
    <p class="rt">
      使用 scoped-slot 自定义数据项
    </p>
    <div class="el">
      <el-transfer
        class="lt"
        v-model="value4"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :titles="['Source', 'Target']"
        :button-texts="['到左边', '到右边']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}',
        }"
        @change="handleChange"
        :data="data"
      >
        <span slot-scope="{ option }"
          >{{ option.key }} - {{ option.label }}</span
        >
        <el-button class="tf" slot="left-footer" size="small"
          >操作</el-button
        >
        <el-button class="tf" slot="right-footer" size="small"
          >操作</el-button
        >
      </el-transfer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const generateData = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [1],
      value4: [1],
      renderFunc(h, option) {
        return (
          <span>
            {option.key} - {option.label}
          </span>
        );
      },
    };
  },

  methods: {
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
  },
};
</script>

<style>
.su {
  margin-left: 20px;
  margin-top: 20px;
}
.rt{
  text-align: center;
  margin: 0 0 20px
}
.el{
  text-align: center
}
.lt{
  text-align: left;
  display: inline-block
}
.tf{
  margin-left: 20px;
  padding: 6px 5px;
}
</style>
