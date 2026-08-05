<template>
	<view class="page" :style="themeVars">
		<!-- ======== 主题选择 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>主题选择
			</view>
			<view class="action">
				<text class="badge badge-brand">当前：{{ themeName }}</text>
			</view>
		</view>
		<view class="flex flex-col flex-wrap gap-sm margin">
			<view class="flex-1 cu-card padding hover-shrink theme-option" hover-class="x-press" :class="selected === 'apple' ? 'theme-active' : ''" @tap="selectTheme('apple')">
				<view class="flex justify-between align-center">
					<text class="text-bold text-main">Apple 现代风</text>
					<text v-if="selected === 'apple'" class="cuIcon cuIcon-check text-brand"></text>
				</view>
				<view class="text-xs text-hint margin-top-xs">默认主题 · 柔和双层阴影 + 大圆角</view>
				<view class="flex gap-xs margin-top-sm">
					<view class="flex-1 chip bg-blue"></view>
					<view class="flex-1 chip bg-green"></view>
					<view class="flex-1 chip bg-orange"></view>
				</view>
			</view>
			<view class="flex-1 cu-card padding hover-shrink theme-option" hover-class="x-press" :class="selected === 'flat' ? 'theme-active' : ''" @tap="selectTheme('flat')">
				<view class="flex justify-between align-center">
					<text class="text-bold text-main">扁平化</text>
					<text v-if="selected === 'flat'" class="cuIcon cuIcon-check text-brand"></text>
				</view>
				<view class="text-xs text-hint margin-top-xs">去阴影 · 小圆角 · 极简干练</view>
				<view class="flex gap-xs margin-top-sm">
					<view class="flex-1 chip bg-blue"></view>
					<view class="flex-1 chip bg-green"></view>
					<view class="flex-1 chip bg-orange"></view>
				</view>
			</view>
			<view class="flex-1 cu-card padding hover-shrink theme-option" hover-class="x-press" :class="selected === 'sci-fi' ? 'theme-active' : ''" @tap="selectTheme('sci-fi')">
				<view class="flex justify-between align-center">
					<text class="text-bold text-main">赛博科幻</text>
					<text v-if="selected === 'sci-fi'" class="cuIcon cuIcon-check text-brand"></text>
				</view>
				<view class="text-xs text-hint margin-top-xs">霓虹品牌色 · 发光阴影 · 锐利圆角</view>
				<view class="flex gap-xs margin-top-sm">
					<view class="flex-1 chip" style="background: #00D4FF;"></view>
					<view class="flex-1 chip" style="background: #8B5CF6;"></view>
					<view class="flex-1 chip" style="background: #FF2E88;"></view>
				</view>
			</view>
			<view class="flex-1 cu-card padding hover-shrink theme-option" hover-class="x-press" :class="selected === 'dark' ? 'theme-active' : ''" @tap="selectTheme('dark')">
				<view class="flex justify-between align-center">
					<text class="text-bold text-main">暗色</text>
					<text v-if="selected === 'dark'" class="cuIcon cuIcon-check text-brand"></text>
				</view>
				<view class="text-xs text-hint margin-top-xs">深色背景 · 背景/文字/线条全量跟随</view>
				<view class="flex gap-xs margin-top-sm">
					<view class="flex-1 chip" style="background: #5B8CFF;"></view>
					<view class="flex-1 chip" style="background: #1A2336;"></view>
					<view class="flex-1 chip" style="background: #24304A;"></view>
				</view>
			</view>
		</view>
	<view class="text-hint text-xs margin-lr">点击卡片切换主题，选择会写入本地存储，下次打开自动恢复。</view>

	<!-- ======== 品牌色定制（X 新增） ======== -->
	<view class="cu-bar bg-white solid-bottom margin-top">
		<view class="action">
			<text class="cuIcon-title text-brand"></text>品牌色定制（X 新增 · customTheme）
		</view>
	</view>
	<view class="cu-card margin padding">
		<view class="text-sub text-sm">点击色块或输入 hex，主色自动推导品牌三件套（主色/深/浅底），与当前主题的风格变量（阴影/圆角）叠加。</view>
		<view class="flex gap-sm margin-top-sm">
			<view v-for="c in presetColors" :key="c" class="flex-1 color-chip" :style="{ background: c }" :class="customBrand === c ? 'color-active' : ''" @tap="applyCustomBrand(c)"></view>
		</view>
		<view class="flex gap-sm align-center margin-top-sm">
			<text class="text-sub text-sm">#</text>
			<input class="flex-sub color-input" :value="customInput" placeholder="00D4FF" placeholder-class="cu-ph" @input="onCustomInput" />
			<button class="cu-btn bg-blue sm" @tap="applyCustomInput">应用</button>
			<button v-if="customBrand" class="cu-btn line-blue text-blue sm" @tap="resetCustomBrand">重置</button>
		</view>
	</view>

	<!-- ======== 换肤效果预览 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>换肤效果预览
			</view>
			<view class="action">
				<text class="text-hint text-xs">同一套 DOM 即时重绘</text>
			</view>
		</view>
		<view class="cu-card shadow-lg margin">
			<view class="padding-lr padding-tb solid-bottom flex justify-between align-center">
				<text class="text-bold text-main">订单卡片 · cu-card shadow-lg</text>
				<text class="badge badge-brand">进行中</text>
			</view>
			<view class="padding-lr padding-tb">
				<text class="text-sub text-sm">圆角、阴影全部由 var(--cu-*) 变量驱动，切换主题时整卡外观即时变化。</text>
			</view>
			<view class="padding-lr padding-tb flex justify-between align-center">
				<text class="text-sub">主操作按钮</text>
				<view class="cu-btn bg-blue shadow-lg radius" @tap="onPreviewTap">立即体验</view>
			</view>
			<view class="padding-lr padding-tb flex justify-between align-center solid-bottom">
				<text class="text-sub">状态标签</text>
				<view class="flex gap-sm align-center">
					<text class="cu-tag bg-green radius">成功</text>
					<text class="cu-tag bg-orange radius">警告</text>
					<text class="cu-tag bg-red radius">失败</text>
				</view>
			</view>
			<view class="padding-lr padding-tb flex justify-between align-center">
				<text class="text-sub">状态点</text>
				<view class="flex gap-sm align-center">
					<view class="flex align-center gap-xs">
						<view class="status-dot status-dot-ok"></view>
						<text class="text-xs text-sub">在线</text>
					</view>
					<view class="flex align-center gap-xs">
						<view class="status-dot status-dot-warn"></view>
						<text class="text-xs text-sub">告警</text>
					</view>
					<view class="flex align-center gap-xs">
						<view class="status-dot status-dot-danger"></view>
						<text class="text-xs text-sub">故障</text>
					</view>
				</view>
			</view>
			<view class="flex justify-between align-center padding-tb margin-lr">
				<text class="text-sub">输入框</text>
				<input class="text-right" placeholder="输入框跟随主题" placeholder-class="cu-ph" />
			</view>
		</view>

		<!-- ======== 变量对照 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>当前生效变量
			</view>
		</view>
		<view class="cu-card margin">
			<view class="padding-lr padding-tb solid-bottom flex justify-between align-center">
				<text class="text-sub text-sm">--cu-shadow-card</text>
				<text class="text-xs text-hint text-right">{{ shadowValue }}</text>
			</view>
			<view class="padding-lr padding-tb solid-bottom flex justify-between align-center">
				<text class="text-sub text-sm">--cu-shadow-float</text>
				<text class="text-xs text-hint text-right">{{ floatValue }}</text>
			</view>
			<view class="padding-lr padding-tb flex justify-between align-center">
				<text class="text-sub text-sm">--cu-radius-sm / md / lg</text>
				<text class="text-xs text-hint">{{ radiusValue }}</text>
			</view>
		</view>

		<!-- ======== 局部扁平化 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>局部扁平化（theme-flat）
			</view>
		</view>
		<view class="theme-flat margin">
			<view class="cu-card padding">
				<view class="flex justify-between align-center">
					<text class="text-bold text-main">theme-flat 子树</text>
					<text class="badge badge-mute">类名方案</text>
				</view>
				<text class="text-sub text-sm margin-top-xs block">给任意容器加 theme-flat 类即可让子树去阴影、小圆角——与运行时换肤同一套变量覆盖机制，适合局部扁平化。</text>
			</view>
		</view>

		<!-- ======== 平台限制 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>平台限制说明
			</view>
		</view>
		<view class="cu-card margin padding">
			<view class="flex gap-sm align-center text-lg">
				<text class="cuIcon cuIcon-info text-orange"></text>
				<view class="flex-1 flex-col">
					<text class="text-sub text-sm">换肤通过覆盖 --cu-* CSS 变量实现，只影响使用 var() 的 X 组件与类。</text>
					<text class="text-hint text-xs margin-top-xs">系统导航栏（pages.json 壳色）与原生组件 color 属性（switch/radio/slider 等）不支持 CSS 变量，不会跟随主题——这是平台限制。</text>
				</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref, computed } from 'vue'
	import { themes, defaultTheme, customTheme } from '/common/coloruix/js/themes.js'

	// 冷启动：读取持久化主题（缺省回退默认 apple）
	const selected = ref(uni.getStorageSync('cu-theme') || defaultTheme)

	// 品牌色定制（X 新增）：预设色块 + 自定义 hex，持久化
	const presetColors = ['#4A9BD9', '#00D4FF', '#8B5CF6', '#FF2E88', '#22C55E', '#F59E0B', '#EF4444']
	const customBrand = ref(uni.getStorageSync('cu-brand-custom') || '')
	const customInput = ref('')

	// 页面根 view 注入 CSS 变量，驱动全页换肤
	const themeVars = computed(() => {
		const base = themes[selected.value] || themes.apple
		return customBrand.value ? customTheme(customBrand.value, base) : base
	})
	const themeName = computed(() => ({ apple: 'Apple 现代风', flat: '扁平化', 'sci-fi': '赛博科幻', dark: '暗色' }[selected.value] || 'Apple 现代风'))
	const shadowValue = computed(() => themeVars.value['--cu-shadow-card'])
	const floatValue = computed(() => themeVars.value['--cu-shadow-float'])
	const radiusValue = computed(() =>
		themeVars.value['--cu-radius-sm'] + ' / ' + themeVars.value['--cu-radius-md'] + ' / ' + themeVars.value['--cu-radius-lg']
	)

	function selectTheme(name) {
		selected.value = name
		uni.setStorageSync('cu-theme', name)
		uni.showToast({ title: themeName.value + '主题', icon: 'none' })
	}

	function applyCustomBrand(hex) {
		customBrand.value = hex
		customInput.value = ''
		uni.setStorageSync('cu-brand-custom', hex)
		uni.showToast({ title: '品牌色已定制', icon: 'none' })
	}
	function onCustomInput(e) {
		customInput.value = e.detail.value
	}
	function applyCustomInput() {
		const hex = customInput.value.replace(/^#/, '').toUpperCase()
		if (!/^[0-9A-F]{6}$/.test(hex)) {
			uni.showToast({ title: '请输入 6 位 hex 色值', icon: 'none' })
			return
		}
		applyCustomBrand('#' + hex)
	}
	function resetCustomBrand() {
		customBrand.value = ''
		uni.removeStorageSync('cu-brand-custom')
		uni.showToast({ title: '已恢复主题默认品牌色', icon: 'none' })
	}

	function onPreviewTap() {
		uni.showToast({ title: '当前主题：' + themeName.value, icon: 'none' })
	}
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
		min-height: 100vh;
		background: var(--cu-bg-page);
	}

	.theme-option {
		border: 2rpx solid transparent;
		transition: border-color .2s;
	}

	.theme-active {
		border-color: var(--cu-brand);
	}

	.chip {
		height: 24rpx;
		border-radius: var(--cu-radius-sm);
		box-shadow: var(--cu-shadow-card);
	}

	.color-chip {
		height: 56rpx;
		border-radius: var(--cu-radius-sm);
		border: 3rpx solid transparent;
		transition: border-color .2s;
	}

	.color-active {
		border-color: var(--cu-brand);
		box-shadow: var(--cu-shadow-card);
	}

	.color-input {
		border: 1rpx solid var(--cu-line);
		border-radius: var(--cu-radius-sm);
		padding: 8rpx 16rpx;
		height: 56rpx;
	}
</style>
