# 音频与原生扩展

## 当前已知原生依赖

恢复工程在验证时暴露出三条关键原生扩展链：

- `addons/fmod/fmod.gdextension`
- `addons/sentry/sentry.gdextension`
- `bin/spine_godot_extension.gdextension`

同时根目录还存在：

- `libGodotFmod.windows.template_release.x86_64.dll:1`
- `libsentry.windows.release.x86_64.dll:1`
- `libspine_godot.windows.template_release.x86_64.dll:1`

## 它们各自负责什么

### FMOD

处理复杂音频播放与 bank 管理。

### Spine Godot 扩展

负责 Spine 资源在 Godot 运行时中的读取与播放。

### Sentry

负责崩溃或异常上报。

## 为什么对恢复工程重要

即使有 `.tscn`、`.atlas`、`.skel` 和材质资源，只要对应扩展路径或脚本桥接缺失，就会发生：

- 扩展类找不到
- autoload 失败
- 场景实例化失败