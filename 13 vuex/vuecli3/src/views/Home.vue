<template>
  <div>
    <h1>这是首页</h1>

    <hello-world/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }

}
</script>
