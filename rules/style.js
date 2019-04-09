module.exports = {
  // (90)
  rules: {
    // 强制在数组开括号后和闭括号前换行
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ],

    // 强制数组方括号旁使用一致的空格
    'array-bracket-spacing': ['error', 'never'],

    // 强制数组元素间出现换行
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ],

    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': ['error', 'always'],

    // 强制大括号风格
    'brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],

    // 强制使用骆驼命名法 （需要直接使用 API 数据时过于严格）
    'camelcase': 'off',

    // 强制或禁止对注释的第一个字母大写
    'capitalized-comments': 'off',

    // 强制使用或禁止使用拖尾逗号
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],

    // 强制在逗号周围使用空格
    'comma-spacing': ['error', { before: false, after: true },
    ],

    // 强制逗号放置在行末
    'comma-style': ['error', 'last'],

    // 禁止在计算属性中使用空格
    'computed-property-spacing': ['error', 'never'],

    // 强制使用一致的 this 别名
    'consistent-this': ['error', 'that'],

    // 强制要求文件末尾保留一行空行
    'eol-last': ['error', 'always'],

    // 禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['error', 'never'],

    // 强制要求函数名与赋值给它们的变量名或属性名相匹配
    'func-name-matching': 'off',

    // 强制要求函数表达式具名
    'func-names': ['error', 'as-needed'],

    // 强制使用函数声明式或函数表达式
    'func-style': 'off',

    // 强制在函数括号内使用一致的换行
    'function-paren-newline': ['error', 'consistent'],

    // 禁止使用指定的标识符
    'id-blacklist': 'off',

    // 强制标识符的最大和最小长度
    'id-length': 'off',

    // 强制要求标识符匹配特定的正则表达式
    'id-match': 'off',

    // 强制隐式返回的箭头函数体的位置
    'implicit-arrow-linebreak': ['error', 'beside'],

    // 强制使用一致的缩进
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,

        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],

    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': ['error', 'prefer-double'],

    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],

    // 强制关键字周围空格的一致性
    'keyword-spacing': ['error', { before: true, after: true }],

    // 强制行注释的位置
    'line-comment-position': [
      'error',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultIgnorePatterns: false,
      },
    ],

    // 强制使用一致的换行风格
    'linebreak-style': ['error', 'windows'],

    // 强制要求在注释周围有空行
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: false,
        allowObjectStart: true,
        allowObjectEnd: false,
        allowArrayStart: true,
        allowArrayEnd: false,
        allowClassStart: true,
        allowClassEnd: false,
        applyDefaultIgnorePatterns: false,
      },
    ],

    // 强制要求或禁止类成员之间出现空行
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false
      },
    ],

    // 强制块语句的最大可嵌套深度
    'max-depth': 'off',

    // 强制一行的最大长度
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 4,
        comments: 100,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: true,
      },
    ],

    // 强制文件的最大行数
    'max-lines': [
      'error',
      {
        max: 400,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': 'off',

    // 强制函数定义中最大的参数个数
    'max-params': 'off',

    // 强制函数块中语句的最大数量
    'max-statements': 'off',

    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': ['error', { max: 1 }],

    // 强制对多行注释使用特定风格
    'multiline-comment-style': ['error', 'starred-block'],

    // 强制要求或禁止在三元操作数中间换行
    'multiline-ternary': ['error', 'always-multiline'],

    // 强制要求构造函数首字母大写
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: false,
      },
    ],

    // 强制要求调用无参构造函数时带括号
    'new-parens': 'error',

    // 强制要求方法链中一行最多的调用
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',

    // 禁止使用按位操作符
    'no-bitwise': 'error',

    // 禁止使用 continue
    'no-continue': 'off',

    // 禁止使用内联注释
    'no-inline-comments': 'error',

    // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-lonely-if': 'error',

    // 禁止混合使用不同的操作符
    'no-mixed-operators': [
      'error',
      {
        /*
         * the list of arthmetic groups disallows mixing `%` and `**`
         * with other arithmetic operators.
         */
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['**', '+'],
          ['**', '-'],
          ['**', '*'],
          ['**', '/'],
          [
            '&',
            '|',
            '^',
            '~',
            '<<',
            '>>',
            '>>>',
          ],
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<=',
          ],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],

    // 禁止空格和 tab 混合使用
    'no-mixed-spaces-and-tabs': 'error',

    // 禁止连续赋值
    'no-multi-assign': 'error',

    // 禁止出现多行空行
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],

    // 禁止使用否定表达式
    'no-negated-condition': 'off',

    // 禁止使用嵌套的三元表达式
    'no-nested-ternary': 'error',

    // 禁止使用 Object 构造函数
    'no-new-object': 'error',

    // 禁止使用一元操作符 ++ 和 -- （for 循环除外）
    'no-plusplus': ['error', {"allowForLoopAfterthoughts": true}],

    // 禁止使用特定的语法
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // 禁止使用 tab
    'no-tabs': 'error',

    // 禁止使用三元操作符
    'no-ternary': 'off',

    // 禁止使用行尾空白
    'no-trailing-spaces': 'error',

    // 禁止标识符中有下划线
    'no-underscore-dangle': 'off',

    // 禁止使用不必要的三元操作符
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',

    // 强制单个语句的位置
    'nonblock-statement-body-position': 'off',

    // 强制大括号内换行符的一致性
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2,
        },
        ObjectPattern: 'always',
        ImportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
      },
    ],

    // 强制在花括号中使用一致的空格
    'object-curly-spacing': ['error', 'always'],

    // 强制将对象的属性放在不同的行上
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],

    // 强制函数中的变量在一起声明或分开声明
    'one-var': ['error', 'never'],

    // 强制要求或禁止在变量声明周围换行
    'one-var-declaration-per-line': ['error', 'always'],

    // 强制要求或禁止尽可能地简化赋值操作
    'operator-assignment': ['error', 'always'],

    // 强制操作符使用一致的换行符风格
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '=': 'none'
        }
      },
    ],

    // 强制要求或禁止块内填充
    'padded-blocks': ['error', 'always'],

    // 强制要求或禁止在语句间填充空行
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'case'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'default'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],

    // 强制要求对象字面量属性名称用引号括起来
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: true,
        unnecessary: true,
        numbers: true
      }
    ],

    // 强制使用一致的反勾号、双引号或单引号
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    // 强制要求使用 JSDoc 注释
    'require-jsdoc': 'off',

    // 强制要求或禁止使用分号代替 ASI
    'semi': ['error', 'always'],

    // 强制分号之前和之后使用一致的空格
    'semi-spacing': ['error', { before: false, after: true }],

    // 强制分号的位置
    'semi-style': ['error', 'last'],

    // 强制要求对象属性按序排列
    'sort-keys': 'off',

    // 强制要求变量排序
    'sort-vars': 'off',

    // 强制要求或禁止语句块之前的空格
    'space-before-blocks': 'error',

    // 强制要求或禁止函数圆括号之前有一个空格
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],

    // 禁止或强制圆括号内的空格
    'space-in-parens': ['error', 'never'],

    // 强制要求中缀操作符周围有空格
    'space-infix-ops': 'error',

    // 强制要求或禁止在一元操作符之前或之后存在空格
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      }
    ],

    // 强制要求或禁止在注释前有空白
    'spaced-comment': ['error', 'always'],

    // 强制要求在 switch 语句的冒号左右有空格
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // 强制要求或禁止在模板标记和它们的字面量之间有空格
    'template-tag-spacing': ['error', 'never'],

    // 强制要求或禁止使用 Unicode 字节顺序标记 (BOM)
    'unicode-bom': ['error', 'never'],

    // 强制要求正则表达式被包裹起来
    'wrap-regex': 'off',
  }
};
