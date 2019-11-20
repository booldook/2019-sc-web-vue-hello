new Vue({
	el: '#app',
	data: {
		str: '',
		txts: [],
		items: [
			{id:1, title:"연어", desc:"맛있는 연어", src:"../img/salmon.jpg"},
			{id:2, title:"체리", desc:"싱싱한 체리", src:"../img/cherries.jpg"},
			{id:3, title:"와인", desc:"오래된 와인", src:"../img/wine.jpg"},
		],
	},
	methods: {
		onSubmit(e) {
			this.txts.push(this.str);
			this.str = '';
		}
	},
	components: {

	},
	created() {

	},
	destroy() {

	}
});