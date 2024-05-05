module.exports = {
  extends: ['eslint-config-ants', 'prettier'],
  plugins: ['ants'],
  rules: {
    'ants/no-secret-info': 'error',
    'ants/no-http-url': 'error',
  },

  // TypeScript 项目扫描性能问题
  // 如果你的 TS 项目 commit 卡口和 ants-lint-cli scan 运行时间很长，可以通过如下在 .eslintrc.js 中增加以下配置提升性能：
  // parserOptions: {
  //   project: [], // for lint performance
  //   createDefaultProgram: false, // for lint performance
  // },
  // rules: {
  //   '@typescript-eslint/dot-notation': 0, // for lint performance
  //   '@typescript-eslint/restrict-plus-operands': 0, // for lint performance
  // },
};
