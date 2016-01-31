import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: {
    js: [
      'webpack-hot-middleware/client',
      './js/index',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './template.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
    }],
  },
};

export default config;
