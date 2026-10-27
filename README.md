# dsh-plugin-fei-bridge

飞系（52 个企业管理系统 + 飞脑 Agent 网关）接入 DeepSeek Harness 的第一个组合包。

## 它是什么

一个最小可安装的 DSH bundle（`dsh.bundle.patch` 声明 + `cordis.patch.yml` + 插件模块），
作用是把 `fei-bridge` 插件行插入 profile，验证「飞系项目 → DSH 插件索引 → 发现 → 安装 → 激活」全链路。

安装成功后，启动 profile 时终端输出：

```text
[fei-bridge] loaded — 飞系桥接组合包已激活（v0.1.0）
```

## 安装

```sh
dsh plugin --profile <你的profile> add git+https://github.com/dukema81/dsh-plugin-fei-bridge.git
# 或从索引源安装：把 https://raw.githubusercontent.com/dukema81/dsh-fei-market/main/site/index.json
# 添加为 DSH「发现」页的索引源
```

## 后续路线

- `feinao_chat` 工具：调用飞脑 `/nao/api/chat`（LCM 长期会话）
- `fei_query` 工具：经飞脑 NL2API 查飞系系统数据
- 飞系话术 / 合规 instructions 层

## 协议

MIT
