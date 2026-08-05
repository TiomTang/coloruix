<template>
	<view class="page">
		<!-- ======== 全屏限高轮播 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>全屏限高轮播（screen-swiper）
			</view>
			<view class="action">
				<switch :class="dotStyle ? 'checked' : ''" :checked="dotStyle" color="#4A9BD9" @change="onDotStyle" />
			</view>
		</view>
		<swiper class="screen-swiper" :class="dotStyle ? 'square-dot' : 'round-dot'" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item, index) in swiperList" :key="index">
				<view :class="item.color" class="swiper-banner flex justify-center align-center">
					<view class="text-center">
						<text class="text-white text-xl">{{ item.title }}</text>
						<view class="text-white text-sm margin-top-xs">{{ item.sub }}</view>
					</view>
				</view>
			</swiper-item>
		</swiper>

		<!-- ======== 卡片式轮播 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>卡片式轮播（card-swiper）
			</view>
		</view>
		<swiper class="card-swiper" :class="dotStyle ? 'square-dot' : 'round-dot'" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500" @change="onCardChange" indicator-color="#8799a3" indicator-active-color="#4A9BD9">
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item">
					<view :class="item.color" class="swiper-card">
						<text class="text-white text-xxl">{{ item.num }}</text>
						<text class="text-white text-df margin-top-xs">{{ item.title }}</text>
					</view>
				</view>
			</swiper-item>
		</swiper>

		<!-- ======== 堆叠式轮播 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>堆叠式轮播（tower-swiper）
			</view>
		</view>
		<view class="tower-swiper" @touchmove="onTowerMove" @touchstart="onTowerStart" @touchend="onTowerEnd">
			<view class="tower-item" :class="item.zIndex == 1 ? 'none' : ''" v-for="(item, index) in swiperList" :key="index" :style="[{ '--index': item.zIndex, '--left': item.mLeft }]">
				<view class="swiper-item">
					<view :class="item.color" class="swiper-card">
						<text class="text-white text-xxl">{{ item.num }}</text>
						<text class="text-white text-df margin-top-xs">{{ item.title }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="text-hint text-xs margin-lr">左右滑动切换层叠顺序；色块替代图片，自包含无外链。</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'

	const swiperList = ref([
		{ color: 'bg-gradual-red', title: '红色渐变', sub: '全屏限高轮播', num: '01' },
		{ color: 'bg-gradual-orange', title: '橙色渐变', sub: '卡片式轮播', num: '02' },
		{ color: 'bg-gradual-green', title: '绿色渐变', sub: '堆叠式轮播', num: '03' },
		{ color: 'bg-gradual-blue', title: '蓝色渐变', sub: '自动播放 5s', num: '04' },
		{ color: 'bg-gradual-purple', title: '紫色渐变', sub: '循环轮播', num: '05' },
		{ color: 'bg-gradual-pink', title: '粉色渐变', sub: '指示点切换', num: '06' }
	])

	const dotStyle = ref(false)
	const cardCur = ref(0)
	const towerStart = ref(0)
	const direction = ref('')

	// 初始化 tower 层叠参数
	;(function initTower() {
		const list = swiperList.value
		const mid = parseInt(list.length / 2)
		for (let i = 0; i < list.length; i++) {
			list[i].zIndex = mid + 1 - Math.abs(i - mid)
			list[i].mLeft = i - mid
		}
	})()

	function onDotStyle(e) {
		dotStyle.value = e.detail.value
	}
	function onCardChange(e) {
		cardCur.value = e.detail.current
	}
	function onTowerStart(e) {
		towerStart.value = e.touches[0].pageX
	}
	function onTowerMove(e) {
		direction.value = e.touches[0].pageX - towerStart.value > 0 ? 'right' : 'left'
	}
	function onTowerEnd() {
		const list = swiperList.value
		const len = list.length
		if (direction.value == 'right') {
			const first = { ...list[0] }
			for (let i = 1; i < len; i++) {
				list[i - 1].mLeft = list[i].mLeft
				list[i - 1].zIndex = list[i].zIndex
			}
			list[len - 1].mLeft = first.mLeft
			list[len - 1].zIndex = first.zIndex
		} else {
			const last = { ...list[len - 1] }
			for (let i = len - 1; i > 0; i--) {
				list[i].mLeft = list[i - 1].mLeft
				list[i].zIndex = list[i - 1].zIndex
			}
			list[0].mLeft = last.mLeft
			list[0].zIndex = last.zIndex
		}
		direction.value = ''
	}
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}

	.swiper-banner {
		height: 100%;
	}

	.swiper-card {
		height: 100%;
		border-radius: 16rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100rpx - 150rpx);
		z-index: var(--index);
	}
</style>
