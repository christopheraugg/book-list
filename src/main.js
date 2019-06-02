import App from './App.svelte';
import Data from './data/books.js'

const app = new App({
	target: document.body,
	props: {
		booksData: Data
	}
});

export default app;