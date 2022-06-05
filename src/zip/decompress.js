import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

export const decompress = async () => {
  const pathToFile = path.join('./files/archive.gz');
  const pathToDecompressedFile = path.join('./files/fileToCompress.txt');

  const readStream = fs.createReadStream(pathToFile);
  readStream
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(path.join(pathToDecompressedFile)));
};
decompress();
