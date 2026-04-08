# Mod 概览

## 目前能确认的 Mod 形态

从本地样本 `mod1s/RemoveMultiplayerPlayerLimit:1` 来看，这个游戏的模组至少支持一种 **DLL + PCK 双形态**：

- `RemoveMultiplayerPlayerLimit.dll:1`
- `RemoveMultiplayerPlayerLimit.pck:1`
- `RemoveMultiplayerPlayerLimit.json:1`
- `config.ini:1`

## 这意味着什么

- **PCK** 适合资源层修改：场景、贴图、材质、文本、UI
- **DLL** 适合逻辑层修改：规则、行为、限制、流程
- **JSON** 负责模组元信息与加载声明

## 适合做哪些 Mod

- 资源替换
- UI 调整
- 数值和平衡修改
- 逻辑补丁
- 玩法扩展