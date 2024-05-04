import type { SidebarItem } from 'vitepress/types';

// 通过import 引入path
import path from 'path';
// 引入directory-tree
import dirTree from 'directory-tree';

const srcPath = path.resolve(__dirname, '../docs');
const srcDir = dirTree(srcPath, {
  extensions: /\.md/,
  normalizePath: true,
  attributes: ['type', 'extension'],
  exclude: /node_modules/,
});
// console.log('srcDir', srcDir)
// console.log('srcDir----', srcDir.children[0].children)

// 第一层：每一个文件夹为一个单独的侧边栏；[]
let sideBarObj = {};
if (srcDir.children) {
  // 根目录名称
  const docsRootName = srcDir.name;
  srcDir.children.forEach((item) => {
    const { type, name, children } = item;
    // 如果为目录
    if (type === 'directory') {
      const sidebarRootPath = `/${docsRootName}/${name}/`;
      sideBarObj[sidebarRootPath] = genSidebar(children, sidebarRootPath, true);
    }
  });
}
// console.log('sideBarObj', sideBarObj)

// 递归生成侧边栏，需要返回一个对象数组, isTop = ture 为顶层目录
function genSidebar(tree: any[], sidebarRootPath = '', isTop = false) {
  if (!tree.length || !sidebarRootPath) return [];
  let sidebar: SidebarItem[] = [];
  tree.forEach((item) => {
    const { type, name, children, extension } = item as {
      type: string;
      name: string;
      children: any[];
      extension: string;
    };

    // 如果为目录，这里默认目录为侧边栏，构建文档的时候需要注意：每个目录下面必须有一个index.md文件
    if (type === 'directory') {
      // 顶层目录，只有名称，没有链接
      sidebar.push({
        // 去除数字前缀
        text: name?.replace(/^\d+-/, ''),
        collapsed: !isTop,
        items: genSidebar(children, `${sidebarRootPath}${name}/`),
      });
      return;
    }

    // 如果为md文件
    if (type === 'file' && extension === '.md') {
      sidebar.push({
        // 去掉.md后缀、数字前缀
        text: name.replace(/(^\d+-)|(\.md$)/g, ''),
        link: `${sidebarRootPath}${name}`,
      });
    }
  });
  return sidebar;
}

export default sideBarObj;
