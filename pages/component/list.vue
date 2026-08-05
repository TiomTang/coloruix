<template>
	<view class="page">
		<!-- ======== 宫格列表 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>宫格列表（cu-list grid）
			</view>
		</view>
		<view class="cu-list grid col-3 no-border">
			<view class="cu-item" v-for="(item, index) in gridList" :key="index">
				<view :class="'cuIcon ' + item.icon + ' text-' + item.color">
					<view class="cu-tag badge" v-if="item.badge > 0">
						{{ item.badge > 99 ? '99+' : item.badge }}
					</view>
				</view>
				<text>{{ item.name }}</text>
			</view>
		</view>

		<!-- ======== 基础列表 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>基础列表（cu-item + 图标 + 文字）
			</view>
		</view>
		<view class="cu-list menu">
			<view class="cu-item flex justify-between align-center">
				<view class="flex align-center">
					<text class="cuIcon cuIcon-infofill text-red margin-right-sm"></text>
					<text>消息通知</text>
				</view>
				<text class="text-sub text-sm">未读 3 条</text>
			</view>
			<view class="cu-item flex justify-between align-center">
				<view class="flex align-center">
					<text class="cuIcon cuIcon-warn text-green margin-right-sm"></text>
					<text>系统公告</text>
				</view>
				<text class="text-income text-sm">已读</text>
			</view>
			<view class="cu-item flex justify-between align-center">
				<view class="flex align-center">
					<text class="cuIcon cuIcon-locationfill text-orange margin-right-sm"></text>
					<text>收货地址</text>
				</view>
				<text class="text-sub text-sm">广东省广州市</text>
			</view>
			<view class="cu-item flex justify-between align-center">
				<view class="flex align-center">
					<text class="cuIcon cuIcon-peoplefill text-blue margin-right-sm"></text>
					<text>联系客服</text>
				</view>
				<text class="cuIcon cuIcon-right text-hint"></text>
			</view>
		</view>

		<!-- ======== 菜单列表 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>菜单列表（cu-list menu）
			</view>
		</view>
		<view class="cu-list menu">
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon cuIcon-settings text-grey"></text>
					<text class="text-grey">设置</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon cuIcon-tagfill text-red margin-right-xs"></text>
					<text class="text-grey">标签</text>
				</view>
				<view class="action flex gap-xs">
					<view class="cu-tag round bg-orange light">音乐</view>
					<view class="cu-tag round bg-olive light">电影</view>
					<view class="cu-tag round bg-blue light">旅行</view>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon cuIcon-warn text-green"></text>
					<text class="text-grey">文本</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">小目标还没有实现！</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content padding-tb-sm">
					<view>
						<text class="cuIcon cuIcon-clothesfill text-blue margin-right-xs"></text> 多行 Item
					</view>
					<view class="text-gray text-sm">
						<text class="cuIcon cuIcon-infofill margin-right-xs"></text> 小目标还没有实现！
					</view>
				</view>
				<view class="action">
					<switch :class="skin ? 'checked' : ''" :checked="skin" color="#4A9BD9" @change="onSkinChange" />
				</view>
			</view>
		</view>

		<!-- ======== 消息列表 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>消息列表（menu-avatar + 文字头像）
			</view>
		</view>
		<view class="cu-list menu-avatar">
			<view class="cu-item">
				<view class="cu-avatar round lg bg-red">凯</view>
				<view class="content">
					<view class="text-black">凯尔</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							<text class="cuIcon cuIcon-infofill text-red margin-right-xs"></text>
							我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
						</view>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<view class="cu-tag round bg-grey sm">5</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar round lg bg-blue">
					盾
					<view class="cu-tag badge">99+</view>
				</view>
				<view class="content">
					<view class="text-black">
						<view class="text-cut">瓦洛兰之盾</view>
						<view class="cu-tag round bg-orange sm">战士</view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">塔里克是保护者星灵，守护着符文之地的生命与仁爱。</view>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<text class="cuIcon cuIcon-notice_forbid_fill text-gray"></text>
				</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar radius lg bg-green">莫</view>
				<view class="content">
					<view class="text-black"><view class="text-cut">莫甘娜</view></view>
					<view class="text-gray text-sm flex"><view class="text-cut">凯尔，你被自己的光芒变的盲目！</view></view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<view class="cu-tag round bg-red sm">5</view>
				</view>
			</view>
			<view class="cu-item grayscale">
				<view class="cu-avatar radius lg bg-grey">伊</view>
				<view class="content">
					<view>
						<view class="text-cut">伊泽瑞尔</view>
						<view class="cu-tag round bg-orange sm">断开连接...</view>
					</view>
					<view class="text-gray text-sm flex"><view class="text-cut">等我回来一个打十个</view></view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<view class="cu-tag round bg-red sm">5</view>
				</view>
			</view>
		</view>

		<!-- ======== 卡片列表 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>卡片列表（cu-card 内嵌 cu-list）
			</view>
		</view>
		<view class="cu-card margin">
			<view class="padding-lr padding-tb solid-bottom flex justify-between align-center">
				<text class="text-bold">房间账单</text>
				<text class="badge badge-brand">进行中</text>
			</view>
			<view class="cu-list menu">
				<view class="cu-item flex justify-between align-center">
					<view class="flex align-center">
						<text class="cuIcon cuIcon-card text-brand margin-right-sm"></text>
						<text>房间 101</text>
					</view>
					<text class="text-sub">月租 ¥1,200</text>
				</view>
				<view class="cu-item flex justify-between align-center">
					<view class="flex align-center">
						<text class="cuIcon cuIcon-card text-brand margin-right-sm"></text>
						<text>房间 102</text>
					</view>
					<text class="text-income">已结账</text>
				</view>
				<view class="cu-item flex justify-between align-center">
					<view class="flex align-center">
						<text class="cuIcon cuIcon-card text-brand margin-right-sm"></text>
						<text>房间 103</text>
					</view>
					<text class="text-expense">欠费 3 期</text>
				</view>
			</view>
		</view>

		<!-- ======== 带状态点列表 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>状态点列表（X 新增）
			</view>
		</view>
		<view class="cu-list menu">
			<view class="cu-item flex justify-between align-center">
				<text class="flex align-center"><view class="status-dot status-dot-ok"></view>在线</text>
				<text class="text-income text-sm">正常</text>
			</view>
			<view class="cu-item flex justify-between align-center">
				<text class="flex align-center"><view class="status-dot status-dot-warn"></view>告警</text>
				<text class="text-warning text-sm">温度偏高</text>
			</view>
			<view class="cu-item flex justify-between align-center">
				<text class="flex align-center"><view class="status-dot status-dot-danger"></view>故障</text>
				<text class="text-expense text-sm">离线</text>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'

	const gridList = ref([
		{ icon: 'cuIcon-cardboardfill', color: 'red', badge: 120, name: 'VR' },
		{ icon: 'cuIcon-recordfill', color: 'orange', badge: 1, name: '录像' },
		{ icon: 'cuIcon-picfill', color: 'yellow', badge: 0, name: '图像' },
		{ icon: 'cuIcon-noticefill', color: 'olive', badge: 22, name: '通知' },
		{ icon: 'cuIcon-upstagefill', color: 'cyan', badge: 0, name: '排行榜' },
		{ icon: 'cuIcon-clothesfill', color: 'blue', badge: 0, name: '皮肤' },
		{ icon: 'cuIcon-discoverfill', color: 'purple', badge: 0, name: '发现' },
		{ icon: 'cuIcon-questionfill', color: 'mauve', badge: 0, name: '帮助' },
		{ icon: 'cuIcon-commandfill', color: 'purple', badge: 0, name: '问答' }
	])

	const skin = ref(false)

	function onSkinChange(e) {
		skin.value = e.detail.value
	}
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}
</style>
