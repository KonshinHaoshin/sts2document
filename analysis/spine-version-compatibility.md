# Spine 版本兼容

## 为什么 Spine 3.8.75 打不开

你当前提供的报错是典型的**版本不兼容**现象，而不是简单的文件损坏。

现状是：

- 你使用的是 `Spine 3.8.75`
- 当前导出的很多 `*.skel` 文件头中能直接看到 `4.2.x` 版本号

本地抽样已经看到的版本包括：

- `4.2.03`
- `4.2.08`
- `4.2.35`
- `4.2.36`
- `4.2.40`
- `4.2.43`

## 为什么会报 `EOFException`

`Spine 3.8` 去读 `Spine 4.2` 的二进制 skeleton 时，二进制结构已经变化，因此会出现：

- `Error reading skeleton file`
- `java.io.EOFException`
- 后续 `NullPointerException`

## 建议

- 若要测试导入，请优先使用 **Spine 4.2.x**
- 如果只用 `3.8.75`，大多数当前导出的 `.skel` 都无法直接打开