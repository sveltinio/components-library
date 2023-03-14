import fs from 'fs';

// read file into JSON
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

// write it to the output directory
fs.writeFileSync('./dist/package.json', JSON.stringify(pkg, null, 2));
