module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	bracketSpacing: true,
	plugins: ['prettier-plugin-svelte'],
	overrides: [
		{
			files: ['*.svelte'],
			options: {
				bracketSameLine: false,
				parser: 'svelte'
			}
		},
		{
			files: ['*.css', '*.postcss'],
			options: {
				useTabs: false,
				singleQuote: false
			}
		}
	]
};
