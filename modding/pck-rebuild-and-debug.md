# PCK 重打包与不生效排查

## 这次排查确认了什么

这次 `sakikotheregent` 不生效，首先不是文本内容写错，也不是 manifest 没被游戏发现，而是 **PCK 本身没有被游戏成功挂载**。

从游戏日志可以确认：

- 游戏能够发现模组清单文件。
- 游戏尝试加载对应的 `.pck`。
- 旧包在挂载阶段因为 **Godot 版本过新** 而失败。

因此，在旧包状态下：

- 卡图不会覆盖。
- 模组内本地化不会被读取。
- 后续是否需要额外 DLL，也无法在这个阶段下结论。

## 直接根因

旧的 `sakikotheregent.pck` 是用 **Godot 4.6.2** 导出的。

而游戏当前运行时是 **Godot 4.5.1 系列**。

Godot 对资源包版本是敏感的。高版本编辑器导出的 `.pck`，低版本运行时通常无法直接加载。

这也是为什么日志里会出现类似下面的错误：

- `Pack created with a newer version of the engine`

这条错误一旦出现，后面的资源覆盖和本地化合并都不会发生。

## 这次修正了哪些内容

### 1. 改用 Godot 4.5.1 重打包

已经重新生成兼容游戏运行时的模组包，并覆盖当前使用的：

- `mods/sakikotheregent/sakikotheregent.pck`

同时保留了旧包备份：

- `mods/sakikotheregent/sakikotheregent.4.6.2.backup.pck`

### 2. 把卡图放到真正可覆盖的资源路径

这次排查还发现，早期整理的卡图曾被放在类似 `work/...` 的工作目录下。

这类路径适合整理素材，但**不能直接覆盖游戏正式资源**。

当前已经调整为覆盖用路径：

- `images/packed/card_portraits/regent/`
- `images/packed/card_portraits/regent/beta/`
- `images/packed/card_portraits/token/`
- `images/packed/card_portraits/token/beta/`

也就是说，PCK 一旦成功挂载，卡图才有机会按原路径覆盖到游戏中。

### 3. 保留模组内本地化目录

当前包中保留了模组命名空间下的本地化目录：

- `sakikotheregent/localization/eng/`
- `sakikotheregent/localization/zhs/`

这一步的目的不是断言“已经一定生效”，而是为下一步验证准备正确输入。

在 PCK 成功挂载前，无法判断是否还需要最小 DLL 初始化壳。

## 现在应该如何验证

启动游戏后，优先检查日志，而不是先盯着界面有没有变化。

重点看两类信息：

### 第一类：模组是否被发现

日志里应当能看到类似：

- 找到 manifest
- 开始加载 `sakikotheregent.pck`

### 第二类：是否还有版本错误

如果还出现：

- `Pack created with a newer version of the engine`

说明你当前运行的仍不是兼容包，或者实际游戏目录中的包还没有被替换。

如果这句错误消失了，再继续看：

- Regent 卡图是否变化。
- 中文或英文文本是否变化。

## 当前更合理的判断顺序

在这次排查之后，更合理的判断顺序是：

1. 先确认 manifest 被扫描到。
2. 再确认 `.pck` 成功挂载。
3. 再确认卡图覆盖路径是否正确。
4. 最后才判断模组内本地化是否还需要 DLL 参与初始化。

这样可以避免把“PCK 根本没加载”误判成“文本 JSON 没写对”或者“必须先写 DLL”。

## 后续建议

如果新包加载后：

- 卡图生效了，但本地化没生效，下一步优先检查本地化合并规则，必要时补最小 DLL。
- 卡图和本地化都不生效，但日志已不再报 PCK 版本错误，就继续检查资源路径或模组命名空间。
- 日志仍然报版本错误，就不要继续改资源内容，先重新确认实际加载的 `.pck` 文件是不是刚刚导出的那个。

## 配套脚本

为了后续重复打包和整理资源，当前已经补上：

- `mods/sakikotheregent/rebuild_pck_godot451.ps1`
- `tools/setup_texture_pack.py`

前者用于使用 Godot 4.5.1 重打 `sakikotheregent.pck`。

后者用于把整理好的卡面 PNG 自动复制到实际覆盖路径中。
