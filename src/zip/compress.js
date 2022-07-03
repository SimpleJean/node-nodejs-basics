import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

export const compress = async () => {
  const pathToFile = path.join('./files/fileToCompress.txt');

  const readStream = fs.createReadStream(pathToFile);
  const writeStream = fs.createWriteStream(path.join('./files/archive.gz'));

  readStream
    .pipe(zlib.createGzip())
    .pipe(writeStream)
    .on('finish', () => {
      console.log('Archive created');
    })
    .on('error', (err) => {
      console.log(err);
    });
};
compress();
//TODO: refactor this code to use async/await
