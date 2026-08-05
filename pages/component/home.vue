<template>
	<scroll-view scroll-y class="page">
		<!-- hero：品牌渐变（X bg-gradual-blue） -->
		<view class="hero bg-gradual-blue">
			<view class="text-xl text-white text-bold">ColorUiX · 组件</view>
			<view class="hero-sub text-white">卡片 / 列表 / 表单 / 操作条 / 时间轴 / 步骤条 / 模态框 / 聊天 / 轮播 / 导航</view>
		</view>

		<view class="nav-list">
			<navigator hover-class="x-press" :url="'/pages/component/' + item.name" class="nav-li" navigateTo
			 :class="'bg-' + item.color + ' hover-shrink'" v-for="(item, index) in components" :key="index">
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

	const components = ref([{
		title: '卡片',
		name: 'card',
		color: 'cyan',
		cuIcon: 'card'
	}, {
		title: '列表',
		name: 'list',
		color: 'blue',
		cuIcon: 'list'
	}, {
		title: '表单',
		name: 'form',
		color: 'purple',
		cuIcon: 'form'
	}, {
		title: '操作条',
		name: 'bar',
		color: 'mauve',
		cuIcon: 'command'
	}, {
		title: '时间轴',
		name: 'timeline',
		color: 'olive',
		cuIcon: 'time'
	}, {
		title: '步骤条',
		name: 'steps',
		color: 'brown',
		cuIcon: 'rank'
	}, {
		title: '模态框',
		name: 'modal',
		color: 'pink',
		cuIcon: 'emoji'
	}, {
		title: '聊天',
		name: 'chat',
		color: 'green',
		cuIcon: 'comment'
	}, {
		title: '轮播',
		name: 'swiper',
		color: 'red',
		cuIcon: 'pic'
	}, {
		title: '导航',
		name: 'nav',
		color: 'orange',
		cuIcon: 'location'
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
