<template>
	<view class="page">
		<!-- ======== 标签形状 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>标签形状
			</view>
		</view>
		<view class="padding bg-white solid-bottom flex gap-xs flex-wrap">
			<view class="cu-tag">默认</view>
			<view class="cu-tag round">椭圆</view>
			<view class="cu-tag radius">圆角</view>
		</view>

		<!-- ======== 标签尺寸 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>标签尺寸
			</view>
		</view>
		<view class="padding bg-white flex gap-xs flex-wrap">
			<view class="cu-tag radius sm">小尺寸</view>
			<view class="cu-tag radius">普通尺寸</view>
			<view class="cu-tag radius lg">大尺寸</view>
		</view>

		<!-- ======== 标签颜色 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>标签颜色
			</view>
		</view>
		<view class="padding-sm flex flex-wrap">
			<template v-for="(item, index) in ColorList" :key="index">
				<view class="padding-xs" v-if="item.name != 'gray'">
					<view class="cu-tag" :class="'bg-' + item.name">{{ item.title }}</view>
				</view>
			</template>
		</view>

		<!-- ======== 浅色标签 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>浅色标签（light）
			</view>
		</view>
		<view class="padding-sm flex flex-wrap">
			<template v-for="(item, index) in ColorList" :key="'l' + index">
				<view class="padding-xs" v-if="item.name != 'gray' && item.name != 'black' && item.name != 'white'">
					<view class="cu-tag light" :class="'bg-' + item.name">{{ item.title }}</view>
				</view>
			</template>
		</view>

		<!-- ======== 镂空标签 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>镂空标签（line-*）
			</view>
		</view>
		<view class="padding-sm flex flex-wrap">
			<template v-for="(item, index) in ColorList" :key="'ln' + index">
				<view class="padding-xs" v-if="item.name != 'white'">
					<view class="cu-tag" :class="'line-' + item.name">{{ item.title }}</view>
				</view>
			</template>
		</view>

		<!-- ======== 胶囊样式 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>胶囊样式（cu-capsule）
			</view>
		</view>
		<view class="padding">
			<view class="cu-capsule">
				<view class="cu-tag bg-red">
					<text class="cuIcon cuIcon-likefill"></text>
				</view>
				<view class="cu-tag line-red">
					12
				</view>
			</view>
			<view class="cu-capsule round">
				<view class="cu-tag bg-blue">
					<text class="cuIcon cuIcon-likefill"></text>
				</view>
				<view class="cu-tag line-blue">
					23
				</view>
			</view>
			<view class="cu-capsule round">
				<view class="cu-tag bg-green">
					说明
				</view>
				<view class="cu-tag line-green">
					123
				</view>
			</view>
			<view class="cu-capsule radius">
				<view class="cu-tag bg-grey">
					<text class="cuIcon cuIcon-likefill"></text>
				</view>
				<view class="cu-tag line-grey">
					23
				</view>
			</view>
		</view>

		<!-- ======== 语义胶囊（X 新增） ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>语义胶囊（badge-*，X 新增）
			</view>
		</view>
		<view class="padding flex flex-wrap gap-sm bg-white">
			<text class="badge badge-income">收入</text>
			<text class="badge badge-expense">支出</text>
			<text class="badge badge-warning">警告</text>
			<text class="badge badge-brand">品牌</text>
			<text class="badge badge-mute">静默</text>
		</view>
		<view class="text-hint text-xs margin-lr margin-top-xs">语义胶囊直接复用 badge-* 类，色随语义（收入绿 / 支出红 / 警告橙 / 品牌蓝 / 中性灰）。</view>

		<!-- ======== 状态点（X 新增） ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>状态点（status-dot，X 新增）
			</view>
		</view>
		<view class="cu-card padding">
			<view class="flex flex-wrap gap-lg align-center">
				<view class="flex align-center gap-xs">
					<view class="status-dot status-dot-ok"></view>
					<text class="text-sm">在线</text>
				</view>
				<view class="flex align-center gap-xs">
					<view class="status-dot status-dot-warn"></view>
					<text class="text-sm">忙碌</text>
				</view>
				<view class="flex align-center gap-xs">
					<view class="status-dot status-dot-danger"></view>
					<text class="text-sm">离线</text>
				</view>
				<view class="flex align-center gap-xs">
					<view class="status-dot status-dot-mute"></view>
					<text class="text-sm">停用</text>
				</view>
			</view>
		</view>

		<!-- ======== 数字标签 ======== -->
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>数字标签（badge 徽标）
			</view>
		</view>
		<view class="padding flex justify-between align-center">
			<view class="cu-avatar xl radius bg-blue">
				港
				<view class="cu-tag badge">99+</view>
			</view>
			<view class="cu-avatar xl radius bg-green">
				<view class="cu-tag badge">9</view>
			</view>
			<view class="cu-avatar xl radius bg-red">
				<view class="cu-tag badge">99</view>
				<text class="cuIcon cuIcon-people"></text>
			</view>
			<view class="cu-avatar xl radius bg-gradual-blue">
				<view class="cu-tag badge">99+</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'

	const ColorList = ref([
		{ title: '黑', name: 'black' },
		{ title: '白', name: 'white' },
		{ title: '红', name: 'red' },
		{ title: '橙', name: 'orange' },
		{ title: '黄', name: 'yellow' },
		{ title: '橄榄', name: 'olive' },
		{ title: '绿', name: 'green' },
		{ title: '青', name: 'cyan' },
		{ title: '蓝', name: 'blue' },
		{ title: '紫', name: 'purple' },
		{ title: '木槿', name: 'mauve' },
		{ title: '粉', name: 'pink' },
		{ title: '棕', name: 'brown' },
		{ title: '灰', name: 'grey' },
		{ title: '浅灰', name: 'gray' }
	])
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}
</style>
