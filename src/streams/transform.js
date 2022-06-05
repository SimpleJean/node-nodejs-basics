import process from 'process';
import { Transform } from 'stream';

export const transform = async () => {
  const writeData = new Transform();
  writeData._transform = (chunk, encoding, callback) => {
    writeData.push(chunk.toString().split('').reverse().join(''));
    callback();
  };
  process.stdin.pipe(writeData).pipe(process.stdout);
  writeData._destroy = (error, callback) => {
    callback(error);
  };
};
transform();
