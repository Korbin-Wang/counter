const path = require('path');
const autoprefixer = require('autoprefixer');
const cssimport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const lost = require('lost');

const rootDir = require('./constants').rootDir;

module.exports = {
  output: {
    path: path.resolve(rootDir, 'dist'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  postcss: function() {
    return [cssimport, cssnext, lost];
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(rootDir, 'src'),
        loader: 'babel'
      },
      {
        test: /\.css$/,
        include: path.join(rootDir, 'src'),
        loader: 'style!css!postcss',
      },
      {
        test: /\.css$/,
        include: path.join(rootDir, 'node_modules'),
        loader: 'style!css',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        include: path.join(rootDir, 'src'),
        loader: 'eslint-loader'
      }
    ],
  }
}
