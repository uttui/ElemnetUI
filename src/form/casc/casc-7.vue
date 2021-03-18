<template>
  <div class="su">
    <div>
      <br />
      <div>动态加载</div>
     <el-cascader :props="props"></el-cascader>
      <hr />
    </div>
  </div>
</template>

<script>
 let id = 0;

  export default {
    data() {
      return {
        props: {
          lazy: true,
          lazyLoad (node, resolve) {
            const { level } = node;
            setTimeout(() => {
              const nodes = Array.from({ length: level + 1 })
                .map(item => ({
                  value: ++id,
                  label: `选项${id}`,
                  leaf: level >= 2
                }));
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
              resolve(nodes);
            }, 1000);
          }
        }
      };
    }
  };
</script>

<style>
.su {
  margin-left: 20px;
  margin-top: 20px;
}
</style>