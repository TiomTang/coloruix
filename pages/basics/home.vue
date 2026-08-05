<template>
	<scroll-view scroll-y class="page">
		<!-- hero：品牌渐变（X bg-gradual-blue） -->
		<view class="hero bg-gradual-blue">
			<view class="text-xl text-white text-bold">ColorUiX · 元素</view>
			<view class="hero-sub text-white">布局 / 背景 / 文本 / 图标 / 按钮 / 标签 / 头像 / 进度 / 阴影 / 加载</view>
		</view>

		<view class="nav-list">
			<navigator hover-class="x-press" :url="'/pages/basics/' + item.name" class="nav-li" navigateTo
			 :class="'bg-' + item.color + ' hover-shrink'" v-for="(item, index) in elements" :key="index">
				<view class="flex justify-between align-center">
					<view>
						<view class="nav-title">{{ item.title }}</view>
						<view class="nav-name">{{ item.name }}</view>
					</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</view>
			</navigator>
		</view>
		<view class="cu-tabbar-height"></view>
	</scroll-view>
</template>

<script setup>
	import { ref } from 'vue'

	const elements = ref([{
		title: '布局',
		name: 'layout',
		color: 'cyan',
		cuIcon: 'newsfill'
	}, {
		title: '背景',
		name: 'background',
		color: 'blue',
		cuIcon: 'colorlens'
	}, {
		title: '文本',
		name: 'text',
		color: 'purple',
		cuIcon: 'font'
	}, {
		title: '图标',
		name: 'icon',
		color: 'mauve',
		cuIcon: 'apps'
	}, {
		title: '按钮',
		name: 'button',
		color: 'pink',
		cuIcon: 'btn'
	}, {
		title: '标签',
		name: 'tag',
		color: 'brown',
		cuIcon: 'tagfill'
	}, {
		title: '头像',
		name: 'avatar',
		color: 'red',
		cuIcon: 'myfill'
	}, {
		title: '进度条',
		name: 'progress',
		color: 'orange',
		cuIcon: 'icloading'
	}, {
		title: '边框阴影',
		name: 'shadow',
		color: 'olive',
		cuIcon: 'copy'
	}, {
		title: '加载',
		name: 'loading',
		color: 'green',
		cuIcon: 'loading2'
	}])
</script>

<style lang="scss">
	.page {
		height: 100vh;
	}

	.hero {
		padding: 48rpx 32rpx;
		margin: 24rpx;
		border-radius: var(--cu-radius-lg);
		box-shadow: var(--cu-shadow-float);
	}

	.hero-sub {
		margin-top: 8rpx;
		font-size: var(--cu-font-sm);
		opacity: .85;
	}

	.nav-list {
		padding: 0 24rpx 24rpx;
	}

	.nav-li {
		padding: 28rpx 32rpx;
		margin-bottom: 20rpx;
		border-radius: var(--cu-radius-md);
		box-shadow: var(--cu-shadow-card);
	}

	.nav-title {
		font-size: var(--cu-font-lg);
		font-weight: 600;
		color: #ffffff;
	}

	.nav-name {
		margin-top: 4rpx;
		font-size: var(--cu-font-sm);
		color: rgba(255, 255, 255, .8);
	}
</style>
