<template>
	<view class="page">
		<!-- ======== 按钮形状 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>按钮形状
			</view>
		</view>
		<view class="padding flex flex-wrap justify-between align-center bg-white">
			<button class="cu-btn">默认</button>
			<button class="cu-btn round">圆角</button>
			<button class="cu-btn radius">圆角矩形</button>
			<button class="cu-btn cuIcon">
				<text class="cuIcon cuIcon-emojifill"></text>
			</button>
		</view>

		<!-- ======== 按钮尺寸 ======== -->
		<view class="cu-bar margin-top bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>按钮尺寸
			</view>
		</view>
		<view class="padding flex flex-wrap justify-between align-center bg-white">
			<button class="cu-btn round sm">小尺寸</button>
			<button class="cu-btn round">默认</button>
			<button class="cu-btn round lg">大尺寸</button>
		</view>

		<!-- ======== 按钮颜色 ======== -->
		<view class="cu-bar margin-top bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>按钮颜色
			</view>
		</view>
		<view class="grid col-5 padding-sm">
			<view class="margin-tb-sm text-center" v-for="(item, index) in ColorList" :key="index">
				<button class="cu-btn round" :class="'bg-' + item.name">{{ item.title }}</button>
			</view>
		</view>

		<!-- ======== 渐变按钮 ======== -->
		<view class="cu-bar margin-top bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>渐变按钮（bg-gradual-*）
			</view>
		</view>
		<view class="grid col-3 padding-sm">
			<view class="margin-tb-sm padding-xs text-center">
				<button class="cu-btn round bg-gradual-blue">靛青</button>
			</view>
			<view class="margin-tb-sm padding-xs text-center">
				<button class="cu-btn round bg-gradual-red">魅红</button>
			</view>
			<view class="margin-tb-sm padding-xs text-center">
				<button class="cu-btn round bg-gradual-green">翠柳</button>
			</view>
			<view class="margin-tb-sm padding-xs text-center">
				<button class="cu-btn round bg-gradual-orange">鎏金</button>
			</view>
			<view class="margin-tb-sm padding-xs text-center">
				<button class="cu-btn round bg-gradual-purple">惑紫</button>
			</view>
			<view class="margin-tb-sm padding-xs text-center">
				<button class="cu-btn round bg-gradual-pink">霞彩</button>
			</view>
		</view>

		<!-- ======== 浅色按钮 ======== -->
		<view class="cu-bar margin-top bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>浅色按钮（light）
			</view>
		</view>
		<view class="padding flex flex-wrap gap-sm bg-white">
			<button class="cu-btn round bg-blue light">浅蓝</button>
			<button class="cu-btn round bg-green light">浅绿</button>
			<button class="cu-btn round bg-red light">浅红</button>
			<button class="cu-btn round bg-orange light">浅橙</button>
			<button class="cu-btn round bg-purple light">浅紫</button>
		</view>

		<!-- ======== 镂空按钮 ======== -->
		<view class="cu-bar margin-top bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>镂空按钮（line-* / lines-*）
			</view>
		</view>
		<view class="grid col-5 padding-sm">
			<template v-for="(item, index) in ColorList" :key="'l' + index">
				<view class="margin-tb-sm text-center" v-if="item.name != 'white'">
					<button class="cu-btn round" :class="'line-' + item.name">{{ item.title }}</button>
				</view>
			</template>
		</view>
		<view class="grid col-5 padding-sm">
			<template v-for="(item, index) in ColorList" :key="'ls' + index">
				<view class="margin-tb-sm text-center" v-if="item.name != 'white' && item.name != 'gray' && item.name != 'black'">
					<button class="cu-btn round" :class="'lines-' + item.name">{{ item.title }}</button>
				</view>
			</template>
		</view>

		<!-- ======== 块状按钮 ======== -->
		<view class="cu-bar margin-top bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>块状按钮（block）
			</view>
		</view>
		<view class="padding flex flex-col bg-white">
			<button class="cu-btn bg-grey lg">玄灰</button>
			<button class="cu-btn bg-red margin-tb-sm lg">嫣红</button>
			<button class="cu-btn bg-gradual-blue margin-tb-sm lg">渐变通栏</button>
		</view>

		<!-- ======== 无效状态 ======== -->
		<view class="cu-bar margin-top bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>无效状态（disabled）
			</view>
		</view>
		<view class="padding bg-white">
			<button class="cu-btn block bg-blue margin-tb-sm lg" disabled type="">无效状态</button>
			<button class="cu-btn block line-blue margin-tb-sm lg" disabled>无效状态</button>
		</view>

		<!-- ======== 按钮加图标 ======== -->
		<view class="cu-bar margin-top bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>按钮加图标
			</view>
		</view>
		<view class="padding-xl bg-white">
			<button class="cu-btn block line-orange lg">
				<text class="cuIcon cuIcon-upload"></text> 图标</button>
			<button class="cu-btn block bg-blue margin-tb-sm lg">
				<text class="cuIcon cuIcon-loading2 cuIconfont-spin"></text> 加载</button>
			<button class="cu-btn block bg-gradual-green margin-tb-sm lg">
				<text class="cuIcon cuIcon-check"></text> 完成</button>
		</view>

		<!-- ======== 按压反馈 ======== -->
		<view class="cu-bar margin-top bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>按压反馈（hover-shrink，X 新增）
			</view>
		</view>
		<view class="padding flex flex-wrap gap-sm bg-white">
			<button class="cu-btn round bg-blue hover-shrink" @tap="onTap">点击有反馈</button>
			<button class="cu-btn round bg-gradual-blue hover-shrink" @tap="onTap">渐变按压</button>
			<button class="cu-btn round line-blue hover-shrink" @tap="onTap">镂空按压</button>
		</view>
		<view class="text-hint text-xs margin-lr">hover-shrink 按压时微缩放，配 @tap 使用。</view>
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

	function onTap() {
		uni.showToast({ title: '按钮被点击', icon: 'none' })
	}
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}
</style>
