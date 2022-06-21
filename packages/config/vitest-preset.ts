import { svelte } from '@sveltejs/vite-plugin-svelte';
import type { UserConfigExport } from 'vitest/config';

export const vitestConf = <UserConfigExport>{
	include: ['./node_modules/@testing-library/jest-dom'],
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
