import path from 'path';
import fs from 'fs-extra';

// 读取 package.json
const pkg: Record<string, any> = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf8'),
);

export enum UNICODE {
  success = '\u2714', // ✔
  failure = '\u2716', // ✖
}

/**
 * 包名
 */
export const PKG_NAME: string = pkg.name;

/**
 * 包版本号
 */
export const PKG_VERSION: string = pkg.version;

/**
 * 项目类型
 */
export const PROJECT_TYPES: Array<{ name: string; value: string }> = [
  {
    name: '[JavaScript] not a React | Vue | NodeJS project',
    value: 'index',
  },
  {
    name: '[TypeScript] not a React | Vue | NodeJS project',
    value: 'typescript',
  },
  {
    name: 'React + JavaScript',
    value: 'react',
  },
  {
    name: 'React + TypeScript',
    value: 'typescript/react',
  },
  {
    name: 'Vue + JavaScript',
    value: 'vue',
  },
  {
    name: 'Vue + TypeScript',
    value: 'typescript/vue',
  },
  {
    name: 'Rax + JavaScript',
    value: 'rax',
  },
  {
    name: 'Rax + TypeScript',
    value: 'typescript/rax',
  },
  {
    name: 'NodeJS + JavaScript',
    value: 'node',
  },
  {
    name: 'NodeJS + TypeScript',
    value: 'typescript/node',
  },
  {
    name: 'ES5',
    value: 'es5',
  },
];

/**
 * eslint 扫描文件扩展名
 */
export const ESLINT_FILE_EXT: string[] = ['.js', '.jsx', '.ts', '.tsx', '.vue'];

/**
 * eslint 扫描忽略的文件或文件目录
 * 需要同步到 config/.eslintignore.ejs
 */
export const ESLINT_IGNORE_PATTERN: string[] = [
  'node_modules',
  'build',
  'dist',
  'coverage',
  'es',
  'lib',
  '**/*.min.js',
  '**/*-min.js',
  '**/*.bundle.js',
];

/**
 * stylelint 扫描文件扩展名
 */
export const STYLELINT_FILE_EXT: string[] = ['.css', '.scss', '.less', '.acss'];

/**
 * stylelint 扫描忽略的文件或文件目录
 */
export const STYLELINT_IGNORE_PATTERN: string[] = [
  'node_modules/',
  'build/',
  'dist/',
  'coverage/',
  'es/',
  'lib/',
  '**/*.min.css',
  '**/*-min.css',
  '**/*.bundle.css',
];

/**
 * markdownLint 扫描文件扩展名
 */
export const MARKDOWN_LINT_FILE_EXT: string[] = ['.md'];

/**
 * markdownLint 扫描忽略的文件或文件目录
 */
export const MARKDOWN_LINT_IGNORE_PATTERN: string[] = [
  'node_modules/',
  'build/',
  'dist/',
  'coverage/',
  'es/',
  'lib/',
];

/**
 * Prettier 扫描文件扩展名
 */
export const PRETTIER_FILE_EXT = [
  ...STYLELINT_FILE_EXT,
  ...ESLINT_FILE_EXT,
  ...MARKDOWN_LINT_FILE_EXT,
];

/**
 * Prettier 扫描忽略的文件或文件目录
 */
export const PRETTIER_IGNORE_PATTERN: string[] = [
  'node_modules/**/*',
  'build/**/*',
  'dist/**/*',
  'lib/**/*',
  'es/**/*',
  'coverage/**/*',
];
