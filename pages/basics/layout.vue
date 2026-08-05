<template>
	<view class="page">
		<!-- ======== 固定尺寸 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>固定尺寸（basis）
			</view>
		</view>
		<view class="padding bg-white">
			<view class="flex flex-wrap">
				<view class="basis-xs bg-grey margin-xs padding-sm radius text-center">xs 20%</view>
				<view class="basis-sm bg-grey margin-xs padding-sm radius text-center">sm 40%</view>
				<view class="basis-df bg-grey margin-xs padding-sm radius text-center">df 50%</view>
				<view class="basis-lg bg-grey margin-xs padding-sm radius text-center">lg 60%</view>
				<view class="basis-xl bg-grey margin-xs padding-sm radius text-center">xl 80%</view>
			</view>
		</view>

		<!-- ======== 满宽（w-full） ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>满宽（w-full）
			</view>
		</view>
		<view class="bg-white padding">
			<view class="flex">
				<view class="bg-grey padding-sm radius text-center">无 w-full：flex 子项只占内容宽度</view>
			</view>
			<view class="w-full bg-blue light padding-sm radius text-center margin-top-sm">w-full：width:100% 撑满父容器</view>
			<view class="flex gap-sm w-full margin-top-sm">
				<view class="cu-btn bg-blue light flex-sub">按钮 A</view>
				<view class="cu-btn bg-blue light flex-sub">按钮 B</view>
			</view>
			<view class="text-hint text-xs margin-top-sm">小程序 view 默认 display:block 即撑满父宽；w-full = width:100% 显式声明。需要内容宽度的场景用 flex 子项（如上）或 width 类。常用组合 flex + gap-* + w-full 做全宽按钮行，内部 cu-btn flex-sub 等分。</view>
		</view>

		<!-- ======== 定宽容器（w-*，X 新增） ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>定宽容器（w-md，X 新增）
			</view>
		</view>
		<view class="bg-white padding">
			<view class="flex align-center solid-bottom padding-tb-xs">
				<view class="w-md text-cut">次日到期</view>
				<text class="flex-sub">剩余 2 天</text>
				<text class="cuIcon-right text-grey"></text>
			</view>
			<view class="flex align-center solid-bottom padding-tb-xs">
				<view class="w-md text-cut">5天到期</view>
				<text class="flex-sub">剩余 5 天</text>
				<text class="cuIcon-right text-grey"></text>
			</view>
			<view class="flex align-center padding-tb-xs">
				<view class="w-md text-cut">本月已逾期 12 天，请尽快处理</view>
				<text class="flex-sub">已逾期</text>
				<text class="cuIcon-right text-grey"></text>
			</view>
			<view class="text-hint text-xs margin-top-xs">w-md 固定 160rpx：左侧文字长短不一（含超长省略）时，右侧值列与箭头依然对齐。text-cut 需加在块级容器（view）上，加在 text（inline）上不生效。</view>
		</view>

		<!-- ======== 定宽组合（w-xs~w-xl 多档位） ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>定宽组合（多档位，X 新增）
			</view>
		</view>
		<view class="bg-white padding">
			<view class="flex align-center solid-bottom padding-tb-xs">
				<view class="w-xs text-center text-grey">#1</view>
				<view class="w-lg text-cut">水电费-2026年8月账期</view>
				<view class="w-md text-right">¥ 1,234.50</view>
				<view class="w-sm text-right"><text class="text-expense">已逾期</text></view>
			</view>
			<view class="flex align-center solid-bottom padding-tb-xs">
				<view class="w-xs text-center text-grey">#2</view>
				<view class="w-lg text-cut">物业费-全年一次性缴纳</view>
				<view class="w-md text-right">¥ 88.00</view>
				<view class="w-sm text-right"><text class="text-income">已结清</text></view>
			</view>
			<view class="flex align-center padding-tb-xs">
				<view class="w-xs text-center text-grey">#3</view>
				<view class="w-lg text-cut">网络费-12个月合约机套餐包含基础宽带与电视</view>
				<view class="w-md text-right">¥ 199.00</view>
				<view class="w-sm text-right"><text class="text-warning">待处理</text></view>
			</view>
			<view class="text-hint text-xs margin-top-xs">w-xs 96 + w-lg 224 + w-md 160 + w-sm 128：四列各定宽（名称超长省略、金额/状态右对齐），行间严格对齐</view>
		</view>

		<!-- ======== 比例布局 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>比例布局（flex-sub 等分）
			</view>
		</view>
		<view class="padding bg-white">
			<view class="flex">
				<view class="flex-sub bg-grey padding-sm margin-xs radius text-center">1</view>
				<view class="flex-sub bg-grey padding-sm margin-xs radius text-center">1</view>
			</view>
			<view class="flex margin-top-sm">
				<view class="flex-sub bg-grey padding-sm margin-xs radius text-center">1</view>
				<view class="flex-twice bg-grey padding-sm margin-xs radius text-center">2</view>
			</view>
			<view class="flex margin-top-sm">
				<view class="flex-sub bg-grey padding-sm margin-xs radius text-center">1</view>
				<view class="flex-twice bg-grey padding-sm margin-xs radius text-center">2</view>
				<view class="flex-treble bg-grey padding-sm margin-xs radius text-center">3</view>
			</view>
		</view>

		<!-- ======== 弹性占位（flex-1，X 新增） ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>弹性占位（flex-1，X 新增）
			</view>
		</view>
		<view class="bg-white padding">
			<view class="flex gap-sm">
				<view class="flex-1 bg-grey padding-sm radius text-center">A</view>
				<view class="flex-1 bg-grey padding-sm radius text-center">B</view>
				<view class="flex-1 bg-grey padding-sm radius text-center">C</view>
			</view>
			<view class="text-hint text-xs margin-top-sm">flex-1 = flex:1 + min-width:0，适合等分、占满剩余空间的子项。</view>
			<view class="flex gap-sm margin-top-sm">
				<view class="flex-1 bg-green light padding-sm radius text-sm text-cut">这是 flex-1 + text-cut：很长的文本会在一行内显示省略号，不换行也不溢出。</view>
				<view class="flex-1 bg-green light padding-sm radius text-sm text-cut">兄弟正常占位</view>
			</view>
			<view class="text-hint text-xs margin-top-sm">单行截断要把 flex-1 与 text-cut 放在同一个 view。text-cut 才提供 nowrap、hidden、ellipsis；min-width:0 只是跨端的收缩保护。</view>
			<view class="flex gap-sm margin-top-sm">
				<view class="flex-sub bg-red light padding-sm radius text-sm">flex-sub 的普通长文本在微信小程序中会按可断点自然换行。</view>
				<view class="flex-sub bg-red light padding-sm radius text-sm">兄弟仍正常占位</view>
			</view>
			<view class="text-hint text-xs margin-top-sm">flex-sub 用于 flex-twice / flex-treble 的 1:2:3 比例布局。在 mp-weixin 的普通文本场景，flex-sub 与 flex-1 的收缩效果通常一致。</view>
		</view>

		<!-- ======== 纵向排列（flex-col，X 新增） ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>纵向排列（flex-col，X 新增）
			</view>
		</view>
		<view class="bg-white padding">
			<view class="flex-col gap-sm">
				<view class="bg-grey padding-sm radius">第一行</view>
				<view class="bg-grey padding-sm radius">第二行</view>
				<view class="bg-grey padding-sm radius">第三行</view>
			</view>
			<view class="text-hint text-xs margin-top-sm">flex-col = display:flex + flex-direction:column，纵向排列，可配 gap-* 控制行间距。</view>
		</view>

		<!-- ======== 水平对齐 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>水平对齐（justify-*）
			</view>
		</view>
		<view class="bg-white">
			<view class="flex solid-bottom padding justify-start">
				<view class="bg-grey padding-sm margin-xs radius">start</view>
				<view class="bg-grey padding-sm margin-xs radius">start</view>
			</view>
			<view class="flex solid-bottom padding justify-end">
				<view class="bg-grey padding-sm margin-xs radius">end</view>
				<view class="bg-grey padding-sm margin-xs radius">end</view>
			</view>
			<view class="flex solid-bottom padding justify-center">
				<view class="bg-grey padding-sm margin-xs radius">center</view>
				<view class="bg-grey padding-sm margin-xs radius">center</view>
			</view>
			<view class="flex solid-bottom padding justify-between">
				<view class="bg-grey padding-sm margin-xs radius">between</view>
				<view class="bg-grey padding-sm margin-xs radius">between</view>
			</view>
			<view class="flex padding justify-around">
				<view class="bg-grey padding-sm margin-xs radius">around</view>
				<view class="bg-grey padding-sm margin-xs radius">around</view>
			</view>
		</view>

		<!-- ======== 垂直对齐 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>垂直对齐（align-*）
			</view>
		</view>
		<view class="bg-white">
			<view class="flex solid-bottom padding align-start">
				<view class="bg-grey padding-lg margin-xs radius">ColorUi</view>
				<view class="bg-grey padding-sm margin-xs radius">start</view>
			</view>
			<view class="flex solid-bottom padding align-end">
				<view class="bg-grey padding-lg margin-xs radius">ColorUi</view>
				<view class="bg-grey padding-sm margin-xs radius">end</view>
			</view>
			<view class="flex solid-bottom padding align-center">
				<view class="bg-grey padding-lg margin-xs radius">ColorUi</view>
				<view class="bg-grey padding-sm margin-xs radius">center</view>
			</view>
			<view class="flex padding align-stretch">
				<view class="bg-grey padding-lg margin-xs radius">ColorUi</view>
				<view class="bg-grey padding-sm margin-xs radius">stretch</view>
			</view>
		</view>

		<!-- ======== 等分列 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>等分列（grid col-1 ~ col-5）
			</view>
		</view>
		<view class="bg-white padding">
			<view class="grid margin-bottom text-center" v-for="(item, index) in 5" :key="index" :class="'col-' + (index + 1)">
				<view class="padding" :class="indexs % 2 == 0 ? 'bg-cyan' : 'bg-blue'" v-for="(item, indexs) in (index + 1) * 2" :key="indexs">{{ indexs + 1 }}</view>
			</view>
		</view>

		<!-- ======== 等高 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>等高（grid-square）
			</view>
		</view>
		<view class="bg-white padding">
			<view class="grid col-4 grid-square">
				<view class="bg-gradual-blue" v-for="(item, index) in 8" :key="index">
					<text class="cuIcon cuIcon-home"></text>
				</view>
			</view>
			<view class="text-hint text-xs margin-top-sm">grid-square 子项按列宽等比撑高，无图时放 cuIcon 自动居中</view>
		</view>

		<!-- ======== 换行（flex-wrap） ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>换行（flex-wrap）
			</view>
		</view>
		<view class="bg-white padding">
			<view class="text-sub text-sm">不换行：flex（放不下时子项被压缩挤窄）</view>
			<view class="flex">
				<view class="basis-df bg-grey padding-sm margin-xs radius text-center">50%</view>
				<view class="basis-df bg-grey padding-sm margin-xs radius text-center">50%</view>
				<view class="basis-df bg-grey padding-sm margin-xs radius text-center">50%</view>
			</view>
			<view class="text-sub text-sm margin-top-sm">换行：flex flex-wrap（放不下时折行）</view>
			<view class="flex flex-wrap">
				<view class="basis-df bg-grey padding-sm margin-xs radius text-center">50%</view>
				<view class="basis-df bg-grey padding-sm margin-xs radius text-center">50%</view>
				<view class="basis-df bg-grey padding-sm margin-xs radius text-center">50%</view>
			</view>
			<view class="text-hint text-xs margin-top-sm">flex 默认不换行，放不下时压缩子项；flex-wrap 允许折行。常用组合 flex-wrap + basis-*/w-* 做流式标签、卡片流。</view>
		</view>

		<!-- ======== 内外边距 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>内外边距（margin / padding）
			</view>
		</view>
		<view class="bg-white">
			<view class="padding bg-gray">{size} 档位：xs / sm / df / lg / xl</view>
			<view class="flex flex-wrap padding solid-top">
				<view class="basis-df padding-bottom-xs">外边距</view>
				<view class="basis-df padding-bottom-xs">内边距</view>
				<view class="basis-df">.margin-{size}</view>
				<view class="basis-df">.padding-{size}</view>
			</view>
			<view class="flex flex-wrap padding solid-top">
				<view class="basis-df padding-bottom-xs">水平方向</view>
				<view class="basis-df padding-bottom-xs">水平方向</view>
				<view class="basis-df">.margin-lr-{size}</view>
				<view class="basis-df">.padding-lr-{size}</view>
			</view>
			<view class="flex flex-wrap padding solid-top">
				<view class="basis-df padding-bottom-xs">垂直方向</view>
				<view class="basis-df padding-bottom-xs">垂直方向</view>
				<view class="basis-df">.margin-tb-{size}</view>
				<view class="basis-df">.padding-tb-{size}</view>
			</view>
			<view class="flex flex-wrap padding solid-top">
				<view class="basis-df padding-bottom-xs">上外边距</view>
				<view class="basis-df padding-bottom-xs">上内边距</view>
				<view class="basis-df">.margin-top-{size}</view>
				<view class="basis-df">.padding-top-{size}</view>
			</view>
			<view class="flex flex-wrap padding solid-top">
				<view class="basis-df padding-bottom-xs">下外边距</view>
				<view class="basis-df padding-bottom-xs">下内边距</view>
				<view class="basis-df">.margin-bottom-{size}</view>
				<view class="basis-df">.padding-bottom-{size}</view>
			</view>
		</view>

		<!-- ======== 间距档位效果 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>间距档位效果
			</view>
		</view>
		<view class="bg-white padding">
			<view class="flex flex-wrap gap-sm">
				<view class="bg-blue light padding-xs radius text-sm">padding-xs</view>
				<view class="bg-blue light padding-sm radius text-sm">padding-sm</view>
				<view class="bg-blue light padding radius text-sm">padding-df</view>
				<view class="bg-blue light padding-lg radius text-sm">padding-lg</view>
				<view class="bg-blue light padding-xl radius text-sm">padding-xl</view>
			</view>
		</view>

		<!-- ======== gap 间距 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>gap 间距（X 新增）
			</view>
		</view>
		<view class="bg-white padding">
			<view class="flex gap-xs">
				<view class="flex-1 bg-grey padding-sm radius text-center">gap-xs</view>
				<view class="flex-1 bg-grey padding-sm radius text-center">gap-xs</view>
				<view class="flex-1 bg-grey padding-sm radius text-center">gap-xs</view>
			</view>
			<view class="flex gap-sm margin-top-sm">
				<view class="flex-1 bg-grey padding-sm radius text-center">gap-sm</view>
				<view class="flex-1 bg-grey padding-sm radius text-center">gap-sm</view>
				<view class="flex-1 bg-grey padding-sm radius text-center">gap-sm</view>
			</view>
			<view class="flex gap-md margin-top-sm">
				<view class="flex-1 bg-grey padding-sm radius text-center">gap-md</view>
				<view class="flex-1 bg-grey padding-sm radius text-center">gap-md</view>
				<view class="flex-1 bg-grey padding-sm radius text-center">gap-md</view>
			</view>
			<view class="flex gap-lg margin-top-sm">
				<view class="flex-1 bg-grey padding-sm radius text-center">gap-lg</view>
				<view class="flex-1 bg-grey padding-sm radius text-center">gap-lg</view>
				<view class="flex-1 bg-grey padding-sm radius text-center">gap-lg</view>
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
