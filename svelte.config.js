/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		// hydrate the <div id="app"> element in src/app.html
		target: '#app',
		adapter: adapter()
	}
};

export default config;
