import { svelte } from '@sveltejs/vite-plugin-svelte';
import { UserConfig } from 'vitest';

export const vitestConf = <UserConfig>{
	plugins: [
		svelte({
			configFile: 'svelte.config.js',
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
};
