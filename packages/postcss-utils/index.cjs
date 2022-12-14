const path = require('path');
const fs = require('fs');
const fsp = require('fs').promises;

const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const stylelint = require('stylelint');

async function findByExtension(where, targetExt) {
	let results = [];
	let files = await fsp.readdir(where, { withFileTypes: true });

	for (let file of files) {
		let fullPath = path.join(where, file.name);
		if (file.isDirectory()) {
			results = [...results, ...(await findByExtension(fullPath, targetExt))];
		} else if (file.isFile()) {
			// file extension without leading "."
			const ext = path.extname(file.name).slice(1);
			if (ext === targetExt) {
				results.push(fullPath);
			}
		}
	}
	return results;
}

function postcssProcess(input, output, mode) {
	const dev = mode === 'development';
	let plugins = [
		postcssPresetEnv({
			features: {
				'nesting-rules': true
			}
		})
	];

	if (!dev) {
		plugins = [
			...plugins,
			stylelint({
				fix: true,
				cache: false
			}),
			cssnano({
				preset: 'default'
			})
		];
	}

	fs.readFile(input, (err, css) => {
		postcss(plugins)
			.process(css, { from: input, to: output })
			.then((result) => {
				fs.writeFile(output, result.css, () => true);
			});
	});
}

module.exports = {
	findByExtension,
	postcssProcess
};
