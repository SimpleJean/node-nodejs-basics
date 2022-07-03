import process from 'process';

export const parseArgs = () => {
  const argsData = process.argv;

  argsData.forEach((arg) => {
    if (arg.startsWith('--')) {
      const key = arg.substring(2);
      const value = argsData[argsData.indexOf(arg) + 1];
      console.log(`${key} is ${value}`);
    }
  });
};
parseArgs();
