import Vue from 'vue'
import Vuex from 'vuex'
import Mutations from './mutations-type'

// 1. 通过 Vue.use(插件) 安装插件
Vue.use(Vuex)

export default new Vuex.Store({
  // 状态(单一状态树)
  /**
   * 响应式的前提, 必须先定义好. 
   * 如果后期想添加新的响应属性, 使用 Vue.set(对象, 名称|下标, 值)
   * 删除使用 Vue.delete(对象, 属性);
   */
  state: {
    count: 99
  },
  // 异步操作
  actions: {
    // content 就是 store 对象
    synChange(_content, _payload) {
      console.log('action 操作: ', _content, _payload);
      // 异步操作
      setTimeout(() => {
        // 调用 mutations.commit 提交数据
        _content.commit(Mutations.INCREMENT)

        _payload.callback('已变更');
      }, 1000);

      // 也可以返回 Promise 让调用方使用 then 函数结构
    }

  },
  // 修改state(状态)方法
  mutations: {
    /**
     * 函数名可以定义为常量, 避免 commit 调用的时候写错名称
     * 函数名称为事件类型, 函数为回调函数
     * 不要在这里的函数里面做异步调用
     */
    // 函数默认传入 state 对象
    [Mutations.INCREMENT](_state) {
      console.log('increment 执行', _state);
      _state.count++;
    },

    // _num 添加参数
    // increment(_state, _num) {
    //   _state.count += _num;
    // },

    decrement(_state) {
      _state.count--;
    },

    // 这里的 _payload 是 commit 提交的对象
    payload(_state, _payload) {
      console.log('载荷:', _payload);
    }

  },
  /**
   * 按模块定义变量
   * 按功能归集
   */
  modules: {
    a: {
      state: {
        title: 'Module-A'
      },
      action: {
        // 这里 commit 只调用当期模块的 mutations
      },
      mutations: {
        // 定义函数名不要与 mutations 内函数名重复
      },
      getters: {
        // 定义函数(当前模块state, 当前模块getters, 父级模块state)
        powerA: (_state, _getters, _rootState) => {
          return _rootState.count * 2
        }
      }
    },
    b: {
      state: {},
      action: {},
      mutations: {},
      getters: {}
    }
  },
  // 类似组件计算属性
  getters: {
    // power: _state => {
    //   return _state.count * _state.count
    // },

    // 函数(state对象, getters对象)
    power: (_state, _getters) => {
      return _state.count * _state.count
    },

    callback: (_state, _getters) => {
      // 返回回调函数
      return (_power) => {
      }
    }
  }
})
