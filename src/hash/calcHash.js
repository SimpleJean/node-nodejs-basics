import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export const calculateHash = async () => {
  const pathToFile = path.join('./files/fileToCalculateHashFor.txt');
  const hash = crypto.createHash('sha256');
  const stream = fs.createReadStream(pathToFile);

  stream.on('readable', (data) => {
    const chunk = stream.read();
    if (chunk) {
      hash.update(chunk);
    } else {
      console.log(hash.digest('hex'));
    }
  });
};
calculateHash();

//TODO: Maybe need to use async await and convert to HEX
