const path = require('path');
const rootDir = require('./constants').rootDir;

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/, loader: 'babel-loader' },
    ]
  },
  externals: {
    mocha: 'window'
  }
}
