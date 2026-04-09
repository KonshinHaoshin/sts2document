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

## 对美化 Mod 最值得参考的公开模板

如果你的目标主要是做贴图包、换皮包、界面美化包，最值得优先参考的公开项目之一是：

- [Texture Pack 模板使用方法](/modding/texture-pack-template)

这类模板的价值不在于复杂功能，而在于它已经把“资源怎么组织、怎么覆盖、怎么让 atlas 正常生效”这条链路打通了。
