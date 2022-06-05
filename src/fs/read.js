import fs from 'fs';
import path from 'path';

export const read = async () => {
  const pathToRead = path.join('./files/fileToRead.txt');

  const readFile = fs.createReadStream(pathToRead);

  readFile.on('data', (chunk) => {
    console.log(chunk.toString());
  });
};
read();
