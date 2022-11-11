const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: {
      directory: path.join(__dirname, '../public/'),
    },
    compress: true,
    port: 1337,
    open: true,
    compress: true,
  },
});
