var OpenProps = require('open-props');

module.exports = {
	plugins: [
		require('postcss-import')({
			plugins: [
				require('stylelint')({
					fix: true,
					cache: false
				})
			]
		}),
		require('postcss-preset-env')({
			features: {
				'cascade-layers': {
					onImportLayerRule: 'warn'
				},
				'custom-media-queries': true,
				'nesting-rules': true
			}
		}),
		require('postcss-jit-props')(OpenProps),
		require('postcss-discard-comments')({ removeAll: true }),
		...(process.env.NODE_ENV === 'production'
			? [
					require('cssnano')({
						preset: 'advanced'
					})
			  ]
			: [])
	]
};
