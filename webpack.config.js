const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: { index: './src/index.js' },
  output: {
    path: path.join(__dirname, './build'),
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '.')],
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
