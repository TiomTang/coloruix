<template>
	<view class="page">
		<!-- ======== 抽屉效果 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>抽屉效果
			</view>
		</view>
		<view class="cu-card margin padding">
			<text class="text-sub text-sm">X 的 cu-modal 提供两种滑出形态：drawer-modal 侧边抽屉（justify-start 左侧 / justify-end 右侧）与 bottom-modal 底部面板。点击遮罩或关闭按钮收起。</text>
		</view>
		<view class="margin flex gap-sm">
			<view class="flex-1">
				<view class="cu-btn block bg-blue shadow radius" @tap="open('left')">打开左侧抽屉</view>
			</view>
			<view class="flex-1">
				<view class="cu-btn block bg-green shadow radius" @tap="open('sheet')">打开底部半屏</view>
			</view>
		</view>

		<!-- ======== 左侧抽屉 ======== -->
		<view class="cu-modal drawer-modal justify-start" :class="showLeft ? 'show' : ''" @tap="closeAll">
			<view class="cu-dialog drawer-box" @tap.stop>
				<view class="cu-bar bg-white justify-between solid-bottom">
					<view class="action">
						<text class="cuIcon cuIcon-pullleft text-brand"></text>左侧抽屉
					</view>
					<view class="action" @tap="closeAll">
						<text class="cuIcon cuIcon-close text-sub"></text>
					</view>
				</view>
				<scroll-view scroll-y class="drawer-body">
					<view class="cu-card margin">
						<view class="cu-list menu">
							<view class="cu-item flex justify-between align-center" v-for="(item, index) in drawerList" :key="index">
								<view class="flex align-center gap-sm">
									<text :class="'cuIcon cuIcon-' + item.icon + ' text-brand'"></text>
									<text class="text-black">{{ item.name }}</text>
								</view>
								<text class="cuIcon cuIcon-right text-hint"></text>
							</view>
						</view>
					</view>
					<view class="cu-card margin">
						<view class="padding-lr padding-tb flex justify-between align-center">
							<text class="text-sub">抽屉底部操作区</text>
							<text class="badge badge-mute">演示</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>

		<!-- ======== 底部半屏 ======== -->
		<view class="cu-modal bottom-modal" :class="showSheet ? 'show' : ''" @tap="closeAll">
			<view class="cu-dialog sheet-box" @tap.stop>
				<view class="cu-bar bg-white justify-between solid-bottom">
					<view class="action">
						<text class="cuIcon cuIcon-edit text-brand"></text>底部半屏面板
					</view>
					<view class="action" @tap="closeAll">
						<text class="cuIcon cuIcon-close text-sub"></text>
					</view>
				</view>
				<scroll-view scroll-y class="sheet-body">
					<view class="cu-card margin">
						<view class="cu-list menu">
							<view class="cu-item flex justify-between align-center" v-for="(item, index) in sheetList" :key="index" @tap="choose(item)">
								<view class="flex align-center gap-sm">
									<view class="cu-avatar round sm" :class="'bg-' + item.color">{{ item.short }}</view>
									<view class="flex-col">
										<text class="text-black text-sm">{{ item.name }}</text>
										<text class="text-hint text-xs">{{ item.desc }}</text>
									</view>
								</view>
								<text class="cuIcon cuIcon-right text-hint"></text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'

	const showLeft = ref(false)
	const showSheet = ref(false)

	const drawerList = ref([
		{ name: '首页', icon: 'home' },
		{ name: '消息通知', icon: 'message' },
		{ name: '编辑资料', icon: 'edit' },
		{ name: '搜索', icon: 'search' },
		{ name: '位置服务', icon: 'location' },
		{ name: '提醒设置', icon: 'remind' }
	])

	const sheetList = ref([
		{ name: '微信支付', short: '微', color: 'green', desc: '推荐使用' },
		{ name: '支付宝', short: '支', color: 'blue', desc: '支持花呗' },
		{ name: '银联卡', short: '银', color: 'orange', desc: '储蓄卡 / 信用卡' },
		{ name: '余额支付', short: '余', color: 'mauve', desc: '账户余额' }
	])

	function open(type) {
		if (type === 'left') {
			showLeft.value = true
		} else {
			showSheet.value = true
		}
	}

	function closeAll() {
		showLeft.value = false
		showSheet.value = false
	}

	function choose(item) {
		closeAll()
		uni.showToast({ title: '已选择 ' + item.name, icon: 'none' })
	}
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}

	.drawer-box {
		width: 560rpx;
	}

	.drawer-body {
		height: calc(100vh - 100rpx);
	}

	.sheet-box {
		height: 62vh;
	}

	.sheet-body {
		height: calc(62vh - 100rpx);
	}
</style>
