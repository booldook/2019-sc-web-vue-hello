import PrdResult from './models/PrdResult.js';

new Vue({
	el: "#app",
	data: {
		title: "Vue를 배워봅시다.",
		str: '',
		isPrdView: false,
		items: null,
	},
	created() {
		this.title = "Vue가 생성되었습니다.";
		this.isPrdView = true;
		PrdResult.list().then((result) => {
			this.items = result;
		}).catch();
	},
	methods: {
		onTogglePrd(e) {
			this.isPrdView = !this.isPrdView;
		},
	}
});
