import PrdResult from './models/PrdResult.js';

new Vue({
	el: "#app",
	data: {
		title: "Vue를 배워봅시다.",
		str: '',
		isPrdView: true,
		items: [],
		isSubmit: false,
	},
	created() {
		
	},
	methods: {
		onTogglePrd(e) {
			this.isPrdView = !this.isPrdView;
		},
		onSearchReset(e) {
			this.str = '';
			this.isSubmit = false;
			this.items = [];
		},
		onSubmit(e) {
			this.searchResult();
		},
		onKeyup(e) {
			if(!this.str.length) this.onSearchReset();
		},
		searchResult() {
			PrdResult.list().then((result) => {
				this.isSubmit = true;
				this.items = result;
			});
		}
	}
});
