const path = require('path');
const webpack = require('webpack');
const merge = require('lodash').merge;
const common = require('./webpack.config.common');

const rootDir = require('./constants').rootDir;

module.exports = merge({}, common, {
  entry: [
    'babel-polyfill',
    path.join(rootDir, 'src', 'index'),
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('prod'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
    })
  ]
});
