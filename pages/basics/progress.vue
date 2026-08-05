<template>
	<view class="page">
		<!-- ======== 进度条形状 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>进度条形状
			</view>
		</view>
		<view class="padding bg-white">
			<view class="cu-progress">
				<view class="bg-red" :style="{ width: loading ? '61.8%' : '' }">61.8%</view>
			</view>
			<view class="cu-progress radius margin-top">
				<view class="bg-red" :style="{ width: loading ? '61.8%' : '' }">61.8%</view>
			</view>
			<view class="cu-progress round margin-top">
				<view class="bg-red" :style="{ width: loading ? '61.8%' : '' }">61.8%</view>
			</view>
		</view>

		<!-- ======== 进度条尺寸 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>进度条尺寸
			</view>
		</view>
		<view class="padding bg-white">
			<view class="cu-progress round">
				<view class="bg-red" :style="{ width: loading ? '61.8%' : '' }"></view>
			</view>
			<view class="cu-progress round margin-top sm">
				<view class="bg-red" :style="{ width: loading ? '61.8%' : '' }"></view>
			</view>
			<view class="cu-progress round margin-top xs">
				<view class="bg-red" :style="{ width: loading ? '61.8%' : '' }"></view>
			</view>
		</view>

		<!-- ======== 进度条颜色 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>进度条颜色
			</view>
		</view>
		<view class="padding bg-white">
			<view class="flex align-center gap-sm">
				<view class="flex-sub">
					<view class="cu-progress round">
						<view class="bg-blue" :style="{ width: loading ? '80%' : '' }"></view>
					</view>
				</view>
				<text class="text-sm text-brand">bg-blue</text>
			</view>
			<view class="flex align-center gap-sm margin-top">
				<view class="flex-sub">
					<view class="cu-progress round">
						<view class="bg-green" :style="{ width: loading ? '70%' : '' }"></view>
					</view>
				</view>
				<text class="text-sm text-income">bg-green</text>
			</view>
			<view class="flex align-center gap-sm margin-top">
				<view class="flex-sub">
					<view class="cu-progress round">
						<view class="bg-red" :style="{ width: loading ? '60%' : '' }"></view>
					</view>
				</view>
				<text class="text-sm text-expense">bg-red</text>
			</view>
			<view class="flex align-center gap-sm margin-top">
				<view class="flex-sub">
					<view class="cu-progress round">
						<view class="bg-orange" :style="{ width: loading ? '50%' : '' }"></view>
					</view>
				</view>
				<text class="text-sm text-warning">bg-orange</text>
			</view>
		</view>

		<!-- ======== 进度条条纹 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>进度条条纹（striped + active）
			</view>
		</view>
		<view class="padding bg-white">
			<view class="cu-progress round sm striped" :class="active ? 'active' : ''">
				<view class="bg-green" :style="{ width: loading ? '60%' : '' }"></view>
			</view>
			<view class="cu-progress round sm margin-top-sm striped" :class="active ? 'active' : ''">
				<view class="bg-blue" :style="{ width: loading ? '40%' : '' }"></view>
			</view>
		</view>
		<view class="flex align-center gap-sm margin-lr">
			<switch class="sm" :class="active ? 'checked' : ''" @change="SetActive"></switch>
			<text class="text-sm text-sub">条纹动画开关</text>
		</view>

		<!-- ======== 进度条比例 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>进度条比例（多段）
			</view>
		</view>
		<view class="padding bg-white">
			<view class="cu-progress radius striped active">
				<view class="bg-red" :style="{ width: loading ? '30%' : '' }">30%</view>
				<view class="bg-olive" :style="{ width: loading ? '45%' : '' }">45%</view>
				<view class="bg-cyan" :style="{ width: loading ? '25%' : '' }">25%</view>
			</view>
		</view>

		<!-- ======== 进度条布局 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>进度条布局
			</view>
		</view>
		<view class="padding bg-white">
			<view class="flex">
				<view class="cu-progress round">
					<view class="bg-green" :style="{ width: loading ? '100%' : '' }"></view>
				</view>
				<text class="cuIcon cuIcon-roundcheckfill text-income margin-left-sm"></text>
			</view>
			<view class="flex margin-top">
				<view class="cu-progress round">
					<view class="bg-green" :style="{ width: loading ? '80%' : '' }"></view>
				</view>
				<text class="margin-left">80%</text>
			</view>
			<view class="flex margin-top">
				<view class="cu-progress round">
					<view class="bg-gradual-blue" :style="{ width: loading ? '55%' : '' }"></view>
				</view>
				<text class="margin-left text-brand">渐变进度</text>
			</view>
		</view>

		<!-- ======== 加载进度 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>加载进度（load-progress）
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow sm" @tap="LoadProgress">
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

	const loading = ref(false)
	const active = ref(false)
	const loadProgress = ref(0)

	setTimeout(() => {
		loading.value = true
	}, 500)

	function SetActive(e) {
		active.value = e.detail.value
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
