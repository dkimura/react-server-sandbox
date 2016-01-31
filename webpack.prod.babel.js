import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: {
    js: [
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
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
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
