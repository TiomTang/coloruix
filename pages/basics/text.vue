<template>
	<view class="page">
		<!-- ======== 文字大小 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>文字大小
			</view>
		</view>
		<view class="bg-white padding-lr">
			<view class="solids-bottom padding-xs flex align-center">
				<view class="padding text-sub">60</view>
				<view class="flex-sub text-center">
					<view class="solid-bottom text-xsl padding">
						<text class="cuIcon cuIcon-roundcheckfill text-green"></text>
					</view>
					<view class="padding text-hint">text-xsl 特大显示（图标/数字）</view>
				</view>
			</view>
			<view class="solids-bottom padding-xs flex align-center">
				<view class="padding text-sub">40</view>
				<view class="flex-sub text-center">
					<view class="solid-bottom text-sl padding">
						<text class="cuIcon cuIcon-roundcheckfill text-green"></text>
					</view>
					<view class="padding text-hint">text-sl 较大显示</view>
				</view>
			</view>
			<view class="solids-bottom padding-xs flex align-center">
				<view class="padding text-sub">22</view>
				<view class="flex-sub text-center">
					<view class="solid-bottom text-xxl padding">
						<text class="text-price text-expense">80.00</text>
					</view>
					<view class="padding text-hint">text-xxl 金额数字</view>
				</view>
			</view>
			<view class="solids-bottom padding-xs flex align-center">
				<view class="padding text-sub">18</view>
				<view class="flex-sub text-center">
					<view class="solid-bottom text-xl padding">
						<text class="text-black text-bold">您的订单已提交成功！</text>
					</view>
					<view class="padding text-hint">text-xl 页面大标题</view>
				</view>
			</view>
			<view class="solids-bottom padding-xs flex align-center">
				<view class="padding text-sub">16</view>
				<view class="flex-sub text-center">
					<view class="solid-bottom text-lg padding">
						<text class="text-black">ColorUIX 组件库</text>
					</view>
					<view class="padding text-hint">text-lg 页面小标题</view>
				</view>
			</view>
			<view class="solids-bottom padding-xs flex align-center">
				<view class="padding text-sub">14</view>
				<view class="flex-sub text-center">
					<view class="solid-bottom text-df padding">专注视觉的小程序组件库</view>
					<view class="padding text-hint">text-df 默认字号（阅读文本）</view>
				</view>
			</view>
			<view class="solids-bottom padding-xs flex align-center">
				<view class="padding text-sub">12</view>
				<view class="flex-sub text-center">
					<view class="solid-bottom text-sm padding">
						<text class="text-sub">衬衫的价格是9磅15便士</text>
					</view>
					<view class="padding text-hint">text-sm 辅助信息</view>
				</view>
			</view>
			<view class="padding-xs flex align-center">
				<view class="padding text-sub">10</view>
				<view class="flex-sub text-center">
					<view class="solid-bottom text-xs padding">
						<text class="text-hint">我于杀戮之中绽放 亦如黎明中的花朵</text>
					</view>
					<view class="padding text-hint">text-xs 关注度低的文字</view>
				</view>
			</view>
		</view>

		<!-- ======== 文字颜色 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>文字颜色（色板）
			</view>
		</view>
		<view class="grid col-5 padding-sm">
			<view class="padding-sm" v-for="(item, index) in ColorList" :key="index">
				<view class="text-center" :class="'text-' + item.name">{{ item.title }}</view>
			</view>
		</view>

		<!-- ======== 语义色（X 新增） ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>语义色（X 新增）
			</view>
		</view>
		<view class="cu-card padding">
			<view class="flex flex-wrap gap-sm">
				<text class="text-main">text-main 主文字</text>
				<text class="text-brand">text-brand 品牌</text>
				<text class="text-income">text-income 收入</text>
				<text class="text-expense">text-expense 支出</text>
				<text class="text-warning">text-warning 警告</text>
				<text class="text-sub">text-sub 次级</text>
				<text class="text-hint">text-hint 弱提示</text>
			</view>
		</view>

		<!-- ======== 等宽数字（X 新增） ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>等宽数字（X 新增）
			</view>
		</view>
		<view class="cu-card padding">
			<view class="flex gap-lg align-center">
				<view class="flex-col">
					<text class="num text-xxl text-black">1,234.00</text>
					<text class="text-hint text-xs">num 等宽数字</text>
				</view>
				<view class="flex-col">
					<text class="num text-xxl text-income">88,888.88</text>
					<text class="text-hint text-xs">纵向对齐</text>
				</view>
				<view class="flex-col">
					<text class="num text-xxl text-expense">9,999.99</text>
					<text class="text-hint text-xs">金额对齐刚需</text>
				</view>
			</view>
		</view>

		<!-- ======== 全角数字（X 新增） ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>全角数字（X 新增）
			</view>
		</view>
		<view class="cu-card padding">
			<view class="flex gap-lg align-center">
				<view class="flex-col">
					<text>{{ numFw('5天到期') }}</text>
					<text class="text-hint text-xs">numFw 全角（与纯汉字对齐）</text>
				</view>
				<view class="flex-col">
					<text>次日到期</text>
					<text class="text-hint text-xs">纯汉字参照</text>
				</view>
				<view class="flex-col">
					<text class="num">123.45</text>
					<text class="text-hint text-xs">.num 半角（金额/数字串）</text>
				</view>
			</view>
			<view class="text-hint text-xs margin-top-xs">全角数字占 1em = 汉字宽："5天到期"→"５天到期" 与 "次日到期" 精确同宽；数字串/金额用 .num 不要全角化</view>
		</view>

		<!-- ======== 文字阴影 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>文字阴影
			</view>
		</view>
		<view class="grid col-5 padding-sm">
			<view class="padding-sm" v-for="(item, index) in ColorList" :key="'s' + index">
				<view class="text-center text-shadow text-xxl" :class="'text-' + item.name">
					<view class="cuIcon cuIcon-ellipse"></view>
				</view>
			</view>
		</view>

		<!-- ======== 文字截断 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>文字截断
			</view>
		</view>
		<view class="padding bg-white">
			<view class="text-cut padding bg-grey radius" style="width: 520rpx">我于杀戮之中绽放 ,亦如黎明中的花朵</view>
		</view>

		<!-- ======== 文字对齐 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>文字对齐
			</view>
		</view>
		<view class="padding bg-white">
			<view class="text-left padding">text-left 我于杀戮之中绽放 ,亦如黎明中的花朵</view>
			<view class="text-center padding">text-center 我于杀戮之中绽放 ,亦如黎明中的花朵</view>
			<view class="text-right padding">text-right 我于杀戮之中绽放 ,亦如黎明中的花朵</view>
			<view class="text-justify padding">text-justify（X 新增）两端对齐，用于长文本段落，让每一行的首尾都对齐边界，阅读体验更整齐。</view>
		</view>

		<!-- ======== 特殊文字 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>特殊文字
			</view>
		</view>
		<view class="padding text-center">
			<view class="padding-lr bg-white">
				<view class="solid-bottom padding">
					<text class="text-price text-xl text-expense">80.00</text>
				</view>
				<view class="padding text-hint">text-price 价格文本，自动加"¥"</view>
			</view>
			<view class="padding-lr bg-white margin-top">
				<view class="solid-bottom padding">
					<text class="text-Abc">color Ui</text>
				</view>
				<view class="padding text-hint">text-Abc 英文首字母大写</view>
			</view>
			<view class="padding-lr bg-white margin-top">
				<view class="solid-bottom padding">
					<text class="text-ABC">color Ui</text>
				</view>
				<view class="padding text-hint">text-ABC 全部大写</view>
			</view>
			<view class="padding-lr bg-white margin-top">
				<view class="solid-bottom padding">
					<text class="text-abc">color Ui</text>
				</view>
				<view class="padding text-hint">text-abc 全部小写</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import { numFw } from '@/common/coloruix/js/format.js'

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
