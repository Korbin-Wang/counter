import 'babel-polyfill';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import favicon from 'serve-favicon';
// for dev
import webpack from 'webpack';
import config from './config/webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
// constants
import { rootDir } from './config/constants';

const app = express();

if (process.env.NODE_ENV !== 'prod') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(morgan(process.env.NODE_ENV === 'prod' ? 'combined' : 'dev'));
app.use(helmet());
app.use(favicon(path.join(rootDir, 'favicon.ico')));

app.get('*', (req, res) => {
  res.sendFile(path.join(rootDir, 'index.html'));
});

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

/* eslint-disable no-console */
app.listen(port, host, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(`listening at ${host}:${port}`);
});
/* eslint-enable no-console */
