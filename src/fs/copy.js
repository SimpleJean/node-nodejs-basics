import fs from 'fs';
import { access, constants } from 'node:fs';
import path from 'path';

export const copy = async () => {
  let copyDir = '../fs/files_copy';
  let originalDir = '../fs/files';

  fs.access(originalDir, constants.F_OK, (err) => {
    if (err) {
      console.log('FS operation failed');
    } else {
      fs.access(copyDir, constants.F_OK, (err) => {
        if (err) {
          fs.mkdir(copyDir, (err) => {
            if (err) {
              console.log(err);
            } else {
              fs.readdir(originalDir, (err, files) => {
                if (err) {
                  console.log(err);
                } else {
                  files.forEach((file) => {
                    fs.copyFile(
                      path.join(originalDir, file),
                      path.join(copyDir, file),
                      (err) => {
                        if (err) {
                          console.log(err);
                        } else {
                          console.log('File was copied');
                        }
                      }
                    );
                  });
                }
              });
            }
          });
        } else {
          console.log('FS operation failed');
        }
      });
    }
  });
};
copy();
