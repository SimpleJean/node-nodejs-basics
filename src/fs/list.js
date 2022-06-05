import fs from 'fs';
import path from 'path';

export const list = async () => {
  const pathToList = path.join('./files');

  fs.readdir(pathToList, (err, files) => {
    if (err) {
      console.error('FS operation failed');
    } else {
      console.log(files);
    }
  });
};
list();
