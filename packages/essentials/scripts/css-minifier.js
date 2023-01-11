import path from 'path';
import fs from 'fs';
import pc from 'picocolors';
import { findByName, postcssProcess } from 'postcss-utils';

function main() {
	const mode = process.env.NODE_ENV;
	const distFolder = path.join('dist', 'styles');

	console.log(pc.blue(pc.bold('-> Minify CSS files\n')));
	findByName(distFolder, 'variables.css')
		.then((filesList) => {
			filesList.forEach((input) => {
				const parsedInput = path.parse(input);
				const output = path
					.join(parsedInput.dir, parsedInput.name)
					.concat('.min')
					.concat(parsedInput.ext);
				postcssProcess(input, output, mode);
				fs.rmSync(input);
			});
		})
		.catch((err) => {
			console.log(pc.red(pc.bold(err)));
		});

	findByName(distFolder, ['colors.css', 'tw-preflight.css'])
		.then((filesList) => {
			filesList.forEach((input) => {
				const parsedInput = path.parse(input);
				const output = path.join(parsedInput.dir, parsedInput.name).concat(parsedInput.ext);
				postcssProcess(input, output, mode);
				fs.rmSync(input);
			});
		})
		.catch((err) => {
			console.log(pc.red(pc.bold(err)));
		});
}

main();
