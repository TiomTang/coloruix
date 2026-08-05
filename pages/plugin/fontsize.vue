<template>
	<!-- 字号放大档位演示：根 view 挂 cu-fontsize-N，全页 .text-* 联动 -->
	<view class="page" :class="fontsizeClass">
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>动态字号（X 新增）
			</view>
		</view>

		<view class="cu-card margin padding">
			<view class="flex justify-between align-center">
				<text class="text-df">字号档位</text>
				<view class="flex gap-sm">
					<view class="cu-tag radius" :class="level === 0 ? 'bg-blue' : 'bg-grey light'" @tap="setLevel(0)">标准</view>
					<view class="cu-tag radius" :class="level === 1 ? 'bg-blue' : 'bg-grey light'" @tap="setLevel(1)">大</view>
					<view class="cu-tag radius" :class="level === 2 ? 'bg-blue' : 'bg-grey light'" @tap="setLevel(2)">特大</view>
				</view>
			</view>
			<view class="text-hint text-xs margin-top-xs">选择后持久化，重新打开页面自动恢复</view>
		</view>

		<view class="cu-card margin padding">
			<view class="text-xs text-hint">text-xs · 弱提示/标签</view>
			<view class="text-sm text-sub">text-sm · 次级文字</view>
			<view class="text-df">text-df · 正文</view>
			<view class="text-lg text-bold margin-top-sm">text-lg · 强调</view>
			<view class="text-xl text-bold margin-top-sm">text-xl · 页面大标题</view>
			<view class="num text-brand text-xl margin-top-sm">1,234.56</view>
			<view class="text-hint text-xs margin-top-xs">.num 等宽数字随 --cu-font-num 联动</view>
		</view>

		<view class="cu-card margin padding">
			<view class="text-df text-bold margin-bottom-sm">组件字号联动</view>
			<view class="cu-btn bg-blue margin-bottom-sm">按钮文字 · text-df 继承</view>
			<view class="cu-form-group solid-bottom">
				<view class="title">表单标题</view>
				<text class="text-sub">表单内容随档位放大</text>
			</view>
			<view class="cu-list menu margin-top-sm">
				<view class="cu-item">
					<view class="content">
						<view class="text-df">列表项文字</view>
					</view>
					<view class="action">
						<text class="cuIcon-right text-grey"></text>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-card margin padding">
			<view class="text-df text-bold margin-bottom-sm">超大展示字号（不参与缩放）</view>
			<view class="text-sl text-brand">80</view>
			<view class="text-xsl text-brand">120</view>
			<view class="text-hint text-xs margin-top-xs">.text-sl / .text-xsl 用于封面大字，保持固定</view>
		</view>

		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref, computed } from 'vue'

	// 冷启动：读取持久化档位（0=标准 1=大 2=特大，缺省 0）
	const level = ref(uni.getStorageSync('cu-fontsize') || 0)
	const fontsizeClass = computed(() => (level.value > 0 ? 'cu-fontsize-' + level.value : ''))

	function setLevel(v) {
		level.value = v
		uni.setStorageSync('cu-fontsize', v)
	}
</script>

<style lang="scss">
	/* 页面底色（ColorUIX 无全局 .page，各页 scoped 定义） */
	.page {
		background-color: var(--cu-bg-page);
		min-height: 100vh;
	}
</style>
