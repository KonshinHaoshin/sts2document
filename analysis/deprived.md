# Deprived 深挖

## 结论

从当前发布包与结构化代码骨架来看，`Deprived` 更像是一个**预留中的角色骨架**，而不是当前版本中完整可玩的正式角色。

## 为什么确认它不是普通占位文本

首先，`Deprived` 在本地化里不是单独一条标题，而是有一整组最基础的角色代词字段：

- `DEPRIVED.title`
- `DEPRIVED.titleObject`
- `DEPRIVED.pronounSubject`
- `DEPRIVED.pronounObject`
- `DEPRIVED.pronounPossessive`
- `DEPRIVED.possessiveAdjective`

这说明它至少被当作一个“角色对象”来对待，而不是随手留下的 UI 文本碎片。

同时，代码里也确实有独立类型：

- `MegaCrit.Sts2.Core.Models.Characters.Deprived`

这说明它在模型层是一个真实存在的 `CharacterModel` 子类。

## 为什么又判断它不是当前完整主角色

### 1. 只有最基础本地化，没有完整角色描述

正式角色在 `characters.json` 里通常会有：

- `title`
- `description`
- `cardsModifierTitle`
- `cardsModifierDescription`
- `unlockText`
- 各种 banter / monologue / eventDeathPrevention

而 `Deprived` 当前只看到：

- 名字
- 代词

没有看到和 `Ironclad`、`Silent`、`Defect`、`Necrobinder`、`Regent` 同等级的一整套角色说明字段。

这通常意味着它没有走到完整内容制作阶段。

### 2. 没有对应的角色选择背景资源

当前角色选择场景里可以直接看到：

- `char_select_bg_ironclad.tscn`
- `char_select_bg_silent.tscn`
- `char_select_bg_defect.tscn`
- `char_select_bg_necrobinder.tscn`
- `char_select_bg_regent.tscn`
- `char_select_bg_random_character.tscn`

但没有 `char_select_bg_deprived.tscn`。

这是一条很强的负面证据：如果一个角色真的接近完成，通常至少会在角色选择层看到配套资源。

### 3. 没有发现对应动画、图片或场景资源

在当前恢复出来的：

- `images/`
- `animations/`
- `scenes/`

里都没有明显的 `deprived` 资源命名痕迹。

也就是说：

- 没有角色立绘痕迹
- 没有角色选择 Spine 命名痕迹
- 没有角色背景场景命名痕迹

这进一步说明它更像是“模型先立了类，但资源没跟上”。

## 最关键的一条：它绑定的是 `MockCardPool`

`Deprived` 类里最值得注意的字段是：

- `_mockCardPool`

而项目现有正式角色都有独立的卡池类型，例如：

- `IroncladCardPool`
- `SilentCardPool`
- `DefectCardPool`
- `NecrobinderCardPool`
- `RegentCardPool`

但没有 `DeprivedCardPool`。

取而代之的是：

- `MockCardPool`

从命名上看，这非常像：

- 测试用卡池
- 占位卡池
- 尚未完成正式卡池前的临时实现

如果一个角色已经接近正式上线，通常会有独立卡池类型，而不是继续挂在 `MockCardPool` 上。

## 它可能是什么

结合当前证据，`Deprived` 更像下面几种情况之一：

### 方案 A：开发中取消或搁置的角色

这种可能性很高：

- 类已经存在
- 本地化最基础字段已经建好
- 但资源、卡池和角色选择演出没有补完

### 方案 B：内部测试角色 / 调试角色

因为它和 `MockCardPool` 联系很紧，这也像一个内部用于测试：

- 角色框架
- 起始牌组逻辑
- UI 代词系统

但不一定打算直接进入公开版本。

### 方案 C：未来角色的早期骨架

也不能完全排除它原本是一个未来角色的雏形，只是目前发布版里还只保留了最基础模型层。

但从当前资源缺失程度看，它距离“即将启用”还比较远。

## 当前最稳的判断

在没有更多源码和运行时调试证据之前，当前最稳妥的说法是：

> `Deprived` 是发布包中残留的一个未完成角色骨架。它在模型层与本地化层都确实存在，但没有现有正式角色那样完整的资源、卡池和角色选择配套，因此不能把它视为当前版本可正常游玩的隐藏主角。

## 这件事对研究有什么意义

`Deprived` 很值得研究，因为它说明：

- 发布包里确实保留了部分未启用内容痕迹
- 角色系统是按 `CharacterModel` 独立注册的
- 本地化、卡池、角色选择资源、场景演出并不总是同步完成

也就是说，一个“角色存在”至少可以分成几层：

1. 模型类是否存在
2. 本地化是否存在
3. 卡池是否完整
4. 角色选择资源是否存在
5. 动画与场景资源是否存在
6. 运行时是否真正暴露给玩家

`Deprived` 目前大概只明确落在前两层，并在第三层表现出明显的测试 / 占位特征。

## 后续还能怎么继续挖

如果后面要继续深挖，最值得追的方向有三个：

- 它的 `StartingDeck`、`StartingRelics`、`StartingHp` 等属性在运行时实际返回什么
- `ModelDb.AllCharacters` 是否真的会把它纳入角色枚举中
- 角色选择界面是否存在隐藏条件，让 `Deprived` 在特定情况下出现

这三件事如果能进一步证实，就能更精确地区分它到底是：

- 废案
- 调试角色
- 未来角色骨架
