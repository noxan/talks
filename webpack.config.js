const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.js'],
  },
  module: {
    preLoaders: [
    ],
    loaders: [
      { test: /\.jade/, loader: 'jade' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.jade',
    }),
  ],
  devtool: 'source-map',
};
