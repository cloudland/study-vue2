<template>
  <div>
    <p>我是用户: {{ userId }}</p>
  </div>
</template>

<script>
export default {
  // 定义入参
  // props: [{}],

  data() {
    return {
      id: ""
    };
  },

  computed: {
    userId() {
      /**
       * path: 路径
       * meta: 元信息
       * params: 路径参数
       * query: 查询参数
       */
      console.log("活跃路由:", this.$route);
      return this.$route.params.id;
    }
  }
};
</script>

<style scoped>
</style>