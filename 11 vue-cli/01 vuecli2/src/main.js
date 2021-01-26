// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// runtime-compiler
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

// runtime-only(性能高、代码量少)
new Vue({
  el: '#app',
  // h(标签, 样式, ['内容'])
  // render: function(_createElement) {
    // 1. 普通用法
    // return _createElement('h2', {class: 'box'}, ['hello world']);

    // 2. 传入组件对象
    // return _createElement(App);
  // }
  render: h => h(App)
});