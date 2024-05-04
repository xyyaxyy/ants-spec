import{_ as t,c as i,o as s,a4 as e}from"./chunks/framework.BmcBt-ga.js";const E=JSON.parse('{"title":"ants-spec-lint-cli","description":"","frontmatter":{"title":"ants-spec-lint-cli","categories":["脚手架规范"],"tags":["脚手架规范"],"author":{"name":"xyyaxyy","link":"https://github.com/xyyaxyy/ants-spec"}},"headers":[],"relativePath":"docs/main/40-脚手架CLI/10-ants-spec-lint-cli.md","filePath":"docs/main/40-脚手架CLI/10-ants-spec-lint-cli.md","lastUpdated":1714814848000}'),a={name:"docs/main/40-脚手架CLI/10-ants-spec-lint-cli.md"},n=e(`<h1 id="ants-spec-lint-cli" tabindex="-1">ants-spec-lint-cli <a class="header-anchor" href="#ants-spec-lint-cli" aria-label="Permalink to &quot;ants-spec-lint-cli&quot;">​</a></h1><p><code>ants-spec-lint-cli</code> 是<a href="https://xyyaxyy.github.io/ants-spec/" target="_blank" rel="noreferrer">ants 前端编码规范工程化</a>的配套 Lint 工具，可以为项目一键接入规范、一键扫描和修复规范问题，保障项目的编码规范和代码质量。</p><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>我们引入了多个业界流行的 Linter，并根据规范内容定制了规则包，它们包括：</p><table><thead><tr><th>规范</th><th>Lint 工具</th><th>NPM 包</th></tr></thead><tbody><tr><td>JavaScript 编码规范 <br> TypeScript 编码规范 <br> Node 编码规范</td><td><a href="https://eslint.org/" target="_blank" rel="noreferrer">ESLint</a></td><td><a href="https://www.npmjs.com/package/ants-spec-eslint" target="_blank" rel="noreferrer">ants-spec-eslint</a></td></tr><tr><td>CSS 编码规范</td><td><a href="https://stylelint.io/" target="_blank" rel="noreferrer">stylelint</a></td><td><a href="https://www.npmjs.com/package/ants-spec-stylelint" target="_blank" rel="noreferrer">ants-spec-stylelint</a></td></tr><tr><td>Git 规范</td><td><a href="https://commitlint.js.org/#/" target="_blank" rel="noreferrer">commitlint</a></td><td><a href="https://www.npmjs.com/package/ants-spec-commitlint" target="_blank" rel="noreferrer">ants-spec-commitlint</a></td></tr><tr><td>文档规范</td><td><a href="https://github.com/DavidAnson/markdownlint" target="_blank" rel="noreferrer">markdownlint</a></td><td><a href="https://www.npmjs.com/package/ants-spec-markdownlint" target="_blank" rel="noreferrer">ants-spec-markdownlint</a></td></tr><tr><td>Eslint 插件</td><td><a href="https://eslint.org/docs/latest/extend/plugins" target="_blank" rel="noreferrer">ESlint Plugin</a></td><td><a href="https://www.npmjs.com/package/ants-spec-eslint-plugin" target="_blank" rel="noreferrer">ants-spec-eslint-plugin</a></td></tr></tbody></table><p>可以看到这些 <code>Linter</code> 和规则包众多且零散，全部安装它们会给项目增加十几个依赖，接入和升级成本都比较高。</p><p><code>ants-spec-lint-cli</code> 收敛屏蔽了这些依赖和配置细节，提供简单的 CLI 和 Node.js API，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规范的成本。</p><h2 id="cli-使用" tabindex="-1">CLI 使用 <a class="header-anchor" href="#cli-使用" aria-label="Permalink to &quot;CLI 使用&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>在终端执行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ants-spec-lint-cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><p>安装完成后，可执行 <code>ants-spec-lint-cli -h</code> 以验证安装成功。</p><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><h4 id="ants-spec-lint-cli-init-一键接入" tabindex="-1"><code>ants-spec-lint-cli init</code>：一键接入 <a class="header-anchor" href="#ants-spec-lint-cli-init-一键接入" aria-label="Permalink to &quot;\`ants-spec-lint-cli init\`：一键接入&quot;">​</a></h4><p>在项目根目录执行 <code>ants-spec-lint-cli init</code>，即可一键接入规范，为项目安装规范 <code>Lint</code> 所需的依赖和配置。</p><p>具体会做以下事情：</p><ul><li>安装各种依赖：包括 <code>Linter</code> 依赖，如 <a href="https://eslint.org/" target="_blank" rel="noreferrer">ESLint</a>、<a href="https://stylelint.io/" target="_blank" rel="noreferrer">stylelint</a>、<a href="https://commitlint.js.org/#/" target="_blank" rel="noreferrer">commitlint</a>、<a href="https://github.com/DavidAnson/markdownlint" target="_blank" rel="noreferrer">markdownlint</a> 等；配置依赖，如 <a href="https://www.npmjs.com/package/ants-spec-eslint" target="_blank" rel="noreferrer">ants-spec-eslint</a>、<a href="https://www.npmjs.com/package/ants-spec-stylelint" target="_blank" rel="noreferrer">ants-spec-stylelint</a>、<a href="https://www.npmjs.com/package/ants-spec-commitlint" target="_blank" rel="noreferrer">ants-spec-commitlint</a>、<a href="https://www.npmjs.com/package/ants-spec-markdownlint" target="_blank" rel="noreferrer">ants-spec-markdownlint</a> 等</li><li>写入各种配置文件，包括： <ul><li><code>.eslintrc.js</code>、<code>.eslintignore</code>：ESLint 配置（继承 <code>ants-spec-eslint</code>）及黑名单文件</li><li><code>.stylelintrc.js</code>、<code>.stylelintignore</code>：stylelint 配置（继承 <code>ants-spec-stylelint</code>）及黑名单文件</li><li><code>commitlint.config.js</code>：commitlint 配置（继承 <code>ants-spec-commitlint</code>）</li><li><code>.markdownlint.json</code>、<code>.markdownlintignore</code>：<code>markdownlint</code> 配置及黑名单文件</li><li><code>.prettierrc.js</code>：符合规范的 <a href="https://prettier.io/docs/en/configuration.html" target="_blank" rel="noreferrer">Prettier 配置</a></li><li><code>.editorconfig</code>：符合规范的 <a href="https://editorconfig.org/" target="_blank" rel="noreferrer">editorconfig</a></li><li><code>.vscode/extensions.json</code>：写入规范相关的 <a href="https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions" target="_blank" rel="noreferrer">VSCode 插件推荐</a>，包括 <code>ESLint</code>、<code>stylelint</code>、<code>markdownlint</code>、<code>prettier</code> 等</li><li><code>.vscode/settings.json</code>：写入规范相关的 <a href="https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations" target="_blank" rel="noreferrer">VSCode 设置</a>，设置 <code>ESLint</code> 和 <code>stylelint</code> 插件的 <code>validate</code> 及<strong>保存时自动运行 fix</strong>，如果选择使用 <code>Prettier</code>，会同时将 <code>prettier-vscode</code> 插件设置为各前端语言的 defaultFormatter，并配置<strong>保存时自动格式化</strong></li><li><code>ants-spec-lint-cli.config.js</code>ants-spec-lint-cli 包的一些配置，如启用的功能等</li></ul></li><li>配置 git commit 卡口：使用 <a href="https://www.npmjs.com/package/husky" target="_blank" rel="noreferrer">husky</a> 设置代码提交卡口，在 git commit 时会运行 <code>ants-spec-lint-cli commit-file-scan</code> 和 <code>ants-spec-lint-cli commit-msg-scan</code> 分别对提交文件和提交信息进行规范检查。<code>ants-spec-lint-cli commit-file-scan</code> 默认仅对 error 问题卡口，如果你想对 warn 问题也卡口，可以增加 <code>--strict</code> 参数以开启严格模式</li></ul><blockquote><p>注 1：如果项目已经配置过 ESLint、stylelint 等 Linter，执行 <code>ants-spec-lint-cli init</code> 将会提示存在冲突的依赖和配置，并在得到确认后进行覆盖：</p><p>注 2：如果项目的 .vscode/ 目录被 .gitignore 忽略，可以在拉取项目后单独执行 <code>ants-spec-lint-cli init --vscode</code> 命令写入 <code>.vscode/extensions.json</code> 和 <code>.vscode/settings.json</code> 配置文件</p></blockquote><h4 id="ants-spec-lint-cli-scan-一键扫描" tabindex="-1"><code>ants-spec-lint-cli scan</code>：一键扫描 <a class="header-anchor" href="#ants-spec-lint-cli-scan-一键扫描" aria-label="Permalink to &quot;\`ants-spec-lint-cli scan\`：一键扫描&quot;">​</a></h4><p>在项目的根目录执行命令，即可扫描项目的规范问题：</p><p>支持下列参数：</p><ul><li><code>-q</code> <code>--quiet</code> 仅报告 error 级别的问题</li><li><code>-o</code> <code>--output-report</code> 输出扫描出的规范问题日志</li><li><code>-i</code> <code>--include &lt;dirpath&gt;</code> 指定要进行规范扫描的目录</li><li><code>--no-ignore</code> 忽略 eslint 的 ignore 配置文件和 ignore 规则</li></ul><blockquote><p>注 1：事实上，你可以在任意目录执行 <code>ants-spec-lint-cli scan</code> <code>ants-spec-lint-cli</code> 会根据文件类型、JSON 等特征嗅探项目类型。但我们还是推荐在执行过 <code>ants-spec-lint-cli init</code> 的项目根目录执行 <code>ants-spec-lint-cli scan</code>，以得到最准确的扫描结果。</p><p>注 2: <code>ants-spec-lint-cli</code> 会根据项目内有无 eslint 和 stylelint 配置文件判断使用项目的配置文件还是 <code>ants-spec-lint-cli</code> 默认配置进行扫描。若使用项目的，在未安装依赖时会帮其安装（执行 npm i）。若使用项目配置扫描失败，则使用默认配置扫描</p></blockquote><h4 id="ants-spec-lint-cli-fix-一键修复" tabindex="-1"><code>ants-spec-lint-cli fix</code>：一键修复 <a class="header-anchor" href="#ants-spec-lint-cli-fix-一键修复" aria-label="Permalink to &quot;\`ants-spec-lint-cli fix\`：一键修复&quot;">​</a></h4><p>在项目的根目录执行命令，即可修复部分规范问题：</p><p>支持下列参数：</p><ul><li><code>-i</code> <code>--include &lt;dirpath&gt;</code> 指定要进行修复扫描的目录</li><li><code>--no-ignore</code> 忽略 eslint 的 ignore 配置文件和 ignore 规则</li></ul><p>注意请 review 下修复前后的代码，以免工具误修的情况。</p><h4 id="ants-spec-lint-cli-commit-file-scan-提交文件扫描" tabindex="-1"><code>ants-spec-lint-cli commit-file-scan</code> 提交文件扫描 <a class="header-anchor" href="#ants-spec-lint-cli-commit-file-scan-提交文件扫描" aria-label="Permalink to &quot;\`ants-spec-lint-cli commit-file-scan\` 提交文件扫描&quot;">​</a></h4><p>在 git commit 时对提交文件进行规范问题扫描，需配合 git 的 pre-commit 钩子使用。</p><p>支持下列参数：</p><ul><li><code>-s</code> <code>--strict</code> 严格模式，对 warn 和 error 问题都卡口，默认仅对 error 问题卡口</li></ul><h4 id="ants-spec-lint-cli-commit-msg-scan-提交信息扫描" tabindex="-1"><code>ants-spec-lint-cli commit-msg-scan</code> 提交信息扫描 <a class="header-anchor" href="#ants-spec-lint-cli-commit-msg-scan-提交信息扫描" aria-label="Permalink to &quot;\`ants-spec-lint-cli commit-msg-scan\` 提交信息扫描&quot;">​</a></h4><p>git commit 时对 commit message 的格式进行扫描（使用 commitlint），需配合 <a href="https://www.npmjs.com/package/husky" target="_blank" rel="noreferrer">husky</a> 的 commit-msg 钩子使用。</p><h2 id="node-js-api-使用" tabindex="-1">Node.js API 使用 <a class="header-anchor" href="#node-js-api-使用" aria-label="Permalink to &quot;Node.js API 使用&quot;">​</a></h2><h3 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ants-spec-lint-cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span></span></code></pre></div><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h3><h4 id="init-初始化" tabindex="-1">init：初始化 <a class="header-anchor" href="#init-初始化" aria-label="Permalink to &quot;init：初始化&quot;">​</a></h4><ul><li>ants-spec-lint-cli.init(config)：将项目一键接入规范，效果等同于 <code>ants-spec-lint-cli init</code></li></ul><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ants) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  spec </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lint.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    eslintType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableESLint: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableStylelint: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableMarkdownlint: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enablePrettier: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    disableNpmInstall: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div><p>config 参数如下：</p><table><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>cwd</td><td>string</td><td>-</td><td>项目绝对路径</td></tr><tr><td>eslintType</td><td>ESLintType</td><td>-</td><td>语言和框架类型，如果不配置，等同于 ants-spec-lint-cli init，控制台会出现选择器，如果配置，控制台就不会出现选择器</td></tr><tr><td>enableESLint</td><td>boolean</td><td>true</td><td>是否启用 ESLint，如果不配置默认值为 true，即默认启用 ESLint</td></tr><tr><td>enableStylelint</td><td>boolean</td><td>-</td><td>是否启用 stylelint，如果不配置，等同于 ants-spec-lint-cli init，控制台会出现选择器，如果配置，控制台就不会出现选择器</td></tr><tr><td>enableMarkdownlint</td><td>boolean</td><td>-</td><td>是否启用 markdownlint，如果不配置，等同于 ants-spec-lint-cli init，控制台会出现选择器，如果配置，控制台就不会出现选择器</td></tr><tr><td>enablePrettier</td><td>boolean</td><td>-</td><td>是否启用 Prettier</td></tr><tr><td>disableNpmInstall</td><td>boolean</td><td>false</td><td>是否禁用自动在初始化完成后安装依赖</td></tr></tbody></table><h5 id="eslinttype" tabindex="-1">ESLintType <a class="header-anchor" href="#eslinttype" aria-label="Permalink to &quot;ESLintType&quot;">​</a></h5><ul><li><code>default</code>: JavaScript 项目（未使用 React 和 Vue 的 JS 项目）</li><li><code>react</code>: JavaScript + React 项目</li><li><code>vue</code>: JavaScript + Vue 项目</li><li><code>typescript/default</code>: TypeScript 项目（未使用 React 和 Vue 的 TS 项目）</li><li><code>typescript/react</code>: TypeScript + React 项目</li><li><code>typescript/vue</code>: TypeScript + Vue 项目</li><li><code>es5</code>: ES5 及之前版本的 JavaScript 老项目</li></ul><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p><code>ants-spec-lint-cli</code> 基于一份配置进行扫描（但你也可以零配置使用），支持的配置参数有：</p><table><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>enableESLint</td><td>boolean</td><td>true</td><td>是否启用 ESLint</td></tr><tr><td>enableStylelint</td><td>boolean</td><td>true</td><td>是否启用 stylelint</td></tr><tr><td>enableMarkdownlint</td><td>boolean</td><td>true</td><td>是否启用 markdownlint</td></tr><tr><td>enablePrettier</td><td>boolean</td><td>-</td><td>是否启用 Prettier</td></tr><tr><td>eslintOptions</td><td>ESLint.Options</td><td>-</td><td>ESLint 配置项，若未设置将使用执行目录下或内置的默认 eslintrc 和 eslintignore 进行扫描</td></tr><tr><td>stylelintOptions</td><td>stylelint.LinterOptions</td><td>-</td><td>stylelint 配置项，若未设置将使用执行目录下或内置的默认 stylelintrc 和 stylelintignore 进行扫描</td></tr><tr><td>markdownlintOptions</td><td>markdownlint.Options</td><td>-</td><td>markdownlint 配置项，若未设置将使用执行目录下或内置的默认 markdownlint 配置文件进行扫描</td></tr></tbody></table><p><code>ants-spec-lint-cli</code> 会读取执行目录下的 <code>ants-spec-lint-cli.config.js</code> 作为配置文件。<code>ants-spec-lint-cli init</code> 会在执行目录下新增如下的 <code>ants-spec-lint-cli.config.js</code> 文件：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  enableESLint: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  enableStylelint: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  enableMarkdownlint: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  enablePrettier: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="typescript-项目扫描性能问题" tabindex="-1">TypeScript 项目扫描性能问题 <a class="header-anchor" href="#typescript-项目扫描性能问题" aria-label="Permalink to &quot;TypeScript 项目扫描性能问题&quot;">​</a></h3><p>如果你的 TS 项目 commit 卡口和 <code>ants-spec-lint-cli scan</code> 运行时间很长，可以通过如下在 <code>.eslintrc.js</code> 中增加以下配置提升性能：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parserOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    project: [], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// for lint performance</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    createDefaultProgram: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// for lint performance</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;@typescript-eslint/dot-notation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// for lint performance</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;@typescript-eslint/restrict-plus-operands&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// for lint performance</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,55),l=[n];function r(c,d,o,p,h,k){return s(),i("div",null,l)}const m=t(a,[["render",r]]);export{E as __pageData,m as default};
