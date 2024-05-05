# stylelint-config-ants

支持配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

## 安装

需要先行安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)：

```bash
npm install stylelint-config-ants stylelint stylelint-scss --save-dev

pnpm add stylelint-config-ants stylelint stylelint-scss -D
```

## 使用

在 `.stylelintrc` 中继承本包:

```json
{
  "extends": "stylelint-config-ants"
}
```
