const path = require('path');
const requireAll = require('require-all');

// 导出四个规则
exports.rules = requireAll({
  dirname: path.resolve(__dirname, 'rules'),
});

// 导出配置
exports.configs = requireAll({
  dirname: path.resolve(__dirname, 'configs'),
});

// processors 表示自定义插件的入口
exports.processors = {
  '.json': {
    preprocess(text) {
      // As JS file 转为js文件
      return [`module.exports = ${text}`];
    },
  },
};
