const path = require('path');
const fs = require('fs');
const fsp = require('fs').promises;

const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const cssnanoPlugin = require('cssnano');
const stylelint = require('stylelint');

/**
 * Returns the files list at specified path with specific extensions
 * @param {string} where - The path where to look for files.
 * @param {string|string[]} ext - The file extension or an array of file extensions.
 * @returns {string[]} - The files list.
 */
async function findByExtension(where, ext) {
	let results = [];
	let files = await fsp.readdir(where, { withFileTypes: true });

	for (let file of files) {
		let fullPath = path.join(where, file.name);
		if (file.isDirectory()) {
			results = [...results, ...(await findByExtension(fullPath, ext))];
		} else if (file.isFile()) {
			// file extension without leading "."
			const extension = path.extname(file.name).slice(1);

			if (Array.isArray(matchExts)) {
				matchExts.forEach((x) => {
					if (extension === x) results.push(fullPath);
				});
			} else if (typeof matchExts == 'string') {
				if (extension === ext) results.push(fullPath);
			} else {
				console.error('Invalid type. Must be a string or an array of strings');
			}
		}
	}
	return results;
}

/**
 * Returns the files list at specified path with specific extensions
 * @param {string} where - The path where to look for files.
 * @param {string} name - The file name.
 * @returns {string[]} - The files list.
 */
async function findByName(where, name) {
	let results = [];
	let files = await fsp.readdir(where, { withFileTypes: true });

	for (let file of files) {
		let fullPath = path.join(where, file.name);
		if (file.isDirectory()) {
			results = [...results, ...(await findByName(fullPath, name))];
		} else if (file.isFile()) {
			if (file.name === name) {
				results.push(fullPath);
			}
		}
	}
	return results;
}

/**
 *
 * @param {string} input - the input file to process
 * @param {string} output - the filepath for the processed file
 * @param {string} mode - process.env.NODE_ENV
 * @returns {void}
 */
function postcssProcess(input, output, mode) {
	const dev = mode === 'development';
	let plugins = [
		postcssPresetEnv({
			features: {
				'custom-media-queries': true,
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
			cssnanoPlugin({
				preset: 'advanced'
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
	findByName,
	postcssProcess
};
