/* Import Model */
import PrdResult from './models/PrdResult.js';

/* Import Component */
import SearchComponent from './components/SearchComponent.js';

new Vue({
	el: "#app",
	data: {
		title: "Vue를 배워봅시다.",
		isPrdView: true,
		searchBarQuery: '',
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
		onSubmit(query) {
			this.searchBarQuery = query;
			this.searchResult();
		},
		onSearchReset() {
			this.isSubmit = false;
			this.items = [];
		},
		searchResult() {
			PrdResult.list().then((result) => {
				this.isSubmit = true;
				this.items = result;
			});
		}
	}
});
