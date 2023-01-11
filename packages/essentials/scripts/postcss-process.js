import path from 'path';
import fs from 'fs';
import pc from 'picocolors';
import { findByExtension, postcssProcess } from 'postcss-utils';

const getLastItem = (thePath) => thePath.substring(thePath.lastIndexOf('/') + 1);

function main() {
	const mode = process.env.NODE_ENV;
	const stylesFolder = path.join('src', 'lib', 'styles');
	const componentsFolder = path.join('src', 'lib', 'components');
	const outputFolderForProcessedFiles = path.join(stylesFolder, 'components');

	console.log(pc.magenta(pc.bold('\n-> Deleting previously generated CSS files for components')));
	findByExtension(stylesFolder, ['css'])
		.then((filesList) => {
			filesList.forEach((input) => {
				const parsedInput = path.parse(input);
				if (parsedInput.name == 'styles.css') fs.rmSync(input);
			});
		})
		.catch((err) => {
			console.log(`\x1b[31m ${err} \x1b[0m`);
		});

	console.log(pc.blue(pc.bold('-> Processing PostCSS files for components')));
	findByExtension(componentsFolder, ['postcss'])
		.then((filesList) => {
			filesList.forEach((input) => {
				const parsedInput = path.parse(input);
				const componentName = getLastItem(parsedInput.dir);

				const output = path
					.join(outputFolderForProcessedFiles, componentName, parsedInput.name)
					.concat('.css');
				postcssProcess(input, output, mode);
			});
		})
		.catch((err) => {
			console.log(`\x1b[31m ${err} \x1b[0m`);
		});
}

main();
