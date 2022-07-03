import fs from 'fs';
import path from 'path';

export const rename = async () => {
  let pathToFile = path.join('./files/wrongFilename.txt');

  fs.open(pathToFile, 'r', (err, fd) => {
    if (err) {
      console.error('FS operation failed');
    } else {
      fs.rename(
        pathToFile,
        pathToFile.replace('wrongFilename.txt', 'correctFilename.md'),
        (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('File renamed successfully');
          }
        }
      );
    }
  });
};
rename();
