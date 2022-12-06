const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const simpleVars = require('postcss-simple-vars');

const config = {
	plugins: [
		simpleVars,
		autoprefixer,
		postcssPresetEnv({
			stage: 4,
			features: {
				'nesting-rules': true
			}
		})
	]
};

module.exports = config;
