<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/* ColorUIX 独立设计系统（token + 类库 + 主题，见 common/coloruix/） */
	@import "./common/coloruix/index.scss";
</style>
