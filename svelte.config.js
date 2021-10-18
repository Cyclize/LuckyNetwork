/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		// hydrate the <div id="app"> element in src/app.html
		target: '#app',
		adapter: vercel()
	}
};

export default config;
