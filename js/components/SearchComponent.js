export default {
	template: "#search-bar",
	props: ['value'],
	data() {
		return {
			query: this.value,
			items: [],
			isSubmit: false,
		}
	},
	methods: {
		onSearchReset(e) {
			this.query = '';
			this.isSubmit = false;
			this.items = [];
		},
		onSubmit(e) {
			this.$emit('@submit', this.query);
		},
		onKeyup(e) {
			if(!this.query.length) this.onSearchReset();
		},
	}
}