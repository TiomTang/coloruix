<template>
	<view class="page">
		<!-- ======== 头像形状 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>头像形状
			</view>
		</view>
		<view class="padding flex align-center gap-lg bg-white">
			<view class="cu-avatar round bg-gradual-blue">
				<text class="cuIcon cuIcon-people"></text>
			</view>
			<view class="cu-avatar radius bg-gradual-green">
				<text class="cuIcon cuIcon-people"></text>
			</view>
			<view class="cu-avatar bg-gradual-red">
				<text class="cuIcon cuIcon-people"></text>
			</view>
		</view>
		<view class="text-hint text-xs margin-lr">round 圆形 / radius 圆角 / 默认方形（demo 用色块+图标替代图片）</view>

		<!-- ======== 头像尺寸 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>头像尺寸
			</view>
		</view>
		<view class="padding flex align-center gap-lg bg-white">
			<view class="flex-col align-center">
				<view class="cu-avatar sm round bg-blue">
					<text class="cuIcon cuIcon-people"></text>
				</view>
				<text class="text-xs text-hint margin-top-xs">sm</text>
			</view>
			<view class="flex-col align-center">
				<view class="cu-avatar round bg-blue">
					<text class="cuIcon cuIcon-people"></text>
				</view>
				<text class="text-xs text-hint margin-top-xs">默认</text>
			</view>
			<view class="flex-col align-center">
				<view class="cu-avatar lg round bg-blue">
					<text class="cuIcon cuIcon-people"></text>
				</view>
				<text class="text-xs text-hint margin-top-xs">lg</text>
			</view>
			<view class="flex-col align-center">
				<view class="cu-avatar xl round bg-blue">
					<text class="cuIcon cuIcon-people"></text>
				</view>
				<text class="text-xs text-hint margin-top-xs">xl</text>
			</view>
		</view>

		<!-- ======== 文字头像 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>文字头像
			</view>
		</view>
		<view class="padding flex align-center gap-lg bg-white">
			<view class="cu-avatar sm round bg-red">A</view>
			<view class="cu-avatar round bg-red">B</view>
			<view class="cu-avatar lg round bg-red">C</view>
			<view class="cu-avatar xl round bg-red">D</view>
		</view>
		<view class="padding flex align-center gap-lg bg-white">
			<view class="cu-avatar sm round bg-gradual-blue">蔚</view>
			<view class="cu-avatar round bg-gradual-blue">蓝</view>
			<view class="cu-avatar lg round bg-gradual-blue">
				<text>wl</text>
			</view>
			<view class="cu-avatar xl round bg-gradual-blue">
				<text class="avatar-text">网络</text>
			</view>
		</view>

		<!-- ======== 头像颜色 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>头像颜色（bg-* 色板）
			</view>
		</view>
		<view class="padding-sm flex flex-wrap">
			<view class="cu-avatar round lg margin-xs" :class="'bg-' + item.name" v-for="(item, index) in ColorList" :key="index">
				<text class="avatar-text">{{ item.name }}</text>
			</view>
		</view>

		<!-- ======== 头像组 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>头像组（cu-avatar-group）
			</view>
		</view>
		<view class="padding bg-white">
			<view class="cu-avatar-group">
				<view class="cu-avatar round lg bg-red">
					<text class="avatar-text">A</text>
				</view>
				<view class="cu-avatar round lg bg-orange">
					<text class="avatar-text">B</text>
				</view>
				<view class="cu-avatar round lg bg-green">
					<text class="avatar-text">C</text>
				</view>
				<view class="cu-avatar round lg bg-blue">
					<text class="avatar-text">D</text>
				</view>
			</view>
		</view>

		<!-- ======== 头像标签 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>头像标签（badge 徽标）
			</view>
		</view>
		<view class="padding flex align-center gap-lg bg-white">
			<view class="cu-avatar round lg bg-blue">
				<text class="avatar-text">王</text>
				<view class="cu-tag badge">99+</view>
			</view>
			<view class="cu-avatar round lg bg-green">
				<text class="avatar-text">李</text>
				<view class="cu-tag badge">9</view>
			</view>
			<view class="cu-avatar round lg bg-red">
				<text class="avatar-text">赵</text>
				<view class="cu-tag badge">99</view>
			</view>
			<view class="cu-avatar round lg bg-gradual-purple">
				<text class="avatar-text">钱</text>
				<view class="cu-tag badge">1</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'

	const ColorList = ref([
		{ title: '黑', name: 'black' },
		{ title: '白', name: 'white' },
		{ title: '红', name: 'red' },
		{ title: '橙', name: 'orange' },
		{ title: '黄', name: 'yellow' },
		{ title: '橄榄', name: 'olive' },
		{ title: '绿', name: 'green' },
		{ title: '青', name: 'cyan' },
		{ title: '蓝', name: 'blue' },
		{ title: '紫', name: 'purple' },
		{ title: '木槿', name: 'mauve' },
		{ title: '粉', name: 'pink' },
		{ title: '棕', name: 'brown' },
		{ title: '灰', name: 'grey' },
		{ title: '浅灰', name: 'gray' }
	])
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}
</style>
