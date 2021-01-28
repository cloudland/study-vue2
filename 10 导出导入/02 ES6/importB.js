/**
 * ES6 导入模块
 */
// import {title, getContent} from './exportA.js';
// console.log('importB 执行');
// // 执行函数
// getContent();

/**
 * 导入模块
 * 函数/类
 */
// import {getFn, ExportClass} from './exportA.js';
// // 执行导入函数
// getFn();
// // 执行导入类函数
// let expClass = new ExportClass();
// expClass.getMethod();

/**
 * 默认导出
 * 可以自行定义名称
 */
import defImport from './exportA.js';
defImport.getContent();

/**
 * 全部导入
 */
// import * as alias from './exportA.js';
// alias.getFn();