# 开始阅读

## 这套站点适合谁

如果你正在做以下事情，这套文档会比较有用：

- 想理解 `SlayTheSpire2.exe` 发布包还能还原出多少工程信息
- 想研究 Godot 发布包、资源图集、Spine 与 C# 逻辑的结合方式
- 想搞清楚卡牌显示、场景组织、UI 结构和资源引用关系
- 想尝试做资源替换或行为修改类 Mod

## 你会在这里看到什么

这套研究并不是官方源码讲解，而是围绕几类分析产物展开：

- 恢复工程：帮助理解发布后的 Godot 资源和场景结构
- 结构化代码骨架：帮助建立类型、成员与模块地图
- 卡牌导出结果：帮助观察职业分类、卡面规模和图集组织
- Spine 汇总结果：帮助理解动画资产的覆盖范围与限制
- 模组样本：帮助快速进入 Mod 制作思路

## 最推荐的阅读顺序

### 第一阶段：先建立全局概念

- [项目概览](/guide/project-overview)
- [运行时架构](/analysis/runtime-architecture)
- [资源结构](/analysis/resource-structure)

### 第二阶段：再看最有价值的资源专题

- [卡牌渲染](/analysis/card-rendering)
- [卡牌职业分类](/analysis/cards-by-class)
- [Spine 资源](/analysis/spine-assets)
- [Spine 版本兼容](/analysis/spine-version-compatibility)

### 第三阶段：如果你准备动手

- [Mod 概览](/modding/mod-overview)
- [开发工作流](/modding/modding-workflow)
- [PCK Mod](/modding/pck-modding)
- [DLL Mod](/modding/dll-modding)

## 阅读时要记住的限制

- 这是基于发布包建立的研究站，不是官方项目文档
- 很多资源和代码只能恢复到“便于研究”的层次，不能等同原始作者工程
- 某些结论来自多份证据交叉推断，因此更适合学习架构与思路，不适合当成官方规范
