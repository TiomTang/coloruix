<template>
	<view class="page">
		<!-- ======== 深色背景 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>深色背景（bg-* 全色板）
			</view>
		</view>
		<view class="grid col-3 padding-sm">
			<view class="padding-sm" v-for="(item, index) in ColorList" :key="index">
				<view class="padding radius text-center shadow-blur" :class="'bg-' + item.name">
					<view class="text-lg">{{ item.title }}</view>
					<view class="margin-top-sm text-Abc">{{ item.name }}</view>
				</view>
			</view>
		</view>

		<!-- ======== 淡色背景 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>淡色背景（bg-* light）
			</view>
		</view>
		<view class="grid col-3 bg-white padding-sm">
			<template v-for="(item, index) in ColorList" :key="'l' + index">
				<view class="padding-sm" v-if="index < 12">
					<view class="padding radius text-center light" :class="'bg-' + item.name">
						<view class="text-lg">{{ item.title }}</view>
						<view class="margin-top-sm text-Abc">{{ item.name }}</view>
					</view>
				</view>
			</template>
		</view>

		<!-- ======== 渐变背景 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>渐变背景（bg-gradual-*）
			</view>
		</view>
		<view class="grid col-2 padding-sm">
			<view class="padding-sm">
				<view class="bg-gradual-red padding radius text-center shadow-blur">
					<view class="text-lg">魅红</view>
					<view class="margin-top-sm text-Abc">#f43f3b - #ec008c</view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="bg-gradual-orange padding radius text-center shadow-blur">
					<view class="text-lg">鎏金</view>
					<view class="margin-top-sm text-Abc">#ff9700 - #ed1c24</view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="bg-gradual-green padding radius text-center shadow-blur">
					<view class="text-lg">翠柳</view>
					<view class="margin-top-sm text-Abc">#39b54a - #8dc63f</view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="bg-gradual-blue padding radius text-center shadow-blur">
					<view class="text-lg">靛青</view>
					<view class="margin-top-sm text-Abc">#4A9BD9 - #2E7FC4（X 品牌渐变）</view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="bg-gradual-purple padding radius text-center shadow-blur">
					<view class="text-lg">惑紫</view>
					<view class="margin-top-sm text-Abc">#9000ff - #5e00ff</view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="bg-gradual-pink padding radius text-center shadow-blur">
					<view class="text-lg">霞彩</view>
					<view class="margin-top-sm text-Abc">#ec008c - #6739b6</view>
				</view>
			</view>
		</view>

		<!-- ======== 图片背景 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>图片背景（bg-img + bg-mask 遮罩）
			</view>
		</view>
		<view class="bg-img bg-mask flex align-center" style="background-image: linear-gradient(135deg, #4A9BD9, #1cbbb4); height: 414rpx;">
			<view class="padding-xl text-white">
				<view class="padding-xs text-xxl text-bold">
					钢铁之翼
				</view>
				<view class="padding-xs text-lg">
					Only the guilty need fear me.
				</view>
				<view class="padding-xs text-sm text-Abc">
					bg-mask 给整块背景叠加 40% 黑遮罩，保证上面文字可读（demo 用品牌渐变模拟图片）
				</view>
			</view>
		</view>

		<!-- ======== 文字遮罩层 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>文字遮罩层（bg-shadeTop / bg-shadeBottom）
			</view>
		</view>
		<view class="cu-card margin padding">
			<text class="text-sub text-sm">用途：图片上放文字时，在顶部或底部叠一层黑色渐隐遮罩，让文字不被图片内容干扰。</text>
			<text class="text-hint text-xs margin-top-xs block">bg-shadeTop = 从纯黑渐变到透明（顶部加深）；bg-shadeBottom = 从透明渐变到纯黑（底部加深）。demo 用品牌渐变模拟图片。</text>
		</view>
		<view class="grid col-2">
			<view class="padding-bottom-xl" style="background-image: linear-gradient(135deg, #4A9BD9, #1cbbb4); height: 300rpx;">
				<view class="bg-shadeTop padding padding-bottom-xl">
					<text class="text-white text-df">bg-shadeTop 顶部遮罩，标题放这里可读</text>
				</view>
			</view>
			<view class="padding-top-xl flex align-end" style="background-image: linear-gradient(135deg, #f43f3b, #ec008c); height: 300rpx;">
				<view class="bg-shadeBottom padding padding-top-xl flex-sub">
					<text class="text-white text-df">bg-shadeBottom 底部遮罩，说明放这里可读</text>
				</view>
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
