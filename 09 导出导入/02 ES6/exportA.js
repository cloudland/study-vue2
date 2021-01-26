/**
 * 导出模块
 */
// 定义标题
let title = '标题';
// 定义函数
function getContent() {
  console.log('获取内容');
}

// 导出方式一
export {
  title,
  getContent
}

// 导出方式二
// export let title;

// 导出方式三(函数/类)
export function getFn() {
  console.log('导出函数');
};

export class ExportClass {
  getMethod() {
    console.log('类函数');
  }
}

/**
 * 导出方式四
 * 不命名, 由使用方自行命名。
 * default: 只能有一个
 */
export default {
  title,
  getContent
}
