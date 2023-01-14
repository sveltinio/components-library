const postcssPresetEnv = require('postcss-preset-env');

/**
 *! This only applies to app.postcss file
 *! Useful in dev to test postcss file directly.
 *
 * At component level PostCSS CLI is used
 * to transform postcss files into css.
 */
const config = {
	plugins: [
		postcssPresetEnv({
			features: {
				'custom-media-queries': true,
				'nesting-rules': true
			}
		})
	]
};

module.exports = config;
