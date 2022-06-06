const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    client: {
      overlay: false,
    },
  },
  plugins: [new ReactRefreshPlugin()],
  devtool: 'inline-source-map',
};
