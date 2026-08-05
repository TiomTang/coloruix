<template>
	<view>
		<basics v-if="PageCur == 'basics'"></basics>
		<components v-if="PageCur == 'component'"></components>
		<plugin v-if="PageCur == 'plugin'"></plugin>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class="cuIcon cuIcon-apps" :class="PageCur == 'basics' ? 'text-brand' : 'text-hint'"></view>
				<view :class="PageCur == 'basics' ? 'text-brand' : 'text-hint'">元素</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class="cuIcon cuIcon-card" :class="PageCur == 'component' ? 'text-brand' : 'text-hint'"></view>
				<view :class="PageCur == 'component' ? 'text-brand' : 'text-hint'">组件</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class="cuIcon cuIcon-magic" :class="PageCur == 'plugin' ? 'text-brand' : 'text-hint'"></view>
				<view :class="PageCur == 'plugin' ? 'text-brand' : 'text-hint'">扩展</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import basics from '../basics/home.vue'
	import components from '../component/home.vue'
	import plugin from '../plugin/home.vue'

	const PageCur = ref('basics')

	function NavChange(e) {
		PageCur.value = e.currentTarget.dataset.cur
	}
</script>

<style lang="scss">
</style>
