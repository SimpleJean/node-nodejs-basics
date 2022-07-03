import process from 'process';

export const parseEnv = () => {
  const endData = process.env;
  const data = {};
  Object.keys(endData).forEach((key) => {
    if (key.startsWith('RSS_')) {
      data[key.substring(11)] = endData[key];
      console.log(`${key} = ${endData[key]}`);
    }
  });
};
parseEnv();
