import { defineConfig } from 'vitest/config';
//import { vitestConf } from '../config/vitest-preset';

//export default defineConfig(vitestConf);

import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		svelte({
			hot: !process.env.VITEST
		})
	],
	test: {
		globals: true,
		reporters: ['dot'],
		silent: true,
		environment: 'jsdom',
		setupFiles: ['../config/vitest-setup.ts']
	}
});
