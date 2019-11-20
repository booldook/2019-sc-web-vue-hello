export default {
	template: "#search-bar",
	props: ['value'],
	data() {
		return {
			query: this.value,
		}
	},
	methods: {
		onSearchReset(e) {
			this.query = '';
			this.$emit('@reset');
		},
		onSubmit(e) {
			this.$emit('@submit', this.query);
		},
		onKeyup(e) {
			if(!this.query.length) this.onSearchReset();
		},
	}
}