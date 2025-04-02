var OpenProps = require('open-props');

var basePlugins = [
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
	require('postcss-initial')(),
	require('postcss-discard-comments')({ removeAll: true })
];

if (process.env.NODE_ENV != 'test') basePlugins.push(require('postcss-jit-props')(OpenProps));

if (process.env.NODE_ENV === 'production')
	basePlugins.push(
		require('cssnano')({
			preset: 'advanced'
		})
	);

module.exports = {
	plugins: basePlugins
};
