module.exports = {};
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const dev = require('./webpack.dev');
const prod = require('./webpack.prod');

module.exports = ({ env }) => {
  const envConfig = env === 'development' ? dev : prod;
  return merge(common, envConfig);
};
