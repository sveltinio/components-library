import path from 'path';
import pc from 'picocolors';
import { findByExtension, postcssProcess } from 'postcss-utils';

function main() {
	const mode = process.env.NODE_ENV;
	const distFolder = path.join('dist', 'styles');

	console.log(pc.blue(pc.bold('-> Minify CSS files\n')));
	findByExtension(distFolder, ['css'])
		.then((filesList) => {
			filesList.forEach((input) => {
				const parsedInput = path.parse(input);
				const output = path.join(parsedInput.dir, parsedInput.name).concat(parsedInput.ext);
				// minify
				postcssProcess(input, output, mode);
			});
		})
		.catch((err) => {
			console.log(pc.red(pc.bold(err)));
		});
}

main();
