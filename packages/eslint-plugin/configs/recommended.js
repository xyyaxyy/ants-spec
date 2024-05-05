module.exports = {
  plugins: ['eslint-plugin-ants'],
  rules: {
    // 定义为 warn 级别
    'eslint-plugin-ants/no-http-url': 'warn',
    // 定义为 error 级别
    'eslint-plugin-ants/no-secret-info': 'error',
    'eslint-plugin-ants/no-broad-semantic-versioning': 'warn',
    'eslint-plugin-ants/no-js-in-ts-project': 'warn',
  },
};
