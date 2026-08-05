<template>
	<view class="page">
		<!-- ======== 基础动效 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>基础动效
			</view>
			<view class="action">
				<text class="text-hint text-xs">点击按钮重新播放</text>
			</view>
		</view>
		<view class="grid col-4 padding-sm">
			<view class="padding-sm" v-for="(item, index) in list" :key="index">
				<view class="cu-btn block shadow radius" :class="['bg-' + item.color, animation === item.name ? 'animation-' + item.name : '']" @tap="play(item.name)">
					{{ item.name }}
				</view>
			</view>
		</view>
		<view class="cu-card margin padding">
			<text class="text-sub text-sm">animation-* 是标准 CSS 动画类（约 0.5s，fade 0.8s）。把类名挂到元素上即播放，移除后再挂载可重新播放——点击时先清空再挂载实现重播。</text>
		</view>

		<!-- ======== 反向动画 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>反向动画（animation-reverse）
			</view>
		</view>
		<view class="grid col-4 padding-sm">
			<view class="padding-sm" v-for="(item, index) in list" :key="index">
				<view class="cu-btn block shadow radius animation-reverse" :class="['bg-' + item.color, reverse === item.name ? 'animation-' + item.name : '']" @tap="playReverse(item.name)">
					{{ item.name }}
				</view>
			</view>
		</view>
		<view class="cu-card margin padding">
			<text class="text-sub text-sm">animation-reverse 将动画方向反转（如 slide-top 变成从上往下滑出），常配合入场动画做离场效果。</text>
		</view>

		<!-- ======== 延迟执行 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>延迟执行
			</view>
			<view class="action">
				<view class="cu-btn bg-cyan shadow sm" @tap="playDelay">开始执行</view>
			</view>
		</view>
		<view class="grid col-4 padding-sm">
			<view class="padding-sm" v-for="(item, index) in list" :key="'d' + index">
				<view class="cu-btn block shadow radius text-cut" :class="['bg-' + item.color, delay ? 'animation-slide-bottom' : '']" :style="{ animationDelay: (index + 1) * 0.1 + 's' }">
					{{ index + 1 }} · {{ item.name }}
				</view>
			</view>
		</view>
		<view class="cu-card margin padding">
			<text class="text-sub text-sm">animationDelay 让每个元素依次延迟 0.1s 入场，形成瀑布式效果。</text>
		</view>

		<!-- ======== 按压反馈 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>按压反馈（hover-shrink）
			</view>
		</view>
		<view class="cu-card margin padding hover-shrink" hover-class="x-press" @tap="onTap">
			<view class="flex justify-between align-center">
				<text class="text-black">可点击卡片 · 按压微缩放</text>
				<text class="cuIcon cuIcon-right text-hint"></text>
			</view>
		</view>
		<view class="margin-lr margin-top-sm flex gap-sm">
			<view class="flex-1">
				<view class="cu-btn block bg-blue shadow hover-shrink" hover-class="x-press" @tap="onTap">主按钮</view>
			</view>
			<view class="flex-1">
				<view class="cu-btn block bg-green shadow hover-shrink" hover-class="x-press" @tap="onTap">成功按钮</view>
			</view>
			<view class="flex-1">
				<view class="cu-btn block bg-red shadow hover-shrink" hover-class="x-press" @tap="onTap">危险按钮</view>
			</view>
		</view>
		<view class="cu-card margin padding hover-shrink" hover-class="x-press" @tap="onTap">
			<view class="flex justify-between align-center">
				<text class="text-black">标签按压</text>
				<view class="flex gap-xs">
					<text class="cu-tag bg-blue radius hover-shrink" hover-class="x-press" @tap.stop="onTap">cu-tag</text>
					<text class="cu-tag bg-grey radius hover-shrink" hover-class="x-press" @tap.stop="onTap">tag</text>
				</view>
			</view>
		</view>
		<view class="text-hint text-xs margin-lr margin-top-xs">hover-shrink 是 X 新增类：按压时 transform: scale(0.97)。小程序端 :active 伪类不生效，demo 统一用 hover-class="x-press" 触发按压态（H5/App 端 :active 仍兼容）。</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'

	const list = ref([
		{ name: 'fade', color: 'red' },
		{ name: 'scale-up', color: 'orange' },
		{ name: 'scale-down', color: 'olive' },
		{ name: 'slide-top', color: 'green' },
		{ name: 'slide-bottom', color: 'cyan' },
		{ name: 'slide-left', color: 'blue' },
		{ name: 'slide-right', color: 'purple' },
		{ name: 'shake', color: 'mauve' }
	])
	const animation = ref('')
	const reverse = ref('')
	const delay = ref(false)

	// 先移除再挂载动画类，保证连续点击可重新播放
	function replay(target, name) {
		target.value = ''
		setTimeout(() => {
			target.value = name
			setTimeout(() => {
				target.value = ''
			}, 1200)
		}, 30)
	}

	function play(name) {
		replay(animation, name)
	}

	function playReverse(name) {
		replay(reverse, name)
	}

	function playDelay() {
		delay.value = false
		setTimeout(() => {
			delay.value = true
			setTimeout(() => {
				delay.value = false
			}, 1800)
		}, 30)
	}

	function onTap() {
		uni.showToast({ title: '按压反馈生效', icon: 'none' })
	}
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}
</style>
