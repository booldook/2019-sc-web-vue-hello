new Vue({
	el: "#app",
	data: {
		title: "Vue를 배워봅시다.",
		str: '',
		isPrdView: false,
		items: [
			{id:1, title:"연어", desc:"맛있는 연어", src:"../img/salmon.jpg"},
			{id:1, title:"체리", desc:"싱싱한 체리", src:"../img/cherries.jpg"},
			{id:1, title:"와인", desc:"오래된 와인", src:"../img/wine.jpg"},
		]
	},
	methods: {
		onTogglePrd(e) {
			this.isPrdView = !this.isPrdView;
		},
	}
});