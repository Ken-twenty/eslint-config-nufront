module.exports = {
  // (70)
  rules: {
    // 强制 getter 和 setter 在对象中成对出现 （不一定）
    'accessor-pairs': 'off',

    // 强制数组方法的回调函数中有 return 语句，并且不能单独使用 return 隐式返回 undefined
    'array-callback-return': ['error', { allowImplicit: false }],

    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': 'error',

    // 强制类方法使用 this
    'class-methods-use-this': 'error',

    // 指定程序中允许的最大环路复杂度
    'complexity': 'off',

    // 强制 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],

    // 强制所有控制语句使用一致的括号风格
    'curly': ['error', 'all'],

    // 强制 Switch 语句中有 Default 分支 （使用 /^no default$/ 注释可以规避报错）
    'default-case': ['error', { commentPattern: '^no default$' }],

    // 强制在点号之前或之后一致的换行 （之前）
    'dot-location': ['error', 'property'],

    // 强制使用点号调用对象成员
    'dot-notation': 'error',

    // 强制使用 === 和 !== （null 除外）
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'ignore'
      },
    ],

    // 强制 for-in 循环中有一个 if 语句进行约束
    'guard-for-in': 'error',

    // 不建议使用 alert、confirm 和 prompt
    'no-alert': 'warn',

    // 禁止使用 arguments.caller 或 arguments.callee
    'no-caller': 'error',

    // 禁止在 case 子句中使用词法声明 （case 的 {} 代码块中允许）
    'no-case-declarations': 'error',

    // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-div-regex': 'error',

    // 禁止 if 语句中 return 语句之后有 else  块 （同样不允许 else if 块）
    'no-else-return': ['error', { allowElseIf: false }],

    // 禁止出现空函数
    'no-empty-function': ['error', { allow: [] }],

    // 禁止使用空解构模式
    'no-empty-pattern': 'error',

    // 禁止与 null 进行值比较
    'no-eq-null': 'error',

    // 禁用 eval()
    'no-eval': ['error', { allowIndirect: false }],

    // 禁止扩展原生对象
    'no-extend-native': 'error',

    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 'error',

    // 禁止使用不必要的标签
    'no-extra-label': 'error',

    // 禁止 case 语句落空 （省略 break）
    'no-fallthrough': 'error',

    // 禁止在数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 'error',

    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': 'error',

    // 禁止使用较短的符号实现类型转换
    'no-implicit-coercion': [
      'error',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],

    // 禁止在全局作用域下隐式声明全局变量和全局函数
    'no-implicit-globals': 'error',

    // 禁止使用隐式的 eval() （setTimeout, setInterval, execScript）
    'no-implied-eval': 'error',

    // 禁止使用无效的 this
    'no-invalid-this': 'error',

    // 禁止使用废弃的 __iterator__ 属性
    'no-iterator': 'error',

    // 禁止使用标签语句
    'no-labels': 'error',

    // 禁止使用无意义的代码块 （{}）
    'no-lone-blocks': 'error',

    // 禁止在循环中出现 function 声明和表达式
    'no-loop-func': 'error',

    // 禁止使用难以阅读的字面量数字
    'no-magic-numbers': 'off',

    // 禁止使用多个空格
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],

    // 禁止使用 \ 连接的多行字符串
    'no-multi-str': 'error',

    // 禁止单独使用 new 而不把实例赋值给一个变量的操作
    'no-new': 'error',

    // 禁止对 Function 对象使用 new 操作符创建函数
    'no-new-func': 'error',

    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 'error',

    // 禁止使用八进制字面量
    'no-octal': 'error',

    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 'error',

    // 禁止对函数参数再赋值 （props 除外）
    'no-param-reassign': ['error', { props: false }],

    // 禁止使用 __proto__ 属性
    'no-proto': 'error',

    // 禁止重新声明变量
    'no-redeclare': ['error', { builtinGlobals: true }],

    // 禁止使用某些不被建议的对象属性
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],

    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': ['error', 'always'],

    // 禁止使用不必要的 return await
    'no-return-await': 'error',

    // 禁止使用 javascript: url
    'no-script-url': 'error',

    // 禁止自我赋值，包括属性
    'no-self-assign': ['error', { props: true }],

    // 禁止与自身比较
    'no-self-compare': 'error',

    // 禁止使用逗号操作符 （for 或者 明确的括号包裹除外）
    'no-sequences': 'error',

    // 禁止抛出字面量异常
    'no-throw-literal': 'error',

    // 禁止使用一成不变的循环条件
    'no-unmodified-loop-condition': 'error',

    // 禁止出现未使用过的表达式
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // 禁止出现未使用过的标
    'no-unused-labels': 'error',

    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': 'error',

    // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-concat': 'error',

    // 禁止使用不必要的转义字符
    'no-useless-escape': 'error',

    // 禁止多余的 return 语句
    'no-useless-return': 'error',

    // 禁止使用 void 操作符
    'no-void': 'error',

    // 禁用警告注释
    'no-warning-comments': 'off',

    // 禁止使用 with 语句
    'no-with': 'error',

    // 强制使用 Error 实例作为 Promise 拒绝的原因
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // 强制在 parseInt() 中使用基数参数
    'radix': 'error',

    // 禁止使用不带 await 表达式的 async 函数 （不一定）
    'require-await': 'off',

    // 强制要求所有的 var 声明出现在它们所在的作用域顶部
    'vars-on-top': 'error',

    // 强制使用括号把 IIFE 函数括起来
    'wrap-iife': [
      'error',
      'inside',
      {
        functionPrototypeMethods: true
      },
    ],

    // 禁止字面量在前的比较语句
    'yoda': 'error',
  }
};
