import path from 'node:path';
import fs from 'node:fs';
import { promises as fsp } from 'node:fs';
import { fileURLToPath } from 'node:url';
import pc from 'picocolors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkDirectory = (path) => fs.existsSync(path);

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

			if (Array.isArray(ext)) {
				ext.forEach((x) => {
					if (extension === x) results.push(fullPath);
				});
			} else if (typeof ext == 'string') {
				if (extension === ext) results.push(fullPath);
			} else {
				console.error('Invalid type. Must be a string or an array of strings');
			}
		}
	}
	return results;
}

function getAllFilesByName(inputFolder, name, arrayOfFiles = []) {
	let files = fs.readdirSync(inputFolder);

	files.forEach(function (file) {
		if (fs.statSync(inputFolder + '/' + file).isDirectory()) {
			arrayOfFiles = getAllFilesByName(path.join(inputFolder, file), name, arrayOfFiles);
		} else {
			if (file === name) {
				arrayOfFiles.push(path.join(inputFolder, file));
			}
		}
	});

	return arrayOfFiles;
}

function cleanUpDistFolder(inputFolder) {
	const fileToGet = 'README.md';

	let readmes = getAllFilesByName(inputFolder, fileToGet);

	if (readmes.length != 0) {
		console.log(pc.blue(`\n-> Deleting ${fileToGet} files`));
		Array.from(readmes).map((f) => fs.unlinkSync(f));
	}
}

function updateContent(inputFolder) {
	console.log(pc.blue('-> Cleanup Svelte Components\n'));
	findByExtension(inputFolder, ['svelte'])
		.then((filesList) => {
			filesList.forEach((inputFile) => {
				fs.readFile(inputFile, 'utf-8', async (err, content) => {
					if (err) {
						console.error(err);
						return;
					}

					const regex = /src="([^"]*)"/;
					const cleanContent = content.replace(regex, '');

					fs.writeFile(inputFile, cleanContent, (err) => {
						if (err) {
							console.error(err);
							return;
						}

						//const parsedInput = path.parse(inputFile);
						//console.log(pc.green(`${parsedInput.name} -> updated`));
					});
				});
			});
		})
		.catch((err) => {
			console.log(pc.red(pc.bold(err)));
		});
}

async function main() {
	const args = process.argv;
	if (args.length != 3) {
		console.error(pc.red('ERROR: Expected one argument!'));
		process.exit(1);
	}

	const inputFolder = path.join(__dirname, '..', args[2]);
	const folderToProcess = path.join(inputFolder, 'dist', 'components');
	if (!checkDirectory(folderToProcess)) {
		console.error(pc.red(`ERROR: ${folderToProcess} not found! Check it.`));
		process.exit(1);
	}

	const msg = `Running postbuild on ${folderToProcess}`;
	console.log(pc.magenta(pc.bold(msg)));

	cleanUpDistFolder(folderToProcess);

	updateContent(folderToProcess);
}

main();
