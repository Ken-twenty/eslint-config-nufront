module.exports = {
  // (34)
  rules: {
    // 禁止反向的 for 循环计数器
    'for-direction': 'error',

    // 禁止在 getter 中省略 return 语句，并且返回 undefined 不能单独使用 return 隐式返回
    'getter-return': ['error', { allowImplicit: true }],

    // 禁止在循环体中使用 await
    'no-await-in-loop': 'error',

    // 禁止与 -0 作对比
    'no-compare-neg-zero': 'error',

    // 禁止在条件语句中使用赋值操作符
    'no-cond-assign': ['error', 'always'],

    // 只在开发环境中使用 console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 禁止在条件语句中使用常量
    'no-constant-condition': 'error',

    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 'error',

    // 只在开发环境中使用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 禁止在 function 定义中使用重名参数
    'no-dupe-args': 'error',

    // 禁止对象字面量中使用重复的键
    'no-dupe-keys': 'error',

    // 禁止使用重复的 case 标签
    'no-duplicate-case': 'error',

    // 禁止使用空的代码块
    'no-empty': ['error', { allowEmptyCatch: false }],

    // 禁止在正则表达式中使用空字符集
    'no-empty-character-class': 'error',

    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 'error',

    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 'error',

    // 禁止不必要的括号 [必要情况下可增加代码可读性]
    'no-extra-parens': 'off',

    // 禁用不必要的分号
    'no-extra-semi': 'error',

    // 禁止对 function 变量重新赋值
    'no-func-assign': 'error',

    // 禁止在嵌套的块中出现 var 变量声明或 function 声明
    'no-inner-declarations': ['error', 'both'],

    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-invalid-regexp': 'error',

    // 禁止不规则的空白 （无意义的）
    'no-irregular-whitespace': 'error',

    // 禁止将全局对象当作函数进行调用  （Math, JSON, Reflect）
    'no-obj-calls': 'error',

    // 禁止直接调用 Object.prototypes 的内置属性
    'no-prototype-builtins': 'error',

    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 'error',

    // 禁用使用稀疏数组 （ , 前面没有任何元素）
    'no-sparse-arrays': 'error',

    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': 'error',

    // 禁止使用令人困惑的多行表达式
    'no-unexpected-multiline': 'error',

    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'error',

    // 禁止在 finally 语句块中直接使用控制流语句 return、throw、break 和 continue （但可以在 class 和 function 中间接使用）
    'no-unsafe-finally': 'error',

    // 禁止对关系运算符 in 和 instanceof 的左操作数使用否定操作符
    'no-unsafe-negation': 'error',

    // 禁止与 NaN 的比较，要求使用 isNaN() 检查 NaN
    'use-isnan': 'error',

    // 强制使用有效的 JSDoc 注释 （影响开发效率）
    'valid-jsdoc': 'off',

    /**
     * 强制 typeof 表达式与有效的字符串字面量或其它 typeof 表达式进行比较
     * （'undefined'、'object'、'boolean'、'number'、'string'、'function' 和 'symbol'）
     */
    'valid-typeof': ['error', { requireStringLiterals: true }],
  }
};
