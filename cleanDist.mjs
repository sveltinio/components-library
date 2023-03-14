/**
 * Loop through the input dir looking for markdown files and removes those.
 *
 * By default, any README.md file is always included in the npm package.
 * We preserve the README.md file at package level excluding the ones at component level.
 */

import { existsSync, readdirSync, statSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import pc from 'picocolors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const checkDirectory = (path) => existsSync(join(__dirname, path));

function getAllFilesByName(dirPath, name, arrayOfFiles = []) {
	let input = join(__dirname, dirPath);
	let files = readdirSync(input);

	files.forEach(function (file) {
		if (statSync(input + '/' + file).isDirectory()) {
			arrayOfFiles = getAllFilesByName(dirPath + '/' + file, name, arrayOfFiles);
		} else {
			if (file === name) {
				arrayOfFiles.push(join(__dirname, dirPath, '/', file));
			}
		}
	});

	return arrayOfFiles;
}

function cleanUpDistFolder() {
	const args = process.argv;
	if (args.length != 3) {
		console.error(pc.red('ERROR: Expected one argument!'));
		process.exit(1);
	}

	const inputDir = args[2];
	if (!checkDirectory(inputDir)) {
		console.error(pc.red(`ERROR: ${inputDir} not found! Check it.`));
		process.exit(1);
	}

	const fileToGet = 'README.md';

	let readmes = getAllFilesByName(inputDir, fileToGet);

	if (readmes.length != 0) {
		console.log(pc.magenta(pc.bold(`\n-> Deleting ${fileToGet} files within ${inputDir}`)));
		Array.from(readmes).map((f) => unlinkSync(f));
	}
}

cleanUpDistFolder();
