const path = require('path');
const webpack = require('webpack');
const merge = require('lodash').merge;
const common = require('./webpack.config.common');

const rootDir = require('./constants').rootDir;

module.exports = merge({}, common, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    path.resolve(rootDir, 'src/index')
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify('dev') }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
});
