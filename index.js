export const name = 'fei-bridge'

/**
 * 飞系桥接插件（第一块基石）。
 *
 * 当前职责：证明 dsh 组合包链路（索引 → 发现 → 安装 → profile 激活）对飞系可用。
 * 后续演进方向（按 DSH 插件 API 逐个接入）：
 *   1. 注册 `feinao_chat` 工具：调用飞脑网关 /nao/api/chat（LCM 长期会话）；
 *   2. 注册 `fei_query` 工具：经飞脑 NL2API 查 52 个飞系系统数据；
 *   3. 贡献飞系话术/合规 instructions 层。
 * 加载成功时终端会打印 [fei-bridge] loaded。
 */
export function apply(ctx) {
  console.log('[fei-bridge] loaded — 飞系桥接组合包已激活（v0.1.0）')
}
