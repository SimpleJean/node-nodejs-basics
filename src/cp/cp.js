import fs from 'fs';
import path from 'path';
import process from 'process';
import cp from 'child_process';

export const spawnChildProcess = async (args) => {
  const pathToScript = path.join('./files/script.js');

  const child = cp.fork(pathToScript);
  child.on('message', (chunk) => {
    console.log(`Received from child process: ${chunk.toString()}`);
  });
  child.send('data');

  child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
  });

  //console.log(`${child}`);
};
spawnChildProcess();
