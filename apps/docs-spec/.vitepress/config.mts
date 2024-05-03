import { defineConfig } from "vitepress";
import nav from "./nav.mts";
// 侧边栏
import sidebar from "./sidebar.mts";
// 搜索插件
import {
  pagefindPlugin,
  chineseSearchOptimize,
} from "vitepress-plugin-pagefind";
// 图片放大预览插件
import mdItCustomAttrs from "markdown-it-custom-attrs";

// 项目根路径
const BASE_URL = "/ants-spec/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ants-前端编码规范",
  description: "ants-前端编码规范说明文档-由安翅云-www.antsxdp.com 整理",
  // 最后更新时间
  lastUpdated: true,
  // 构建根路径
  base: BASE_URL,
  // 主题配置
  themeConfig: {
    logo: "/logo.png",
    // 右侧锚点目录
    outlineTitle: "本页目录",
    // 目录深度，默认为 2, number | [number, number] | 'deep' | false
    outline: [2, 3],
    // 页脚
    footer: {
      message: "安翅云计算（湖北）有限公司 专注于 CDN、DNS、WAF系统研发",
      copyright: "Copyright © 2020-present 安翅云-www.antsxdp.com",
    },
    search: {
      provider: "local",
    },

    // 导航栏
    nav,

    // 侧边栏
    sidebar,

    // 右上角社交外链
    socialLinks: [
      // {
      //   // icon: {
      //   //   svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //   // },
      //   icon: "npm",
      //   ariaLabel: "ants官网",
      //   link: "https://www.antsxdp.com",
      // },
      {
        icon: "github",
        ariaLabel: "ants-spec",
        link: "https://github.com/xyyaxyy/ants-spec",
      },
    ],
  },

  // 文档模糊搜索插件，使用搜索插件之后，打包构建会很慢
  // vite: {
  //   plugins: [
  //     // 搜索插件
  //     pagefindPlugin({
  //       btnPlaceholder: "搜索",
  //       placeholder: "搜索文档",
  //       emptyText: "空空如也",
  //       heading: "共: {{searchResult}} 条结果",
  //       customSearchQuery: chineseSearchOptimize,
  //     }),
  //   ],
  // },
  // 图片放大预览插件
  markdown: {
    config: (md) => {
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
        // optional, these are default options
        // leftDelimiter: '{',
        // rightDelimiter: '}',
        // allowedAttributes: []  // empty array = all attributes are allowed
      });
    },
    // 代码块暗色主题
    // theme: {
    //   light: "github-dark",
    //   dark: "github-dark",
    // },
  },
  // appearance: "dark",
  // 额外的需要被注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: `${BASE_URL}css/fancybox.css`,
      },
    ],
    [
      "script",
      {
        src: `${BASE_URL}css/fancybox.umd.js`,
      },
    ],
  ],
});
