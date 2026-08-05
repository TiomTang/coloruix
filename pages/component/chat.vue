<template>
	<view class="page">
		<!-- ======== 聊天界面 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>聊天气泡（cu-chat）
			</view>
		</view>
		<view class="cu-chat">
			<view class="cu-item self">
				<view class="main">
					<view class="content bg-green shadow">
						<text>喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！</text>
					</view>
				</view>
				<view class="cu-avatar radius bg-red">我</view>
				<view class="date">2018年3月23日 13:23</view>
			</view>
			<view class="cu-info round">对方撤回一条消息!</view>
			<view class="cu-item">
				<view class="cu-avatar radius bg-blue">喵</view>
				<view class="main">
					<view class="content shadow">
						<text>喵喵喵！喵喵喵！</text>
					</view>
				</view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-info">
				<text class="cuIcon cuIcon-roundclosefill text-red"></text> 对方拒绝了你的消息
			</view>
			<view class="cu-info">
				对方开启了好友验证，你还不是他（她）的好友。请先发送好友验证请求，对方验证通过后，才能聊天。
				<text class="text-blue">发送好友验证</text>
			</view>
			<view class="cu-item self">
				<view class="main">
					<view class="action text-bold text-grey">
						3"
					</view>
					<view class="content shadow text-xxl">
						<text class="cuIcon cuIcon-sound padding-right-xl"></text>
					</view>
				</view>
				<view class="cu-avatar radius bg-red">我</view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-item self">
				<view class="main">
					<view class="action text-xxl">
						<text class="cuIcon cuIcon-locationfill text-orange"></text>
					</view>
					<view class="content shadow">
						喵星球，喵喵市
					</view>
				</view>
				<view class="cu-avatar radius bg-red">我</view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar radius bg-blue">喵</view>
				<view class="main">
					<view class="content shadow">
						@#$^&**
					</view>
					<view class="action text-grey text-xxl">
						<text class="cuIcon cuIcon-warnfill text-red"></text> <text class="text-sm margin-left-sm">翻译错误</text>
					</view>
				</view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-item self">
				<view class="main">
					<view class="content bg-green shadow">
						<text>好的，我晚点去找你！</text>
					</view>
				</view>
				<view class="cu-avatar radius bg-red">我</view>
				<view class="date">13:24</view>
			</view>
		</view>

		<!-- ======== 底部输入条 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>底部输入条（cu-bar foot input）
			</view>
		</view>
		<view class="cu-bar input bg-white">
			<view class="action">
				<text class="cuIcon cuIcon-sound text-grey"></text>
			</view>
			<input class="solid-bottom" maxlength="300" cursor-spacing="10" placeholder="说点什么..." />
			<view class="action">
				<text class="cuIcon cuIcon-emojifill text-grey"></text>
			</view>
			<button class="cu-btn bg-green shadow" @tap="onSend">发送</button>
		</view>
		<view class="text-hint text-xs padding-lr margin-top-xs">demo 用非固定输入条展示结构；实际聊天页可加 cu-bar foot（fixed 贴底），输入框 @focus/@blur 时按键盘高度上推。</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	function onSend() {
		uni.showToast({ title: '消息已发送', icon: 'success' })
	}
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}
</style>
