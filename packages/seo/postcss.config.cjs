const postcssPresetEnv = require('postcss-preset-env');

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
