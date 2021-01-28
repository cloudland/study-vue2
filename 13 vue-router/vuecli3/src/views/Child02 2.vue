<template>
  <div>
    <h1>嵌套路由子组件02</h1>
  </div>
</template>

<script>
export default {
  // 创建钩子
  created() {
    console.log("嵌套路由子组件二创建");
  },
  // 销毁钩子
  destroyed() {
    console.log("嵌套路由子组件二销毁");
  }
}
</script>

<style scoped>

</style>