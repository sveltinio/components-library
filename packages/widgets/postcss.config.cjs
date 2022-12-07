const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const simpleVars = require('postcss-simple-vars');
const stylelint = require('stylelint');

const config = {
	plugins: [
		simpleVars,
		autoprefixer,
		stylelint({
			fix: true,
			cache: false
		}),
		postcssPresetEnv({
			stage: 4,
			features: {
				'nesting-rules': true
			}
		})
	]
};

module.exports = config;
