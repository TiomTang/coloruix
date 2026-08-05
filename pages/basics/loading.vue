<template>
	<view class="page">
		<!-- ======== 背景 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>加载背景（cu-load）
			</view>
		</view>
		<view class="cu-load bg-gradual-blue" :class="!isLoad ? 'loading' : 'over'"></view>

		<!-- ======== 加载状态 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>加载状态
			</view>
			<view class="action">
				<switch @change="isLoading" :class="isLoad ? 'checked' : ''"></switch>
			</view>
		</view>
		<view class="cu-load bg-white" :class="!isLoad ? 'loading' : 'over'"></view>
		<view class="text-hint text-xs margin-lr">cu-load 圆形旋转（loading）/ 完成（over）</view>

		<!-- ======== 加载错误 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>加载错误（erro）
			</view>
		</view>
		<view class="cu-load bg-white erro"></view>

		<!-- ======== 图标旋转 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>图标旋转（cuIconfont-spin）
			</view>
		</view>
		<view class="cu-card padding flex align-center gap-lg">
			<view class="flex-col align-center text-xl">
				<text class="cuIcon cuIcon-loading2 cuIconfont-spin text-brand"></text>
				<text class="text-xs text-hint margin-top-xs">loading2</text>
			</view>
			<view class="flex-col align-center text-xl">
				<text class="cuIcon cuIcon-loading cuIconfont-spin text-income"></text>
				<text class="text-xs text-hint margin-top-xs">loading</text>
			</view>
			<view class="flex-col align-center text-xl">
				<text class="cuIcon cuIcon-icloading cuIconfont-spin text-expense"></text>
				<text class="text-xs text-hint margin-top-xs">icloading</text>
			</view>
			<view class="flex-col align-center text-xl">
				<text class="cuIcon cuIcon-ellipse text-warning"></text>
				<text class="text-xs text-hint margin-top-xs">椭圆</text>
			</view>
		</view>

		<!-- ======== 弹框加载 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>弹框加载（load-modal）
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow sm" @tap="LoadModal">
					点我
				</button>
			</view>
		</view>
		<view class="cu-load load-modal" v-if="loadModal">
			<view class="text-xxl">
				<view class="cuIcon cuIcon-loading2 cuIconfont-spin text-brand"></view>
			</view>
			<view class="text-sub margin-top-sm">加载中...</view>
		</view>

		<!-- ======== 进度条加载 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>进度条加载（load-progress）
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow sm" @tap="LoadProgress">
					点我
				</button>
			</view>
		</view>
		<view class="load-progress" :class="loadProgress != 0 ? 'show' : 'hide'">
			<view class="load-progress-bar bg-green" :style="{ transform: 'translate3d(-' + (100 - loadProgress) + '%, 0px, 0px)' }"></view>
			<view class="load-progress-spinner text-green"></view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'

	const isLoad = ref(false)
	const loadModal = ref(false)
	const loadProgress = ref(0)

	function isLoading(e) {
		isLoad.value = e.detail.value
	}

	function LoadModal() {
		loadModal.value = true
		setTimeout(() => {
			loadModal.value = false
		}, 2000)
	}

	function LoadProgress() {
		loadProgress.value = loadProgress.value + 3
		if (loadProgress.value < 100) {
			setTimeout(() => {
				LoadProgress()
			}, 100)
		} else {
			loadProgress.value = 0
		}
	}
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}
</style>
