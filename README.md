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

## 部署到 Cloudflare Pages

这个目录已经补好了 Cloudflare Pages 的基础配置，直接适合拿去部署静态站。

### 已添加的配置

- `document/wrangler.toml`：声明 Pages 构建输出目录为 `.vitepress/dist`
- `document/public/_headers`：给 HTML、图标和打包后的静态资源设置缓存策略
- `document/public/_redirects`：补充少量静态回退与友好路径跳转规则

### Cloudflare Pages 推荐设置

- Framework preset：`None`
- Build command：`npm run docs:build`
- Build output directory：`document/.vitepress/dist`
- Root directory：`document`

如果你是在 Git 仓库里直接连接 Cloudflare Pages，最稳妥的做法是把项目根目录设为 `document`。这样：

- 安装依赖会在 `document/package.json` 所在目录执行
- 构建命令不需要再额外切目录
- 输出目录直接填写 `.vitepress/dist` 即可

### Node 版本建议

建议在 Cloudflare Pages 项目环境变量里设置：

- `NODE_VERSION=20`

这样能避免构建环境过旧导致的 VitePress / ESM 问题。

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
