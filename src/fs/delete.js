import fs from 'fs';
import path from 'path';

export const remove = async () => {
  const pathToDelete = path.join('./files/fileToRemove.txt');

  fs.open(pathToDelete, 'r', (err) => {
    if (err) {
      console.error('FS operation failed');
    } else {
      fs.unlink(pathToDelete, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('File removed successfully');
        }
      });
    }
  });
};
remove();
