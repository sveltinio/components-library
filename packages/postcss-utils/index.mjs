import path from 'path';
import fs from 'fs';
import { promises as fsp } from 'fs';

import postcss from 'postcss';
import postcssPresetEnv from 'postcss-preset-env';
import cssnanoPlugin from 'cssnano';
import stylelint from 'stylelint';

export async function findByExtension(where, targetExt) {
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

export function postcssProcess(input, output, mode) {
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
			cssnanoPlugin({
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
