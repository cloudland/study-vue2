import Vue from 'vue'
import App from './App.vue'
// 如果导出的是文件夹, 会自动导入文件夹里的 index 文件
import router from './router'

Vue.config.productionTip = false

new Vue({
  // router: router, 可以简写如下
  router,
  render: h => h(App)
}).$mount('#app')
