# eslint-plugin-ants

## 安装

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
$ npm install eslint-plugin-ants eslint --save-dev

$ pnpm add -D eslint-plugin-ants eslint
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ['eslint-config-ants'],
  rules: {
    'eslint-plugin-ants/no-secret-info': 'error',
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: 'plugin:eslint-plugin-ants/recommended',
};
```

## 支持的规则

- [`no-broad-semantic-versioning`](https://xyyaxyy.github.io/ants-spec/docs/main/30-NPM%E5%8C%85/50-eslint-plugin-ants.html#no-broad-semantic-versioning) 不要指定宽泛的版本范围
- [`no-http-url`](https://xyyaxyy.github.io/ants-spec/docs/main/30-NPM%E5%8C%85/50-eslint-plugin-ants.html#no-http-url) 使用 HTTPS 协议头的 URL，而不是 HTTP
- [`no-js-in-ts-project`](https://xyyaxyy.github.io/ants-spec/docs/main/30-NPM%E5%8C%85/50-eslint-plugin-ants.html#no-js-in-ts-project) 不要在 TS 项目中使用 JS
- [`no-secret-info`](https://xyyaxyy.github.io/ants-spec/docs/main/30-NPM%E5%8C%85/50-eslint-plugin-ants.html#no-secret-info) 不要在代码中直接设置 `password` `token` and `secret` 信息
