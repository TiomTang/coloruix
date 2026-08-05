<template>
	<scroll-view scroll-y class="page">
		<!-- hero：品牌渐变（X bg-gradual-blue） -->
		<view class="hero bg-gradual-blue">
			<view class="text-xl text-white text-bold">ColorUiX · 扩展</view>
			<view class="hero-sub text-white">主题换肤 / 动效 / 抽屉 / 索引</view>
		</view>

		<view class="nav-list">
			<navigator hover-class="x-press" :url="'/pages/plugin/' + item.name" class="nav-li" navigateTo
			 :class="'bg-' + item.color + ' hover-shrink'" v-for="(item, index) in plugins" :key="index">
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

	const plugins = ref([{
		title: '主题换肤',
		name: 'theme',
		color: 'blue',
		cuIcon: 'skin'
	}, {
		title: '动态字号',
		name: 'fontsize',
		color: 'cyan',
		cuIcon: 'fonts'
	}, {
		title: '动效',
		name: 'animation',
		color: 'purple',
		cuIcon: 'magic'
	}, {
		title: '抽屉',
		name: 'drawer',
		color: 'mauve',
		cuIcon: 'pullleft'
	}, {
		title: '索引',
		name: 'indexes',
		color: 'green',
		cuIcon: 'sort'
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
