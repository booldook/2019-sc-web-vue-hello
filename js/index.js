/* Import Model */
import PrdResult from './models/PrdResult.js';

/* Import Component */
import SearchComponent from './components/SearchComponent.js';

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
	components : {
		'search-bar': SearchComponent,
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
