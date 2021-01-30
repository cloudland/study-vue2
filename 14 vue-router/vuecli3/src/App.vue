<template>
  <div id="app">
    <div id="nav">
      <!--
        to属性: 用于指定跳转路径
        tag属性: 可以指定渲染成什么组件
        replace属性: 使用 replace 跳转地址

        active-class属性: 活动状态使用 class, 或者路由配置里添加 linkActiveClass 属性
      -->
      <!-- <router-link to="/home">首页</router-link> |
      <router-link to="/about">关于</router-link> -->

      <!--
        编码方式修改路由
        vue 框架中已经继承 $router , 可以通过 this 直接调用
      -->
      <button @click="clickHome">首页</button>
      <button @click="clickAbout">关于</button>

      <button @click="clickUser">用户</button>

      <button @click="clickParent">嵌套路由</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    clickHome() {
      console.log('点击首页');
      // $router.push(path)
      this.$router.push('/home');
    },
    clickAbout() {
      console.log('点击关于');
      this.$router.replace('/about');
    },
    clickUser() {
      console.log('点击用户');

      // 拼接路径
      // let userId = '01011', path = `/user/${userId}`;
      // this.$router.replace(path);

      // 定义传递对象, 显示形式 /path?id=xxx&name=xxx
      let param = {
        path: '/user/01010',
        query: {
          id: '01010',
          name: '测试用户'
        }
      };
      this.$router.replace(param);

    },
    clickParent() {
      console.log('点击嵌套路由');
      this.$router.replace('/parent')
    }
  }

}
</script>

<style scoped>

</style>
