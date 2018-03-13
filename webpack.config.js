const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// const path = import {path};

module.exports = {
  entry: './src/work.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Ping Pong',
  //     template: './src/index.html',
  //     inject: 'body'
  //   })
  // ],
  plugins: [
    new UglifyJsPlugin({ sourceMap: true}),
    new CleanWebpackPlugin(['dist']),   // new line
    new HtmlWebpackPlugin({
      title: 'Sudoku',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "eslint-loader"
      }
    ]
  }
};
