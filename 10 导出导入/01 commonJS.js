// CommonJS 
// 导出
module.exports = {
  attr: '导出属性',
  fn: function () {
    console.log('导出函数');
  },
}

// 
/**
 * 导入, 解构函数
 * let mod = require('./路径/文件.js');
 * let att = mod.attr;
 * let fn = mod.fn;
 * 可以利用下面的结构函数一句搞定
 */
let {attr, fn} = require('./路径/文件.js')