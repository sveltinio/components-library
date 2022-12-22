import path from 'path';
import fs from 'fs';
import { findByExtension, postcssProcess } from 'postcss-utils';

const mode = process.env.NODE_ENV;

console.log('\n-> Deleting previously generated styles.css files');
findByExtension('./src/lib/components', 'css')
	.then((filesList) => {
		filesList.forEach((input) => {
			const parsedInput = path.parse(input);

			if (parsedInput.name === 'styles') {
				fs.rmSync(input);
			}
		});
	})
	.catch((err) => {
		console.log(err);
	});

console.log('-> Getting the PostCSS files list');
findByExtension('./src/lib/components', 'postcss')
	.then((filesList) => {
		console.log('-> Generating CSS files');
		filesList.forEach((input) => {
			const parsedInput = path.parse(input);
			const output = path.join(parsedInput.dir, parsedInput.name).concat('.css');

			postcssProcess(input, output, mode);
		});
	})
	.catch((err) => {
		console.log(err);
	});
