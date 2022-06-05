import fs from 'fs';

export const create = async () => {
  fs.open('./files/fresh.txt', (err) => {
    if (!err) {
      console.log('FS operation failed');
    } else {
      fs.writeFile('./files/fresh.txt', 'I am fresh and young', (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('New file was created');
        }
      });
    }
  });
};
create();
