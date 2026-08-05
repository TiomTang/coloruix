<template>
	<view class="page">
		<!-- ======== 基础卡片 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>基础卡片（cu-card）
			</view>
		</view>
		<view class="cu-card padding margin">
			<text class="text-black text-df">cu-card 是唯一卡片容器类：白底 + 圆角 + 阴影。卡片内部可放任意内容。</text>
		</view>
		<view class="cu-card margin">
			<view class="padding-lr padding-tb solid-bottom">
				<text class="text-bold">带标题的卡片</text>
			</view>
			<view class="padding-lr padding-tb">
				<text class="text-sub">标题区用 solid-bottom 分隔，内容区自由排版。</text>
			</view>
		</view>
		<view class="cu-card margin">
			<view class="padding-lr padding-tb solid-bottom flex justify-between align-center">
				<text class="text-bold">列表式卡片</text>
				<text class="badge badge-brand">进行中</text>
			</view>
			<view class="cu-list menu">
				<view class="cu-item flex justify-between align-center">
					<text>房间 101</text>
					<text class="text-sub">月租</text>
				</view>
				<view class="cu-item flex justify-between align-center">
					<text>房间 102</text>
					<text class="text-income">已结账</text>
				</view>
			</view>
		</view>

		<!-- ======== 表单卡片（常见组合） ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>表单卡片（form-card 组合）
			</view>
		</view>
		<view class="cu-card margin">
			<view class="flex justify-between align-center padding-tb solid-bottom margin-lr">
				<text class="text-sub">房间号</text>
				<input class="text-right" placeholder="请输入" />
			</view>
			<view class="flex justify-between align-center padding-tb solid-bottom margin-lr">
				<text class="text-sub">月租金</text>
				<input class="text-right" placeholder="请输入" />
			</view>
			<view class="flex justify-between align-center padding-tb margin-lr">
				<text class="text-sub">付款周期</text>
				<text class="text-brand">月付</text>
			</view>
		</view>

		<!-- ======== 阴影层级 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>阴影层级（X 新增）
			</view>
		</view>
		<view class="flex gap-sm margin-lr">
			<view class="flex-1 cu-card padding">
				<text class="text-center block text-sub text-sm">shadow-sm</text>
			</view>
			<view class="flex-1 cu-card padding shadow">
				<text class="text-center block text-sub text-sm">shadow</text>
			</view>
			<view class="flex-1 cu-card padding shadow-lg">
				<text class="text-center block text-sub text-sm">shadow-lg</text>
			</view>
		</view>
		<view class="text-hint text-xs margin-lr margin-top-xs">扁平化主题下 shadow 系列全部归 none，卡片变纯平。</view>

		<!-- ======== 圆角变体 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>圆角变体
			</view>
		</view>
		<view class="flex gap-sm margin-lr">
			<view class="flex-1 cu-card padding">
				<text class="text-center block text-sub text-sm">默认</text>
			</view>
			<view class="flex-1 cu-card padding round">
				<text class="text-center block text-sub text-sm">round</text>
			</view>
			<view class="flex-1 cu-card padding radius">
				<text class="text-center block text-sub text-sm">radius</text>
			</view>
		</view>

		<!-- ======== 按压反馈 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>按压反馈（X 新增）
			</view>
		</view>
		<view class="cu-card margin padding hover-shrink" hover-class="x-press" @tap="onTap">
			<view class="flex justify-between align-center">
				<text class="text-black">hover-shrink 可点击卡片</text>
				<text class="cuIcon cuIcon-right text-hint"></text>
			</view>
		</view>
		<view class="text-hint text-xs margin-lr">hover-shrink 按压微缩放，配 @tap 使用；小程序端用 hover-class="x-press" 触发按压态。</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	function onTap() {
		uni.showToast({ title: '点击了卡片', icon: 'none' })
	}
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}
</style>
