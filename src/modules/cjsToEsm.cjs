import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import path from 'path';
import module from 'module';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();
const jsonC = await readFile('./files/c.js', 'utf-8');

let unknownObject;
const jsonA = JSON.parse(await readFile('./files/a.json', 'utf-8'));

const jsonB = JSON.parse(await readFile('./files/b.json', 'utf-8'));

if (random > 0.5) {
  unknownObject = jsonA;
} else {
  unknownObject = jsonB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

module.exports = {
  unknownObject,
  createMyServer,
};
