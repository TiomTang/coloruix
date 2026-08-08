// ============================================================
// ColorUIX · 运行时主题对象（JS 侧换肤）
// ------------------------------------------------------------
// 用法（uni-app 页面根 view）：
//   import { themes, defaultTheme, customTheme } from '@/common/coloruix/js/themes.js'
//   <view :style="themeVars">
// 切换：
//   themeVars = themes[selected]
//   uni.setStorageSync('cu-theme', selected)   // 持久化
// 品牌色定制（X 新增）：
//   themeVars = customTheme('#FF6600', themes[selected])   // 主色自动推导深/浅底，风格继承 base
// 冷启动：
//   const saved = uni.getStorageSync('cu-theme') || defaultTheme
//   themeVars = themes[saved]
//
// 注意：themes 对象里的 apple 主题值与 variables/_index.scss 的 CSS 变量默认值一致；
//       新增主题只需在此加对象即可（动态换肤），无需对应 scss 文件（除非要用静态类挂载）
// ============================================================

export const themes = {
	// Apple 现代风（默认）
	apple: {
		'--cu-brand': '#4A9BD9',
		'--cu-brand-deep': '#2E7FC4',
		'--cu-brand-soft': '#E8F4FC',
		'--cu-shadow-card': '0 2rpx 8rpx rgba(17,24,39,.04), 0 8rpx 24rpx rgba(17,24,39,.06)',
		'--cu-shadow-float': '0 4rpx 16rpx rgba(17,24,39,.10), 0 12rpx 40rpx rgba(17,24,39,.12)',
		'--cu-radius-sm': '8rpx',
		'--cu-radius-md': '16rpx',
		'--cu-radius-lg': '24rpx',
	},
	// 扁平化
	flat: {
		'--cu-brand': '#4A9BD9',
		'--cu-brand-deep': '#2E7FC4',
		'--cu-brand-soft': '#E8F4FC',
		'--cu-shadow-card': 'none',
		'--cu-shadow-float': 'none',
		'--cu-radius-sm': '4rpx',
		'--cu-radius-md': '8rpx',
		'--cu-radius-lg': '12rpx',
	},
	// 赛博科幻（X 新增）：霓虹品牌色 + 发光阴影 + 锐利圆角
	'sci-fi': {
		'--cu-brand': '#00D4FF',
		'--cu-brand-deep': '#0090C0',
		'--cu-brand-soft': '#E0F9FF',
		'--cu-shadow-card': '0 0 16rpx rgba(0,212,255,.18), 0 8rpx 24rpx rgba(0,212,255,.10)',
		'--cu-shadow-float': '0 0 32rpx rgba(0,212,255,.28), 0 12rpx 40rpx rgba(0,212,255,.16)',
		'--cu-radius-sm': '4rpx',
		'--cu-radius-md': '8rpx',
		'--cu-radius-lg': '12rpx',
	},
	// 暗色（X 新增）：A 层变量化后的完整暗色主题（背景/文字/线条全量跟随）
	dark: {
		'--cu-brand': '#5B8CFF',
		'--cu-brand-deep': '#3A6AE8',
		'--cu-brand-soft': '#1E2A4A',
		'--cu-income': '#34C77B',
		'--cu-expense': '#FF5D5D',
		'--cu-warning': '#FFB020',
		'--cu-text-main': '#E6EBF5',
		'--cu-text-sub': '#9AA7C0',
		'--cu-text-hint': '#66748F',
		'--cu-bg-page': '#0F1626',
		'--cu-bg-card': '#1A2336',
		'--cu-bg-sunken': '#131B2C',
		'--cu-line': '#24304A',
		'--cu-line-strong': '#33415F',
		'--cu-ok-bg': 'rgba(52, 199, 123, .12)',
		'--cu-danger-bg': 'rgba(255, 93, 93, .12)',
		'--cu-warn-bg': 'rgba(255, 176, 32, .12)',
		'--cu-radius-sm': '8rpx',
		'--cu-radius-md': '16rpx',
		'--cu-radius-lg': '24rpx',
		'--cu-shadow-card': '0 2rpx 8rpx rgba(0,0,0,.4), 0 8rpx 24rpx rgba(0,0,0,.5)',
		'--cu-shadow-float': '0 4rpx 16rpx rgba(0,0,0,.5), 0 12rpx 40rpx rgba(0,0,0,.6)',
	},
	// 赛博科幻（霓虹辉光，X 新增——与 themes/_sci-fi.scss 的 .theme-sci-fi 值保持一致）
	'sci-fi': {
		'--cu-brand': '#00D4FF',
		'--cu-brand-deep': '#0090C0',
		'--cu-brand-soft': '#E0F9FF',
		'--cu-shadow-card': '0 0 16rpx rgba(0,212,255,.18), 0 8rpx 24rpx rgba(0,212,255,.10)',
		'--cu-shadow-float': '0 0 32rpx rgba(0,212,255,.28), 0 12rpx 40rpx rgba(0,212,255,.16)',
		'--cu-radius-sm': '4rpx',
		'--cu-radius-md': '8rpx',
		'--cu-radius-lg': '12rpx',
	},
}

export const defaultTheme = 'apple'

// ---------- 品牌色定制（X 新增） ----------

// 规范化 hex：#abc → #aabbcc；#RRGGBB 通过；非法返回 null
function normalizeHex(hex) {
	if (typeof hex !== 'string') return null
	const h = hex.trim().replace(/^#/, '')
	if (/^[0-9a-fA-F]{3}$/.test(h)) {
		return '#' + h.split('').map((c) => c + c).join('').toLowerCase()
	}
	return /^[0-9a-fA-F]{6}$/.test(h) ? '#' + h.toLowerCase() : null
}

// hex '#RRGGBB' → { r, g, b }
function hexToRgb(hex) {
	const h = hex.replace('#', '')
	return {
		r: parseInt(h.slice(0, 2), 16),
		g: parseInt(h.slice(2, 4), 16),
		b: parseInt(h.slice(4, 6), 16),
	}
}

// 按 ratio 向 target 混色（0=原色，1=纯 target）
function mixHex(hex, target, ratio) {
	const c = hexToRgb(hex)
	const t = hexToRgb(target)
	const r = Math.round(c.r + (t.r - c.r) * ratio)
	const g = Math.round(c.g + (t.g - c.g) * ratio)
	const b = Math.round(c.b + (t.b - c.b) * ratio)
	return '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')
}

// 主色 → 品牌三件套（deep 向黑 25%，soft 向白 85%），风格变量继承 base 主题
// 非法品牌色（非 6 位 hex）直接回退 base，不产生垃圾色值
export function customTheme(brand, base = themes.apple) {
	const hex = normalizeHex(brand)
	if (!hex) return base
	return {
		...base,
		'--cu-brand': hex,
		'--cu-brand-deep': mixHex(hex, '#000000', 0.25),
		'--cu-brand-soft': mixHex(hex, '#FFFFFF', 0.85),
	}
}
