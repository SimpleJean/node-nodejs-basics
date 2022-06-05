import fs from 'fs';
import path from 'path';

export const write = async () => {
  const pathToFile = path.join('./files/fileToWrite.txt');

  const writeText = fs.createWriteStream(pathToFile, 'utf-8');

  writeText.write('Hello World');
};
write();
