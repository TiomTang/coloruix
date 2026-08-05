<template>
	<view class="page">
		<!-- ======== 普通窗口 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>普通窗口（cu-modal + cu-dialog）
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow" @tap="showModal('Modal')">Modal</button>
			</view>
		</view>
		<view class="cu-modal" :class="modalName == 'Modal' ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop>
				<view class="cu-bar bg-white justify-end">
					<view class="content text-bold">Modal 标题</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl text-df">
					这是普通窗口的内容区域，可放置任意文本、表单或列表。点击遮罩或右上角关闭按钮可关闭弹窗。
				</view>
				<view class="cu-bar bg-white padding-lr padding-tb">
					<view class="flex gap-sm w-full">
						<button class="cu-btn line-blue text-blue flex-sub" @tap="hideModal">取消</button>
						<button class="cu-btn bg-blue flex-sub" @tap="confirmModal">确定</button>
					</view>
				</view>
			</view>
		</view>

		<!-- ======== 底部窗口 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>底部窗口（bottom-modal）
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow" @tap="showModal('BottomModal')">Bottom</button>
			</view>
			<view class="action">
				<text class="text-xs text-hint margin-right-xs">贴边</text>
				<switch :checked="bottomEdge" @change="onBottomEdgeChange" color="#4A9BD9" />
			</view>
		</view>
		<view class="cu-modal bottom-modal" :class="[modalName == 'BottomModal' ? 'show' : '', bottomEdge ? 'bottom-modal-edge' : '']" @tap="hideModal">
			<view class="cu-dialog" @tap.stop>
				<view class="cu-bar bg-white">
					<view class="action text-blue" @tap="hideModal">取消</view>
					<view class="action text-green" @tap="confirmModal">确定</view>
				</view>
				<view class="padding-xl text-center text-xxl">
					<text class="cuIcon cuIcon-service text-blue"></text>
					<view class="text-df margin-top">底部弹出的操作面板，常用于分享、选择等场景。</view>
				</view>
			</view>
		</view>

		<!-- ======== 消息提示框 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>消息提示框
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow" @tap="showModal('AlertModal')">Alert</button>
			</view>
			<view class="action">
				<button class="cu-btn line-blue text-blue shadow" @tap="showModal('AlertConfirmModal')">确认/取消</button>
			</view>
		</view>
		<view class="cu-modal" :class="modalName == 'AlertModal' ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop>
				<view class="padding-xl text-center">
					<view class="text-xxl">
						<text class="cuIcon cuIcon-roundcheckfill text-income"></text>
					</view>
					<view class="text-bold margin-top">操作成功</view>
					<view class="text-hint text-sm margin-top-xs">您的申请已提交，请耐心等待审核结果。</view>
				</view>
				<view class="padding-lr padding-tb flex justify-center">
					<button class="cu-btn bg-blue" @tap="hideModal">我知道了</button>
				</view>
			</view>
		</view>

		<!-- ======== 消息提示框：双按钮（取消/确定，分列不聚集） ======== -->
		<view class="cu-modal" :class="modalName == 'AlertConfirmModal' ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop>
				<view class="padding-xl text-center">
					<view class="text-xxl">
						<text class="cuIcon cuIcon-question text-warning"></text>
					</view>
					<view class="text-bold margin-top">确认删除？</view>
					<view class="text-hint text-sm margin-top-xs">删除后不可恢复，请谨慎操作。</view>
				</view>
				<view class="padding-lr padding-tb">
					<view class="flex gap-sm w-full">
						<button class="cu-btn line-blue text-blue flex-sub" @tap="hideModal">取消</button>
						<button class="cu-btn bg-blue flex-sub" @tap="confirmModal">确定</button>
					</view>
				</view>
			</view>
		</view>

		<!-- ======== 输入框弹窗 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>输入框弹窗
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow" @tap="showModal('InputModal')">Input</button>
			</view>
		</view>
		<view class="cu-modal" :class="modalName == 'InputModal' ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop>
				<view class="cu-bar bg-white justify-end">
					<view class="content text-bold">修改备注</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="cu-form-group margin-tb">
					<view class="title">备注</view>
					<input placeholder="请输入备注内容" v-model="inputValue" />
				</view>
				<view class="padding-lr padding-bottom text-hint text-xs">当前备注：{{ inputValue || '未填写' }}</view>
				<view class="cu-bar bg-white padding-lr padding-tb">
					<view class="flex gap-sm w-full">
						<button class="cu-btn line-blue text-blue flex-sub" @tap="hideModal">取消</button>
						<button class="cu-btn bg-blue flex-sub" @tap="confirmInput">确定</button>
					</view>
				</view>
			</view>
		</view>

		<!-- ======== 单选窗口 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>单选窗口（radio）
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow" @tap="showModal('RadioModal')">Radio</button>
			</view>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName == 'RadioModal' ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop>
				<view class="cu-bar bg-white">
					<view class="action text-blue" @tap="hideModal">取消</view>
					<view class="action text-green" @tap="hideModal">确定</view>
				</view>
				<radio-group class="block" @change="onRadioChange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item, index) in 5" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">Item {{ index + 1 }}</view>
								<radio color="#4A9BD9" :class="radio == 'radio' + index ? 'checked' : ''" :checked="radio == 'radio' + index" :value="'radio' + index" />
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'

	const modalName = ref(null)
	const inputValue = ref('')
	const radio = ref('radio1')
	const bottomEdge = ref(false)

	function onBottomEdgeChange(e) {
		bottomEdge.value = e.detail.value
	}

	function showModal(name) {
		modalName.value = name
	}
	function hideModal() {
		modalName.value = null
	}
	function confirmModal() {
		modalName.value = null
		uni.showToast({ title: '已确认', icon: 'success' })
	}
	function confirmInput() {
		modalName.value = null
		uni.showToast({ title: inputValue.value || '未填写', icon: 'none' })
	}
	function onRadioChange(e) {
		radio.value = e.detail.value
	}
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}
</style>
