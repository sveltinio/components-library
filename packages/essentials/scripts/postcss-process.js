import path from 'path';
import fs from 'fs';
import pc from 'picocolors';
import { findByExtension, postcssProcess } from 'postcss-utils';

const getLastItem = (thePath) => thePath.substring(thePath.lastIndexOf('/') + 1);

function main() {
	const mode = process.env.NODE_ENV;
	const inputFolder = path.join('src', 'lib', 'components');

	console.log(pc.magenta(pc.bold('\n-> Deleting previously generated CSS files for components')));
	findByExtension(inputFolder, ['css'])
		.then((filesList) => {
			filesList.forEach((input) => {
				const parsedInput = path.parse(input);
				if (parsedInput.name == 'styles.css') fs.rmSync(input);
			});
		})
		.catch((err) => {
			console.log(pc.red(pc.bold(err)));
		});

	console.log(pc.blue(pc.bold('-> Processing PostCSS files for components')));
	findByExtension(inputFolder, ['postcss'])
		.then((filesList) => {
			filesList.forEach((input) => {
				const parsedInput = path.parse(input);
				const componentName = getLastItem(parsedInput.dir);

				const output = path.join(inputFolder, componentName, parsedInput.name).concat('.css');
				postcssProcess(input, output, mode);
			});
		})
		.catch((err) => {
			console.log(pc.red(pc.bold(err)));
		});
}

main();
