import webpack from 'webpack';
import config from './webpack.dev.babel';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import express from 'express';

const app = express();
const compiler = webpack(config);
const port = process.env.PORT || 3000;
const hostName = 'localhost';

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use(hotMiddleware(compiler));

app.listen(`${ port }`, `${ hostName }`, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://${ hostName }:${ port }`);
});
