<template>
  <div>
    <h1>嵌套路由子组件01</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },

  // 路由组件内的守卫
  beforeRouteEnter(_to, _from, _next) {
    // console.log('嵌套路由子组件一内组件守卫');

    _next();
  },

  // 这两个函数只有被 keep-alive 包裹时才会有效
  activated () {
    console.log('活跃状态');
  },
  deactivated () {
    console.log('未活跃状态');
  },

  // 创建钩子
  created() {
    console.log("嵌套路由子组件一创建");
  },
  // 销毁钩子
  destroyed() {
    console.log("嵌套路由子组件一销毁");
  }
}
</script>

<style scoped>

</style>