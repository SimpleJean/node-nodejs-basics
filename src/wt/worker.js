// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

import {BroadcastChannel, workerData, parentPort} from 'worker_threads';

export const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread


    console.log('worker.js', workerData);
    
    parentPort.on('message', (message) => {
        console.log('worker.js', message);
    })

    parentPort.postMessage(nthFibonacci(workerData));
};
sendResult();