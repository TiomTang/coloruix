<template>
	<view class="page">
		<!-- ======== 输入框 ======== -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>输入框（cu-form-group）
			</view>
		</view>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">邮件</view>
				<input placeholder="两字短标题" name="input" />
			</view>
			<view class="cu-form-group">
				<view class="title">输入框</view>
				<input placeholder="三字标题" name="input" />
			</view>
			<view class="cu-form-group">
				<view class="title">收货地址</view>
				<input placeholder="输入框带个图标" name="input" />
				<text class="cuIcon cuIcon-locationfill text-orange"></text>
			</view>
			<view class="cu-form-group">
				<view class="title">验证码</view>
				<input placeholder="输入框带个按钮" name="input" />
				<button class="cu-btn bg-green shadow">验证码</button>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="输入框带标签" name="input" />
				<view class="cu-capsule radius">
					<view class="cu-tag bg-blue">+86</view>
					<view class="cu-tag line-blue">中国大陆</view>
				</view>
			</view>
		</form>

		<!-- ======== 选择器 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>选择器（picker）
			</view>
		</view>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">普通选择</view>
				<picker @change="onPickerChange" :value="index" :range="pickerList">
					<view class="picker">{{ index > -1 ? pickerList[index] : '请选择' }}</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">时间选择</view>
				<picker mode="time" :value="time" start="09:01" end="21:01" @change="onTimeChange">
					<view class="picker">{{ time }}</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">日期选择</view>
				<picker mode="date" :value="date" start="2024-01-01" end="2026-12-31" @change="onDateChange">
					<view class="picker">{{ date }}</view>
				</picker>
			</view>
		</form>

		<!-- ======== 单选 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>单选（radio）
			</view>
		</view>
		<radio-group class="block" @change="onRadioChange">
			<view class="cu-form-group margin-top">
				<view class="title">付款方式</view>
				<label class="flex align-center">
					<text class="margin-right-sm">微信支付</text>
					<radio color="#4A9BD9" :class="radio == 'wx' ? 'checked' : ''" :checked="radio == 'wx'" value="wx" />
				</label>
			</view>
			<view class="cu-form-group">
				<view class="title">快捷支付</view>
				<label class="flex align-center">
					<text class="margin-right-sm">支付宝</text>
					<radio color="#4A9BD9" :class="radio == 'ali' ? 'checked' : ''" :checked="radio == 'ali'" value="ali" />
				</label>
			</view>
			<view class="cu-form-group">
				<view class="title">到店付款</view>
				<label class="flex align-center">
					<text class="margin-right-sm">现金</text>
					<radio color="#4A9BD9" :class="radio == 'cash' ? 'checked' : ''" :checked="radio == 'cash'" value="cash" />
				</label>
			</view>
		</radio-group>

		<!-- ======== 开关 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>开关（switch）
			</view>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title">自动续费</view>
			<switch color="#4A9BD9" :class="switchA ? 'checked' : ''" :checked="switchA" @change="onSwitchA" />
		</view>
		<view class="cu-form-group">
			<view class="title">消息免打扰</view>
			<switch color="#4A9BD9" :class="switchB ? 'checked' : ''" :checked="switchB" @change="onSwitchB" />
		</view>
		<view class="cu-form-group">
			<view class="title">夜间模式</view>
			<switch color="#4A9BD9" :class="switchC ? 'checked' : ''" :checked="switchC" @change="onSwitchC" />
		</view>

		<!-- ======== 复选 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>复选（checkbox）
			</view>
		</view>
		<checkbox-group class="block" @change="onCheckboxChange">
			<view class="cu-form-group margin-top">
				<view class="title">兴趣标签</view>
				<label class="flex align-center">
					<text class="margin-right-sm">音乐</text>
					<checkbox color="#4A9BD9" :class="checkbox[0].checked ? 'checked' : ''" :checked="checkbox[0].checked" value="A" />
				</label>
			</view>
			<view class="cu-form-group">
				<view class="title">阅读</view>
				<label class="flex align-center">
					<text class="margin-right-sm">电影</text>
					<checkbox color="#4A9BD9" :class="checkbox[1].checked ? 'checked' : ''" :checked="checkbox[1].checked" value="B" />
				</label>
			</view>
			<view class="cu-form-group">
				<view class="title">旅行</view>
				<label class="flex align-center">
					<text class="margin-right-sm">运动</text>
					<checkbox color="#4A9BD9" :class="checkbox[2].checked ? 'checked' : ''" :checked="checkbox[2].checked" value="C" />
				</label>
			</view>
		</checkbox-group>

		<!-- ======== 滑块 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>滑块（slider）
			</view>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title">音量</view>
			<slider :value="sliderA" activeColor="#4A9BD9" backgroundColor="#ececec" block-size="32" block-color="#4A9BD9" @change="onSliderA" />
		</view>
		<view class="cu-form-group">
			<view class="title">进度</view>
			<slider :value="sliderB" activeColor="#4A9BD9" backgroundColor="#ececec" block-size="20" block-color="#4A9BD9" @change="onSliderB" />
		</view>
		<view class="cu-form-group">
			<view class="title">步长 10</view>
			<slider :value="sliderC" activeColor="#4A9BD9" backgroundColor="#ececec" block-size="32" block-color="#4A9BD9" step="10" @change="onSliderC" />
		</view>

		<!-- ======== 文本域 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>文本域（textarea）
			</view>
		</view>
		<view class="cu-form-group margin-top">
			<textarea maxlength="-1" placeholder="多行文本输入框" />
		</view>
		<view class="cu-form-group align-start">
			<view class="title">文本框</view>
			<textarea maxlength="-1" placeholder="带标题的多行文本输入框" />
		</view>

		<!-- ======== 提交按钮 ======== -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon cuIcon-title text-brand"></text>提交按钮
			</view>
		</view>
		<view class="padding-lr padding-tb">
			<button class="cu-btn bg-blue block" @tap="onSubmit">提 交</button>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'

	const index = ref(-1)
	const pickerList = ['喵喵喵', '汪汪汪', '哼唧哼唧']
	const time = ref('12:01')
	const date = ref('2025-08-03')

	const radio = ref('wx')

	const switchA = ref(true)
	const switchB = ref(false)
	const switchC = ref(false)

	const checkbox = ref([
		{ value: 'A', checked: true },
		{ value: 'B', checked: true },
		{ value: 'C', checked: false }
	])

	const sliderA = ref(30)
	const sliderB = ref(60)
	const sliderC = ref(50)

	function onPickerChange(e) {
		index.value = e.detail.value
	}
	function onTimeChange(e) {
		time.value = e.detail.value
	}
	function onDateChange(e) {
		date.value = e.detail.value
	}
	function onRadioChange(e) {
		radio.value = e.detail.value
	}
	function onSwitchA(e) {
		switchA.value = e.detail.value
	}
	function onSwitchB(e) {
		switchB.value = e.detail.value
	}
	function onSwitchC(e) {
		switchC.value = e.detail.value
	}
	function onCheckboxChange(e) {
		const values = e.detail.value
		checkbox.value.forEach((item) => {
			item.checked = values.indexOf(item.value) > -1
		})
	}
	function onSliderA(e) {
		sliderA.value = e.detail.value
	}
	function onSliderB(e) {
		sliderB.value = e.detail.value
	}
	function onSliderC(e) {
		sliderC.value = e.detail.value
	}
	function onSubmit() {
		uni.showToast({ title: '表单已提交', icon: 'success' })
	}
</script>

<style lang="scss">
	.page {
		padding-bottom: 24rpx;
	}

	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
