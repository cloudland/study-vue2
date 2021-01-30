<template>
  <div>
    <h1>嵌套路由父组件</h1>

    <button @click="clickChild01">01</button>
    <button @click="clickChild02">02</button>

    <!-- include: 匹配缓存, exclude: 匹配不缓存 -->
    <keep-alive>
      <!-- 所有匹配到的视图组件都会被缓存 -->
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  methods: {
    clickChild01() {
      console.log("子组件一");
      this.$router.replace("/parent/c01");
    },

    clickChild02() {
      console.log("子组件二");
      this.$router.replace("/parent/c02");
    },
  },

  // 创建钩子
  created() {
    console.log("嵌套路由创建");
  },
  // 销毁钩子
  destroyed() {
    console.log("嵌套路由销毁");
  }
};
</script>

<style scoped>
/** @import "样式地址"; */
</style>