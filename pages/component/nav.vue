<template>
	<view class="page">
		<!-- ======== 导航条 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>导航条（cu-bar）
			</view>
		</view>
		<view class="bg-white">
			<view class="cu-bar">
				<view class="action" @tap="onBack">
					<text class="cuIcon cuIcon-back text-gray"></text> 返回
				</view>
				<view class="content text-bold">
					导航演示
				</view>
				<view class="action">
					<button class="cu-btn bg-blue shadow" @tap="onMore">更多</button>
				</view>
			</view>
		</view>
		<view class="text-hint text-xs padding-lr padding-tb-xs">cu-bar 是导航条与操作条共用的基座：本页展示导航语境（返回/标题/右侧动作），bar 页展示操作条语境（工具按钮/搜索/输入）。结构相同、用途不同，不算重复。</view>

		<!-- ======== 标签导航 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>标签导航（scroll-view nav）
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index == TabCur ? 'text-blue cur' : ''" v-for="(item, index) in 8" :key="index" @tap="onTabSelect" :data-id="index">
				Tab{{ index }}
			</view>
		</scroll-view>
		<view class="bg-white padding-tb-sm solid-top">
			<view class="cu-tag round bg-blue light margin-left-sm">默认（可横滑）</view>
		</view>

		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>居中
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index == TabCur ? 'text-blue cur' : ''" v-for="(item, index) in 3" :key="index" @tap="onTabSelect" :data-id="index">
				Tab{{ index }}
			</view>
		</scroll-view>

		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>平分（flex-sub）
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index == TabCur ? 'text-blue cur' : ''" v-for="(item, index) in 4" :key="index" @tap="onTabSelect" :data-id="index">
					Tab{{ index }}
				</view>
			</view>
		</scroll-view>

		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>背景
			</view>
		</view>
		<scroll-view scroll-x class="bg-red nav text-center">
			<view class="cu-item" :class="index == TabCur ? 'text-white cur' : ''" v-for="(item, index) in 3" :key="index" @tap="onTabSelect" :data-id="index">
				Tab{{ index }}
			</view>
		</scroll-view>

		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>图标
			</view>
		</view>
		<scroll-view scroll-x class="bg-green nav text-center">
			<view class="cu-item" :class="0 == TabCur ? 'text-white cur' : ''" @tap="onTabSelect" data-id="0">
				<text class="cuIcon cuIcon-camerafill"></text> 数码
			</view>
			<view class="cu-item" :class="1 == TabCur ? 'text-white cur' : ''" @tap="onTabSelect" data-id="1">
				<text class="cuIcon cuIcon-upstagefill"></text> 排行榜
			</view>
			<view class="cu-item" :class="2 == TabCur ? 'text-white cur' : ''" @tap="onTabSelect" data-id="2">
				<text class="cuIcon cuIcon-clothesfill"></text> 皮肤
			</view>
		</scroll-view>

		<!-- ======== 胶囊按钮 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>胶囊按钮（cu-capsule）
			</view>
		</view>
		<view class="bg-white padding">
			<view class="flex gap-sm flex-wrap">
				<view class="cu-capsule radius">
					<view class="cu-tag bg-cyan">上午</view>
					<view class="cu-tag line-cyan">10:00</view>
				</view>
				<view class="cu-capsule radius">
					<view class="cu-tag bg-blue">+86</view>
					<view class="cu-tag line-blue">中国大陆</view>
				</view>
				<view class="cu-capsule radius">
					<view class="cu-tag bg-orange">热销</view>
					<view class="cu-tag line-orange">限时 3 天</view>
				</view>
				<view class="cu-capsule">
					<view class="cu-tag bg-green">已签收</view>
					<view class="cu-tag line-green">06-17</view>
				</view>
				<view class="cu-capsule">
					<view class="cu-tag bg-red">待付款</view>
					<view class="cu-tag line-red">剩余 23:59</view>
				</view>
			</view>
		</view>

		<!-- ======== 底部导航 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>底部导航（cu-bar tabbar）
			</view>
		</view>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" :class="tabCur2 == 0 ? 'text-brand' : 'text-gray'" @tap="onTabbarSelect" data-id="0">
				<view class="cuIcon cuIcon-homefill"></view> 首页
			</view>
			<view class="action" :class="tabCur2 == 1 ? 'text-brand' : 'text-gray'" @tap="onTabbarSelect" data-id="1">
				<view class="cuIcon cuIcon-similar"></view> 分类
			</view>
			<view class="action" :class="tabCur2 == 2 ? 'text-brand' : 'text-gray'" @tap="onTabbarSelect" data-id="2">
				<view class="cuIcon cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				购物车
			</view>
			<view class="action" :class="tabCur2 == 3 ? 'text-brand' : 'text-gray'" @tap="onTabbarSelect" data-id="3">
				<view class="cuIcon cuIcon-my"></view> 我的
			</view>
		</view>
		<view class="text-hint text-xs margin-lr margin-top-xs">tabbar 为页面内演示，选中项高亮 text-brand，带 badge 徽标。</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'

	const TabCur = ref(0)
	const scrollLeft = ref(0)
	const tabCur2 = ref(0)

	function onTabSelect(e) {
		const id = e.currentTarget.dataset.id
		TabCur.value = id
		scrollLeft.value = (id - 1) * 60
	}
	function onTabbarSelect(e) {
		tabCur2.value = e.currentTarget.dataset.id
	}
	function onBack() {
		uni.navigateBack({
			fail: () => {
				uni.showToast({ title: '已是首页', icon: 'none' })
			}
		})
	}
	function onMore() {
		uni.showToast({ title: '更多操作', icon: 'none' })
	}
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}
</style>
