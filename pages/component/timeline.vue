<template>
	<view class="page">
		<!-- ======== 快递进度时间轴 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>快递进度（cu-timeline）
			</view>
		</view>
		<view class="cu-timeline">
			<view class="cu-time">昨天</view>
			<view class="cu-item cur cuIcon cuIcon-noticefill">
				<view class="content bg-green shadow-blur">
					<text>22:22</text> 【广州市】快件已到达地球
				</view>
			</view>
			<view class="cu-item text-red cuIcon cuIcon-attentionforbidfill">
				<view class="content bg-red shadow-blur">
					这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
				</view>
			</view>
			<view class="cu-item text-grey cuIcon cuIcon-evaluate_fill">
				<view class="content bg-grey shadow-blur">
					这是第一次，我家的铲屎官走了这么久。
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="bg-blue content">
					<text>20:00</text> 【月球】快件已到达月球，准备发往地球
				</view>
				<view class="bg-cyan content">
					<text>10:00</text> 【银河系】快件已到达银河系，准备发往月球
				</view>
			</view>
		</view>

		<!-- ======== 多内容时间轴 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>多内容样式（内容嵌胶囊/列表）
			</view>
		</view>
		<view class="cu-timeline">
			<view class="cu-time">06-17</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">上午</view>
						<view class="cu-tag line-cyan">10:00</view>
					</view>
					<view class="margin-top text-df">
						这是第一次，我家的铲屎官走了这么久。久到足足有三天！！在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上 10 分钟。
					</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="bg-blue shadow-blur content">
					<view class="cu-list menu-avatar radius">
						<view class="cu-item">
							<view class="cu-avatar round lg bg-purple">文</view>
							<view class="content">
								<view class="text-white">文晓港</view>
								<view class="text-white text-sm flex">
									<view class="text-cut">
										<text class="cuIcon cuIcon-infofill text-white margin-right-xs"></text> 消息未送达
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-white text-xs">22:20</view>
								<view class="cu-tag round bg-grey sm">5</view>
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar round lg bg-orange">
								红
								<view class="cu-tag badge">99+</view>
							</view>
							<view class="content">
								<view class="text-white">
									红包助手
									<view class="cu-tag round bg-white sm text-orange">SVIP</view>
								</view>
								<view class="text-white text-sm flex">
									<view class="text-cut">
										<text class="cuIcon cuIcon-redpacket_fill margin-right-xs"></text> 收到红包
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-white text-xs">22:20</view>
								<text class="cuIcon cuIcon-notice_forbid_fill text-white"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- ======== 简洁时间轴 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>简洁时间轴
			</view>
		</view>
		<view class="cu-timeline">
			<view class="cu-time">06-16</view>
			<view class="cu-item">
				<view class="content">
					<text>01:30</text> 【喵星】MX-12138 已揽收，准备发往银河系
				</view>
			</view>
			<view class="cu-item text-green cuIcon cuIcon-roundcheckfill">
				<view class="content bg-green shadow-blur">
					<text>09:00</text> 【喵星】包裹已签收，感谢使用喵星快递
				</view>
			</view>
		</view>
		<view class="cu-timeline">
			<view class="cu-time">06-15</view>
			<view class="cu-item">
				<view class="content">
					<text>08:12</text> 【喵星】商家已发货，等待揽收
				</view>
			</view>
			<view class="cu-item text-warning cuIcon cuIcon-roundclosefill">
				<view class="content bg-orange shadow-blur">
					<text>20:00</text> 【喵星】揽收失败，运力不足，明日重试
				</view>
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
