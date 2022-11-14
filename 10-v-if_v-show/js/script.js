const app = new Vue({
	el: '#root',
	data: {
		showTitle: false,
	},
	methods: {
		switchTitle() {
			this.showTitle = !this.showTitle;
		}
	}
});
