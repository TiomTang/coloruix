<template>
	<view class="page">
		<!-- ======== 边框 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>边框（solid 系列）
			</view>
		</view>
		<view class="padding bg-white text-center">
			<view class="padding solid">solid 四周</view>
			<view class="padding margin-top solids">solids 四周（粗）</view>
			<view class="padding margin-top solid-top">solid-top 上</view>
			<view class="padding margin-top solid-bottom">solid-bottom 下</view>
			<view class="padding margin-top solid-left">solid-left 左</view>
			<view class="padding margin-top solid-right">solid-right 右</view>
			<view class="padding margin-top dashed-bottom">dashed-bottom 虚线（X 新增）</view>
		</view>

		<!-- ======== 边框颜色 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>边框颜色（line-* / lines-*）
			</view>
		</view>
		<view class="padding bg-white text-center">
			<view class="flex flex-wrap gap-xs">
				<view class="w-lg padding radius solid line-red">line-red</view>
				<view class="w-lg padding radius solid line-blue">line-blue</view>
				<view class="w-lg padding radius solid line-green">line-green</view>
				<view class="w-lg padding radius solid line-orange">line-orange</view>
				<view class="w-lg padding radius solids lines-purple">lines-purple</view>
				<view class="w-lg padding radius solids lines-grey">lines-grey</view>
			</view>
			<view class="text-hint text-xs margin-top-sm">line-* 只定义边框颜色（::after border-color），需配合 solid/solids（提供边框形状）或 cu-btn line-*（线框按钮）使用——单独用没有边框。</view>
		</view>

		<!-- ======== 阴影 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>阴影（shadow 三档）
			</view>
		</view>
		<view class="padding text-center">
			<view class="cu-card padding shadow-sm">shadow-sm 轻阴影</view>
			<view class="cu-card padding shadow margin-top">shadow 默认阴影</view>
			<view class="cu-card padding shadow-lg margin-top">shadow-lg 长阴影</view>
		</view>
		<view class="text-hint text-xs margin-lr">扁平化主题下 shadow 系列全部归 none，卡片变纯平。</view>

		<!-- ======== 彩色阴影 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>彩色阴影
			</view>
		</view>
		<view class="padding text-center">
			<view class="padding-xl radius shadow bg-blue">根据背景颜色而改变的阴影</view>
			<view class="padding-xl radius shadow shadow-lg bg-gradual-blue margin-top">渐变背景长阴影</view>
			<view class="padding-xl radius shadow shadow-lg bg-red margin-top">长阴影</view>
		</view>

		<!-- ======== 特殊阴影 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>特殊阴影（shadow-warp / shadow-blur）
			</view>
		</view>
		<view class="padding text-center">
			<view class="cu-card padding shadow-warp margin-bottom">shadow-warp 翘边阴影</view>
			<view class="padding-xl radius shadow-blur bg-gradual-blue">
				<view>shadow-blur 模糊阴影（demo 渐变背景模拟图）</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}
</style>
