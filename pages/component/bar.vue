<template>
	<view class="page">
		<!-- ======== 标题操作条 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>标题操作条（cu-bar）
			</view>
		</view>
		<view class="bg-white">
			<view class="cu-bar">
				<view class="action">
					<text class="cuIcon cuIcon-back text-gray"></text> 返回
				</view>
				<view class="content text-bold">
					操作条
				</view>
				<view class="action">
					<text class="cuIcon cuIcon-more text-grey"></text>
				</view>
			</view>
			<view class="cu-bar solid-top">
				<view class="action">
					<text class="cuIcon cuIcon-homefill text-gray"></text> 首页
				</view>
				<view class="content text-bold text-cut">
					鲜亮的高饱和色彩，专注视觉的小程序组件库
				</view>
				<view class="action">
					<text class="cuIcon cuIcon-cardboardfill text-grey margin-right-sm"></text>
					<text class="cuIcon cuIcon-recordfill text-red"></text>
				</view>
			</view>
			<view class="cu-bar bg-blue">
				<view class="action">
					<text class="cuIcon cuIcon-close"></text> 关闭
				</view>
				<view class="content text-bold">
					海蓝
				</view>
				<view class="action">
					<text class="cuIcon cuIcon-more"></text>
				</view>
			</view>
		</view>

		<!-- ======== 标题样式 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>标题样式（border-title / sub-title）
			</view>
		</view>
		<view class="bg-white">
			<view class="cu-bar">
				<view class="action border-title">
					<text class="text-xl text-bold">关于我们</text>
					<text class="bg-grey title-bar" style="width: 2rem"></text>
				</view>
			</view>
			<view class="cu-bar">
				<view class="action border-title">
					<text class="text-xl text-bold text-blue">关于我们</text>
					<text class="bg-gradual-blue title-bar" style="width: 3rem"></text>
				</view>
			</view>
			<view class="cu-bar">
				<view class="action sub-title">
					<text class="text-xl text-bold text-green">关于我们</text>
					<text class="bg-green title-bar" style="width: 2rem"></text>
				</view>
			</view>
			<view class="cu-bar">
				<view class="action">
					<text class="cuIcon cuIcon-title text-green"></text>
					<text class="text-xl text-bold">关于我们</text>
				</view>
			</view>
		</view>

		<!-- ======== 搜索操作条 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>搜索操作条（search）
			</view>
		</view>
		<view class="bg-white">
			<view class="cu-bar bg-white">
				<view class="search-form round">
					<text class="cuIcon cuIcon-search"></text>
					<input placeholder="搜索图片、文章、视频" confirm-type="search" />
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow-blur round">搜索</button>
				</view>
			</view>
			<view class="cu-bar bg-white solid-top">
				<view class="cu-avatar round bg-blue">广</view>
				<view class="search-form radius">
					<text class="cuIcon cuIcon-search"></text>
					<input placeholder="搜索图片、文章、视频" confirm-type="search" />
				</view>
				<view class="action">
					<text>广州</text>
					<text class="cuIcon cuIcon-triangledownfill"></text>
				</view>
			</view>
			<view class="cu-bar bg-cyan">
				<view class="search-form radius">
					<text class="cuIcon cuIcon-search"></text>
					<input placeholder="搜索图片、文章、视频" confirm-type="search" />
				</view>
				<view class="action">
					<text class="cuIcon cuIcon-close"></text>
					<text>取消</text>
				</view>
			</view>
		</view>

		<!-- ======== 输入操作条 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>输入操作条（input）
			</view>
		</view>
		<view class="bg-white">
			<view class="cu-bar input">
				<view class="action">
					<text class="cuIcon cuIcon-sound text-grey"></text>
				</view>
				<input class="solid-bottom" maxlength="300" cursor-spacing="10" placeholder="说点什么..." />
				<view class="action">
					<text class="cuIcon cuIcon-emojifill text-grey"></text>
				</view>
				<button class="cu-btn bg-green shadow-blur">发送</button>
			</view>
			<view class="cu-bar input solid-top">
				<view class="cu-avatar round bg-red">我</view>
				<view class="action">
					<text class="cuIcon cuIcon-roundaddfill text-grey"></text>
				</view>
				<input class="solid-bottom" maxlength="300" cursor-spacing="10" placeholder="说点什么..." />
				<button class="cu-btn bg-green shadow-blur">发送</button>
			</view>
		</view>

		<!-- ======== 按钮组操作条 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>按钮组操作条（btn-group）
			</view>
		</view>
		<view class="bg-white">
			<view class="cu-bar btn-group">
				<button class="cu-btn bg-green shadow-blur round lg">保存</button>
			</view>
			<view class="cu-bar btn-group solid-top">
				<button class="cu-btn bg-green shadow-blur">保存</button>
				<button class="cu-btn text-green line-green shadow">上传</button>
			</view>
			<view class="cu-bar btn-group solid-top">
				<button class="cu-btn bg-green shadow-blur round">保存</button>
				<button class="cu-btn bg-blue shadow-blur round">提交</button>
			</view>
		</view>

		<!-- ======== 均分按钮条 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>均分按钮条（flex-sub）
			</view>
		</view>
		<view class="cu-bar bg-white padding-lr padding-tb">
			<view class="flex gap-sm w-full">
				<button class="cu-btn bg-orange flex-sub">取消</button>
				<button class="cu-btn bg-blue flex-sub">确定</button>
			</view>
		</view>
		<view class="cu-bar bg-white padding-lr padding-tb">
			<view class="flex gap-sm w-full">
				<button class="cu-btn line-red text-red flex-sub">拒绝</button>
				<button class="cu-btn line-orange text-orange flex-sub">待定</button>
				<button class="cu-btn bg-green flex-sub">通过</button>
			</view>
		</view>

		<!-- ======== 标签操作条 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>标签操作条（cu-tag / cu-capsule）
			</view>
		</view>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon cuIcon-tagfill text-orange margin-right-xs"></text>
				<text>标签</text>
			</view>
			<view class="action flex gap-xs">
				<view class="cu-tag round bg-orange light">音乐</view>
				<view class="cu-tag round bg-olive light">电影</view>
				<view class="cu-tag round bg-blue light">旅行</view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-blue margin-right-xs"></text>
				<text>胶囊</text>
			</view>
			<view class="action">
				<view class="cu-capsule radius">
					<view class="cu-tag bg-cyan">上午</view>
					<view class="cu-tag line-cyan">10:00</view>
				</view>
				<view class="cu-capsule radius margin-left-sm">
					<view class="cu-tag bg-blue">+86</view>
					<view class="cu-tag line-blue">中国大陆</view>
				</view>
			</view>
		</view>

		<!-- ======== 底部安全区（safe-area-bottom，X 新增） ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-brand"></text>底部安全区（safe-area-bottom，X 新增）
			</view>
		</view>
		<view class="bg-white">
			<view class="cu-bar bg-white solid-top safe-area-bottom">
				<view class="action">
					<text class="cuIcon cuIcon-home text-grey"></text> 首页
				</view>
				<view class="content text-cut">
					安全区：iPhone 底部 Home 条区域自动留白
				</view>
				<view class="action">
					<button class="cu-btn bg-blue">确认</button>
				</view>
			</view>
			<view class="text-hint text-xs margin-lr padding-tb">safe-area-bottom 给底部固定操作条加 env(safe-area-inset-bottom) 内边距，避免按钮被 iPhone 底部 Home 条遮挡。demo 内嵌展示（真实用法 = cu-bar foot 固定贴底 + 本类）。</view>
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
