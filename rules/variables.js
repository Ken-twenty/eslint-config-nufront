const restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
  // (12)
  rules: {
    // 强制或禁止在变量声明语句中初始化
    'init-declarations': 'off',

    // 禁止 catch 子句的参数与外层作用域中的变量同名
    'no-catch-shadow': 'error',

    // 禁止 delete 变量
    'no-delete-var': 'error',

    // 禁止标签与变量同名
    'no-label-var': 'error',

    // 禁止使用特定的全局变量
    'no-restricted-globals': [
      'error',
      'isFinite',
      'isNaN',
    ].concat(restrictedGlobals),

    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        allow: [],
      },
    ],

    // 禁止重定义关键字
    'no-shadow-restricted-names': 'error',

    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': ['error', { typeof: true }],

    // 禁止将变量初始化为 undefined
    'no-undef-init': 'error',

    // 禁止使用 undefined
    'no-undefined': 'off',

    // 禁止出现未使用过的变量
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: false,
        caughtErrors: 'none',
      },
    ],

    // 禁止在变量定义之前使用它们
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],
  }
};
