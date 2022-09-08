import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		svelte({
			configFile: 'svelte.config.js',
			hot: !process.env.VITEST
		})
	],
	test: {
		//include: ['src/**/*.{test,spec}.ts' ,'./node_modules/@testing-library/jest-dom'],
		globals: true,
		reporters: ['dot'],
		silent: true,
		environment: 'jsdom',
		setupFiles: ['../config/vitest-setup.ts']
	}
});
