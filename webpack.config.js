const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require("path");

module.exports = {
  entry: [
    'webpack-hot-middleware/client'
    ,'./main.js'
  ],
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      templateContent: fs.readFileSync(path.resolve(process.cwd(), './index.html')).toString()
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      }
    ]
  }
}
