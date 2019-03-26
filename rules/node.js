module.exports = {
  env: {
    node: true
  },
  // (11)
  rules: {
    // 强制返回 callback 函数
    'callback-return': 'off',

    // 强制要求 require() 出现在模块作用域中的顶层
    'global-require': 'error',

    // 强制要求回调函数中有调用 err 参数的容错处理
    'handle-callback-err': 'off',

    // 禁止使用 Buffer() 构造函数
    'no-buffer-constructor': 'error',

    // 禁止 require 调用与普通变量声明混合使用
    'no-mixed-requires': [
      'error',
      {
        grouping: true,
        allowCall: true,
      },
    ],

    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 'error',

    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': 'error',

    // 禁止使用 process.env
    'no-process-env': 'off',

    // 禁止使用 process.exit()
    'no-process-exit': 'off',

    // 禁止使用特定的 Node.js 模块
    'no-restricted-modules': 'off',

    // 禁止使用同步方法
    'no-sync': 'off',
  }
};
