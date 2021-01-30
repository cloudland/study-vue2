<template>
  <div>
    <h1>HelloWorld 内容</h1>
    <button @click="synAdd">异步 +</button>
    <button @click="add">+</button>
    <p>{{ $store.state.count }}</p>
    <button @click="sub">-</button>

    <p>getter: {{$store.getters.power}}</p>

    <p>{{title}}</p>
  </div>
</template>

<script>
import Mutations from '@/store/mutations-type'

export default {
  name: 'HelloWorld',
  data () {
    return {
      count: this.$store.state.count,

      // 获取模块A类型
      title: this.$store.state.a.title
    }
  },
  methods: {
    add() {
      console.log('add');
      // 普通提交风格
      // this.$store.commit('increment')
      this.$store.commit(Mutations.INCREMENT)
      // 调用可以传入参数, 直接追加参数
      // this.$store.commit(Mutations.INCREMENT, 6);

      // 特殊提交风格, 提交的是一个对象
      // this.$store.commit({
      //   type: 'payload',
      //   count: 9
      // });
    },

    sub() {
      this.$store.commit('decrement')
    },

    synAdd() {
      console.log('synAdd');

      // this.$store.dispatch('synChange', '参数')
      this.$store.dispatch('synChange', {
        msg: '参数',
        callback: (_data) => {
          console.log('回调执行: ', _data);
        }
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
