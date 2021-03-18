<template>
  <div class="su">
    <div>
      <div>基础使用</div>
      <el-select v-model="value1" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <hr />
    </div>
    <div>
      <br />
      <div>有禁用选项</div>
      <!-- 在el-option中，设定disabled值为 true，即可禁用该选项 -->
      <el-select v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >
        </el-option>
      </el-select>
      <hr />
    </div>
    <div>
      <br />
      <div>禁用状态</div>
      <el-select v-model="value3" disabled placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <hr />
    </div>
    <div>
      <br />
      <div>可清空单选</div>
      <el-select v-model="value4" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <hr />
    </div>
    <div>
      <br />
      <div>基础多选</div>
      <el-select v-model="value5" multiple placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-select
        v-model="value6"
        multiple
        collapse-tags
        style="margin-left: 20px"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
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
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true,
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: [],
      value6: [],
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
