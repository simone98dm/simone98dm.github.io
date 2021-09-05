import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
<<<<<<< HEAD
		adapter: static_adapter(),
		paths: {
			base: './',
			assets: './'
		}
=======
		adapter: static_adapter()
>>>>>>> 23a8a91451f277e072fef3980d27e779c7a8f8fa
	}
};

export default config;
