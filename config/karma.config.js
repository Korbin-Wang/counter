const argv = require('yargs').argv;
const path = require('path');

const webpack = require('./webpack.config.test');
const rootDir = require('./constants').rootDir;

// const tests = path.join(rootDir, 'src', '**/*.spec.js');

module.exports = function(config) {
  config.set({
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],
    // list of files / patterns to load in the browser
    files: [
      path.join(rootDir, 'node_modules', 'phantomjs-polyfill', 'bind-polyfill.js'),
      path.join(rootDir, 'src', '**/*.spec.js'),
    ],
    preprocessors: {
      [path.join(rootDir, 'src', '**/*.spec.js')]: ['webpack', 'sourcemap'],
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: !argv.watch,

    webpack: webpack,
    webpackMiddleware: { noInfo: true },

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader',
    ]
  })
}
