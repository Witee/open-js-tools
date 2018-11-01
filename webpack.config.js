const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    'libs/string': './src/libs/string.js',
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js',
  },
  resolve: {
    modules: ['node_modules'],
  },
  plugins: [
    new CleanWebpackPlugin(['build'], { root: path.resolve(__dirname, '.') }),
    new webpack.ProvidePlugin({
      moment: 'moment',
      _: 'lodash',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
