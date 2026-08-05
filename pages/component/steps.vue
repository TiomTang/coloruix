<template>
	<view class="page">
		<!-- ======== 基本用法 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>基本用法（图标步骤）
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow" @tap="nextBasics">下一步</button>
			</view>
		</view>
		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index > basics ? '' : 'text-blue'" v-for="(item, index) in basicsList" :key="index">
					<text :class="'cuIcon ' + (index == basics ? 'cuIcon-title' : item.icon)"></text> {{ item.name }}
				</view>
			</view>
		</view>

		<!-- ======== 数字完成 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>数字完成（num 圆点）
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow" @tap="nextNum">下一步</button>
			</view>
		</view>
		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index > num ? '' : (index == 2 ? 'text-red' : 'text-blue')" v-for="(item, index) in numList" :key="index">
					<text class="num" :class="index == 2 ? 'err' : ''" :data-index="index + 1"></text> {{ item.name }}
				</view>
			</view>
		</view>
		<view class="text-hint text-xs padding-lr">err 项红色标记，表示流程异常。</view>

		<!-- ======== 箭头步骤条 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>箭头步骤条（steps-arrow）
			</view>
		</view>
		<view class="bg-white padding">
			<view class="cu-steps steps-arrow">
				<view class="cu-item" :class="index > basics ? '' : 'text-blue'" v-for="(item, index) in basicsList" :key="index">
					<text :class="'cuIcon ' + item.icon"></text> {{ item.name }}
				</view>
			</view>
		</view>

		<!-- ======== 多级显示 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>多级显示（可横向滚动）
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow" @tap="nextScroll">下一步</button>
			</view>
		</view>
		<scroll-view scroll-x class="bg-white padding cu-steps steps-bottom" :scroll-into-view="'scroll-' + scroll" scroll-with-animation>
			<view class="cu-item padding-lr-xl" :class="index > scroll ? '' : 'text-blue'" v-for="(item, index) in 10" :key="index" :id="'scroll-' + index">
				Level {{ index + 1 }} <text class="num" :data-index="index + 1"></text>
			</view>
		</scroll-view>

		<!-- ======== 垂直步骤 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>垂直步骤（X 新增演示）
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow" @tap="nextVertical">下一步</button>
			</view>
		</view>
		<view class="bg-white padding">
			<view class="step-row" v-for="(item, index) in verticalList" :key="index">
				<view class="step-col">
					<view class="step-dot" :class="index <= verticalCur ? 'step-dot-active' : ''"></view>
					<view class="step-line" v-if="index < verticalList.length - 1"></view>
				</view>
				<view class="flex-1 padding-bottom">
					<view class="flex justify-between align-center">
						<text class="text-bold" :class="index <= verticalCur ? 'text-brand' : 'text-sub'">{{ item.name }}</text>
						<text class="text-hint text-xs">{{ item.time }}</text>
					</view>
					<text class="text-hint text-sm" v-if="item.desc">{{ item.desc }}</text>
				</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'

	const basicsList = [
		{ icon: 'cuIcon-usefullfill', name: '开始' },
		{ icon: 'cuIcon-radioboxfill', name: '等待' },
		{ icon: 'cuIcon-roundclosefill', name: '错误' },
		{ icon: 'cuIcon-roundcheckfill', name: '完成' }
	]
	const basics = ref(0)

	const numList = [
		{ name: '开始' },
		{ name: '等待' },
		{ name: '错误' },
		{ name: '完成' }
	]
	const num = ref(0)

	const scroll = ref(0)

	const verticalList = [
		{ name: '提交订单', time: '10:00', desc: '订单已创建，等待支付' },
		{ name: '支付成功', time: '10:05', desc: '已支付 ¥128.00' },
		{ name: '商家发货', time: '14:20', desc: '顺丰速运 SF1234567890' },
		{ name: '已签收', time: '次日 09:12', desc: '感谢使用，欢迎再次光临' }
	]
	const verticalCur = ref(1)

	function nextBasics() {
		basics.value = basics.value == basicsList.length - 1 ? 0 : basics.value + 1
	}
	function nextNum() {
		num.value = num.value == numList.length - 1 ? 0 : num.value + 1
	}
	function nextScroll() {
		scroll.value = scroll.value == 9 ? 0 : scroll.value + 1
	}
	function nextVertical() {
		verticalCur.value = verticalCur.value >= verticalList.length - 1 ? 0 : verticalCur.value + 1
	}
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}

	.step-row {
		display: flex;
	}

	.step-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 20rpx;
	}

	.step-dot {
		width: 28rpx;
		height: 28rpx;
		border-radius: 50%;
		background: #c8c9cc;
		margin-top: 8rpx;
	}

	.step-dot-active {
		background: var(--cu-brand);
	}

	.step-line {
		width: 4rpx;
		flex: 1;
		background: #e5e5e5;
		margin: 8rpx 0;
	}
</style>
