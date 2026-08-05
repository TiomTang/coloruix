<template>
	<view class="page">
		<!-- ======== 常用图标 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>常用图标（cuIcon，双类）
			</view>
		</view>
		<view class="grid col-5 bg-white padding-sm">
			<view class="padding-xs" v-for="(item, index) in IconList" :key="index">
				<view class="cu-item flex-col align-center padding-xs text-df">
					<text class="cuIcon text-black" :class="'cuIcon-' + item.name"></text>
					<text class="text-xs text-hint text-cut margin-top-xs">{{ item.name }}</text>
				</view>
			</view>
		</view>

		<!-- ======== 图标大小 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>图标大小（随 text-* 字号）
			</view>
		</view>
		<!-- 图标字号继承父级（font-size: inherit），text-* 加在父级节点；加在图标自身会被 inherit 覆盖（无效） -->
		<view class="bg-white padding flex flex-wrap align-end gap-lg">
			<view class="flex-col align-center text-xs">
				<text class="cuIcon cuIcon-home"></text>
				<text class="text-xs text-hint margin-top-xs">text-xs</text>
			</view>
			<view class="flex-col align-center text-sm">
				<text class="cuIcon cuIcon-home"></text>
				<text class="text-xs text-hint margin-top-xs">text-sm</text>
			</view>
			<view class="flex-col align-center text-df">
				<text class="cuIcon cuIcon-home"></text>
				<text class="text-xs text-hint margin-top-xs">text-df</text>
			</view>
			<view class="flex-col align-center text-lg">
				<text class="cuIcon cuIcon-home"></text>
				<text class="text-xs text-hint margin-top-xs">text-lg</text>
			</view>
			<view class="flex-col align-center text-xl">
				<text class="cuIcon cuIcon-home"></text>
				<text class="text-xs text-hint margin-top-xs">text-xl</text>
			</view>
			<view class="flex-col align-center text-xxl">
				<text class="cuIcon cuIcon-home"></text>
				<text class="text-xs text-hint margin-top-xs">text-xxl</text>
			</view>
		</view>

		<!-- ======== 图标颜色 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>图标颜色（随 text-* 色板）
			</view>
		</view>
		<view class="grid col-5 bg-white padding-sm">
			<view class="padding-xs" v-for="(item, index) in ColorList" :key="'c' + index">
				<view class="cu-item flex-col align-center padding-xs text-xl">
					<text class="cuIcon cuIcon-ellipse" :class="'text-' + item.name"></text>
					<text class="text-xs text-hint margin-top-xs">{{ item.title }}</text>
				</view>
			</view>
		</view>

		<!-- ======== 语义色图标 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>语义色图标（X 新增）
			</view>
		</view>
		<view class="bg-white padding flex align-center gap-lg">
			<view class="flex-col align-center text-xl">
				<text class="cuIcon cuIcon-recharge text-brand"></text>
				<text class="text-xs text-hint margin-top-xs">brand</text>
			</view>
			<view class="flex-col align-center text-xl">
				<text class="cuIcon cuIcon-coin text-income"></text>
				<text class="text-xs text-hint margin-top-xs">income</text>
			</view>
			<view class="flex-col align-center text-xl">
				<text class="cuIcon cuIcon-moneybag text-expense"></text>
				<text class="text-xs text-hint margin-top-xs">expense</text>
			</view>
			<view class="flex-col align-center text-xl">
				<text class="cuIcon cuIcon-warn text-warning"></text>
				<text class="text-xs text-hint margin-top-xs">warning</text>
			</view>
			<view class="flex-col align-center text-xl">
				<text class="cuIcon cuIcon-message text-sub"></text>
				<text class="text-xs text-hint margin-top-xs">sub</text>
			</view>
			<view class="flex-col align-center text-xl">
				<text class="cuIcon cuIcon-question text-hint"></text>
				<text class="text-xs text-hint margin-top-xs">hint</text>
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

	const IconList = ref([
		{ name: 'search' },
		{ name: 'add' },
		{ name: 'edit' },
		{ name: 'delete' },
		{ name: 'deletefill' },
		{ name: 'home' },
		{ name: 'homefill' },
		{ name: 'people' },
		{ name: 'peoplefill' },
		{ name: 'recharge' },
		{ name: 'rechargefill' },
		{ name: 'coin' },
		{ name: 'moneybag' },
		{ name: 'calendar' },
		{ name: 'check' },
		{ name: 'roundcheck' },
		{ name: 'roundcheckfill' },
		{ name: 'right' },
		{ name: 'back' },
		{ name: 'close' },
		{ name: 'roundclose' },
		{ name: 'roundclosefill' },
		{ name: 'info' },
		{ name: 'infofill' },
		{ name: 'question' },
		{ name: 'questionfill' },
		{ name: 'location' },
		{ name: 'locationfill' },
		{ name: 'phone' },
		{ name: 'message' },
		{ name: 'messagefill' },
		{ name: 'settings' },
		{ name: 'settingsfill' },
		{ name: 'font' },
		{ name: 'text' },
		{ name: 'like' },
		{ name: 'likefill' },
		{ name: 'favor' },
		{ name: 'favorfill' },
		{ name: 'share' },
		{ name: 'comment' },
		{ name: 'commentfill' },
		{ name: 'notification' },
		{ name: 'notificationfill' },
		{ name: 'warn' },
		{ name: 'warnfill' },
		{ name: 'time' },
		{ name: 'timefill' },
		{ name: 'camera' },
		{ name: 'camerafill' },
		{ name: 'cart' },
		{ name: 'cartfill' },
		{ name: 'shop' },
		{ name: 'shopfill' },
		{ name: 'pay' },
		{ name: 'order' },
		{ name: 'deliver' },
		{ name: 'send' },
		{ name: 'refresh' },
		{ name: 'qrcode' },
		{ name: 'scan' },
		{ name: 'lock' },
		{ name: 'unlock' },
		{ name: 'vip' },
		{ name: 'crown' },
		{ name: 'crownfill' },
		{ name: 'medal' },
		{ name: 'medalfill' },
		{ name: 'present' },
		{ name: 'presentfill' },
		{ name: 'redpacket' },
		{ name: 'game' },
		{ name: 'music' },
		{ name: 'musicfill' },
		{ name: 'video' },
		{ name: 'videofill' },
		{ name: 'emoji' },
		{ name: 'emojifill' },
		{ name: 'hot' },
		{ name: 'hotfill' },
		{ name: 'rank' },
		{ name: 'rankfill' },
		{ name: 'male' },
		{ name: 'female' },
		{ name: 'friend' },
		{ name: 'friendfill' },
		{ name: 'addressbook' },
		{ name: 'group' },
		{ name: 'global' },
		{ name: 'mail' },
		{ name: 'wifi' },
		{ name: 'service' },
		{ name: 'servicefill' },
		{ name: 'write' },
		{ name: 'writefill' },
		{ name: 'copy' },
		{ name: 'link' },
		{ name: 'list' },
		{ name: 'form' },
		{ name: 'formfill' },
		{ name: 'pic' },
		{ name: 'picfill' },
		{ name: 'album' },
		{ name: 'filter' },
		{ name: 'sort' },
		{ name: 'top' },
		{ name: 'down' },
		{ name: 'pullup' },
		{ name: 'pulldown' },
		{ name: 'more' },
		{ name: 'moreandroid' },
		{ name: 'forward' },
		{ name: 'forwardfill' },
		{ name: 'mobile' },
		{ name: 'mobilefill' },
		{ name: 'voice' },
		{ name: 'voicefill' },
		{ name: 'sound' },
		{ name: 'safe' },
		{ name: 'attention' },
		{ name: 'attentionfill' },
		{ name: 'new' },
		{ name: 'newfill' },
		{ name: 'news' },
		{ name: 'newsfill' },
		{ name: 'goods' },
		{ name: 'goodsfill' },
		{ name: 'tag' },
		{ name: 'tagfill' },
		{ name: 'card' },
		{ name: 'file' },
		{ name: 'full' },
		{ name: 'exit' },
		{ name: 'upload' },
		{ name: 'refresharrow' },
		{ name: 'icloading' },
		{ name: 'loading' },
		{ name: 'loading1' },
		{ name: 'loading2' },
		{ name: 'ellipse' },
		{ name: 'circle' },
		{ name: 'circlefill' },
		{ name: 'square' },
		{ name: 'squarecheck' },
		{ name: 'squarecheckfill' },
		{ name: 'radiobox' },
		{ name: 'radioboxfill' },
		{ name: 'roundadd' },
		{ name: 'roundaddfill' },
		{ name: 'roundright' },
		{ name: 'roundrightfill' },
		{ name: 'rounddown' },
		{ name: 'triangleupfill' },
		{ name: 'triangledownfill' },
		{ name: 'playfill' },
		{ name: 'stop' },
		{ name: 'backwardfill' },
		{ name: 'record' },
		{ name: 'recordfill' },
		{ name: 'keyboard' },
		{ name: 'command' },
		{ name: 'commandfill' },
		{ name: 'read' },
		{ name: 'cut' },
		{ name: 'magic' },
		{ name: 'apps' },
		{ name: 'paint' },
		{ name: 'paintfill' },
		{ name: 'colorlens' },
		{ name: 'skin' },
		{ name: 'skinfill' },
		{ name: 'clothes' },
		{ name: 'clothesfill' },
		{ name: 'baby' },
		{ name: 'babyfill' },
		{ name: 'choiceness' },
		{ name: 'choicenessfill' },
		{ name: 'creative' },
		{ name: 'creativefill' },
		{ name: 'community' },
		{ name: 'communityfill' },
		{ name: 'activity' },
		{ name: 'activityfill' },
		{ name: 'explore' },
		{ name: 'explorefill' },
		{ name: 'discover' },
		{ name: 'discoverfill' },
		{ name: 'footprint' },
		{ name: 'taxi' },
		{ name: 'weixin' },
		{ name: 'weibo' },
		{ name: 'github' },
		{ name: 'my' },
		{ name: 'myfill' },
		{ name: 'profile' },
		{ name: 'profilefill' },
		{ name: 'we' },
		{ name: 'wefill' },
		{ name: 'friendadd' },
		{ name: 'friendaddfill' },
		{ name: 'goodsnew' },
		{ name: 'goodsnewfill' },
		{ name: 'notice' },
		{ name: 'noticefill' },
		{ name: 'countdown' },
		{ name: 'countdownfill' },
		{ name: 'punch' },
		{ name: 'move' },
		{ name: 'shake' },
		{ name: 'unfold' },
		{ name: 'fold' },
		{ name: 'upstage' },
		{ name: 'upstagefill' },
		{ name: 'selection' },
		{ name: 'selectionfill' },
		{ name: 'similar' },
		{ name: 'same' },
		{ name: 'samefill' },
		{ name: 'refund' },
		{ name: 'remind' },
		{ name: 'vipcard' },
		{ name: 'brand' },
		{ name: 'brandfill' },
		{ name: 'barcode' },
		{ name: 'light' },
		{ name: 'lightfill' },
		{ name: 'cameraadd' },
		{ name: 'cameraaddfill' },
		{ name: 'focus' },
		{ name: 'mark' },
		{ name: 'markfill' },
		{ name: 'repair' },
		{ name: 'repairfill' },
		{ name: 'subscription' },
		{ name: 'sponsor' },
		{ name: 'sponsorfill' },
		{ name: 'wenzi' },
		{ name: 'dianhua' },
		{ name: 'qr_code' },
		{ name: 'btn' },
		{ name: 'back_android' },
		{ name: 'backdelete' },
		{ name: 'expressman' },
		{ name: 'evaluate' },
		{ name: 'evaluate_fill' },
		{ name: 'deliver_fill' },
		{ name: 'play_forward_fill' },
		{ name: 'group_fill' },
		{ name: 'notice_forbid_fill' },
		{ name: 'cu-image' },
		{ name: 'cuIcon' },
		{ name: 'safe' }
	])
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}
</style>
