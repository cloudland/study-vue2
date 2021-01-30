import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决 vue-router 在 3.0 版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(_location) {
  return originalPush.call(this, _location).catch(_err => _err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(_location) {
  return originalReplace.call(this, _location).catch(_err => _err)
}

// 1. 通过 Vue.use(插件) 安装插件
Vue.use(VueRouter)

// 2.1 定义路由对象
const routeMapping = [
  {
    path: '/',
    // 重定向目标路径
    redirect: '/home'
  },
  {
    path: '/home',
    // name: 'Home',
    // 路由添加源数据(描述内容)
    meta: {
      title: '首页'
    },
    component: () => import('../views/Home.vue') // 路由懒加载方式
  },
  {
    path: '/about',
    // name: 'About',
    meta: {
      title: '关于'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: (_to, _from, _next) => {
      console.log('关于路由独享前置守卫');
    }
  },
  {
    /**
     * 动态路由(传递参数)
     * 组件内通过 $route 获取参数
     * 
     * 1. 通过路径传参, /path/:id
     * 2. 通过路径参数, /path?id=xx
     */
    path: '/user/:id',
    meta: {
      title: '用户'
    },
    component: () => import('../views/User.vue')
  },
  {
    // 嵌套路由
    path: '/parent',
    meta: {
      title: '嵌套路由'
    },
    component: () => import('../views/Parent.vue'),
    children: [
      {
        path: 'c01',
        component: () => import('../views/Child01.vue')
      },
      {
        path: 'c02',
        component: () => import('../views/Child02.vue')
      }
    ]
  }
]

// 2. 创建路由对象
const router = new VueRouter({
  // 模式: hash(默认), hash 模式会携带'#' 
  mode: 'history',
  // 配置路由和组件之间的映射关系
  routes: routeMapping
})

// 全局导航守护(guard)
// 前置
router.beforeEach((_to, _from, _next) => {
  // console.log('全局前置守护', _to, _from);

  // 调用路由对象内容
  // document.title = _to.meta.title;
  document.title = _to.matched[0].meta.title;

  // 链路结构, 必须调用
  _next();
});

// 后置钩子(hook)
router.afterEach((_to, _from) => {
  // console.log('全局后置钩子', _to, _from);
});

// 导出 router 对象
export default router
