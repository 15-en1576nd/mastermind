import preprocess from 'svelte-preprocess';
import nodeAdapter from '@sveltejs/adapter-node';
import multiAdapter from '@macfja/svelte-multi-adapter';
import netlifyAdapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		adapter: multiAdapter([
			nodeAdapter({
				out: 'dist',
				precompress: false,
				env: {
					host: 'HOST',
					port: 'PORT'
				}
			}),
			netlifyAdapter({})
		])
	}
};

export default config;
