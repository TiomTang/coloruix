<template>
	<view class="page flex flex-col">
		<!-- ======== 索引列表 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>索引列表
			</view>
			<view class="action">
				<text class="text-hint text-xs">点击右侧字母定位</text>
			</view>
		</view>
		<scroll-view scroll-y class="flex-1" :scroll-into-view="'group-' + curLetter" scroll-with-animation>
			<view v-for="letter in letters" :key="letter" :id="'group-' + letter">
				<view class="index-head bg-blue">
					<text class="text-white text-bold">{{ letter }}</text>
					<text class="text-white text-sm"> · {{ itemsPerGroup }} 项</text>
				</view>
				<view class="cu-card margin-lr margin-tb">
					<view class="cu-list menu">
						<view class="cu-item flex justify-between align-center" v-for="n in itemsPerGroup" :key="n">
							<view class="flex align-center gap-sm">
								<view class="cu-avatar round sm" :class="'bg-' + avatarColors[(letterIndex(letter) + n) % avatarColors.length]">{{ letter }}</view>
								<view class="flex-col">
									<text class="text-black">{{ cityName(letter, n) }}</text>
									<text class="text-hint text-xs">第 {{ letterIndex(letter) + 1 }} 组 · {{ n }} 号</text>
								</view>
							</view>
							<text class="cuIcon cuIcon-right text-hint"></text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<!-- ======== 右侧字母索引条 ======== -->
		<view class="index-bar">
			<view class="cu-card padding-xs">
				<view class="index-letter" :class="curLetter === letter ? 'index-letter-cur' : ''" v-for="letter in letters" :key="'b' + letter" @tap="selectLetter(letter)">
					<text class="text-xs">{{ letter }}</text>
				</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'

	// A-Z 分组
	const letters = ref([])
	for (let i = 0; i < 26; i++) {
		letters.value.push(String.fromCharCode(65 + i))
	}

	const curLetter = ref('A')
	const itemsPerGroup = 3
	const avatarColors = ['blue', 'green', 'orange', 'mauve', 'cyan', 'purple']

	function letterIndex(letter) {
		return letters.value.indexOf(letter)
	}

	function cityName(letter, n) {
		return letter + ' 城 · ' + n + ' 号'
	}

	function selectLetter(letter) {
		curLetter.value = letter
		uni.showToast({ title: letter, icon: 'none' })
	}
</script>

<style lang="scss">
	.page {
		height: 100vh;
	}

	.index-head {
		padding: 10rpx 24rpx;
	}

	.index-bar {
		position: fixed;
		right: 12rpx;
		top: 50%;
		transform: translateY(-50%);
		z-index: 9;
	}

	.index-letter {
		width: 40rpx;
		height: 36rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--cu-text-sub);
	}

	.index-letter-cur {
		color: var(--cu-brand);
		font-weight: 600;
	}
</style>
