// ============================================================
// ColorUIX · 文本格式化工具（X 新增）
// ------------------------------------------------------------
// numFw(str)：半角数字 → 全角数字。中文短标签数字等宽——
//   '5天到期' → '５天到期'（全角数字占 1em = 汉字宽度，与纯汉字标签精确对齐）。
//   适合"单数字 + 汉字"的短文本（状态/期限/排名）；
//   数字串/金额请用 .num（tabular-nums），不要全角化。
// 用法：
//   import { numFw } from '@/common/coloruix/js/format.js'
//   <text>{{ numFw('5天到期') }}</text>
// ============================================================

export function numFw(str) {
	return String(str).replace(/\d/g, (d) => String.fromCharCode(d.charCodeAt(0) + 0xfee0))
}
