module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },
  // (31)
  rules: {
    // 强制要求箭头函数体使用大括号
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: true,
    }],

    // 强制要求箭头函数的参数使用圆括号
    'arrow-parens': ['error', 'always'],

    // 强制要求箭头函数的箭头之前或之后有空格
    'arrow-spacing': ['error', { before: true, after: true }],

    // 禁止构造函数中无效的 super() 的调用
    'constructor-super': 'error',

    // 强制 generator 函数中 * 号周围有空格
    'generator-star-spacing': ['error', 'before'],

    // 禁止修改类声明的变量
    'no-class-assign': 'error',

    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    // 禁止改变用 const 声明的变量
    'no-const-assign': 'error',

    // 禁止类成员中有重复的名称
    'no-dupe-class-members': 'error',

    // 禁止重复导入
    'no-duplicate-imports': ['error', { includeExports: true }],

    // 禁止 Symbol 操作符和 new 一起使用
    'no-new-symbol': 'error',

    // 禁止 import 特定的模块
    'no-restricted-imports': 'off',

    // 禁止在构造函数中在调用 super() 之前使用 this 或 super
    'no-this-before-super': 'error',

    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'error',

    // 禁止使用不必要的构造函数
    'no-useless-constructor': 'error',

    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': 'error',

    // 强制要求使用 let 或 const 而不是 var
    'no-var': 'error',

    // 强制要求对象字面量简写语法
    'object-shorthand': ['error', 'always', {
      avoidQuotes: true,
      ignoreConstructors: false,
      avoidExplicitReturnArrows: true,
    }],

    // 强制要求使用箭头函数作为回调
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // 强制建议使用 const
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // 强制使用数组和对象解构
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      }
    ],

    // 禁止使用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    'prefer-numeric-literals': 'error',

    // 强制使用剩余参数代替 arguments
    'prefer-rest-params': 'error',

    // 强制使用扩展运算符而非 .apply()
    'prefer-spread': 'error',

    // 强制使用模板而非字符串连接
    'prefer-template': 'error',

    // 禁止使用没有 yield 的 generator 函数
    'require-yield': 'error',

    // 强制剩余和扩展运算符及其表达式之间的空格
    'rest-spread-spacing': ['error', 'never'],

    // 强制要求 import 排序
    'sort-imports': 'off',

    // 强制要求 symbol 描述
    'symbol-description': 'error',

    // 强制模板字符串中空格的使用
    'template-curly-spacing': ['error', 'never'],

    // 强制在 yield 表达式中 * 周围使用空格
    'yield-star-spacing': ['error', 'before'],
  }
};
