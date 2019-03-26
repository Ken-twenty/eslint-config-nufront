module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6'
  ].map(file => require.resolve(file)),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // 要求或禁止使用严格模式指令
    strict: ['error', 'never'],
  }
};
