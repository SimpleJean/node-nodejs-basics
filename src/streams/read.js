import fs from 'fs';
import path from 'path';
import process from 'process';

export const read = async () => {
  const pathToFile = path.join('./files/fileToRead.txt');

  const readText = fs.createReadStream(pathToFile, 'utf8');

  const data = await new Promise((resolve, reject) => {
    let data = '';
    readText.on('data', (chunk) => {
      data += chunk;
    });
    readText.on('end', () => {
      resolve(data);
      process.stdout.write(data);
    });
    readText.on('error', (err) => {
      reject(err);
    });
  });
};
read();
