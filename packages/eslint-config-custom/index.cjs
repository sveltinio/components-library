module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'turbo', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-function': 'off'
	},
	settings: {
		'svelte3/typescript': require('typescript')
	},
	ignorePatterns: ['*.cjs', 'packages/seo/src/lib/types.ts'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
