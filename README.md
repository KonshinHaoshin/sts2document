# 文档站本地运行

这个目录已经按 VitePress 站点结构组织好，可以直接本地启动。

## 前置条件

- 已安装 `Node.js` 18+
- 可以使用 `npm` 或 `pnpm`

## 安装依赖

在 `document` 目录执行：

```bash
npm install
```

如果你更喜欢 `pnpm`：

```bash
pnpm install
```

## 本地开发预览

```bash
npm run docs:dev
```

默认会启动一个本地开发服务器，VitePress 会热更新 Markdown 内容。

## 构建静态站点

```bash
npm run docs:build
```

构建产物默认位于：

- `document/.vitepress/dist`

## 本地预览构建结果

```bash
npm run docs:preview
```

## 当前文档结构

- `document/index.md`：首页
- `document/guide/`：入门与研究工作区说明
- `document/analysis/`：项目分析、卡牌、Spine、代码结构
- `document/modding/`：Mod 制作思路与风险
- `document/reference/`：文件地图、限制与术语
- `document/.vitepress/config.mts`：VitePress 站点配置

## 推荐工作方式

1. 在 `document/` 中启动 VitePress 开发服务器
2. 修改 Markdown 文档
3. 在浏览器里边看边调结构与内容

## 说明

- 文档中的结论来自发布包分析、资源整理与结构化代码骨架，不等于官方源码说明
- 如果继续补充专题，优先在 `analysis/` 或 `modding/` 下新增页面，并同步更新 `document/.vitepress/config.mts`
