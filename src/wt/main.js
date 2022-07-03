import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { cpus } from 'os';
import { Worker, workerData } from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
  const cpu = cpus();
  let number = 10;

  const workerMain = await Promise.allSettled(
    cpu.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(__dirname + '/worker.js', {
          workerData: number++,
        });
        worker.on('message', (message) => {
          resolve(message);
        });
        worker.on('error', (error) => {
          reject(error);
        });
      });
    })
  );
  const result = workerMain.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'success' : 'error',
    data: status === 'fulfilled' ? value : null,
  }));

  console.log(result);
  return result;
};
performCalculations();
